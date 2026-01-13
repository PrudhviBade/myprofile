export default function Principles() {
    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>📖</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>principles</h1>
            </header>

            <section style={{ lineHeight: '1.6', fontSize: '15px', color: 'var(--text-primary)' }}>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <li>
                        • Logical Problem Solving. Avoiding randomness minimizes complexity.
                    </li>
                    <li>
                        • Show up on time, always!
                    </li>
                    <li>
                        • Infinite Learnability. Learn anything that needed from data engineering to rocket science.
                    </li>
                    <li>
                        • Skills and tasks are forgotten; people always remember how you made them feel.
                    </li>
                    <li>
                        • Always push for a level of quality that exceeds your own expectations.
                    </li>
                </ul>
            </section>
        </article>
    );
}
