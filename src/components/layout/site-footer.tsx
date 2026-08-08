import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { footerColumns } from "@/lib/content/navigation";
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

const socialLinks = [
    { label: "Instagram", href: instagramUrl, Icon: InstagramMark },
    {
        label: "WhatsApp",
        href: buildWhatsappLink("Hola, quiero contactar a Cynocta"),
        Icon: WhatsappMark,
    },
    { label: "Correo", href: `mailto:${contactEmail}`, Icon: MailIcon },
];

/**
 * Site-wide footer.
 *
 * Doubles as the secondary navigation layer: every section of the site is
 * reachable from here, which keeps deep pages within reach of the homepage
 * instead of orphaned.
 */
export default function SiteFooter() {
    return (
        <footer className={s.footer}>
            <span className={s.seam} aria-hidden="true" />

            <div className={s.inner}>
                <div className={s.top}>
                    <Reveal blur className={s.brandCol}>
                        <Link href="/" className="cyn-logo" aria-label={`${siteName}, ir al inicio`}>
                            <Image
                                src="/logo.svg"
                                alt=""
                                className="cyn-logo-mark"
                                width={1254}
                                height={1254}
                            />
                            <span className="cyn-logo-text">C Y N O C T A</span>
                        </Link>
                        <p className={s.tagline}>
                            Implementamos automatización, inteligencia artificial y sistemas web para
                            que los negocios dejen de perder clientes por responder tarde.
                        </p>

                        <h2 className={s.colTitle}>Contacto</h2>
                        <ul className={s.contactList}>
                            <li className={s.contactItem}>
                                <span className={s.contactLabel}>Email</span>
                                <a href={`mailto:${contactEmail}`} className={s.contactValue}>
                                    <MailIcon aria-hidden="true" />
                                    {contactEmail}
                                </a>
                            </li>
                            <li className={s.contactItem}>
                                <span className={s.contactLabel}>WhatsApp</span>
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
                                <span className={s.contactLabel}>Ubicación</span>
                                <span className={s.contactStatic}>
                                    <MapPinIcon aria-hidden="true" />
                                    Colombia · Remoto en LATAM
                                </span>
                            </li>
                        </ul>

                        <h2 className={`${s.colTitle} ${s.socialTitle}`}>Redes</h2>
                        <ul className={s.colList}>
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

                    {footerColumns.map((column, i) => (
                        <Reveal key={column.title} blur delay={100 + i * 100}>
                            <nav aria-label={column.title}>
                                <h2 className={s.colTitle}>{column.title}</h2>
                                <ul className={s.colList}>
                                    {column.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className={s.colLink}>
                                                {link.label}
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
                        © {YEAR} {siteName}. Todos los derechos reservados.
                    </p>
                    <ul className={s.bottomLinks}>
                        <li>
                            <Link href="/privacidad" className={s.bottomLink}>
                                Política de privacidad
                            </Link>
                        </li>
                        <li>
                            <Link href="/terminos" className={s.bottomLink}>
                                Términos y condiciones
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
