export default function Principles() {
    const principles = [
        { title: "First Principles Thinking", text: "Break down complex problems into their basic elements and reassemble them from the ground up." },
        { title: "Bias for Action", text: "Speed and iteration are often more valuable than perfect planning. Build, measure, and learn." },
        { title: "Extreme Ownership", text: "Take full responsibility for results and team outcomes, regardless of the situation." },
        { title: "Intellectual Honesty", text: "Be willing to admit what you don't know and change your mind when presented with new data." },
        { title: "Compound Interest", text: "Whether in finance or learning, the greatest results come from consistent effort over a long period." }
    ];

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>📖</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700 }}>principles</h1>
            </header>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {principles.map((p, i) => (
                    <li key={i}>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>{p.title}</h3>
                        <p style={{ lineHeight: '1.6', fontSize: '15px' }}>{p.text}</p>
                    </li>
                ))}
            </ul>
        </article>
    );
}
