# The Small Files Problem: Why Your Data Pipeline Is Choking

I've hit the small files problem twice in my career, and both times it nearly brought our data pipelines to their knees. Let me tell you about it.

## Two Real-World Encounters

**Scenario 1: Survey Response Ingestion**

We were building a real-time survey analytics platform that ingested responses as they came in. Users would submit their answers, and we'd stream each response directly to our data lake. Simple, right?

Wrong. Each survey response was a tiny JSON file, maybe 2-5 KB. We were getting thousands of responses per hour, and each one landed as its own file in our object storage. Within days, we had millions of small files sitting there. Our query performance went from sub-second to timing out completely.

**Scenario 2: Hardware Sensor Telemetry**

At a hardware company, we were collecting telemetry from IoT sensors deployed across manufacturing facilities. Each sensor would append its readings every few seconds - temperature, pressure, vibration data. Again, tiny files. Hundreds of sensors, each generating files every 5-10 seconds.

The data was coming in fast, but our analytics were crawling. Engineers needed near real-time insights, and we were struggling to query even yesterday's data.

Both cases taught me the same painful lesson: small files are the silent killer of data systems.

## What Makes Small Files So Problematic?

A small file is typically anything under 64 KB, though I've seen performance issues with files up to 1 MB when you're dealing with billions of them. The problem isn't the file size itself - it's the overhead.

Every file operation has fixed costs:
- Reading metadata
- Opening the file handle
- Seeking to the location on disk
- Actually reading the data
- Closing the file handle

For a 100 MB file, these overheads are negligible compared to the actual data transfer. But for a 5 KB file? The overhead can be 10x the actual data read time. When you're querying millions of these files, those milliseconds compound into minutes or hours.

In my survey response system, a simple daily rollup query that should have taken seconds was taking 45 minutes. Why? Because Spark was opening and closing 2 million tiny JSON files.

## Why Modern Systems Struggle

**Metadata Hell**

Every file needs metadata - location, permissions, size, modification time. In distributed systems like HDFS or S3, this metadata must be tracked centrally. When you have billions of small files, the metadata alone can consume hundreds of gigabytes.

HDFS NameNode was notorious for this. Each file, directory, and block consumed 150-300 bytes of memory. With 100 million small files, you're looking at 30+ GB just for metadata tracking.

**IOPS Bottleneck**

Storage performance is measured in IOPS - input/output operations per second. Reading one large file is one operation. Reading a million small files is a million operations. Even modern SSDs struggle when you're doing millions of random reads per second.

In our sensor telemetry pipeline, we were maxing out IOPS on our storage cluster even though actual data throughput was barely 10% of capacity.

**Query Engine Inefficiency**

Query engines like Spark, Presto, and Trino are optimized for large files. They parallelize work by distributing file processing across workers. With small files, you end up with massive scheduling overhead and poor parallelization.

I've seen Spark spend 80% of its time just scheduling tasks instead of actually processing data.

## Traditional Solutions Don't Work

**Databases?** No. I tried this with the survey data. Writing millions of tiny records to PostgreSQL worked initially, but it doesn't scale. No database can ingest streaming data at the rate IoT devices generate it while simultaneously supporting analytical queries.

**NAS/SAN?** Also no. These weren't designed for thousands of concurrent writes from distributed applications. They're great for traditional file serving, terrible for big data workloads.

**Hadoop?** It struggles too. HDFS default block size is 128 MB. Storing a 5 KB file wastes 128 MB of block space. You pay the storage cost but get none of the performance benefits.

## How I Actually Solved It

Both times, the solution involved the same core strategy: **compaction**.

### Survey Response Pipeline Fix

Instead of writing each response directly to the data lake, I implemented a staging layer:

1. **Streaming Buffer**: Responses land in Kafka topics
2. **Micro-batching**: A Spark Streaming job reads from Kafka every 5 minutes
3. **Compaction**: Combine all responses in that window into a single Parquet file
4. **Write to Lake**: One optimized file instead of thousands of tiny JSONs

Result: Query time dropped from 45 minutes to 30 seconds. We went from 2 million files per day to ~300 files per day.

### Sensor Telemetry Fix

For IoT sensor data, I used a similar approach but with time-based partitioning:

1. **Edge Buffering**: Sensors write to local buffers
2. **Batch Upload**: Upload aggregated data every 5 minutes instead of continuous streaming
3. **Compaction Job**: Hourly job that merges small files within each partition
4. **Partitioning Strategy**: Partition by sensor_id and hour, making queries predictable

The key insight was that we didn't need second-by-second data persistence. Buffering for 5 minutes was acceptable, and it reduced file count by 99%.

## Practical Strategies That Work

**Time-Based Micro-Batching**

Don't write every event as it arrives. Buffer events for a reasonable time window (1-5 minutes typically) and write them as a batch. You're trading slight latency for massive performance gains.

**Compaction Jobs**

Run scheduled jobs that merge small files into larger ones. For cold data that's rarely queried, daily compaction is fine. For hot data, you might compact hourly.

**Columnar Formats**

Always use Parquet, ORC, or Avro for analytics workloads. These formats are designed for efficient scanning and compression. My survey data, when converted from JSON to Parquet, was 10x smaller and 20x faster to query.

**Lakehouse Architecture**

Modern lakehouse formats (Iceberg, Delta, Hudi) have built-in compaction capabilities. They track file statistics and can automatically optimize file sizes. This was a game-changer for both my use cases.

In our Iceberg-based implementation, we set compaction policies:
- Target file size: 128 MB
- Trigger compaction when average file size < 10 MB
- Run compaction during off-peak hours

**Right-Sizing Partitions**

Don't over-partition. I see teams partition by year/month/day/hour/minute, creating directory structures so deep that just listing files takes forever. Partition only by columns you actually filter on in queries.

For survey data: Partition by date only
For sensor data: Partition by sensor_id and hour

## Performance Numbers

Here's what good compaction looks like in real numbers:

**Before Compaction:**
- Files per day: 2 million
- Average file size: 4 KB
- Query time (daily rollup): 45 minutes
- Storage efficiency: 30% (due to small file overhead)

**After Compaction:**
- Files per day: 300
- Average file size: 120 MB
- Query time (daily rollup): 30 seconds
- Storage efficiency: 85%

That's a 90x improvement in query speed and 3x improvement in storage efficiency.

## Lessons Learned

**Streaming is overrated**: Just because you can stream data doesn't mean you should. Micro-batching is almost always the right answer for analytics workloads.

**Monitoring matters**: Track your average file sizes. If you see them trending smaller, you've got a problem brewing. Set alerts when average file size drops below your threshold.

**Compaction isn't optional**: At scale, compaction is mandatory. Budget for it in your architecture from day one.

**Storage is cheap, IOPS are expensive**: Don't optimize for storage space at the expense of file count. 1000 files of 1 MB costs way more in query performance than 1 file of 1 GB.

## The Bottom Line

The small files problem is real, pervasive, and will bite you if you're not careful. It's especially insidious because it doesn't show up in development with small datasets. You only discover it when you hit production scale.

If you're building any system that ingests streaming data - sensor telemetry, application logs, user events, financial transactions - plan for small files from day one. Implement batching and compaction early. Your future self will thank you when your queries are running in seconds instead of timing out.

Trust me, I've learned this lesson twice. Don't make it three times for yourself.