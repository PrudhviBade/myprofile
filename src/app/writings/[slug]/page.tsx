import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

// Map slugs to filenames
const slugMap: { [key: string]: string } = {
    'backfill-not-a-problem-anymore': 'Backfill - Not a problem anymore.md',
    'multi-granularity-analytics-at-scale': 'Multi Granularity Analytics at Scale.md',
    'n-plus-1-query-problem': 'N+1 query problem.md',
    'the-small-file-problem': 'The small file problem.md',
    'data-management-platform': 'What Makes a Data Management Platform Special.md',
    'data-products-what-why-and-how': 'Data Products What Why and How.md',
    'the-future-of-data-engineering': 'The Future of Data Engineering.md',
    'ai-productized-data-platform': "AI Didn't Just Upgrade Your Data Platform. It Productized It.md"
};

export async function generateStaticParams() {
    return Object.keys(slugMap).map((slug) => ({
        slug: slug,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const fileName = slugMap[slug];
    if (!fileName) {
        return <div>Article not found</div>;
    }

    const filePath = path.join(process.cwd(), 'public', 'datatalks', fileName);

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');

        return (
            <article style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
                <Link
                    href="/writings"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        marginBottom: '32px',
                        fontSize: '14px'
                    }}
                >
                    ← back to writings
                </Link>

                <div className="prose" style={{ color: 'var(--text-primary)', lineHeight: '1.7' }}>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ node, ...props }) => <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px', color: 'var(--text-primary)' }} {...props} />,
                            h2: ({ node, ...props }) => <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '24px', marginBottom: '16px', color: 'var(--text-primary)' }} {...props} />,
                            h3: ({ node, ...props }) => <h3 style={{ fontSize: '20px', fontWeight: 600, marginTop: '20px', marginBottom: '12px', color: 'var(--text-primary)' }} {...props} />,
                            p: ({ node, ...props }) => <p style={{ marginBottom: '12px', fontSize: '16px' }} {...props} />,
                            ul: ({ node, ...props }) => <ul style={{ marginBottom: '16px', paddingLeft: '20px', listStyleType: 'disc' }} {...props} />,
                            li: ({ node, ...props }) => <li style={{ marginBottom: '8px' }} {...props} />,
                            code: ({ node, ...props }) => (
                                <code
                                    style={{
                                        backgroundColor: '#f5f5f5',
                                        padding: '2px 4px',
                                        borderRadius: '4px',
                                        fontSize: '14px',
                                        fontFamily: 'monospace'
                                    }}
                                    {...props}
                                />
                            ),
                            pre: ({ node, ...props }) => (
                                <pre
                                    style={{
                                        backgroundColor: '#f5f5f5',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflowX: 'auto',
                                        marginBottom: '24px'
                                    }}
                                    {...props}
                                />
                            ),
                            blockquote: ({ node, ...props }) => (
                                <blockquote
                                    style={{
                                        borderLeft: '4px solid #e0e0e0',
                                        paddingLeft: '16px',
                                        color: '#666',
                                        fontStyle: 'italic',
                                        margin: '24px 0'
                                    }}
                                    {...props}
                                />
                            ),
                            img: ({ node, ...props }) => (
                                <img
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        margin: '16px 0 8px 0',
                                        display: 'block'
                                    }}
                                    {...props}
                                />
                            )
                        }}
                    >
                        {fileContent}
                    </ReactMarkdown>
                </div>
            </article>
        );
    } catch (error) {
        return <div>Error loading article</div>;
    }
}
