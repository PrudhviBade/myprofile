'use client';

import React from 'react';

export default function HowIBuiltThis() {
    return (
        <article style={{ maxWidth: '680px' }}>
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🏗️</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>how i built this</h1>
            </header>

            <section style={{ lineHeight: '1.6', fontSize: '15px', color: 'var(--text-primary)' }}>
                <p style={{ marginBottom: '24px' }}>
                    inspired by minimalist design system of apple notes,
                    but the entire engine under the hood was built from the ground up.
                </p>

                <p style={{ marginBottom: '16px' }}>
                    architecture:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>• next.js 15 (app router) foundation</li>
                    <li>• vanilla css modules (zero reliance on utility frameworks)</li>
                    <li>• custom-mapped color palette and typography system</li>
                    <li>• optimized for high-density static performance</li>
                </ul>

                <p style={{ marginBottom: '16px' }}>
                    hard yards:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>• built from scratch (no off-the-shelf templates)</li>
                    <li>• every module architected from a blank canvas</li>
                    <li>• manual refinement for narrative crispness</li>
                    <li>• labor of precision—from hydration fixes to ux polish</li>
                </ul>

            </section>

            <footer style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #e5e5e7', fontSize: '14px', color: 'var(--text-secondary)' }}>
                built with precision as a data leader&apos;s digital workspace.
            </footer>
        </article>
    );
}
