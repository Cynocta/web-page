import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { foreignLinkLabel, footerColumns, footerCopy } from "@/lib/content/navigation";
import type { Locale } from "@/lib/content";
import {
    buildWhatsappLink,
    contactEmail,
    contactPhone,
    instagramUrl,
    siteName,
} from "@/lib/site-data";
import s from "./site-footer.module.css";

const YEAR = new Date().getFullYear();

/* Brand marks are hand-rolled: lucide dropped its brand icons in v1, so
   importing InstagramIcon or LinkedinIcon from it no longer compiles. */
const InstagramMark = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
);

const WhatsappMark = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8.8 9.2c.2 2.3 2.4 4.4 4.7 4.7l1-1.3 1.9.9-.4 1.5c-2.9.6-6.9-2.9-7.6-6.2l1.5-.4.9 1.9-1 .9Z" />
    </svg>
);

/**
 * Site-wide footer.
 *
 * Doubles as the secondary navigation layer: every section of the site is
 * reachable from here, which keeps deep pages within reach of the homepage
 * instead of orphaned.
 *
 * Takes the locale rather than reading it from context because it renders on
 * the server. Defaults to Spanish, which is what every interior page is.
 */
export default function SiteFooter({ locale = "es" }: { locale?: Locale }) {
    const copy = footerCopy[locale];
    const columns = footerColumns[locale];
    const foreign = foreignLinkLabel[locale];
    const home = locale === "es" ? "/" : "/en";

    const socialLinks = [
        { label: "Instagram", href: instagramUrl, Icon: InstagramMark },
        {
            label: "WhatsApp",
            href: buildWhatsappLink("Hola, quiero contactar a Cynocta"),
            Icon: WhatsappMark,
        },
        { label: copy.emailSocialLabel, href: `mailto:${contactEmail}`, Icon: MailIcon },
    ];

    return (
        <footer className={s.footer}>
            <span className={s.seam} aria-hidden="true" />

            <div className={s.inner}>
                <div className={s.top}>
                    <Reveal blur className={s.brandCol}>
                        <Link
                            href={home}
                            className="cyn-logo"
                            aria-label={`${siteName}, ${copy.homeAria}`}
                        >
                            <Image
                                src="/logo.svg"
                                alt=""
                                className="cyn-logo-mark"
                                width={1254}
                                height={1254}
                            />
                            <span className="cyn-logo-text">C Y N O C T A</span>
                        </Link>
                        <p className={s.tagline}>{copy.tagline}</p>

                        {/* These column labels were <h2>. Six of them, which meant six
                            of the page's fourteen <h2> described menus rather than
                            content and diluted the heading map a crawler reads. They
                            are <p> now, wired to their list with aria-labelledby so
                            the accessible name survives the demotion. */}
                        <p className={s.colTitle} id="footer-contact-title">
                            {copy.contactTitle}
                        </p>
                        <ul className={s.contactList} aria-labelledby="footer-contact-title">
                            <li className={s.contactItem}>
                                <span className={s.contactLabel}>{copy.emailLabel}</span>
                                <a href={`mailto:${contactEmail}`} className={s.contactValue}>
                                    <MailIcon aria-hidden="true" />
                                    {contactEmail}
                                </a>
                            </li>
                            <li className={s.contactItem}>
                                <span className={s.contactLabel}>{copy.whatsappLabel}</span>
                                <a
                                    href={buildWhatsappLink("Hola, quiero contactar a Cynocta")}
                                    className={s.contactValue}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <PhoneIcon aria-hidden="true" />
                                    {contactPhone}
                                </a>
                            </li>
                            <li className={s.contactItem}>
                                <span className={s.contactLabel}>{copy.locationLabel}</span>
                                <span className={s.contactStatic}>
                                    <MapPinIcon aria-hidden="true" />
                                    {copy.locationValue}
                                </span>
                            </li>
                        </ul>

                        <p className={`${s.colTitle} ${s.socialTitle}`} id="footer-social-title">
                            {copy.socialTitle}
                        </p>
                        <ul
                            className={`${s.colList} ${s.socialList}`}
                            aria-labelledby="footer-social-title"
                        >
                            {socialLinks.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className={s.colLink}
                                        {...(href.startsWith("mailto:")
                                            ? {}
                                            : { target: "_blank", rel: "noopener noreferrer" })}
                                    >
                                        <Icon aria-hidden="true" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    {columns.map((column, i) => (
                        <Reveal key={column.title} blur delay={100 + i * 100}>
                            {/* The <nav> already carries the accessible name, so the
                                label here is purely visual — see the note above. */}
                            <nav aria-label={column.title}>
                                <p className={s.colTitle}>{column.title}</p>
                                <ul className={s.colList}>
                                    {column.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className={s.colLink}
                                                hrefLang={link.lang}
                                            >
                                                {link.label}
                                                {link.lang && (
                                                    <span className={s.foreign}>{foreign}</span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </Reveal>
                    ))}

                </div>

                <div className={s.bottom}>
                    <p className={s.copy}>
                        © {YEAR} {siteName}. {copy.rights}
                    </p>
                    <ul className={s.bottomLinks}>
                        <li>
                            <Link
                                href={copy.privacy.href}
                                className={s.bottomLink}
                                hrefLang={copy.privacy.lang}
                            >
                                {copy.privacy.label}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={copy.terms.href}
                                className={s.bottomLink}
                                hrefLang={copy.terms.lang}
                            >
                                {copy.terms.label}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
