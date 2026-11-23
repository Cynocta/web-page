"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import LanguageToggle from "@/components/language-toggle";
import ThemeToggle from "@/components/theme-toggle";
import { useI18n } from "@/components/i18n-provider";
import {
    foreignLinkLabel,
    headerCta,
    headerNav,
    type NavEntry,
} from "@/lib/content/navigation";
import { contactEmail } from "@/lib/site-data";
import s from "./header.module.css";

/** The homes (`/`, `/en`) match exactly; every other entry also matches its children. */
function isActive(pathname: string, href: string) {
    return href === "/" || href === "/en" ? pathname === href : pathname.startsWith(href);
}

/**
 * One spring for the whole menu, so the pill, the caret and the panel settle
 * together. Low bounce on purpose: this is a B2B header, and overshoot on a
 * control someone uses on every visit reads as wobble, not as life.
 */
const SPRING = { type: "spring", visualDuration: 0.28, bounce: 0.14 } as const;

const LIST = { hidden: {}, show: { transition: { staggerChildren: 0.035 } } };
const ITEM = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.23, 1, 0.32, 1] } },
} as const;

function entryIsActive(pathname: string, entry: NavEntry) {
    return entry.kind === "link"
        ? isActive(pathname, entry.href)
        : isActive(pathname, entry.href) || entry.items.some((i) => isActive(pathname, i.href));
}

