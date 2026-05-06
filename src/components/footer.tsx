"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "@/components/language-toggle";
import { useI18n } from "@/components/i18n-provider";
import { buildWhatsappLink, contactEmail, contactPhone, instagramUrl } from "@/lib/site-data";

export default function Footer() {
    const { copy } = useI18n();
    const primaryLinks = copy.footer.links.filter((link) => link.type === "link");
    const utilityLinks = copy.footer.links.filter((link) => link.type !== "link");

    return (
        <footer className="cyn-footer">
            <div className="cyn-footer-top">
                <Link href="#inicio" className="cyn-logo cyn-footer-brand" aria-label={copy.footer.backToTopLabel}>
                    <Image
                        src="/logo.svg"
                        alt={copy.logoAlt}
                        className="cyn-logo-mark"
                        width={1254}
                        height={1254}
                    />
                    <span className="cyn-logo-text">C Y N O C T A</span>
                </Link>
                <nav className="cyn-footer-nav" aria-label="Footer">
                    {primaryLinks.map((link) => (
                        <Link key={link.label} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="cyn-footer-divider" />

            <div className="cyn-footer-bottom">
                <p className="cyn-footer-copy">{copy.footer.copy}</p>
                <div className="cyn-footer-legal">
                    {utilityLinks.map((link) => {
                        if (link.type === "whatsapp") {
                            return (
                                <a
                                    key={link.label}
                                    href={buildWhatsappLink(copy.footer.whatsappText)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.label}
                                </a>
                            );
                        }

                        if (link.type === "external" && link.href === "instagram") {
                            return (
                                <a key={link.label} href={instagramUrl} target="_blank" rel="noopener noreferrer">
                                    {link.label}
                                </a>
                            );
                        }

                        if (link.type === "mailto") {
                            return (
                                <a key={link.label} href={`mailto:${contactEmail}`}>
                                    {link.label}
                                </a>
                            );
                        }

                        if (link.type === "tel") {
                            return (
                                <a key={link.label} href={`tel:${contactPhone.replace(/\s+/g, "")}`}>
                                    {link.label}
                                </a>
                            );
                        }

                        if (link.type === "legal") {
                            return (
                                <Link key={link.label} href={link.href} className="cyn-footer-legal-btn">
                                    {link.label}
                                </Link>
                            );
                        }

                        return null;
                    })}
                    <LanguageToggle className="cyn-toggle--compact" />
                </div>
            </div>
        </footer>
    );
}
