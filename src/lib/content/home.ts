/**
 * Copy for the corporate homepage sections that don't exist elsewhere.
 *
 * The landing's own sections (pains, cost, plans, form) keep living in the
 * bilingual `Content` object. The rest is below: the named exports are the
 * Spanish data other pages already read (/precios, /portafolio, /nosotros), and
 * `homeContent` is what the home itself renders, per locale.
 */

import type { FaqItem } from "./faq";
import { foundersSection } from "./founders";
import { homeEn } from "./home-en";
import type { HomeContent } from "./home-types";
import type { ServiceIcon, ServiceSlug } from "./services/types";
import type { Locale } from "./types";

export type { HomeContent } from "./home-types";

/**
 * How the ten services are grouped on the homepage.
 *
 * The home used to render the whole catalogue: ten identical cards, three and a
 * half screens on a phone, all claiming the same visual weight. Grouping them
 * puts four objects in front of the reader instead of forty; the services
 * themselves are unchanged and every one of them still links out from here.
 *
 * Only slugs live here — titles, summaries and icons are read from the service
 * registry at render time, so this never drifts from the real catalogue.
 */
export const serviceFamilies: Array<{
    title: string;
    summary: string;
    icon: ServiceIcon;
    slugs: ServiceSlug[];
}> = [
    {
        title: "Conversación y captación",
        summary:
            "Atender, calificar y agendar 24/7 en el canal donde tus clientes ya te escriben.",
        icon: "chat",
        slugs: ["chatbot-whatsapp", "agentes-ia"],
    },
    {
        title: "Automatización de procesos",
        summary:
            "Que el trabajo repetitivo deje de depender de que alguien se acuerde de hacerlo.",
        icon: "flow",
        slugs: ["automatizacion-de-procesos", "automatizaciones-n8n", "integraciones-api"],
    },
    {
        title: "Web y software",
        summary:
            "Estructura comercial y velocidad real, y software propio cuando nada del mercado encaja.",
        icon: "web",
        slugs: ["paginas-web-que-convierten", "software-a-medida"],
    },
    {
        title: "Datos y decisión",
        summary: "Los números que usas para decidir, en un sitio y actualizados solos.",
        icon: "kpi",
        slugs: ["dashboards", "integracion-crm", "consultoria-tecnologica"],
    },
];

export const technologies = {
    eyebrow: "Tecnologías",
    title: "El stack con el que trabajamos.",
    intro:
        "Herramientas maduras y documentadas, elegidas por lo que resuelven y no por moda. Todo lo que construimos queda a tu nombre.",
    groups: [
        {
            label: "Inteligencia artificial",
            tools: ["OpenAI", "Claude", "LangGraph", "Vectorize"],
        },
        {
            label: "Automatización",
            tools: ["n8n", "Make", "Zapier", "Activepieces"],
        },
        {
            label: "Desarrollo web",
            tools: ["Next.js", "React", "TypeScript", "Tailwind"],
        },
        {
            label: "Datos e infraestructura",
            tools: ["Supabase", "PostgreSQL", "Docker", "Vercel"],
        },
        {
            label: "Canales y CRM",
            tools: ["WhatsApp Business Platform", "Twilio", "HubSpot", "Pipedrive"],
        },
    ],
};

export const useCases = {
    eyebrow: "Casos de uso",
    title: "Cómo se aplica en cada sector.",
    intro:
        "El problema de fondo se repite —llegan consultas y no se atienden a tiempo—, pero lo que hay que automatizar cambia según el negocio.",
    items: [
        {
            sector: "Clínicas y consultorios",
            challenge: "Agendas que se llenan por teléfono y huecos que nadie rellena.",
            solution:
                "Agendamiento por WhatsApp con confirmación y recordatorio automático, más reprogramación sin llamadas.",
        },
        {
            sector: "Inmobiliarias",
            challenge: "Muchos interesados, pocos calificados, y visitas que se caen.",
            solution:
                "Prefiltrado de prospectos por presupuesto y zona antes de que un asesor invierta tiempo, con seguimiento automático.",
        },
        {
            sector: "E-commerce",
            challenge: "Carritos abandonados y consultas de postventa que saturan al equipo.",
            solution:
                "Recuperación automática de carrito, seguimiento de pedidos y respuestas de postventa conectadas al inventario.",
        },
        {
            sector: "Educación",
            challenge: "Campañas que traen interesados que se enfrían antes de matricularse.",
            solution:
                "Respuesta inmediata con información de programas y precios, y derivación al asesor solo cuando hay intención real.",
        },
        {
            sector: "Servicios profesionales",
            challenge: "Consultas que exigen criterio y tiempo que se va en filtrar.",
            solution:
                "Calificación inicial estructurada y agendamiento de la primera reunión únicamente con quien encaja.",
        },
    ],
};

