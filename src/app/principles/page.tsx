export default function Principles() {
    const principles = [
        { title: "Logical Problem Solving", text: "Break complex issues into basic truths. Avoiding randomness minimizes complexity." },
        { title: "Urgency & Punctuality", text: "Show up on time, always. Speed acts as a forcing function for clarity." },
        { title: "Infinite Learnability", text: "Humans are built to master any field—from data engineering to rocket science." },
        { title: "Emotional Impact", text: "Skills and tasks are forgotten; people always remember how you made them feel." },
        { title: "High standards", text: "Always push for a level of quality that exceeds your own expectations." }
    ];

    const interests = [
        "Technical analysis and charting on equities",
        "Pitch decks and elevator pitches for startups",
        "Architectural diagrams and whiteboarding",
        "Test Cricket (Huge fan)",
        "Badminton, Table Tennis, and Golf",
        "Building and shipping software prototypes"
    ];

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>📖</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>principles</h1>
            </header>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
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
