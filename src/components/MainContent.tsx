'use client';

import React from 'react';
import styles from './MainContent.module.css';

export default function MainContent({ children }: { children: React.ReactNode }) {
    // Static date/time for the "vintage" feel, matching the user's current local time or a consistent demo time
    const timestamp = "January 12, 2026 at 2:39 PM";

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.timestamp}>
                    {timestamp}
                </div>
            </header>

            <div className={styles.container}>
                {children}
            </div>
        </main>
    );
}
