# Backfilling Made Easy: How SQLMesh Saved Our Campaign Analytics

"Can you add conversion_value to the campaign performance metrics? We need to track it historically too."

This seemingly simple request from our marketing team sent shivers down my spine. I knew what was coming: days of manual backfilling, broken pipelines, and downstream teams working with inconsistent data. But this time was different. We were using SQLMesh, and what would have been a nightmare in dbt became almost trivial.

## The Problem: Evolving Campaign Metrics

We were tracking marketing campaign performance across multiple channels - Google Ads, Facebook, email campaigns, the works. Our daily aggregation table calculated standard metrics:

- Impressions
- Clicks
- Click-through rate (CTR)
- Cost per click (CPC)
- Conversions

Business was happy. Dashboards were green. Life was good.

Then the VP of Marketing came back from a conference with new ideas. "We need to add conversion_value to understand ROI properly. And while we're at it, let's add assisted_conversions and view_through_conversions too."

No problem, right? Just add three columns to the SQL logic. Except we had 18 months of historical data that our analysts depended on. And downstream models that calculated month-over-month trends. And executive dashboards that would break if historical data suddenly had NULLs for these new metrics.

We needed to backfill. Properly.

## Why Backfilling Is Usually Painful

In dbt, this scenario is a multi-day ordeal:

**Manual Intervention**: You modify the model SQL, then manually orchestrate which date ranges to recompute. Miss a day? Good luck catching it.

**All-or-Nothing Refresh**: The safe approach is `dbt run --full-refresh`, which drops and rebuilds everything. For our 18-month history with 50+ campaigns daily, that's expensive and time-consuming.

**Breaking Changes**: The moment you change the model, prod is broken until backfill completes. Analysts see inconsistent data. Dashboards show errors.

**Downstream Cascade**: Every downstream model that depends on campaign_performance needs manual coordination. Did you update them all? Are they backfilled? Who knows?

**State Management Hell**: dbt doesn't track what's been backfilled and what hasn't. You're flying blind, relying on timestamps and intuition.

I'd been through this pain before. It usually involved:
- A detailed Slack thread coordinating with stakeholders
- A carefully timed deployment window
- Lots of coffee
- Some inevitable cleanup the next day when we discovered edge cases

Not this time.

## The SQLMesh Solution

With SQLMesh, I made the changes and ran `sqlmesh plan prod`. Here's what happened:

SQLMesh analyzed the code change, detected that I'd added three new columns to the model, and automatically categorized it as a "non-breaking additive change." It then showed me exactly what would be backfilled:

```
Models needing update:
  - analytics.campaign_performance (18 months, 540 partitions)
  
Downstream models affected:
  - analytics.campaign_trends_monthly (automatic recompute scheduled)
  - analytics.roi_analysis (automatic recompute scheduled)
  
Estimated backfill time: 2.5 hours
Estimated cost: $47
```

I reviewed the plan, approved it, and SQLMesh handled everything:

**Intelligent Batching**: SQLMesh broke the 540 daily partitions into manageable batches. Instead of one massive query trying to process 18 months at once, it ran 20-30 queries concurrently, each handling ~20 days worth of data.

**Zero Downtime**: Production data remained untouched during backfill. SQLMesh created a new version of the table in parallel. Only when backfill completed did it atomically swap pointers.

**State Tracking**: SQLMesh knew exactly which partitions were backfilled and which weren't. When a transient error interrupted one batch, it resumed from that point without reprocessing everything.

**Automatic Downstream Handling**: Once campaign_performance was backfilled, SQLMesh automatically triggered backfills for dependent models, in the correct order, with proper dependency resolution.

The entire process took 2.5 hours of compute time and zero hours of my time.

## A More Complex Example

Two weeks later, Marketing came back with another request: "We realized cost_per_acquisition should use actual conversion timestamps, not when conversions were reported. Can you fix the logic?"

This was worse. It wasn't just adding columns - it was changing calculation logic for an existing column. In dbt, this would be brutal:

