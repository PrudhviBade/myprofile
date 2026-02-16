'use client';

import Link from 'next/link';

export default function Writing() {
    const substackArticles = [
        {
            title: "The Gold Price Volatility Paradox",
            date: "February 2026",
            preview: "How Jewellers Still Win When Prices Crush Buyers",
            url: "https://prudhvibade.substack.com/p/the-gold-price-volatility-paradox"
        },
        {
            title: "The Great Silver Rally",
            date: "January 2026",
            preview: "Gold and silver are often spoken about together. They rise together, fall together, and are routinely described as twin metals.",
            url: "https://prudhvibade.substack.com/p/the-great-silver-rally"
        },
        {
            title: "Shriram Pistons",
            date: "January 2026",
            preview: "Exploring the technical and fundamental tailwinds for one of India's leading piston manufacturers.",
            url: "https://prudhvibade.substack.com/p/shriram-pistons-riding-the-2wcv-upcycle"
        },
        {
            title: "Margins, Missiles & Monsoons",
            date: "December 2025",
            preview: "A deep dive into how geopolitical tensions and weather patterns are impacting corporate margins.",
            url: "https://prudhvibade.substack.com/p/margins-missiles-and-monsoons"
        }
    ];

    const dataTalksArticles = [
        {
            title: "Backfilling Made Easy",
            date: "January 2026",
            preview: "How SQLMesh saved our campaign analytics from the nightmare of manual backfilling and broken pipelines.",
            slug: "backfill-not-a-problem-anymore"
        },
        {
            title: "Hidden Partitioning in Iceberg",
            date: "December 2025",
            preview: "How we solved multi-granularity analytics at scale using Iceberg's powerful hidden partitioning feature.",
            slug: "multi-granularity-analytics-at-scale"
        },
        {
            title: "What Makes a Data Management Platform Special",
            date: "November 2025",
            preview: "Beyond the \"AI-native\" marketing: the four pillars that actually define a modern data platform.",
            slug: "data-management-platform"
        },
        {
            title: "The N+1 Query Problem",
            date: "November 2025",
            preview: "A painful lesson from building FinBuddy: how one simple feature turned into a database optimization masterclass.",
            slug: "n-plus-1-query-problem"
        },
        {
            title: "The Small Files Problem",
            date: "October 2025",
            preview: "Why your data pipeline is choking and how compaction can save your system from metadata hell.",
            slug: "the-small-file-problem"
        }
    ];

    return (
        <article style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <header style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>✍️</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>writings</h1>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                alignItems: 'start'
            }}>
                {/* Substack Section */}
                <section>
                    <div style={{ height: '32px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <h2 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em', margin: 0 }}>
                            Substack Articles
                        </h2>
                        <a
                            href="https://prudhvibade.substack.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '11px',
                                color: '#ff6719',
                                backgroundColor: '#fff',
                                padding: '4px 10px',
                                borderRadius: '4px',
                                border: '1px solid #ff6719',
                                textDecoration: 'none',
                                fontWeight: 700,
                                transition: 'all 0.2s ease',
                                textTransform: 'uppercase'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#ff6719';
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(255,103,25,0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = '#fff';
                                e.currentTarget.style.color = '#ff6719';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Subscribe
                        </a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {substackArticles.map((article, i) => (
                            <a
                                key={i}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                            >
                                <div
                                    style={{
                                        padding: '16px',
                                        borderRadius: '8px',
                                        backgroundColor: '#ffffff',
                                        border: '1px solid #f0f0f0',
                                        transition: 'all 0.2s ease',
                                        cursor: 'pointer',
                                        minHeight: '140px',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = '#ff671933';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = '#f0f0f0';
                                    }}
                                >
                                    <div style={{ fontSize: '11px', color: '#8E8E93', marginBottom: '4px' }}>{article.date}</div>
                                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>{article.title}</h3>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>{article.preview}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* DataTalks Section */}
                <section>
                    <div style={{ height: '32px', display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                        <h2 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em', margin: 0 }}>
                            DataTalks
                        </h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {dataTalksArticles.map((article, i) => (
                            <Link
                                key={i}
                                href={`/writings/${article.slug}`}
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                            >
                                <div
                                    style={{
                                        padding: '16px',
                                        borderRadius: '8px',
                                        backgroundColor: '#ffffff',
                                        border: '1px solid #f0f0f0',
                                        transition: 'all 0.2s ease',
                                        cursor: 'pointer',
                                        minHeight: '140px',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = '#007AFF33';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = '#f0f0f0';
                                    }}
                                >
                                    <div style={{ fontSize: '11px', color: '#8E8E93', marginBottom: '4px' }}>{article.date}</div>
                                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>{article.title}</h3>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>{article.preview}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </article>
    );
}

