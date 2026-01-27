# Hidden Partitioning in Iceberg: How We Solved Multi-Granularity Analytics

When I was managing clickstream data from Adobe Analytics, we hit a partitioning problem that nearly killed our analytics performance. The solution came from an Iceberg feature I initially didn't fully appreciate: hidden partitioning.

## The Problem: Analysts Want Different Time Granularities

Our business analysts had varying needs depending on what they were investigating:

**Daily Analysis (Common Case)**: Marketing teams would query daily trends - "How many users visited our homepage yesterday?" Simple, straightforward.

**Hourly Deep Dives**: When investigating campaigns or site issues, they'd drill down by hour - "What happened between 2 PM and 4 PM when our checkout conversion dropped?"

**Minute-Level Crisis Mode**: During flash sales or hot deals, the team needed real-time insights - "Are users piling up on the deals page right now? Is the site handling the load?"

The challenge? We were storing user engagement clickstream data with timestamps like `2024-01-15 14:23:45`. How do you partition this efficiently?

## The Traditional Approach (And Why It Fails)

In the Hive world, you'd create explicit partition columns:

```sql
CREATE TABLE clickstream (
  user_id STRING,
  session_id STRING,
  page_url STRING,
  event_time TIMESTAMP,
  event_date STRING,      -- Partition column for day
  event_hour INT,          -- Partition column for hour
  event_minute INT         -- Partition column for minute
) PARTITIONED BY (event_date, event_hour, event_minute);
```

This creates a nightmare:

**Partition Explosion**: With day/hour/minute partitioning, you get 1,440 partitions per day. Over a month, that's 43,200 partitions. Our query planning alone took minutes just to list partitions.

**Brittle Queries**: Every query had to explicitly filter on partition columns:
```sql
-- Want data for a specific hour? Better include ALL partition columns
SELECT COUNT(*) 
FROM clickstream 
WHERE event_time BETWEEN '2024-01-15 14:00:00' AND '2024-01-15 15:00:00'
  AND event_date = '2024-01-15'      -- Required or full scan!
  AND event_hour = 14                 -- Required or full scan!
```

**Maintenance Hell**: If we wanted to change from minute-level to hour-level partitioning (because minute-level was overkill), we'd have to rewrite the entire table. With 2 TB of daily clickstream data, that's not happening.

**User Errors**: Analysts would forget to include partition columns in their WHERE clauses. Result? Full table scans that killed cluster performance and ate through our compute budget.

We needed something better.

## The Solution: Iceberg's Hidden Partitioning

Iceberg's hidden partitioning changed everything. Instead of creating explicit partition columns, Iceberg tracks the relationship between your source column and partition values in metadata.

Here's how we rebuilt the table:

```sql
CREATE TABLE clickstream (
  user_id STRING,
  session_id STRING,
  page_url STRING,
  event_time TIMESTAMP,
  page_category STRING,
  user_country STRING
) USING iceberg
PARTITIONED BY (days(event_time), hours(event_time));
```

Notice what's missing? **No explicit partition columns.** We just tell Iceberg to partition by day and hour transformations of `event_time`.

## How It Actually Works

When data arrives, Iceberg automatically:
1. Extracts the day from `event_time` (e.g., 2024-01-15)
2. Extracts the hour from `event_time` (e.g., 14)
3. Writes data to the appropriate partition
4. Tracks this relationship in metadata

When analysts query, they just write natural queries:

```sql
-- Daily query - Iceberg knows to scan only relevant day partitions
SELECT COUNT(DISTINCT user_id)
FROM clickstream
WHERE event_time >= '2024-01-15 00:00:00' 
  AND event_time < '2024-01-16 00:00:00';

-- Hourly query - Iceberg knows to scan only relevant hour partitions  
SELECT page_url, COUNT(*) as page_views
FROM clickstream
WHERE event_time >= '2024-01-15 14:00:00'
  AND event_time < '2024-01-15 15:00:00'
GROUP BY page_url;

-- Minute-level query - Still efficient!
SELECT COUNT(*) as active_users
FROM clickstream
WHERE event_time >= '2024-01-15 14:23:00'
  AND event_time < '2024-01-15 14:24:00';
```

