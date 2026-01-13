'use client';

import { useState } from 'react';

export default function Passions() {
    const [expandedImg, setExpandedImg] = useState<string | null>(null);

    return (
        <article>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>❤️</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>passions</h1>
            </header>

            <section style={{ lineHeight: '1.6', fontSize: '15px' }}>
                <p style={{ marginBottom: '16px' }}>
                    i&apos;m also really good at equity research. i write a lot about investment opportunities
                    in indian markets on my <a href="https://prudhvibade.substack.com/" target="_blank" style={{ color: '#007AFF', textDecoration: 'none' }}>substack</a>.
                    i&apos;ve built several <a href="https://finbuddy.cloud/" target="_blank" style={{ color: '#007AFF', textDecoration: 'none' }}>systems</a> for my investing journey that help me invest in awesome companies, even when i&apos;m super busy.
                </p>

                <p style={{ marginBottom: '16px' }}>
                    beyond work/finance, i love:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>• technical analysis and charting on equities</li>
                    <li>• whiteboard sessions and drawing architectural diagrams</li>
                    <li>• test cricket and playing sports (badminton, tt, golf)</li>
                    <li>• shipping software prototypes just to boast that i know stuff ;)</li>
                </ul>

                <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', margin: '40px 0' }}>
                    {/* Deliveries Image */}
                    <div
                        style={{
                            flex: 1,
                            background: '#f5f5f7',
                            padding: '10px',
                            borderRadius: '12px',
                            border: '1px solid #e5e5e7',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        onClick={() => setExpandedImg('/images/finbuddy-deliveries.png')}
                    >
                        <img
                            src="/images/finbuddy-deliveries.png"
                            alt="FinBuddy Deliveries"
                            style={{ width: '100%', borderRadius: '8px', display: 'block' }}
                        />
                        <p style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-secondary)', marginTop: '8px', textAlign: 'center', opacity: 0.8 }}>
                            DELIVERY OUTLIER PIPELINE
                        </p>
                    </div>

                    {/* Universe Image */}
                    <div
                        style={{
                            flex: 1,
                            background: '#f5f5f7',
                            padding: '10px',
                            borderRadius: '12px',
                            border: '1px solid #e5e5e7',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        onClick={() => setExpandedImg('/images/finbuddy-universe.png')}
                    >
                        <img
                            src="/images/finbuddy-universe.png"
                            alt="FinBuddy Universe"
                            style={{ width: '100%', borderRadius: '8px', display: 'block' }}
                        />
                        <p style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-secondary)', marginTop: '8px', textAlign: 'center', opacity: 0.8 }}>
                            FUNDAMENTAL OVERSIGHT DASHBOARD
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Overlay */}
            {expandedImg && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'zoom-out',
                        padding: '40px'
                    }}
                    onClick={() => setExpandedImg(null)}
                >
                    <div style={{ position: 'relative', maxWidth: '95%', maxHeight: '95%', boxShadow: '0 24px 64px rgba(0,0,0,0.1)' }}>
                        <img
                            src={expandedImg}
                            alt="Expanded View"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderRadius: '12px',
                                border: '1px solid #e5e5e7'
                            }}
                        />
                        <button
                            style={{
                                position: 'absolute',
                                top: '-48px',
                                right: '0',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                padding: '8px',
                                opacity: 0.5
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setExpandedImg(null);
                            }}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </article>
    );
}
