'use client';

import React from 'react';

export default function MainContent({ children }: { children: React.ReactNode }) {
    // Static date/time for the "vintage" feel, matching the user's current local time or a consistent demo time
    const timestamp = "January 12, 2026 at 2:39 PM";

    return (
        <main style={{
            marginLeft: '280px',
            padding: '24px 64px',
            maxWidth: '100%',
            minHeight: '100vh',
            backgroundColor: '#FFFFFF',
            position: 'relative'
        }}>
            <header style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingBottom: '24px'
            }}>
                <div style={{
                    fontSize: '11px',
                    color: '#8E8E93',
                    fontWeight: 400
                }}>
                    {timestamp}
                </div>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {children}
            </div>
        </main>
    );
}
