import type { Metadata } from "next";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import EmptyState from "@/components/ui/empty-state";
import UseCasesSection from "@/components/sections/use-cases";

const PATH = "/portafolio";

const DESCRIPTION =
    "Casos de uso de automatización con IA por sector: clínicas, inmobiliarias, e-commerce, educación y servicios profesionales.";

export const metadata: Metadata = {
    title: "Portafolio y casos de éxito",
    description: DESCRIPTION,
    alternates: { canonical: PATH },
    openGraph: {
        title: "Portafolio | Cynocta",
        description: DESCRIPTION,
        url: PATH,
    },
};

export default function PortafolioPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Portafolio", href: PATH },
            ]}
        >
            <PageHero
                eyebrow="Portafolio"
                title="Lo que construimos, por sector."
                intro="Estamos preparando los casos con cifras verificadas y el permiso de cada cliente para nombrarlo. Mientras tanto, aquí está el tipo de problema que resolvemos y cómo."
                primary={{ label: "Cuéntanos tu caso", href: "/contacto" }}
                secondary={{ label: "Ver servicios", href: "/servicios" }}
            />

            <UseCasesSection />

            <Section tone="surface">
                <EmptyState
                    badge="En preparación"
                    title="Los casos con nombre y cifras llegan pronto."
                    body="Publicar resultados exige dos cosas que llevan tiempo: datos medidos antes y después, y la autorización del cliente para identificarlo. Preferimos esperar a tenerlas que llenar esta página con testimonios anónimos que no puedes verificar."
                    primary={{ label: "Hablar con nosotros", href: "/contacto" }}
                    secondary={{ label: "Ver preguntas frecuentes", href: "/preguntas-frecuentes" }}
                />
            </Section>
        </PageShell>
    );
}
