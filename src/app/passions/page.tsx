'use client';

import { useState } from 'react';
import styles from './Passions.module.css';

export default function Passions() {
    const [expandedImg, setExpandedImg] = useState<string | null>(null);

    return (
        <article>
            <header className={styles.header}>
                <span style={{ fontSize: '24px' }}>❤️</span>
                <h1 className={styles.title}>passions</h1>
            </header>

            <section className={styles.content}>
                <p style={{ marginBottom: '16px' }}>
                    i&apos;m also really good at equity research. i write a lot about investment opportunities
                    in indian markets on my <a href="https://prudhvibade.substack.com/" target="_blank" className={styles.link}>substack</a>.
                    i&apos;ve built several <a href="https://finbuddy.cloud/" target="_blank" className={styles.link}>systems</a> for my investing journey that help me invest in awesome companies, even when i&apos;m super busy.
                </p>

                <p style={{ marginBottom: '16px' }}>
                    beyond work/finance, i love:
                </p>
                <ul className={styles.list}>
                    <li>• technical analysis and charting on equities</li>
                    <li>• whiteboard sessions and drawing architectural diagrams</li>
                    <li>• test cricket and playing sports (badminton, tt, golf)</li>
                    <li>• shipping software prototypes just to boast that i know stuff ;)</li>
                </ul>

                <div className={styles.imageGrid}>
                    {/* Deliveries Image */}
                    <div
                        className={styles.imageCard}
                        onClick={() => setExpandedImg('/images/finbuddy-deliveries.png')}
                    >
                        <img
                            src="/images/finbuddy-deliveries.png"
                            alt="FinBuddy Deliveries"
                            className={styles.image}
                        />
                        <p className={styles.caption}>
                            DELIVERY OUTLIER PIPELINE
                        </p>
                    </div>

                    {/* Universe Image */}
                    <div
                        className={styles.imageCard}
                        onClick={() => setExpandedImg('/images/finbuddy-universe.png')}
                    >
                        <img
                            src="/images/finbuddy-universe.png"
                            alt="FinBuddy Universe"
                            className={styles.image}
                        />
                        <p className={styles.caption}>
                            FUNDAMENTAL OVERSIGHT DASHBOARD
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Overlay */}
            {expandedImg && (
                <div
                    className={styles.overlay}
                    onClick={() => setExpandedImg(null)}
                >
                    <div className={styles.overlayContent}>
                        <img
                            src={expandedImg}
                            alt="Expanded View"
                            className={styles.expandedImg}
                        />
                        <button
                            className={styles.closeButton}
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
