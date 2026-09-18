import { SERVICE_SLUGS, type ServiceSlug } from "./types";

export { SERVICE_SLUGS };
export type { ServiceSlug };

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

/**
 * English URL slug for each service. The Spanish slug stays the identity used
 * everywhere in code; only the English path reads differently, so a search in
 * English matches the words in the URL.
 */
export const serviceSlugEn: Record<ServiceSlug, string> = {
    "paginas-web-que-convierten": "web-development",
    "software-a-medida": "custom-software",
    "automatizacion-de-procesos": "process-automation",
    "automatizaciones-n8n": "n8n-automation",
    "agentes-ia": "ai-agents",
    "chatbot-whatsapp": "whatsapp-chatbot",
    "integraciones-api": "api-integrations",
    "integracion-crm": "crm-integration",
    dashboards: "dashboards",
    "consultoria-tecnologica": "technology-consulting",
};

export const servicesEnNav: Record<ServiceSlug, string> = {
    "paginas-web-que-convierten": "Web development",
    "software-a-medida": "Custom software",
    "automatizacion-de-procesos": "Process automation",
    "automatizaciones-n8n": "n8n automation",
    "agentes-ia": "AI agents",
    "chatbot-whatsapp": "Chatbots",
    "integraciones-api": "API integrations",
    "integracion-crm": "CRM integration",
    dashboards: "Dashboards",
    "consultoria-tecnologica": "Technology consulting",
};