1. Update the SQL
2. Run full-refresh (can't do incremental because logic changed)
3. Hope downstream doesn't break
4. Manually verify every date matches expected values

In SQLMesh, I made the change and ran the plan. SQLMesh detected it as a "breaking change" and automatically:

**Created a Shadow Version**: The new logic ran alongside the old version. I could query both to verify the changes before promoting to prod.

**Showed Data Diffs**: SQLMesh generated comparison queries showing how values changed for sample campaigns. I caught a timezone bug before it hit production.

**Coordinated Downstream**: It flagged that roi_analysis would need updates because it referenced cost_per_acquisition. I fixed it, and SQLMesh backfilled everything in one coordinated operation.

The kicker? Marketing decided they wanted to keep the old logic after seeing the diffs. In dbt, rolling back would mean starting over. In SQLMesh, I just abandoned the plan. Production never knew anything happened.

## Real Performance Numbers

Here's what SQLMesh's backfilling actually saved us:

**Time to Backfill (18 months of campaign data):**
- dbt full-refresh: 8 hours (sequential processing)
- SQLMesh with batching: 2.5 hours (parallel batches)

**Developer Time Spent:**
- dbt: 6 hours (planning, executing, monitoring, fixing issues)
- SQLMesh: 30 minutes (review plan, approve, done)

**Compute Costs:**
- dbt: ~$180 (full table scans, no optimization)
- SQLMesh: ~$47 (partition pruning, intelligent batching)

**Downstream Coordination:**
- dbt: Manual (3-4 Slack threads, 2 follow-up fixes)
- SQLMesh: Automatic (zero coordination needed)

## Why SQLMesh Beats dbt for Backfilling

**State Awareness**: SQLMesh tracks what ran, what changed, and what needs updating. dbt is stateless - you're responsible for figuring all this out.

**Batch Control**: Need to backfill 3 years but afraid of timing out? SQLMesh's `batch_size` and `batch_concurrency` parameters let you tune exactly how backfills run. dbt gives you all-or-nothing.

**Column-Level Lineage**: SQLMesh knows which columns in downstream models depend on which upstream columns. Adding a column? It only recomputes what's actually affected. dbt recomputes entire dependent models.

**Virtual Environments**: Test backfills in isolated environments without touching prod. dbt requires separate schemas, manual coordination, and lots of careful target management.

**Automatic Dependency Resolution**: Change propagates through the DAG automatically. dbt requires you to manually sequence runs and hope you got the order right.

## Practical Tips for SQLMesh Backfilling

**Set Start Dates on Models**: Define `start: '2023-01-01'` in your model config. SQLMesh won't try to backfill before that date, avoiding expensive infinite history scenarios.

**Use Incremental Models Properly**: Write queries with `WHERE ds BETWEEN @start_ds AND @end_ds`. SQLMesh fills in these parameters during backfills.

**Tune Batch Parameters**: For large historical data, set reasonable batch_size (I use 30-day batches) and batch_concurrency (4-8 concurrent batches depending on warehouse size).

**Preview Plans Before Applying**: Always run `sqlmesh plan` first. Review the impact, check estimated costs, validate the strategy.

**Leverage Forward-Only Mode**: For non-critical models, use forward-only mode to skip expensive historical recomputation when only recent data matters.

## The Bottom Line

Backfilling doesn't have to be painful. For years, we accepted it as an inevitable tax on evolving our data models. dbt made many things better, but backfilling remained a manual, error-prone process.

SQLMesh fundamentally changed this. What used to take days of planning and coordination now takes minutes. What used to cost hundreds in compute now costs tens. What used to require careful Slack choreography now happens automatically.

The marketing team can evolve their metrics freely. We add conversion_value one week, adjust attribution logic the next, and experiment with new KPIs the week after that. Each time, SQLMesh handles the backfilling logistics while we focus on business logic.

That's how data engineering should work. Not fighting infrastructure, but building insights.

If you're still doing backfills the dbt way - with full-refreshes, manual orchestration, and crossed fingers - it's worth exploring SQLMesh. The first time you add a column to a model with 2 years of history and watch SQLMesh backfill it automatically while you grab coffee, you'll understand why we made the switch.

And when the VP of Marketing inevitably comes back with another "quick request," you'll be ready.