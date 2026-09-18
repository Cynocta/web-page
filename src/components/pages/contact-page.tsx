import Link from "next/link";
import PageShell from "@/components/layout/page-shell";
import { JsonLd } from "@/components/structured-data";
import PageHero from "@/components/sections/page-hero";
import LeadFormSection from "@/components/sections/lead-form";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { faqContent, type Locale } from "@/lib/content";
import { localePath } from "@/lib/i18n/routes";
import { ORGANIZATION_ID } from "@/lib/schema";
import { buildWhatsappLink, contactEmail, contactPhone, instagramUrl, siteUrl } from "@/lib/site-data";
import s from "@/components/sections/contact-page.module.css";
import steps from "@/components/sections/pricing-page.module.css";
import faqStyles from "@/components/sections/home-faq.module.css";

/**
 * Copy for the contact page in each language.
 *
 * Every step under "what happens next" restates a commitment the site already
 * makes elsewhere (the response time, the free diagnosis, the phased
 * proposal), so this page promises nothing new; it just answers "and then?".
 */
export const contactCopy = {
    es: {
        metaTitle: "Contacto y diagnóstico gratuito de automatización",
        metaDescription:
            "Habla con Cynocta por WhatsApp, correo o el formulario de diagnóstico. Respondemos en menos de 24 horas hábiles desde Colombia, en remoto para toda LATAM.",
        home: "Inicio",
        crumb: "Contacto",
        eyebrow: "Contacto",
        title: "Hablemos de tu caso.",
        intro: "Escríbenos por el canal que prefieras o responde las cuatro preguntas del formulario. Respondemos en menos de 24 horas hábiles y, si no somos la opción correcta, te lo decimos.",
        facts: [
            { value: "< 24 h hábiles", label: "Tiempo de respuesta" },
            { value: "Colombia · LATAM", label: "Dónde trabajamos" },
            { value: "Español", label: "Idioma" },
        ],
        whatsappMessage: "Hola, quiero hablar con Cynocta sobre un proyecto",
        channels: {
            whatsapp: "La vía más rápida. Respuesta en horario hábil.",
            email: { label: "Correo", detail: "Para propuestas detalladas y documentación." },
            instagram: "Lo que vamos construyendo, en formato corto.",
        },
        channelsTag: "Canales",
        channelsTitle: "Elige por dónde prefieres hablar.",
        nextTag: "Después de escribirnos",
        nextTitle: "Qué pasa cuando nos contactas.",
        nextIntro:
            "Sin llamadas de venta insistentes ni formularios que no llevan a ninguna parte. Tres pasos, y en cada uno decides si seguir.",
        nextSteps: [
            {
                num: "01",
                title: "Te respondemos",
                description:
                    "En menos de 24 horas hábiles, por el mismo canal que elegiste. Si tu caso no es para nosotros, te lo decimos desde el principio.",
            },
            {
                num: "02",
                title: "Diagnóstico gratuito",
                description:
                    "Una sesión corta para ver dónde se pierden consultas hoy: en la captación, en la primera respuesta o en el seguimiento.",
            },
            {
                num: "03",
                title: "Propuesta por etapas",
                description:
                    "Un plan con entregables rápidos y su cotización, empezando por lo que más impacto tiene. Decides si avanzar con la propuesta en la mano.",
            },
        ],
        faqTag: "Antes de escribir",
        faqTitle: "Lo que más nos preguntan.",
        faqIntro: "Si tu duda es una de estas, la respuesta ya está publicada.",
    },
    en: {
        metaTitle: "Contact us for a free automation diagnosis",
        metaDescription:
            "Talk to Cynocta on WhatsApp, by email or through the diagnosis form. We reply within 24 business hours, from Colombia and remotely across Latin America.",
        home: "Home",
        crumb: "Contact",
        eyebrow: "Contact",
        title: "Let's talk about your case.",
        intro: "Write to us on whichever channel you prefer, or answer the four questions in the form below. We reply within 24 business hours, and if we're not the right fit, we'll say so.",
        facts: [
            { value: "< 24 business hours", label: "Response time" },
            { value: "Colombia · LATAM", label: "Where we work" },
            { value: "Spanish · English", label: "Languages" },
        ],
        whatsappMessage: "Hi, I'd like to talk to Cynocta about a project",
        channels: {
            whatsapp: "The fastest way. Replies during business hours.",
            email: { label: "Email", detail: "For detailed proposals and documentation." },
            instagram: "What we're building, in short form.",
        },
        channelsTag: "Channels",
        channelsTitle: "Choose where you'd rather talk.",
        nextTag: "After you write",
        nextTitle: "What happens when you contact us.",
        nextIntro:
            "No pushy sales calls and no forms that lead nowhere. Three steps, and at each one you decide whether to continue.",
        nextSteps: [
            {
                num: "01",
                title: "We reply",
                description:
                    "Within 24 business hours, on the same channel you chose. If your case isn't a fit for us, we say so from the start.",
            },
            {
                num: "02",
                title: "Free diagnosis",
                description:
                    "A short session to see where enquiries get lost today: in capture, in the first reply or in follow-up.",
            },
            {
                num: "03",
                title: "A phased proposal",
                description:
                    "A plan with quick deliverables and its quote, starting with what has the most impact. You decide whether to go ahead with the proposal in hand.",
            },
        ],
        faqTag: "Before you write",
        faqTitle: "What people ask us most.",
        faqIntro: "If your question is one of these, the answer is already published.",
    },
};

