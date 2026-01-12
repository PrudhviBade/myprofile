export default function Bookmarks() {
    const bookmarks = [
        { text: "Writing is nature's way of letting you know how sloppy your thinking is.", author: "Guindon" },
        { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
        { text: "The details are not the details. They make the design.", author: "Charles Eames" }
    ];

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🔖</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700 }}>bookmarks</h1>
            </header>

            <div style={{ display: 'grid', gap: '24px' }}>
                {bookmarks.map((b, i) => (
                    <blockquote key={i} style={{ paddingLeft: '16px', borderLeft: '2px solid #E5E5EA' }}>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '4px', fontStyle: 'italic' }}>
                            "{b.text}"
                        </p>
                        <footer style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>— {b.author}</footer>
                    </blockquote>
                ))}
            </div>
        </article>
    );
}
