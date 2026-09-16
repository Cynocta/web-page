"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import Reveal from "@/components/ui/reveal";
import { buildWhatsappLink, contactEmail } from "@/lib/site-data";
import s from "./contact-cta.module.css";

/**
 * The closing band.
 *
 * It used to end the page with "Descubre como contactarnos abajo" — no accent,
 * and no action: the last thing the home said was to go and look in the
 * footer. On the English home it was worse, because the hero's main CTA points
 * here (`/en#contacto`), so the primary button led to a band with no button.
 * It carries the real channels now.
 *
 * Entrance runs through `Reveal`, which fails open, rather than a motion
 * library that served the heading at `opacity: 0` until an observer fired.
 */
export default function ContactCtaSection() {
    const { copy } = useI18n();
    const { contact } = copy;

    return (
        <section className={s.section} id="contacto">
            <div className={s.aurora} />

            <div className={s.inner}>
                <Reveal blur>
                    <p className={s.tag}>{contact.tag}</p>
                </Reveal>

                <Reveal blur delay={120}>
                    <h2 className={s.heading}>
                        {contact.title}
                        <br />
                        <em>{contact.titleEmphasis}</em>
                    </h2>
                </Reveal>

                <Reveal blur delay={220}>
                    <p className={s.sub}>{contact.body}</p>
                </Reveal>

                <Reveal blur delay={320}>
                    <div className={s.actions}>
                        {contact.primaryCta && (
                            <Link href={contact.primaryCta.href} className={s.primary}>
                                {contact.primaryCta.label}
                                <span aria-hidden="true">→</span>
                            </Link>
                        )}
                        <a
                            href={buildWhatsappLink(contact.whatsappText)}
                            className={contact.primaryCta ? s.secondary : s.primary}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contact.whatsappCta}
                        </a>
                        <a href={`mailto:${contactEmail}`} className={s.secondary}>
                            {contact.emailCta}
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
