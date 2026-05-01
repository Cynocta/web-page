"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { buildWhatsappLink, navItems } from "@/lib/site-data";

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMenu = () => setMobileOpen(false);

    return (
        <header className="cyn-nav-wrap">
            <nav className="cyn-nav">
                <Link href="#inicio" className="cyn-logo" onClick={closeMenu}>
                    <Image
                        src="/cynocta-logo-main.svg"
                        alt="Logo de Cynocta"
                        className="cyn-logo-mark"
                        width={447}
                        height={369}
                        priority
                    />
                    <span className="cyn-logo-text">C Y N O C T A</span>
                </Link>

                <button
                    type="button"
                    aria-label="Abrir menu"
                    aria-expanded={mobileOpen}
                    className="cyn-menu-btn"
                    onClick={() => setMobileOpen((prev) => !prev)}
                >
                    {mobileOpen ? "Cerrar" : "Menu"}
                </button>

                <ul className="cyn-nav-links">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href={buildWhatsappLink("Hola, quiero agendar una llamada con Cynocta")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyn-nav-cta"
                        >
                            Agendar llamada
                        </a>
                    </li>
                </ul>
            </nav>

            {mobileOpen && (
                <div className="cyn-mobile-menu">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeMenu}>
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href={buildWhatsappLink("Hola, quiero agendar una llamada con Cynocta")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                    >
                        Agendar llamada
                    </a>
                </div>
            )}
        </header>
    );
}
