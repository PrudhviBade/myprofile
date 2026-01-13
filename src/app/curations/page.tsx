'use client';

export default function Curations() {
    const sections = [
        {
            title: "Intriguing Videos",
            items: [
                { label: "Is AI a commodity?", url: "https://www.youtube.com/watch?v=I4jbVyOqZgA" },
                { label: "Energy requirements for AI models", url: "https://youtu.be/AN7c5S9k5L0?si=idpQpJq6PrCpk1Lk" },
                { label: "How popcorn buckets arrived in Movie Theatres", url: "https://www.youtube.com/watch?v=a9GX1pVEHJw" },
                { label: "How LLMs generate text?", url: "https://www.youtube.com/watch?v=NKnZYvZA7w4" },
                { label: "AI In Space", url: "https://www.youtube.com/watch?v=mHKGP5TAxyQ" }
            ]
        },
        {
            title: "Favorite Blogs",
            items: [
                { label: "Why GPUs Dominate AI Training", url: "https://hw.glich.co/p/why-gpus-dominate-ai-training-and-what-tpus-do-differently" },
                { label: "How Swiggy Scaled Postgres", url: "https://hw.glich.co/p/how-swiggy-scaled-and-maintained-postgres" },
                { label: "What Happens During a Database Migration?", url: "https://hw.glich.co/p/what-happens-during-a-database-migration" }
            ]
        },
        {
            title: "Data Reads",
            items: [
                { label: "Art of Data-Modelling (Functional Data Engineering)", url: "https://maximebeauchemin.medium.com/functional-data-engineering-a-modern-paradigm-for-batch-data-processing-2327ec32c42a" },
                { label: "Next-gen Data Tools & Medallion Architecture", url: "https://www.dataengineeringweekly.com/p/revisiting-medallion-architecture?open=false#%C2%A7tools-and-vendors-by-layer" },
                { label: "How Uber finds drivers blazing fast", url: "https://newsletter.systemdesign.one/p/how-does-uber-find-nearby-drivers" },
                { label: "How not to partition your data in S3", url: "https://luminousmen.substack.com/p/how-not-to-partition-data-in-s3-and?utm_campaign=post" },
                { label: "Tackling the small file problem in data", url: "https://medium.com/henkel-data-and-analytics/tackling-the-small-files-problem-in-apache-spark-1f5837c8edca" }
            ]
        }
    ];

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>📚</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700 }}>library</h1>
            </header>

            {sections.map((section, idx) => (
                <section key={idx} style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '16px' }}>
                        {section.title}
                    </h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
                        {section.items.map((item, i) => (
                            <li key={i}>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#007AFF', textDecoration: 'none' }}
                                    onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                                    onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </article>
    );
}
