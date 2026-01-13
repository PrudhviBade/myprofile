'use client';

export default function Passions() {
    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>❤️</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>passions</h1>
            </header>

            <section style={{ lineHeight: '1.6', fontSize: '15px' }}>
                <p style={{ marginBottom: '16px' }}>
                    i&apos;m also really good at equity research. i write a lot about investment opportunities
                    in indian markets on my <a href="https://prudhvibade.substack.com/" target="_blank" style={{ color: '#007AFF', textDecoration: 'none' }}>substack</a>.
                    i&apos;ve built several <a href="https://finbuddy.cloud/" target="_blank" style={{ color: '#007AFF', textDecoration: 'none' }}>systems</a> for my investing journey that help me invest in awesome companies, even when i&apos;m super busy.
                </p>

                <p style={{ marginBottom: '16px' }}>
                    beyond work/finance, i love:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>• technical analysis and charting on equities</li>
                    <li>• whiteboard sessions and drawing architectural diagrams</li>
                    <li>• test cricket and playing sports (badminton, tt, golf)</li>
                    <li>• shipping software prototypes just to boast that i know stuff ;)</li>
                </ul>

                <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', margin: '40px 0' }}>
                    <div
                        style={{
                            flex: 1,
                            background: '#f5f5f7',
                            padding: '10px',
                            borderRadius: '12px',
                            border: '1px solid #e5e5e7',
                            transition: 'transform 0.2s, box-shadow 0.2s'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <img
                            src="/images/finbuddy-deliveries.png"
                            alt="FinBuddy Deliveries"
                            style={{ width: '100%', borderRadius: '8px', display: 'block' }}
                        />
                        <p style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-secondary)', marginTop: '8px', textAlign: 'center', opacity: 0.8 }}>
                            DELIVERY OUTLIER PIPELINE
                        </p>
                    </div>

                    <div
                        style={{
                            flex: 1,
                            background: '#f5f5f7',
                            padding: '10px',
                            borderRadius: '12px',
                            border: '1px solid #e5e5e7',
                            transition: 'transform 0.2s, box-shadow 0.2s'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <img
                            src="/images/finbuddy-universe.png"
                            alt="FinBuddy Universe"
                            style={{ width: '100%', borderRadius: '8px', display: 'block' }}
                        />
                        <p style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-secondary)', marginTop: '8px', textAlign: 'center', opacity: 0.8 }}>
                            FUNDAMENTAL OVERSIGHT DASHBOARD
                        </p>
                    </div>
                </div>
            </section>
        </article>
    );
}
