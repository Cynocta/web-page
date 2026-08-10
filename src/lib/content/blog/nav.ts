import { POST_CATEGORIES, POST_SLUGS, type PostCategory, type PostSlug } from "./types";

export { POST_SLUGS, POST_CATEGORIES };

/**
 * Short labels only.
 *
 * Same split as the service registry: navigation and filter chips import this
 * without pulling every article body into the bundle that renders them.
 */
export const postsEsNav: Record<PostSlug, string> = {
    "n8n-vs-make-vs-zapier": "n8n vs Make vs Zapier",
    "cuanto-cuesta-la-api-de-whatsapp-business": "Cuánto cuesta la API de WhatsApp",
    "chatbot-vs-agente-de-ia": "Chatbot vs agente de IA",
};

export const categoriesEsNav: Record<PostCategory, string> = {
    automatizacion: "Automatización",
    "inteligencia-artificial": "Inteligencia artificial",
    whatsapp: "WhatsApp",
};
