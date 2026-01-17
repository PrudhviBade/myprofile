'use client';

export default function TechStack() {
    const stacks = [
        {
            domain: "Data Products & Engineering",
            techs: ["Data Products", "Data Architecture", "Data Governance","Apache Iceberg", "Kafka", "Spark", "Trino", "DBT", "MDM", "Medallion", "Databricks", "Snowflake", "Streaming & Event data", "GDPR & SOC2"]
        },
        {
            domain: "AI & LLM",
            techs: ["RAG", "LangChain", "Vector Databases", "Model Fine-tuning", "SageMaker", "RCNN Models", "LLM Inference"]
        },
        {
            domain: "Cloud Ops & Analytics",
            techs: ["Docker", "Kubernetes (K8s)", "Data Observability", "GenBI", "Tableau", "PowerBI", "CI/CD Pipelines"]
        },
        {
            domain: "Business Leadership",
            techs: ["Strategy & GTM", "Commercial Acumen", "Stakeholder Management", "Operational Excellence", "Team Building", "Budgeting & P&L", "Data Monetization"]
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
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>expertise</h1>
            </header>

            <section style={{ marginBottom: '40px' }}>
                {stacks.map((stack, idx) => (
                    <div key={idx} style={{ marginBottom: '28px' }}>
                        <h3 style={{
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.06em',
                            marginBottom: '12px',
                            fontWeight: 600
                        }}>
                            {stack.domain}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 8px' }}>
                            {stack.techs.map((tech, i) => (
                                <span
                                    key={i}
                                    style={{
                                        padding: '5px 12px',
                                        backgroundColor: '#f5f5f7',
                                        border: '1px solid #e5e5e7',
                                        borderRadius: '6px',
                                        fontSize: '14px',
                                        color: '#1d1d1f',
                                        fontWeight: 500,
                                        display: 'inline-block'
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <header style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📖</span>
                <h2 style={{ fontSize: '18px', fontWeight: 700 }}>data leadership reads</h2>
            </header>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px', padding: 0, listStyle: 'none' }}>
                {dataReads.map((item, i) => (
                    <li key={i} style={{ lineHeight: 1.4 }}>
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
