'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
    { label: 'writing', path: '/writing', icon: '✍️', date: '1/12/2026', preview: "silver rally, shriram pistons, missiles & monsoons..." },
    { label: 'first principles', path: '/principles', icon: '📖', date: '1/13/2026', preview: "logical problem solving, show up on time..." },
    { label: 'my edge', path: '/how-i-operate', icon: '⚙️', date: '1/22/2026', preview: "mba stereotype, technical depth, and team building..." },
    { label: 'curations', path: '/curations', icon: '📚', date: '1/13/2026', preview: "why gpus dominate ai, swiggy's postgres scaling..." },
    { label: 'get in touch', path: '/contact', icon: '📬', date: '1/15/2026', preview: "reach out via mobile, email or linkedin..." },
];

const RECENT: NavItem[] = [
    { label: 'favorite people', path: '/people', icon: '🫶🏼', date: '1/13/2026', preview: "dad, virat kohli, nolan, minervini..." },
    { label: 'how i built this', path: '/how-i-built-this', icon: '🏗️', date: '1/13/2026', preview: "next.js 15, css modules, no templates..." },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

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
    const allVisibleItems = [...filteredPinned, ...filteredRecent];

    // Keyboard navigation state
    const [keyboardFocusIndex, setKeyboardFocusIndex] = useState<number>(-1);
    const router = useRouter();

    // Reset focus when search changes
    useEffect(() => {
        setKeyboardFocusIndex(-1);
    }, [searchQuery]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Only handle navigation if we have visible items
            if (allVisibleItems.length === 0) return;

            // If user is typing in search, we might want to allow ArrowDown to move to results
            // But generally we should be careful not to hijack standard cursor movement if the input is focused
            // For this requirements: "global as long as no other input has focus" is usually best,
            // but the user plan said "if search bar has focus, ArrowDown will move focus to first item".

            // Let's check active element
            const activeElement = document.activeElement;
            const isSearchFocused = activeElement?.tagName === 'INPUT';

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (keyboardFocusIndex === -1) ? 0 : (keyboardFocusIndex + 1) % allVisibleItems.length;
                setKeyboardFocusIndex(nextIndex);

                // Auto-navigate
                const item = allVisibleItems[nextIndex];
                if (!item.path.startsWith('http')) {
                    router.push(item.path);
                }

                // If search was focused, blur it so future creates feel "in the list"
                if (isSearchFocused && activeElement instanceof HTMLElement) {
                    activeElement.blur();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const nextIndex = (keyboardFocusIndex === -1)
                    ? allVisibleItems.length - 1
                    : (keyboardFocusIndex - 1 + allVisibleItems.length) % allVisibleItems.length;
                setKeyboardFocusIndex(nextIndex);

                // Auto-navigate
                const item = allVisibleItems[nextIndex];
                if (!item.path.startsWith('http')) {
                    router.push(item.path);
                }
            } else if (e.key === 'Enter') {
                if (keyboardFocusIndex !== -1) {
                    e.preventDefault();
                    const item = allVisibleItems[keyboardFocusIndex];
                    if (item.path.startsWith('http')) {
                        window.open(item.path, '_blank', 'noopener,noreferrer');
                    } else {
                        // Already navigated via arrow keys, but safe to push again or just close mobile menu
                        router.push(item.path);
                    }
                    setIsMobileOpen(false);
                }
            } else if (e.key === 'Escape') {
                setKeyboardFocusIndex(-1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [allVisibleItems, keyboardFocusIndex, router]);

    const renderItem = (item: NavItem, index: number) => {
        const isActive = pathname === item.path;
        const isExternal = item.path.startsWith('http');

        // Calculate global index for this item
        // We need to know if it's in filteredPinned or filteredRecent to get correct global index?
        // Actually, renderItem needs to know its global index to compare with keyboardFocusIndex.
        // It's easier if we map over the sections and keep track of the index offset, 
        // OR we can just find the index in allVisibleItems, but duplicate items might exist? 
        // The items seem unique by path/label.

        // Let's pass the global index from the caller instead of trying to find it here.
        // But the map in the JSX below receives (item, localIndex).
        // We'll fix the call sites to pass the correct index.

        // Wait, I can't easily change the map callback signature in the JSX without changing the JSX itself.
        // Let's use `allVisibleItems.indexOf(item)` assuming object reference equality or just modify the calling loops.
        // Actually references are preserved from PINNED/RECENT constants so indexOf works.
        const globalIndex = allVisibleItems.indexOf(item);
        const isFocused = globalIndex === keyboardFocusIndex;

        const Content = (
            <div className={`${styles.navItem} ${isActive ? styles.active : ''} ${isFocused ? styles.keyboardFocused : ''}`}>
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
                <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.navLink}
                    onClick={() => setIsMobileOpen(false)}
                >
                    {Content}
                </a>
            );
        }

        return (
            <Link
                key={item.path}
                href={item.path}
                className={styles.navLink}
                onClick={() => setIsMobileOpen(false)}
            >
                {Content}
            </Link>
        );
    };

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                className={styles.hamburger}
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open Menu"
            >
                ☰
            </button>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside className={`${styles.sidebar} ${isMobileOpen ? styles.mobileOpen : ''}`}>
                <div className={styles.header}>
                    <div className={styles.windowControls}>
                        <div className={`${styles.dot} ${styles.red}`}></div>
                        <div className={`${styles.dot} ${styles.yellow}`}></div>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                    </div>
                    {/* Close button for mobile */}
                    <div
                        className={styles.closeBtn}
                        onClick={() => setIsMobileOpen(false)}
                    >
                        ✕
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
        </>
    );
}
