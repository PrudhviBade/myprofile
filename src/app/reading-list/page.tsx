export default function ReadingList() {
    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>📚</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700 }}>reading list</h1>
            </header>

            <section style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '12px' }}>
                    EQUITY & INVESTING
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>The Intelligent Investor</strong> — Benjamin Graham</li>
                    <li><strong>One Up On Wall Street</strong> — Peter Lynch</li>
                    <li><strong>Margin of Safety</strong> — Seth Klarman</li>
                </ul>
            </section>

            <section>
                <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '12px' }}>
                    TECH & STRATEGY
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Zero to One</strong> — Peter Thiel</li>
                    <li><strong>High Output Management</strong> — Andrew Grove</li>
                </ul>
            </section>
        </article>
    );
}
