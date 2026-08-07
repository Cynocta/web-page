import type { Metadata } from "next";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import EmptyState from "@/components/ui/empty-state";

const PATH = "/blog";

const DESCRIPTION =
    "Guías y comparativas sobre automatización, chatbots de WhatsApp, agentes de IA y las herramientas que usamos para construirlos.";

export const metadata: Metadata = {
    title: "Blog",
    description: DESCRIPTION,
    alternates: { canonical: PATH },
    openGraph: {
        title: "Blog | Cynocta",
        description: DESCRIPTION,
        url: PATH,
    },
};

export default function BlogPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Blog", href: PATH },
            ]}
        >
            <PageHero
                eyebrow="Blog"
                title="Cómo funciona esto por dentro."
                intro="Guías técnicas y comparativas escritas desde la implementación real: qué herramienta elegir, qué cuesta de verdad y en qué se equivoca la mayoría al automatizar."
                secondary={{ label: "Ver servicios", href: "/servicios" }}
            />

            <Section tone="surface">
                <EmptyState
                    badge="Próximamente"
                    title="Todavía no hay artículos publicados."
                    body="Estamos escribiendo los primeros: comparativa entre n8n, Make y Zapier desde la experiencia de implementarlos; cuánto cuesta realmente la API de WhatsApp Business; y qué diferencia hay entre un chatbot y un agente de IA."
                    primary={{ label: "Ver preguntas frecuentes", href: "/preguntas-frecuentes" }}
                    secondary={{ label: "Escríbenos", href: "/contacto" }}
                />
            </Section>
        </PageShell>
    );
}
