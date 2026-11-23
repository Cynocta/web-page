"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import FieldTrace from "@/components/ui/field-trace";
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
 * It is built as the answer to the hero. The page opens on a lit plate with a
 * magnetic field and a headline carrying the brand's marker, and it closes on
 * the same three things: the light, the filings gathering on the one action
 * that matters, and the marker — spent here for the second and last time on
 * the page, which is what keeps it meaning "this is where you act". Before
 * this the heading was a gradient fading into grey with an italic green line
 * under it, a third voice that appeared nowhere else on the site.
 *
 * Entrance runs through `Reveal`, which fails open, rather than a motion
 * library that served the heading at `opacity: 0` until an observer fired.
 */
export default function ContactCtaSection() {
    const { copy } = useI18n();
    const { contact } = copy;

    return (
        <section className={s.section} id="contacto">
            <div className={s.ground} aria-hidden="true">
                <FieldTrace origin={[0.5, 1.12]} step={32} className={s.trace} />
            </div>

            <div className={s.inner}>
                <Reveal blur>
                    {/* The break is the hero's arrangement: a plain line, then
                        the marked one under it. Let the two share a line and
                        the marker starts mid-sentence and steps down, which
                        reads as a highlighter slip rather than a decision. */}
                    <h2 className={s.heading}>
                        {contact.title}
                        <br />
                        <span className="cyn-mark">{contact.titleEmphasis}</span>
                    </h2>
                </Reveal>

                <Reveal blur delay={140}>
                    <p className={s.sub}>{contact.body}</p>
                </Reveal>

                <Reveal blur delay={240}>
                    <div className={s.actions}>
                        {contact.primaryCta && (
                            <Link
                                href={contact.primaryCta.href}
                                className={`cyn-btn cyn-btn--primary ${s.action}`}
                            >
                                {contact.primaryCta.label}
                                <span aria-hidden="true">→</span>
                            </Link>
                        )}
                        <a
                            href={buildWhatsappLink(contact.whatsappText)}
                            className={`cyn-btn ${
                                contact.primaryCta ? "cyn-btn--ghost" : "cyn-btn--primary"
                            } ${s.action}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contact.whatsappCta}
                        </a>
                        <a
                            href={`mailto:${contactEmail}`}
                            className={`cyn-btn cyn-btn--ghost ${s.action}`}
                        >
                            {contact.emailCta}
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
