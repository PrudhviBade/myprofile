'use client';

import React, { useState } from 'react';
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
    { label: 'expertise', path: '/expertise', icon: '🛠️', date: '1/13/2026', preview: "iceberg, kafka, spark, medallion architecture..." },
    { label: 'passions', path: '/passions', icon: '❤️', date: '1/13/2026', preview: "equity research, technical charting, and hobbies..." },
    { label: 'writing', path: '/writing', icon: '✍️', date: '1/12/2026', preview: "shriram pistons, missiles & monsoons..." },
    { label: 'principles', path: '/principles', icon: '📖', date: '1/13/2026', preview: "logical problem solving, show up on time..." },
    { label: 'curations', path: '/curations', icon: '📚', date: '1/13/2026', preview: "why gpus dominate ai, swiggy's postgres scaling..." },
];

const RECENT: NavItem[] = [
    { label: 'favorite people', path: '/people', icon: '🫶🏼', date: '1/13/2026', preview: "dad, virat kohli, nolan, minervini..." },
    { label: 'how i built this', path: '/how-i-built-this', icon: '🏗️', date: '1/13/2026', preview: "next.js 15, css modules, no templates..." },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');

    const filterItems = (items: NavItem[]) => {
        if (!searchQuery) return items;
        const query = searchQuery.toLowerCase();
        return items.filter(item =>
            item.label.toLowerCase().includes(query) ||
            (item.preview && item.preview.toLowerCase().includes(query))
        );
    };

    const filteredPinned = filterItems(PINNED);
    const filteredRecent = filterItems(RECENT);
    const hasResults = filteredPinned.length > 0 || filteredRecent.length > 0;

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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className={styles.content}>
                {!hasResults ? (
                    <div style={{ padding: '24px', textAlign: 'center', fontSize: '13px', color: '#8E8E93' }}>
                        No results found
                    </div>
                ) : (
                    <>
                        {filteredPinned.length > 0 && (
                            <div className={styles.section}>
                                <div className={styles.sectionTitle}>Pinned</div>
                                <nav className={styles.navList}>
                                    {filteredPinned.map(renderItem)}
                                </nav>
                            </div>
                        )}

                        {filteredRecent.length > 0 && (
                            <div className={styles.section}>
                                <div className={styles.sectionTitle}>
                                    {filteredRecent.some(i => i.label === 'favorite people') ? 'Today' : 'Yesterday'}
                                </div>
                                <nav className={styles.navList}>
                                    {filteredRecent.map(renderItem)}
                                </nav>
                            </div>
                        )}
                    </>
                )}
            </div>
        </aside>
    );
}
