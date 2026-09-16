import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/page-shell";
import { JsonLd } from "@/components/structured-data";
import PageHero from "@/components/sections/page-hero";
import LeadFormSection from "@/components/sections/lead-form";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { buildWhatsappLink, contactEmail, contactPhone, instagramUrl } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { faqContent } from "@/lib/content";
import { ORGANIZATION_ID } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";
import s from "@/components/sections/contact-page.module.css";
import steps from "@/components/sections/pricing-page.module.css";
import faqStyles from "@/components/sections/home-faq.module.css";

const PATH = "/contacto";

const DESCRIPTION =
    "Habla con Cynocta por WhatsApp, correo o el formulario de diagnóstico. Respondemos en menos de 24 horas hábiles desde Colombia, en remoto para toda LATAM.";

export const metadata: Metadata = pageMetadata({
    path: PATH,
    title: "Contacto y diagnóstico gratuito de automatización",
    description: DESCRIPTION,
});

const channels = [
    {
        label: "WhatsApp",
        value: contactPhone,
        detail: "La vía más rápida. Respuesta en horario hábil.",
        href: buildWhatsappLink("Hola, quiero hablar con Cynocta sobre un proyecto"),
        external: true,
    },
    {
        label: "Correo",
        value: contactEmail,
        detail: "Para propuestas detalladas y documentación.",
        href: `mailto:${contactEmail}`,
        external: false,
    },
    {
        label: "Instagram",
        value: "@cynocta_ai",
        detail: "Lo que vamos construyendo, en formato corto.",
        href: instagramUrl,
        external: true,
    },
];

/**
 * What happens after someone writes. Every step restates a commitment the site
 * already makes elsewhere — the response time, the free diagnosis, the phased
 * proposal — so this page promises nothing new, it just answers "and then?".
 */
const nextSteps = [
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
];

/** The questions people ask right before writing, linked rather than repeated. */
const preContactQuestions = ["cuanto-cuesta", "cuanto-tarda", "api-oficial-o-business", "empezar-pequeno"]
    .map((id) => faqContent.es.items.find((item) => item.id === id))
    .filter((item) => item !== undefined);

const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}${PATH}#contact`,
    url: `${siteUrl}${PATH}`,
    inLanguage: "es",
    name: "Contacto | Cynocta",
    description: DESCRIPTION,
    about: { "@id": ORGANIZATION_ID },
};

export default function ContactoPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Contacto", href: PATH },
            ]}
        >
            <JsonLd data={contactPageJsonLd} />

            <PageHero
                eyebrow="Contacto"
                title="Cuéntanos qué se te está escapando."
                intro="No es una cotización genérica. Queremos entender tu caso para decirte, con honestidad, si podemos ayudarte y cómo — o si no somos la opción correcta."
                facts={[
                    { value: "< 24 h hábiles", label: "Tiempo de respuesta" },
                    { value: "Colombia · LATAM", label: "Dónde trabajamos" },
                    { value: "Español", label: "Idioma" },
                ]}
            />

            <Section tone="surface">
                <SectionHeader
                    eyebrow="Canales"
                    title="Elige por dónde prefieres hablar."
                />
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
                <SectionHeader
                    eyebrow="Después de escribirnos"
                    title="Qué pasa cuando nos contactas."
                    intro="Sin llamadas de venta insistentes ni formularios que no llevan a ninguna parte. Tres pasos, y en cada uno decides si seguir."
                />
                <ol className={steps.steps}>
                    {nextSteps.map((step) => (
                        <li key={step.num} className={steps.step}>
                            <span className={steps.stepNum}>{step.num}</span>
                            <h3 className={steps.stepTitle}>{step.title}</h3>
                            <p className={steps.stepText}>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </Section>

            <Section tone="black" width="narrow">
                <SectionHeader
                    eyebrow="Antes de escribir"
                    title="Lo que más nos preguntan."
                    intro="Si tu duda es una de estas, la respuesta ya está publicada."
                />
                <ul className={faqStyles.list}>
                    {preContactQuestions.map((item) => (
                        <li key={item.id} className={faqStyles.item}>
                            <Link href={`/preguntas-frecuentes#${item.id}`} className={faqStyles.summary}>
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