/** The questions people ask right before writing, linked rather than repeated. */
const PRE_CONTACT_IDS = ["cuanto-cuesta", "cuanto-tarda", "api-oficial-o-business", "empezar-pequeno"];

/** The contact page, shared by /contacto and /en/contact. */
export default function ContactPage({ locale }: { locale: Locale }) {
    const copy = contactCopy[locale];
    const path = localePath("contact", locale);
    const faqPath = localePath("faq", locale);

    const channels = [
        {
            label: "WhatsApp",
            value: contactPhone,
            detail: copy.channels.whatsapp,
            href: buildWhatsappLink(copy.whatsappMessage),
            external: true,
        },
        {
            label: copy.channels.email.label,
            value: contactEmail,
            detail: copy.channels.email.detail,
            href: `mailto:${contactEmail}`,
            external: false,
        },
        {
            label: "Instagram",
            value: "@cynocta_ai",
            detail: copy.channels.instagram,
            href: instagramUrl,
            external: true,
        },
    ];

    const preContactQuestions = PRE_CONTACT_IDS.map((id) =>
        faqContent[locale].items.find((item) => item.id === id),
    ).filter((item) => item !== undefined);

    const contactPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${siteUrl}${path}#contact`,
        url: `${siteUrl}${path}`,
        inLanguage: locale,
        name: `${copy.crumb} | Cynocta`,
        description: copy.metaDescription,
        about: { "@id": ORGANIZATION_ID },
    };

    return (
        <PageShell
            locale={locale}
            crumbs={[
                { label: copy.home, href: localePath("home", locale) },
                { label: copy.crumb, href: path },
            ]}
        >
            <JsonLd data={contactPageJsonLd} />

            <PageHero eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} facts={copy.facts} />

            <Section tone="surface">
                <SectionHeader eyebrow={copy.channelsTag} title={copy.channelsTitle} />
                <div className={s.channels}>
                    {channels.map((channel) => (
                        <a
                            key={channel.label}
                            href={channel.href}
                            className={s.channel}
                            {...(channel.external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                        >
                            <span className={s.channelLabel}>{channel.label}</span>
                            <span className={s.channelValue}>{channel.value}</span>
                            <span className={s.channelDetail}>{channel.detail}</span>
                        </a>
                    ))}
                </div>
            </Section>

            <LeadFormSection />

            <Section tone="surface">
                <SectionHeader eyebrow={copy.nextTag} title={copy.nextTitle} intro={copy.nextIntro} />
                <ol className={steps.steps}>
                    {copy.nextSteps.map((step) => (
                        <li key={step.num} className={steps.step}>
                            <span className={steps.stepNum}>{step.num}</span>
                            <h3 className={steps.stepTitle}>{step.title}</h3>
                            <p className={steps.stepText}>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </Section>

            <Section tone="black" width="narrow">
                <SectionHeader eyebrow={copy.faqTag} title={copy.faqTitle} intro={copy.faqIntro} />
                <ul className={faqStyles.list}>
                    {preContactQuestions.map((item) => (
                        <li key={item.id} className={faqStyles.item}>
                            <Link href={`${faqPath}#${item.id}`} className={faqStyles.summary}>
                                <span className={faqStyles.question}>{item.question}</span>
                                <span aria-hidden="true">→</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Section>
        </PageShell>
    );
}
