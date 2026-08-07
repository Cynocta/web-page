import { SERVICE_SLUGS, type ServiceSlug } from "./types";

export { SERVICE_SLUGS };

/**
 * Short labels only.
 *
 * Lives apart from the full service copy so navigation can import it without
 * pulling the entire service dataset into every bundle that renders a menu.
 */
export const servicesEsNav: Record<ServiceSlug, string> = {
    "paginas-web-que-convierten": "Desarrollo web",
    "automatizacion-de-procesos": "Automatización",
    "agentes-ia": "Inteligencia artificial",
    "integracion-crm": "Integraciones",
    "chatbot-whatsapp": "Chatbots",
};
