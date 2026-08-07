import type { Metadata } from "next";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import LeadFormSection from "@/components/sections/lead-form";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { buildWhatsappLink, contactEmail, contactPhone, instagramUrl } from "@/lib/site-data";
import s from "@/components/sections/contact-page.module.css";

const PATH = "/contacto";

const DESCRIPTION =
    "Habla con Cynocta por WhatsApp, correo o el formulario de diagnóstico. Respondemos en menos de 24 horas hábiles desde Colombia, en remoto para toda LATAM.";

export const metadata: Metadata = {
    title: "Contacto",
    description: DESCRIPTION,
    alternates: { canonical: PATH },
    openGraph: {
        title: "Contacto | Cynocta",
        description: DESCRIPTION,
        url: PATH,
    },
};

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

export default function ContactoPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Contacto", href: PATH },
            ]}
        >
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
        </PageShell>
    );
}
