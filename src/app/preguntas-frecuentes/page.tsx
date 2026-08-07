import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import FaqSection from "@/components/sections/faq";
import { JsonLd } from "@/components/structured-data";
import { faqContent } from "@/lib/content";
import { faqJsonLd } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";

const PATH = "/preguntas-frecuentes";

export const metadata: Metadata = {
    title: "Preguntas frecuentes sobre automatización con IA",
    description:
        "Precios, plazos, API de WhatsApp, integración con CRM, mantenimiento y garantías. Respuestas directas sobre automatizar la atención de tu negocio.",
    alternates: {
        canonical: PATH,
    },
    openGraph: {
        title: "Preguntas frecuentes | Cynocta",
        description:
            "Precios, plazos, API de WhatsApp, integración con CRM, mantenimiento y garantías. Respuestas directas sobre automatizar la atención de tu negocio.",
        url: PATH,
    },
};

export default function PreguntasFrecuentesPage() {
    return (
        <div className="cyn-page">
            <JsonLd data={faqJsonLd("es", `${siteUrl}${PATH}`)} />
            <Navigation />

            <main>
                <FaqSection faq={faqContent.es} ctaHref="/#formulario" />
            </main>

            <Footer />
        </div>
    );
}
