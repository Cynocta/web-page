"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageToggle from "@/components/language-toggle";
import { useI18n } from "@/components/i18n-provider";
import { headerCta, headerNav } from "@/lib/content/navigation";
import { contactEmail } from "@/lib/site-data";
import s from "./header.module.css";

/** `/` must match exactly; every other entry also matches its children. */
function isActive(pathname: string, href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
    const { copy } = useI18n();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    // Passive listener with a cheap threshold check — the header only needs to
    // know "moved or not", so there is nothing to throttle beyond this.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Route change closes the panel; without this it survives navigation.
    useEffect(() => setOpen(false), [pathname]);

    // A full-screen panel over a scrollable page scrolls the page behind it.
    useEffect(() => {
        if (!open) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
            <div className={s.bar}>
                <Link href="/" className={`cyn-logo ${s.brand}`} aria-label="Cynocta, ir al inicio">
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

                <ul className={s.nav}>
                    {headerNav.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`${s.link} ${isActive(pathname, item.href) ? s.active : ""} ${item.pending ? s.pending : ""}`}
                                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={s.actions}>
                    <LanguageToggle className="cyn-toggle--compact" />
                    <Link href={headerCta.href} className={s.cta}>
                        {headerCta.label}
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
                        {headerNav.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`${s.panelLink} ${isActive(pathname, item.href) ? s.panelActive : ""}`}
                                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                                >
                                    {item.label}
                                    {item.pending ? (
                                        <span className={s.panelTag}>Pronto</span>
                                    ) : (
                                        <span className={s.chev} aria-hidden="true">
                                            →
                                        </span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={s.panelFooter}>
                        <Link href={headerCta.href} className={s.panelCta}>
                            {headerCta.label}
                        </Link>
                        <div className={s.panelMeta}>
                            <a href={`mailto:${contactEmail}`} className={s.panelContact}>
                                {contactEmail}
                            </a>
                            <LanguageToggle className="cyn-toggle--compact" />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
