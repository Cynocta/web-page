import type { BlogPost, PostSlug } from "../types";
import { chatbotVsAgenteIa } from "./chatbot-vs-agente-de-ia";
import { costoApiWhatsapp } from "./cuanto-cuesta-la-api-de-whatsapp-business";
import { n8nVsMakeVsZapier } from "./n8n-vs-make-vs-zapier";

/** One module per article, so no file grows past the point where it's navigable. */
export const postsEs: Record<PostSlug, BlogPost> = {
    "n8n-vs-make-vs-zapier": n8nVsMakeVsZapier,
    "cuanto-cuesta-la-api-de-whatsapp-business": costoApiWhatsapp,
    "chatbot-vs-agente-de-ia": chatbotVsAgenteIa,
};
