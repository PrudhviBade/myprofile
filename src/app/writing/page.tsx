'use client';

export default function Writing() {
    const articles = [
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
        },
        {
            title: "Room for Growth - Beyond Tariffs",
            date: "October 2025",
            preview: "Analyzing the structural changes in the hospitality and travel sectors that are driving growth far beyond simple room rate increases.",
            url: "https://prudhvibade.substack.com/p/room-for-growth-beyond-tariffs"
        }
    ];

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>✍️</span>
                    <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>writing</h1>
                </div>
                <a
                    href="https://prudhvibade.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '14px', color: '#007AFF', textDecoration: 'none', fontWeight: 500 }}
                    onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
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
