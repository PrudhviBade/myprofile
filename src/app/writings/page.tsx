'use client';

export default function Writing() {
    const articles = [
        {
            title: "The Great Silver Rally",
            date: "January 2026",
            preview: "Gold and silver are often spoken about together. They rise together, fall together, and are routinely described as twin metals. That comparison sounds neat, but it breaks down very quickly once you look at how these two metals are actually used.",
            url: "https://prudhvibade.substack.com/p/the-great-silver-rally"
        },
        {
            title: "Shriram Pistons: Riding the 2W–CV Upcycle",
            date: "January 2026",
            preview: "Exploring the technical and fundamental tailwinds for one of India's leading piston manufacturers as the automotive sector enters a strong recovery phase.",
            url: "https://prudhvibade.substack.com/p/shriram-pistons-riding-the-2wcv-upcycle"
        },
        {
            title: "Margins, Missiles & Monsoons",
            date: "December 2025",
            preview: "A deep dive into how geopolitical tensions and weather patterns are impacting corporate margins and market volatility in the current cycle.",
            url: "https://prudhvibade.substack.com/p/margins-missiles-and-monsoons"
        },
        {
            title: "India’s Senior Care Mirage",
            date: "November 2025",
            preview: "Investigating the disconnect between the rapidly growing aging population in India and the actual infrastructure/business models currently available in the senior care space.",
            url: "https://prudhvibade.substack.com/p/indias-senior-care-mirage"
        }
    ];

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>✍️</span>
                    <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>writings</h1>
                </div>
                <a
                    href="https://prudhvibade.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontSize: '13px',
                        color: '#ff6719',
                        backgroundColor: '#fff',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        border: '1px solid #ff6719',
                        textDecoration: 'none',
                        fontWeight: 600,
                        transition: 'all 0.2s ease'
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
                    Subscribe on Substack ↗
                </a>
            </header>

            <section style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {articles.map((article, i) => (
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
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ fontSize: '12px', color: '#8E8E93', marginBottom: '4px' }}>{article.date}</div>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>{article.title}</h3>
                            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{article.preview}</p>
                        </div>
                    </a>
                ))}
            </section>
        </article>
    );
}
