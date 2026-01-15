'use client';

export default function Contact() {
    const contacts = [
        { label: "Mobile", value: "+91-8096880990", href: "tel:+918096880990" },
        { label: "Email", value: "prudhvibade@gmail.com", href: "mailto:prudhvibade@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/prudhvi-bade-14921193/", href: "https://www.linkedin.com/in/prudhvi-bade-14921193/" }
    ];

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>📬</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>contact</h1>
            </header>

            <section style={{ lineHeight: '1.6', fontSize: '15px' }}>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {contacts.map((contact, i) => (
                        <li key={i} style={{ display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--text-secondary)', minWidth: '80px' }}>{contact.label}</span>
                            <a
                                href={contact.href}
                                target={contact.label === "LinkedIn" ? "_blank" : undefined}
                                rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                                style={{ color: '#007AFF', textDecoration: 'none' }}
                                onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                                onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                            >
                                {contact.value}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
