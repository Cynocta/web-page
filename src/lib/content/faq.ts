import type { Locale } from "./types";

export type FaqItem = {
    /** Stable slug — drives the anchor and the JSON-LD entity id. */
    id: string;
    question: string;
    /**
     * The direct answer, 40–60 words. Answer engines extract this verbatim, so
     * it leads with the answer itself and carries no sales language.
     */
    answer: string;
};

export type FaqPage = {
    tag: string;
    title: string;
    intro: string;
    items: FaqItem[];
    /** Closing prompt under the list. */
    ctaText: string;
    ctaLabel: string;
};

/**
 * Kept out of `Content` on purpose: this is a page of its own with its own
 * consumers (the route and the FAQPage schema), not part of the landing copy.
 */
export const faqContent: Record<Locale, FaqPage> = {
    es: {
        tag: "Preguntas frecuentes",
        title: "Lo que nos preguntan antes de contratar.",
        intro:
            "Respuestas directas, sin rodeos comerciales. Si tu duda no está aquí, escríbenos y la resolvemos.",
        items: [
            {
                id: "cuanto-cuesta",
                question: "¿Cuánto cuesta automatizar la atención de mi negocio?",
                answer:
                    "Un proyecto parte desde 750 USD para una web con captación, y desde 1.500 USD de implementación más 150 USD al mes cuando incluye un bot de WhatsApp con IA. El precio final depende del número de flujos, de las integraciones que necesites y del volumen de mensajes que maneja tu negocio.",
            },
            {
                id: "cuanto-tarda",
                question: "¿Cuánto tarda la implementación de un chatbot de WhatsApp?",
                answer:
                    "Entre dos y cuatro semanas en la mayoría de los casos. La primera semana se define el flujo conversacional y se conectan los sistemas; la segunda se entrena el bot con tu información real y se prueba. Si necesitas la API oficial de WhatsApp, la verificación de Meta añade entre 3 y 10 días.",
            },
            {
                id: "api-oficial-o-business",
                question: "¿Necesito la API oficial de WhatsApp o me sirve WhatsApp Business?",
                answer:
                    "WhatsApp Business basta si solo respondes conversaciones que inicia el cliente desde un único número. Necesitas la API oficial, WhatsApp Business Platform de Meta, si vas a enviar mensajes masivos, usar plantillas aprobadas, atender desde varios agentes a la vez o quieres el sello de cuenta verificada.",
            },
            {
                id: "ya-uso-crm",
                question: "¿Qué pasa si mi negocio ya usa un CRM?",
                answer:
                    "Se integra, no se reemplaza. Trabajamos sobre HubSpot, Pipedrive, Zoho y Salesforce mediante sus APIs, y usamos n8n o Make como capa de orquestación cuando hacen falta pasos intermedios. El bot escribe en el CRM que ya tienes, así que tu equipo no cambia de herramienta.",
            },
            {
                id: "suena-natural",
                question: "¿El bot puede sonar natural o se nota que es un robot?",
                answer:
                    "Suena natural porque no usa árboles de opciones, sino modelos de lenguaje como OpenAI o Claude con instrucciones y datos de tu negocio. Responde con tu tono y deriva a una persona cuando detecta que no puede resolver. Aun así recomendamos decir siempre que es un asistente.",
            },
            {
                id: "mantenimiento",
                question: "¿Qué mantenimiento requiere una automatización?",
                answer:
                    "Poco, pero no cero. Las APIs cambian, las plantillas de WhatsApp caducan y los flujos necesitan ajustes cuando cambia tu oferta. Los planes con suscripción incluyen monitoreo del servidor, actualizaciones y un ajuste mensual. Sin mantenimiento, una automatización se degrada en cuestión de meses.",
            },
            {
                id: "empezar-pequeno",
                question: "¿Puedo empezar con algo pequeño y escalar después?",
                answer:
                    "Sí, y es lo que recomendamos. El primer paso habitual es un solo flujo: la respuesta inicial y la calificación del prospecto. Una vez ese flujo funciona y hay datos reales, se añaden agendamiento, seguimiento y reportes. Cada etapa se cotiza por separado.",
            },
            {
                id: "chatbot-vs-agente",
                question: "¿Qué diferencia hay entre un chatbot y un agente de IA?",
                answer:
                    "Un chatbot sigue un guion: si el usuario dice A, responde B. Un agente de IA razona sobre el objetivo, decide qué herramienta usar y ejecuta acciones —consultar tu calendario, escribir en el CRM, cerrar una cita— sin que cada rama esté programada de antemano.",
            },
            {
                id: "pocos-mensajes",
                question: "¿Funciona para negocios con pocos mensajes al mes?",
                answer:
                    "Depende de cuánto vale cada cliente, no de cuántos mensajes recibes. Con 30 consultas al mes y un ticket alto, recuperar dos o tres que se perdían por responder tarde ya paga el sistema. Con ticket bajo y poco volumen, normalmente conviene empezar solo por la web.",
            },
            {
                id: "datos",
                question: "¿Qué pasa con mis datos y los de mis clientes?",
                answer:
                    "Los datos son tuyos. Cynocta actúa como encargado del tratamiento y tu negocio como responsable, conforme a la Ley 1581 de 2012 en Colombia. Las conversaciones se almacenan en la infraestructura que acordemos, incluido tu propio servidor, y no se usan para entrenar modelos.",
            },
            {
                id: "fuera-de-colombia",
                question: "¿Trabajan con negocios fuera de Colombia?",
                answer:
                    "Sí. Trabajamos en remoto con negocios de toda Latinoamérica y España, en español. Los precios de referencia están en dólares y se pueden pagar en pesos colombianos, euros o dólares. La diferencia horaria dentro de América no afecta al soporte.",
            },
            {
                id: "garantia",
                question: "¿Qué pasa si no funciona? ¿Hay garantía?",
                answer:
                    "Cada plan tiene un compromiso concreto y medible: la web publicada en dos semanas, o el bot respondiendo en menos de tres minutos todos los días. Si no se cumple, seguimos trabajando sin costo adicional hasta cumplirlo. No hay contratos de permanencia.",
            },
        ],
        ctaText: "¿Tu caso es distinto? Cuéntanoslo y te decimos con honestidad si podemos ayudarte.",
        ctaLabel: "Quiero resolverlo",
    },
    en: {
        tag: "Frequently asked questions",
        title: "What people ask us before hiring.",
        intro:
            "Direct answers, no sales detours. If your question isn't here, write to us and we'll sort it out.",
        items: [
            {
                id: "cuanto-cuesta",
                question: "How much does it cost to automate my customer service?",
                answer:
                    "A project starts from 750 USD for a lead-capturing website, and from 1,500 USD setup plus 150 USD per month when it includes an AI WhatsApp bot. The final figure depends on the number of flows, the integrations you need and the message volume your business handles.",
            },
            {
                id: "cuanto-tarda",
                question: "How long does a WhatsApp chatbot take to implement?",
                answer:
                    "Two to four weeks in most cases. The first week defines the conversation flow and connects your systems; the second trains the bot on your real information and tests it. If you need the official WhatsApp API, Meta's verification adds another 3 to 10 days.",
            },
            {
                id: "api-oficial-o-business",
                question: "Do I need the official WhatsApp API or is WhatsApp Business enough?",
                answer:
                    "WhatsApp Business is enough if you only reply to conversations customers start, from a single number. You need the official API, Meta's WhatsApp Business Platform, if you plan to send bulk messages, use approved templates, have several agents answering at once, or want the verified badge.",
            },
            {
                id: "ya-uso-crm",
                question: "What if my business already uses a CRM?",
                answer:
                    "We integrate with it, we don't replace it. We work on top of HubSpot, Pipedrive, Zoho and Salesforce through their APIs, using n8n or Make as an orchestration layer when intermediate steps are needed. The bot writes into the CRM you already have, so your team changes nothing.",
            },
            {
                id: "suena-natural",
                question: "Can the bot sound natural or is it obviously a robot?",
                answer:
                    "It sounds natural because it doesn't use option trees but language models such as OpenAI or Claude, with instructions and data from your business. It answers in your tone and hands over to a person when it detects it can't resolve something. We still recommend always disclosing it's an assistant.",
            },
            {
                id: "mantenimiento",
                question: "What maintenance does an automation need?",
                answer:
                    "Little, but not none. APIs change, WhatsApp templates expire and flows need adjusting when your offer changes. Subscription plans include server monitoring, updates and one monthly adjustment. Without maintenance, an automation degrades within months.",
            },
            {
                id: "empezar-pequeno",
                question: "Can I start small and scale later?",
                answer:
                    "Yes, and that's what we recommend. The usual first step is a single flow: the initial reply and lead qualification. Once that flow works and there is real data, scheduling, follow-up and reporting get added. Each stage is quoted separately.",
            },
            {
                id: "chatbot-vs-agente",
                question: "What's the difference between a chatbot and an AI agent?",
                answer:
                    "A chatbot follows a script: if the user says A, it replies B. An AI agent reasons about the goal, decides which tool to use and takes actions —checking your calendar, writing to the CRM, booking an appointment— without every branch being programmed in advance.",
            },
            {
                id: "pocos-mensajes",
                question: "Does it work for businesses with few messages per month?",
                answer:
                    "It depends on what each customer is worth, not on how many messages you get. With 30 enquiries a month and a high ticket, recovering two or three you were losing to slow replies already pays for the system. With a low ticket and low volume, starting with the website alone is usually wiser.",
            },
            {
                id: "datos",
                question: "What happens to my data and my customers' data?",
                answer:
                    "The data is yours. Cynocta acts as data processor and your business as controller, under Colombia's Law 1581 of 2012. Conversations are stored on whatever infrastructure we agree on, including your own server, and are never used to train models.",
            },
            {
                id: "fuera-de-colombia",
                question: "Do you work with businesses outside Colombia?",
                answer:
                    "Yes. We work remotely with businesses across Latin America and Spain, in Spanish. Reference prices are in US dollars and can be paid in Colombian pesos, euros or dollars. Time differences within the Americas don't affect support.",
            },
            {
                id: "garantia",
                question: "What if it doesn't work? Is there a guarantee?",
                answer:
                    "Every plan carries a concrete, measurable commitment: the website live in two weeks, or the bot replying in under three minutes every day. If that isn't met, we keep working at no extra cost until it is. There are no lock-in contracts.",
            },
        ],
        ctaText: "Is your case different? Tell us and we'll say honestly whether we can help.",
        ctaLabel: "I want to fix this",
    },
};
