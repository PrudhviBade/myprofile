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
                    i&apos;ve built several systems for my investing journey that help me invest in awesome companies, even when i&apos;m super busy.
                </p>

                <p style={{ marginBottom: '16px' }}>
                    beyond work/finance, i love:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>• technical analysis and charting on equities</li>
                    <li>• whiteboard sessions and drawing architectural diagrams</li>
                    <li>• test cricket and playing sports (badminton, tt, golf)</li>
                    <li>• shipping software prototypes just to boast that i know stuff ;)</li>
                </ul>
            </section>
        </article>
    );
}
