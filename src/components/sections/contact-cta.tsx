"use client";

import { MailIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { useI18n } from "@/components/i18n-provider";
import { buildWhatsappLink, contactEmail, instagramUrl } from "@/lib/site-data";

export default function ContactCtaSection() {
    const { copy } = useI18n();

    return (
        <section className="cyn-cta-section" id="contacto">
            <p className="cyn-cta-tag">{copy.contact.tag}</p>
            <h2>
                {copy.contact.title}
                <br />
                <em>{copy.contact.titleEmphasis}</em>
            </h2>
            <div className="cyn-contact-icons" aria-label={copy.contact.iconsLabel}>
                <a
                    href={buildWhatsappLink(copy.contact.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyn-contact-icon-btn"
                    aria-label={copy.contact.labels.whatsapp}
                    title={copy.contact.labels.whatsappTitle}
                >
                    <WhatsAppIcon />
                </a>
                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyn-contact-icon-btn"
                    aria-label={copy.contact.labels.instagram}
                    title={copy.contact.labels.instagramTitle}
                >
                    <InstagramIcon />
                </a>
                <a
                    href={`mailto:${contactEmail}`}
                    className="cyn-contact-icon-btn"
                    aria-label={copy.contact.labels.email}
                    title={copy.contact.labels.emailTitle}
                >
                    <MailIcon />
                </a>
            </div>
        </section>
    );
}
