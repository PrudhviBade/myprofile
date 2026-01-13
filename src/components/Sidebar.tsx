'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

interface NavItem {
    label: string;
    path: string;
    icon?: string;
    date?: string;
    preview?: string;
}

const PINNED: NavItem[] = [
    { label: 'about me', path: '/', icon: '📍', date: '1/13/2026', preview: "hello, i'm prudhvi bade. i bridge the gap..." },
    { label: 'tech stack', path: '/tech-stack', icon: '🛠️', date: '1/13/2026', preview: "iceberg, kafka, spark, medallion architecture..." },
    { label: 'passions', path: '/passions', icon: '❤️', date: '1/13/2026', preview: "equity research, technical charting, and hobbies..." },
    { label: 'principles', path: '/principles', icon: '📖', date: '1/13/2026', preview: "logical problem solving, show up on time..." },
    { label: 'curations', path: '/curations', icon: '📚', date: '1/13/2026', preview: "why gpus dominate ai, swiggy's postgres scaling..." },
];

const RECENT: NavItem[] = [
    { label: 'favorite people', path: '/people', icon: '🫶🏼', date: '1/13/2026', preview: "dad, virat kohli, nolan, minervini..." },
    { label: 'writing', path: '/writing', icon: '✍️', date: '1/12/2026', preview: "shriram pistons, missiles & monsoons..." },
    { label: 'how i built this', path: '/how-i-built-this', icon: '🏗️', date: '1/13/2026', preview: "next.js 15, css modules, no templates..." },
];

export default function Sidebar() {
    const pathname = usePathname();

    const renderItem = (item: NavItem) => {
        const isActive = pathname === item.path;
        const isExternal = item.path.startsWith('http');

        const Content = (
            <div className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
                <span className={styles.icon}>{item.icon}</span>
                <div className={styles.itemText}>
                    <div className={styles.title}>{item.label}</div>
                    <div className={styles.subtext}>
                        <span className={styles.date}>{item.date}</span>
                        <span className={styles.preview}>{item.preview}</span>
                    </div>
                </div>
            </div>
        );

        if (isExternal) {
            return (
                <a key={item.path} href={item.path} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                    {Content}
                </a>
            );
        }

        return (
            <Link key={item.path} href={item.path} className={styles.navLink}>
                {Content}
            </Link>
        );
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.windowControls}>
                    <div className={`${styles.dot} ${styles.red}`}></div>
                    <div className={`${styles.dot} ${styles.yellow}`}></div>
                    <div className={`${styles.dot} ${styles.green}`}></div>
                </div>
                <div className={styles.editIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </div>
            </div>

            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="Search"
                    className={styles.searchBar}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Pinned</div>
                    <nav className={styles.navList}>
                        {PINNED.map(renderItem)}
                    </nav>
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Today</div>
                    <nav className={styles.navList}>
                        {RECENT.slice(0, 1).map(renderItem)}
                    </nav>
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Yesterday</div>
                    <nav className={styles.navList}>
                        {RECENT.slice(1).map(renderItem)}
                    </nav>
                </div>
            </div>
        </aside>
    );
}
