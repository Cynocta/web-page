import type { Metadata } from "next";
import FaqPageBody from "@/components/pages/faq-page";
import { alternatesFor } from "@/lib/i18n/routes";

const DESCRIPTION =
    "Precios, plazos, API de WhatsApp, integración con CRM, mantenimiento y garantías. Respuestas directas sobre automatizar la atención de tu negocio.";

export const metadata: Metadata = {
    title: "Preguntas frecuentes sobre automatización con IA",
    description: DESCRIPTION,
    alternates: alternatesFor("faq", "es"),
    openGraph: {
        title: "Preguntas frecuentes | Cynocta",
        description: DESCRIPTION,
        url: alternatesFor("faq", "es").canonical,
    },
};

export default function PreguntasFrecuentesPage() {
    return <FaqPageBody locale="es" />;
}
