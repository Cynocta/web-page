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
    "software-a-medida": "Software a medida",
    "automatizacion-de-procesos": "Automatización de procesos",
    "automatizaciones-n8n": "Automatizaciones con n8n",
    "agentes-ia": "Agentes de IA",
    "chatbot-whatsapp": "Chatbots",
    "integraciones-api": "Integraciones con APIs",
    "integracion-crm": "Integración con CRM",
    dashboards: "Dashboards",
    "consultoria-tecnologica": "Consultoría tecnológica",
};
