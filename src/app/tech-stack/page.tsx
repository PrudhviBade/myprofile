'use client';

export default function TechStack() {
    const stacks = [
        {
            domain: "Data Engineering & Infrastructure",
            techs: ["Apache Iceberg", "Apache Kafka", "Apache Spark", "Trino", "Apache Flink", "dbt", "Medallion Architecture", "Functional Data Engineering"]
        },
        {
            domain: "Analytics & BI Excellence",
            techs: ["Tableau", "PowerBI", "Looker", "Apache Superset", "Semantic Layer Design", "Star-schema Modelling", "GenBI Solutions"]
        },
        {
            domain: "AI & LLM Leadership",
            techs: ["RAG Architecture", "LangChain / LlamaIndex", "Vector Databases (Pinecone, Weaviate)", "Model Fine-tuning & Evaluation", "Scale-out AI Pipelines"]
        },
        {
            domain: "Cloud Ops & Observability",
            techs: ["Docker", "Kubernetes (K8s)", "Data Observability", "Cloud Infrastructure", "CI/CD Pipelines", "Monitoring & Alerting"]
        },
        {
            domain: "Data Product Leadership",
            techs: ["Next-gen Data Products", "Data Monetization", "GTM for Data Tools", "Technical Product Management", "Stakeholder Alignment"]
        }
    ];

    const dataReads = [
        { label: "Art of Data-Modelling (Functional Data Engineering)", url: "https://maximebeauchemin.medium.com/functional-data-engineering-a-modern-paradigm-for-batch-data-processing-2327ec32c42a" },
        { label: "Next-gen Data Tools & Medallion Architecture", url: "https://www.dataengineeringweekly.com/p/revisiting-medallion-architecture?open=false#%C2%A7tools-and-vendors-by-layer" },
        { label: "How Uber finds drivers blazing fast", url: "https://newsletter.systemdesign.one/p/how-does-uber-find-nearby-drivers" },
        { label: "How not to partition your data in S3", url: "https://luminousmen.substack.com/p/how-not-to-partition-data-in-s3-and?utm_campaign=post" },
        { label: "Tackling the small file problem in data", url: "https://medium.com/henkel-data-and-analytics/tackling-the-small-files-problem-in-apache-spark-1f5837c8edca" }
    ];

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🛠️</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700 }}>tech stack</h1>
            </header>

            <section style={{ marginBottom: '48px' }}>
                {stacks.map((stack, idx) => (
                    <div key={idx} style={{ marginBottom: '32px' }}>
                        <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '16px' }}>
                            {stack.domain}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {stack.techs.map((tech, i) => (
                                <span
                                    key={i}
                                    style={{
                                        padding: '6px 12px',
                                        backgroundColor: '#F0F0F0',
                                        borderRadius: '6px',
                                        fontSize: '13px',
                                        color: '#333',
                                        fontWeight: 500
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>📖</span>
                <h2 style={{ fontSize: '20px', fontWeight: 700 }}>data leadership reads</h2>
            </header>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
                {dataReads.map((item, i) => (
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
        </article>
    );
}
