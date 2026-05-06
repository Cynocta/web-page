"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LanguageToggle from "@/components/language-toggle";
import { useI18n } from "@/components/i18n-provider";
import { buildWhatsappLink } from "@/lib/site-data";

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { copy } = useI18n();

    const closeMenu = () => setMobileOpen(false);

    return (
        <header className="cyn-nav-wrap">
            <nav className="cyn-nav">
                <Link href="#inicio" className="cyn-logo" onClick={closeMenu}>
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

                <div className="cyn-nav-actions">
                    <LanguageToggle className="cyn-nav-toggle-mobile" />
                    <button
                        type="button"
                        aria-label={copy.navMenuAriaLabel}
                        aria-expanded={mobileOpen}
                        className="cyn-menu-btn"
                        onClick={() => setMobileOpen((prev) => !prev)}
                    >
                        {mobileOpen ? copy.navCloseLabel : copy.navMenuLabel}
                    </button>
                </div>

                <ul className="cyn-nav-links">
                    {copy.navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href={buildWhatsappLink(copy.navCtaWhatsappText)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyn-nav-cta"
                        >
                            {copy.navCta}
                        </a>
                    </li>
                    <li>
                        <LanguageToggle className="cyn-toggle--compact" />
                    </li>
                </ul>
            </nav>

            {mobileOpen && (
                <div className="cyn-mobile-menu">
                    {copy.navItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeMenu}>
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href={buildWhatsappLink(copy.navCtaWhatsappText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                    >
                        {copy.navCta}
                    </a>
                </div>
            )}
        </header>
    );
}