/**
 * Questions for the homepage FAQ block.
 *
 * Deliberately different from the twelve on /preguntas-frecuentes: those are
 * asked while choosing a provider (price, timeline, guarantee); these are asked
 * earlier, while deciding whether to automate at all. Two URLs carrying the
 * same FAQPage entities would compete with each other.
 *
 * Every answer opens with the answer, in plain language — this is the passage
 * an answer engine lifts — and makes no promise the rest of the site doesn't.
 */
const homeFaqEs: FaqItem[] = [
    {
        id: "por-donde-empiezo",
        question: "¿Por dónde empiezo si nunca he automatizado nada en mi negocio?",
        answer:
            "Por el punto donde hoy se pierden ventas, que casi siempre es la primera respuesta. El primer proyecto habitual es un solo flujo: contestar al instante por WhatsApp y calificar al prospecto. Cuando ese flujo funciona y hay datos reales, se añaden agendamiento, seguimiento y reportes.",
    },
    {
        id: "que-se-puede-automatizar",
        question: "¿Qué se puede automatizar en una pyme?",
        answer:
            "Todo lo repetitivo que sigue una regla clara: responder consultas frecuentes, calificar prospectos, agendar y confirmar citas, recuperar carritos abandonados, pasar datos de un formulario al CRM, enviar recordatorios y generar reportes. Lo que exige criterio o negociación no se automatiza; se le quita el trabajo manual alrededor.",
    },
    {
        id: "tiempo-de-mi-equipo",
        question: "¿Cuánto tiempo de mi equipo exige un proyecto de automatización?",
        answer:
            "Poco, y concentrado al principio. Hace falta una sesión de diagnóstico, las preguntas reales que reciben tus clientes y acceso a las herramientas que ya usas. La construcción, las pruebas y la conexión entre sistemas las hace el equipo de implementación, sin ocupar al tuyo.",
    },
    {
        id: "sin-venta-online",
        question: "¿Sirve automatizar si mi negocio no vende por internet?",
        answer:
            "Sí, porque lo que se automatiza es la conversación, no la venta. Una clínica, un taller o una inmobiliaria cierran por WhatsApp o por teléfono, y ahí es donde se pierden citas. El sistema atiende, filtra y agenda; el cierre sigue siendo presencial.",
    },
    {
        id: "agencia-o-freelance",
        question: "¿Qué diferencia hay entre contratar una agencia y un freelance de n8n?",
        answer:
            "Un freelance suele entregar el flujo; una agencia responde por el sistema después. La diferencia práctica aparece con el tiempo: monitoreo del servidor, cambios en las APIs de WhatsApp u OpenAI y alguien disponible cuando algo falla. Sin mantenimiento, una automatización se degrada en meses.",
    },
    {
        id: "cambiar-mi-web",
        question: "¿Necesito cambiar mi página web para automatizar la atención?",
        answer:
            "No. Un chatbot de WhatsApp o un agente de IA funcionan con la web que ya tienes, e incluso sin web. Conviene rehacerla solo cuando la página es la fuga: si recibe visitas y no genera consultas, automatizar la respuesta no arregla nada.",
    },
    {
        id: "como-se-mide",
        question: "¿Cómo sé si una automatización está funcionando?",
        answer:
            "Por cuatro cifras que el propio sistema registra: cuántas consultas entran, cuántas se responden en menos de cinco minutos, cuántas terminan agendadas y cuántas cierran. Lo ideal es anotar esas cifras antes de implementar, para comparar contra un punto de partida real y no contra una impresión.",
    },
];

