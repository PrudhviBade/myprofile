'use client';
import Image from 'next/image';

export default function HowIOperate() {
    const points = [
        "challenging the 'MBAs don't understand tech' stereotype through technical architecture and execution.",
        "deeply hands-on: from debugging and data engineering to building architectures.",
        "scaling teams from 0 to 60, across data engineering, analytics, and cloud ops.",
        "prioritizing mental models and critical thinking over ephemeral tool stacks.",
        "bridging strategic vision with technical precision by choice and capability."
    ];

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>⚙️</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>everything about me that my cv won’t tell you</h1>
            </header>

            <div style={{ marginBottom: '32px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e5e7', maxWidth: '500px' }}>
                <Image
                    src="/how-i-operate.png"
                    alt="Go Big or Go Home Cartoon"
                    width={500}
                    height={500}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </div>

            <section style={{ lineHeight: '1.6', fontSize: '15px', color: 'var(--text-primary)' }}>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {points.map((point, i) => (
                        <li key={i}>
                            • {point}
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
