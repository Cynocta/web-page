"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LanguageToggle from "@/components/language-toggle";
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
                        width={1254}
                        height={1254}
                        priority
                    />
                    <span className="cyn-logo-text">C Y N O C T A</span>
                </Link>

                <nav ref={navRef} className={s.nav} aria-label="Principal">
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
                                    onMouseLeave={scheduleClose}
                                >
                                    <button
                                        type="button"
                                        className={`${s.link} ${s.menuBtnDesktop} ${active ? s.active : ""}`}
                                        aria-expanded={shown}
                                        aria-haspopup="true"
                                        onClick={() => setMenu(shown ? null : entry.label)}
                                    >
                                        {entry.label}
                                        <span
                                            className={`${s.caret} ${shown ? s.caretOpen : ""}`}
                                            aria-hidden="true"
                                        />
                                    </button>

                                    {shown && (
                                        <div className={s.dropdown} onMouseEnter={cancelClose}>
                                            <ul className={s.dropdownList}>
                                                {entry.items.map((item) => (
                                                    <li key={item.href}>
                                                        <Link
                                                            href={item.href}
                                                            className={`${s.dropdownLink} ${isActive(pathname, item.href) ? s.dropdownActive : ""}`}
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
                                            </ul>
                                            <Link
                                                href={entry.href}
                                                className={s.dropdownAll}
                                                hrefLang={entry.lang}
                                            >
                                                {entry.seeAll}
                                                <span aria-hidden="true">→</span>
                                            </Link>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className={s.actions}>
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
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