const homeEs: HomeContent = {
    services: {
        eyebrow: "Servicios",
        title: "Chatbots de WhatsApp, agentes de IA y automatización a medida",
        intro: "Cuatro frentes que se contratan por separado o se combinan. La mayoría de los proyectos empieza por uno y crece desde ahí.",
        toggleLabel: "Ver {n} servicios",
        allLabel: "Ver los {n} servicios en detalle",
        families: serviceFamilies,
    },
    demo: {
        eyebrow: "Así funciona",
        title: "Un mensaje a las 21:47. Mira lo que pasa sin que nadie del equipo lo toque.",
        intro: "Un ejemplo de flujo para una clínica dental. El mismo sistema se adapta a una inmobiliaria, una tienda online o una academia: cambian las preguntas, no la lógica.",
        scenario: "Ejemplo · Clínica dental",
        progressLabel: "Paso {n} de {total}",
        chatTitle: "Clínica · WhatsApp",
        chatStatus: "en línea",
        systemTitle: "Tu sistema",
        steps: [
            {
                time: "21:47",
                title: "Llega la consulta",
                body: "Un paciente escribe por WhatsApp fuera de horario. Sin automatización, esa consulta espera hasta mañana, y para entonces muchas veces ya eligió a otro.",
            },
            {
                time: "21:47",
                title: "Respuesta en segundos",
                body: "El asistente contesta en 4 segundos con la información de tu negocio y en tu tono. El primero que responde se lleva la venta, también cuando tu equipo no está.",
            },
            {
                time: "21:48",
                title: "Califica la consulta",
                body: "Pregunta lo que preguntaría tu recepción —primera visita, urgencia, horario— y clasifica al paciente según su intención real antes de que alguien invierta tiempo.",
            },
            {
                time: "21:49",
                title: "Agenda y registra solo",
                body: "Ofrece horarios reales del calendario, confirma la cita y crea la ficha en tu CRM. Copiar datos o enviar recordatorios deja de depender de que alguien se acuerde.",
            },
            {
                time: "08:00",
                title: "Tu equipo llega con todo listo",
                body: "Resumen del día, recordatorio automático al paciente y cada paso medido: de dónde vino, cuánto tardó la respuesta y si terminó en cita. Sin datos, cualquier mejora es una opinión.",
            },
        ],
        messages: [
            { id: "m1", from: "client", text: "Hola, ¿tienen cita esta semana para una limpieza?", time: "21:47", step: 0 },
            { id: "m2", from: "bot", text: "¡Hola! Sí, tenemos disponibilidad. ¿Es tu primera visita con nosotros?", time: "21:47", step: 1 },
            { id: "m3", from: "client", text: "Sí, primera vez. Y me molesta un poco una muela.", time: "21:48", step: 2 },
            { id: "m4", from: "bot", text: "Entendido, lo marco como prioritario. ¿Te sirve mañana a las 16:00 o el jueves a las 10:00?", time: "21:48", step: 2 },
            { id: "m5", from: "client", text: "El jueves a las 10.", time: "21:49", step: 3 },
            { id: "m6", from: "bot", text: "Listo: jueves 10:00. Te envío un recordatorio el miércoles. ✓", time: "21:49", step: 3 },
        ],
        events: [
            { id: "e1", label: "Consulta recibida", detail: "WhatsApp · fuera de horario", step: 0 },
            { id: "e2", label: "Respuesta enviada", detail: "4 segundos", step: 1 },
            { id: "e3", label: "Paciente calificado", detail: "Primera visita · prioridad alta", step: 2 },
            { id: "e4", label: "Cita agendada", detail: "Jueves 10:00 · calendario", step: 3 },
            { id: "e5", label: "Ficha creada en el CRM", detail: "Datos y conversación completa", step: 3 },
            { id: "e6", label: "Equipo notificado", detail: "Resumen diario a las 08:00", step: 4 },
        ],
        metrics: [
            { label: "Primera respuesta", value: "4 s" },
            { label: "Datos copiados a mano", value: "0" },
            { label: "Pasos medidos", value: "6/6" },
        ],
        footnote: "Construido sobre herramientas estándar como n8n, la API oficial de WhatsApp y el CRM que ya usas. Si mañana quieres llevártelo o cambiar de proveedor, puedes.",
        linkLabel: "Cómo trabajamos",
        prevLabel: "Paso anterior",
        nextLabel: "Paso siguiente",
        goToLabel: "Ir al paso {n}: {title}",
    },
    technologies: { ...technologies, linkLabel: "Ver cómo lo aplicamos" },
    useCases: {
        ...useCases,
        sectorLabel: "Sector",
        problemLabel: "El problema",
        solutionLabel: "Lo que implementamos",
        linkLabel: "Ver todas las soluciones",
    },
    founders: {
        eyebrow: foundersSection.eyebrow,
        title: foundersSection.title,
        intro: foundersSection.intro,
        profilesPendingLabel: "Perfiles próximamente",
        linkLabel: "Conoce a Cynocta",
        linkedinLabel: "LinkedIn de {name}",
        githubLabel: "GitHub de {name}",
    },
    faq: {
        eyebrow: "Preguntas frecuentes",
        title: "Preguntas antes de automatizar",
        intro: "Respuestas directas a lo que más se pregunta cuando alguien todavía está decidiendo si automatizar.",
        items: homeFaqEs,
        moreLabel: "Ver las {n} preguntas frecuentes",
        moreHref: "/preguntas-frecuentes",
    },
};

export const homeContent: Record<Locale, HomeContent> = { es: homeEs, en: homeEn };
