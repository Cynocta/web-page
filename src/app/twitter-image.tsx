import { renderOgImage } from "@/lib/og-image";

export const alt = "Cynocta: automatización con IA y chatbots de WhatsApp para negocios en LATAM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generic card for every page without an image of its own. */
export default function TwitterImage() {
    return renderOgImage({
        eyebrow: "Agencia de automatización con IA",
        title: "Automatización con IA y chatbots de WhatsApp para negocios",
        subtitle: "Agentes de IA, automatizaciones con n8n e integraciones con tu CRM, en LATAM.",
    });
}
