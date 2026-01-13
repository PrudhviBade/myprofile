'use client';

import React from 'react';

export default function HowIBuiltThis() {
    return (
        <article style={{ maxWidth: '680px' }}>
            <header style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🏗️</span>
                <h1 style={{ fontSize: '28px', fontWeight: 700 }}>how i built this</h1>
            </header>

            <section style={{ marginBottom: '32px', lineHeight: '1.6', color: '#1d1d1f' }}>
                <p style={{ marginBottom: '24px', fontSize: '16px', fontWeight: 500 }}>
                    While the aesthetic takes inspiration from minimalist design systems like Apple Notes and curators like Alana Goyal, the entire engine under the hood was built from the ground up.
                </p>

                <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '16px' }}>
                    The Architecture
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px', marginBottom: '32px' }}>
                    <li>
                        <strong>Next.js 15 (App Router)</strong>: Used for a highly optimized, ultra-responsive foundation.
                    </li>
                    <li>
                        <strong>Vanilla CSS Modules</strong>: Zero reliance on utility-first frameworks. Every pixel—from the window controls to the sidebar behavior—is hand-crafted CSS for a bespoke feel.
                    </li>
                    <li>
                        <strong>Proprietary Design System</strong>: Implemented a custom color palette and typography mapping to replicate the "vintage digital" look precisely.
                    </li>
                    <li>
                        <strong>High-Density Performance</strong>: Built for speed. The entire site is optimized for static export, ensuring lightning-fast load times.
                    </li>
                </ul>

                <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '16px' }}>
                    The "Hard Yards"
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px' }}>
                    <li>
                        <strong>No Templates</strong>: I avoided off-the-shelf themes. Every module, including the interactive Tech Stack and Writing archive, was architected from a blank canvas.
                    </li>
                    <li>
                        <strong>Manual Refinement</strong>: Spent significant time refining content for crispness, ensuring that the technology and leadership narrative is as sharp as the UI.
                    </li>
                    <li>
                        <strong>Iterative Craftsmanship</strong>: From fixing hydration mismatches to optimizing for high-density displays, this project was a labor of precision engineering.
                    </li>
                </ul>
            </section>

            <footer style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #e5e5e7', fontSize: '14px', color: 'var(--text-secondary)' }}>
                Built with precision as a Data Leader&apos;s digital workspace.
            </footer>
        </article>
    );
}