export default function Header() {
    const { copy, locale } = useI18n();
    const nav = headerNav[locale];
    const cta = headerCta[locale];
    /** Badge on links that leave the reader's language — "ES" while browsing /en. */
    const foreign = foreignLinkLabel[locale];
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    /** Label of the desktop menu currently shown, or null. */
    const [menu, setMenu] = useState<string | null>(null);
    /** Label of the mobile section expanded, or null. */
    const [section, setSection] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const closeTimer = useRef<number | undefined>(undefined);

    /** The open menu's own data, so the panel can render once outside the list. */
    const openEntry = nav.find(
        (entry): entry is Extract<NavEntry, { kind: "menu" }> =>
            entry.kind === "menu" && entry.label === menu,
    );

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Route change closes everything; without this the panel survives navigation.
    // Adjusted during render rather than in an effect, which would paint the
    // stale open panel for one frame and then re-render to close it.
    const [lastPathname, setLastPathname] = useState(pathname);
    if (pathname !== lastPathname) {
        setLastPathname(pathname);
        setOpen(false);
        setMenu(null);
        setSection(null);
    }

    useEffect(() => {
        if (!open) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, [open]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            setOpen(false);
            setMenu(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // A click outside the nav closes an open dropdown — pointer users expect
    // that, and the menu is not modal.
    useEffect(() => {
        if (!menu) return;
        const onDown = (e: MouseEvent) => {
            if (!navRef.current?.contains(e.target as Node)) setMenu(null);
        };
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, [menu]);

    useEffect(() => () => window.clearTimeout(closeTimer.current), []);

    /** Small grace period so the pointer can cross the gap to the panel. */
    const scheduleClose = () => {
        window.clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(() => setMenu(null), 140);
    };
    const cancelClose = () => window.clearTimeout(closeTimer.current);

    return (
        /* Anyone who asked their system for less motion keeps the opacity and
           colour changes and loses the travel, rather than losing the menu. */
        <MotionConfig reducedMotion="user">
        <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
            <div className={s.bar}>
                {/* The logo returns to the home of the tree you're in, not always
                    to the Spanish one. */}
                <Link
                    href={locale === "es" ? "/" : "/en"}
                    className={`cyn-logo ${s.brand}`}
                    aria-label={
                        locale === "es" ? "Cynocta, ir al inicio" : "Cynocta, go to homepage"
                    }
                >
                    <Image
                        src="/logo.svg"
                        alt={copy.logoAlt}
                        className="cyn-logo-mark"
                        width={256}
                        height={256}
                        priority
                    />
                    <span className="cyn-logo-text">C Y N O C T A</span>
                </Link>

                {/* The panel lives at nav level rather than inside each item, so
                    moving between menus resizes one surface instead of tearing
                    one down and building another. That also means the pointer
                    leaving is a question for the nav, not for a single item. */}
                <nav
                    ref={navRef}
                    className={s.nav}
                    aria-label="Principal"
                    onMouseLeave={scheduleClose}
                >
                    <ul className={s.navList}>
                        {nav.map((entry) => {
                            const active = entryIsActive(pathname, entry);

                            if (entry.kind === "link") {
                                return (
                                    <li key={entry.href}>
                                        <Link
                                            href={entry.href}
                                            className={`${s.link} ${active ? s.active : ""}`}
                                            aria-current={active ? "page" : undefined}
                                            hrefLang={entry.lang}
                                        >
                                            {entry.label}
                                            {entry.lang && (
                                                <span className={s.foreign}>{foreign}</span>
                                            )}
                                        </Link>
                                    </li>
                                );
                            }

                            const shown = menu === entry.label;

                            return (
                                <li
                                    key={entry.label}
                                    className={s.menuItem}
                                    onMouseEnter={() => {
                                        cancelClose();
                                        setMenu(entry.label);
                                    }}
                                >
                                    <button
                                        type="button"
                                        className={`${s.link} ${s.menuBtnDesktop} ${active ? s.active : ""}`}
                                        aria-expanded={shown}
                                        aria-haspopup="true"
                                        onClick={() => setMenu(shown ? null : entry.label)}
                                    >
                                        {/* One pill shared by every trigger: it slides
                                            across rather than fading in place, which is
                                            what tells you the menus are one surface. */}
                                        {shown && (
                                            <motion.span
                                                layoutId="cyn-nav-pill"
                                                className={s.navPill}
                                                transition={SPRING}
                                            />
                                        )}
                                        <span className={s.menuLabel}>{entry.label}</span>
                                        <motion.span
                                            className={s.caret}
                                            animate={{ rotate: shown ? 225 : 45 }}
                                            transition={SPRING}
                                            aria-hidden="true"
                                        />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Two elements, two jobs. The outer one enters and leaves;
                        the inner one carries `layout` and is the panel you see,
                        so switching menus resizes it. Putting `layout` on the
                        element that exits keeps it mounted forever — it never
                        finishes leaving. */}
                    <AnimatePresence>
                        {openEntry && (
                            <motion.div
                                key="mega"
                                className={s.megaAnchor}
                                onMouseEnter={cancelClose}
                                initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                                transition={SPRING}
                            >
                                <motion.div layout className={s.mega} transition={SPRING}>
                                    {/* Keyed by menu, so switching re-runs the
                                        stagger while the panel only resizes. */}
                                    <motion.ul
                                        key={openEntry.label}
                                        className={s.megaGrid}
                                        variants={LIST}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        {openEntry.items.map((item) => (
                                            <motion.li key={item.href} variants={ITEM}>
                                                <Link
                                                    href={item.href}
                                                    className={`${s.megaLink} ${isActive(pathname, item.href) ? s.megaActive : ""}`}
                                                    hrefLang={item.lang}
                                                >
                                                    <span className={s.megaLabel}>
                                                        {item.label}
                                                        {item.lang && (
                                                            <span className={s.foreign}>
                                                                {foreign}
                                                            </span>
                                                        )}
                                                    </span>
                                                    {item.hint && (
                                                        <span className={s.megaHint}>
                                                            {item.hint}
                                                        </span>
                                                    )}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </motion.ul>

                                    <Link
                                        href={openEntry.href}
                                        className={s.megaAll}
                                        hrefLang={openEntry.lang}
                                    >
                                        {openEntry.seeAll}
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                <div className={s.actions}>
                    <ThemeToggle />
                    <LanguageToggle className="cyn-toggle--bare" />
                    <span className={s.divider} aria-hidden="true" />
                    <Link href={cta.href} className={s.cta} hrefLang={cta.lang}>
                        {cta.label}
                    </Link>
                    <button
                        type="button"
                        className={`${s.menuBtn} ${open ? s.open : ""}`}
                        aria-label={open ? copy.navCloseLabel : copy.navMenuAriaLabel}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className={s.burger} aria-hidden="true">
                            <span />
                            <span />
                            <span />
                        </span>
                    </button>
                </div>
            </div>

            {open && (
                <div className={s.panel} id="menu-movil">
                    <ul className={s.panelNav}>
                        {nav.map((entry, i) => {
                            const active = entryIsActive(pathname, entry);
                            const style = { animationDelay: `${60 + i * 40}ms` };

                            if (entry.kind === "link") {
                                return (
                                    <li key={entry.href} className={s.panelItem} style={style}>
                                        <Link
                                            href={entry.href}
                                            className={`${s.panelLink} ${active ? s.panelActive : ""}`}
                                            aria-current={active ? "page" : undefined}
                                            hrefLang={entry.lang}
                                        >
                                            {entry.label}
                                            {entry.lang && (
                                                <span className={s.foreign}>{foreign}</span>
                                            )}
                                            <span className={s.chev} aria-hidden="true">
                                                →
                                            </span>
                                        </Link>
                                    </li>
                                );
                            }

                            const expanded = section === entry.label;

                            return (
                                <li key={entry.label} className={s.panelItem} style={style}>
                                    <button
                                        type="button"
                                        className={`${s.panelLink} ${s.panelDisclosure} ${active ? s.panelActive : ""}`}
                                        aria-expanded={expanded}
                                        onClick={() => setSection(expanded ? null : entry.label)}
                                    >
                                        {entry.label}
                                        <span
                                            className={`${s.caret} ${expanded ? s.caretOpen : ""}`}
                                            aria-hidden="true"
                                        />
                                    </button>

                                    {expanded && (
                                        <ul className={s.panelSub}>
                                            {entry.items.map((item) => (
                                                <li key={item.href}>
                                                    <Link
                                                        href={item.href}
                                                        className={s.panelSubLink}
                                                        hrefLang={item.lang}
                                                    >
                                                        {item.label}
                                                        {item.lang && (
                                                            <span className={s.foreign}>
                                                                {foreign}
                                                            </span>
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <Link
                                                    href={entry.href}
                                                    className={s.panelSubAll}
                                                    hrefLang={entry.lang}
                                                >
                                                    {entry.seeAll} →
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    <div className={s.panelFooter}>
                        <Link href={cta.href} className={s.panelCta} hrefLang={cta.lang}>
                            {cta.label}
                        </Link>
                        <div className={s.panelMeta}>
                            <a href={`mailto:${contactEmail}`} className={s.panelContact}>
                                {contactEmail}
                            </a>
                            <LanguageToggle className="cyn-toggle--bare" />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </header>
        </MotionConfig>
    );
}