Iceberg automatically converts these timestamp filters into partition filters under the hood. No explicit partition columns needed. No user errors. No full table scans.

## Real-World Impact

The transformation was dramatic:

**Before (Hive-style partitioning):**
- Daily aggregation query: 3-5 minutes
- Hourly drill-down: 8-12 minutes (often timed out)
- Minute-level queries: Impossible - analysts would give up
- Partition count: 43,200 per month
- Query planning time: 2-3 minutes
- Analyst productivity: Frustrated, slow

**After (Iceberg hidden partitioning):**
- Daily aggregation: 15 seconds
- Hourly drill-down: 8 seconds
- Minute-level queries: 3-5 seconds
- Partition count: Managed transparently in metadata
- Query planning time: <1 second
- Analyst productivity: Happy, fast, accurate

## The Flash Sale Story

The real proof came during a Black Friday flash sale. Marketing wanted real-time monitoring as deals went live at precisely 12:00 PM.

With our old Hive setup, this was impossible. By the time queries finished, the moment had passed.

With Iceberg, our BI dashboard refreshed every 30 seconds with minute-level data:
- 12:00 PM - 5,234 users on deals page
- 12:01 PM - 12,456 users (surge!)
- 12:02 PM - 18,923 users (infrastructure alert triggered)

The ops team scaled up servers in real-time based on this data. No guesswork, no delays.

## Partition Evolution: The Cherry on Top

A few months later, we realized our older clickstream data (>90 days old) didn't need hour-level partitioning. Most queries on old data were monthly aggregations.

In Hive, we'd have been stuck. Changing partitioning means rewriting the table.

With Iceberg's partition evolution, we simply evolved the partition spec:

```sql
ALTER TABLE clickstream 
ADD PARTITION FIELD months(event_time);
```

New data started getting partitioned by month **in addition to** day and hour. Old data remained partitioned as it was. Queries worked seamlessly across both partitioning schemes.

No data rewrite. No downtime. No broken queries.

## Key Lessons

**Hidden partitioning isn't just convenience - it's correctness.** When partition logic is in metadata rather than explicit columns, users can't get it wrong.

**Multi-granularity queries become trivial.** Analysts naturally write filters on timestamp columns. Iceberg handles the rest.

**Partition evolution is a game-changer.** Your partitioning needs will change as data volumes grow. Iceberg lets you adapt without massive rewrites.

**Performance gains are real.** We went from minutes to seconds on queries, purely from better metadata management.

## Practical Implementation Tips

If you're implementing hidden partitioning for clickstream or time-series data:

**Start with day-level partitioning:** `PARTITIONED BY (days(event_time))` is usually sufficient. Add hour-level only if you have high data volumes (>1TB/day).

**Don't over-partition:** I've seen teams partition by day, hour, AND minute. This creates too many small files. Day + hour is usually the sweet spot.

**Use partition transforms correctly:** Iceberg offers `years()`, `months()`, `days()`, `hours()`. Pick the right granularity for your query patterns.

**Monitor file sizes:** Even with good partitioning, watch for small files. Set target file size to 128-512 MB and run regular compaction.

**Trust the optimizer:** Let Iceberg handle partition pruning. Don't add manual partition filters - they're not needed and can actually hurt performance.

## The Bottom Line

Hidden partitioning in Iceberg solved a problem we'd struggled with for months. No more brittle queries. No more full table scans. No more frustrated analysts.

If you're working with time-series data - clickstream, logs, sensor data, financial transactions - and you're still using explicit partition columns, you're making life harder than it needs to be.

Iceberg's hidden partitioning gives you flexibility, performance, and simplicity. It's one of those features that, once you use it, you can't imagine going back.

For our Adobe Analytics clickstream use case, it was transformative. And during that Black Friday flash sale? It might have just saved our infrastructure.