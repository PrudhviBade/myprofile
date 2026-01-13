export default function People() {
    const people = [
        { name: "My Dad", description: "First mentor and lifelong influence." },
        { name: "Virat Kohli", description: "For the intensity and elite mindset." },
        { name: "Christopher Nolan", description: "For the complex storytelling and scale." },
        { name: "Mark Minervini", description: "Stock market wizard and master of probability." },
        { name: "Led Zeppelin", description: "For the timeless, experimental sound." },
        { name: "Hans Zimmer", description: "Master of emotional, cinematic landscapes." }
    ];

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🫶🏼</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>favorite people</h1>
            </header>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '15px' }}>
                {people.map((person, i) => (
                    <li key={i}>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>{person.name}</h3>
                        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{person.description}</p>
                    </li>
                ))}
            </ul>
        </article>
    );
}
