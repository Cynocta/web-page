import type { FaqItem } from "./faq";
import type { Locale } from "./types";

/** A cell in the comparison matrix: included, not included, or a specific value. */
export type ComparisonValue = boolean | string;

export type ComparisonRow = {
    label: string;
    /** One per plan, in the same order as `content.plans.items`. */
    values: [ComparisonValue, ComparisonValue, ComparisonValue];
};

export type ComparisonGroup = { label: string; rows: ComparisonRow[] };

export type PlanDetail = {
    /** Matches `Plan.title` so the two datasets stay joinable. */
    title: string;
    audience: string;
    projectTypes: string[];
    deliverables: string[];
    support: string;
    timeline: string;
};

/**
 * Copy for the Spanish pricing page; the English one is `pricingPageEn`.
 *
 * Plan names, prices and features live in `content.plans` — the single source.
 * What lives here is everything the cards deliberately leave out.
 */
export const pricingPage = {
    metaTitle: "Precios y planes de automatización con IA",
    metaDescription:
        "Qué incluye cada plan, para quién es, entregables, soporte y tiempos de entrega. Comparación completa, proceso de contratación y preguntas frecuentes.",
    eyebrow: "Precios",
    heading: "Todo lo que recibes, antes de que preguntes.",
    intro:
        "Publicamos las cifras de partida y también lo que hay detrás: qué se entrega, en cuánto tiempo, con qué soporte y qué costes no son nuestros. Esconderlo solo alarga la conversación.",
    facts: [
        { value: "Desde 750 USD", label: "Proyecto inicial" },
        { value: "2–8 semanas", label: "Según alcance" },
        { value: "Sin permanencia", label: "Contratos" },
    ],

    audienceTitle: "Para quién es cada plan",
    audienceIntro:
        "Si dudas entre dos, casi siempre conviene el más pequeño: se puede ampliar, y así el gasto llega después del primer resultado.",

    details: [
        {
            title: "Presencia Profesional",
            audience:
                "Negocios que todavía no tienen una web que funcione, o que tienen una que no genera nada. Todavía no hay volumen de mensajes suficiente para justificar automatizar la atención.",
            projectTypes: ["Landing de captación", "Sitio corporativo", "Catálogo sin carrito"],
            deliverables: [
                "Sitio publicado y funcionando en tu dominio",
                "Código fuente y accesos a tu nombre",
                "Copy comercial escrito por nosotros",
                "Formulario de calificación conectado a WhatsApp",
                "Analítica y Search Console configurados",
                "Guía breve para editar textos",
            ],
            support: "30 días de ajustes incluidos tras la publicación.",
            timeline: "2 semanas desde la sesión de posicionamiento.",
        },
        {
            title: "Ventas Automáticas",
            audience:
                "Negocios que ya reciben consultas y pierden ventas por no responder a tiempo. Hay volumen suficiente para que un bot libere horas reales desde el primer mes.",
            projectTypes: [
                "Atención automatizada por WhatsApp",
                "Agendamiento y recordatorios",
                "Calificación de prospectos",
            ],
            deliverables: [
                "Todo lo del plan anterior",
                "Bot en producción, entrenado con tu información",
                "VPS dedicado con monitoreo y alertas",
                "Flujos conversacionales documentados",
                "Conexión con tu calendario",
                "Panel para revisar conversaciones",
            ],
            support: "WhatsApp directo, respuesta en menos de 3 horas hábiles. Un ajuste mensual al bot incluido.",
            timeline: "2 a 4 semanas. Si necesitas la API oficial, la verificación de Meta añade 3 a 10 días.",
        },
        {
            title: "Escala Inteligente",
            audience:
                "Negocios con varios canales, sistemas que no se hablan entre sí, o un equipo comercial al que hay que darle datos. Aquí el trabajo está en la orquestación, no en una pieza suelta.",
            projectTypes: [
                "Integración de varios sistemas",
                "Agentes de IA sobre datos propios",
                "Dashboards y reportes de conversión",
            ],
            deliverables: [
                "Todo lo de los planes anteriores",
                "CRM configurado con tu embudo real",
                "Integraciones con los sistemas que ya usas",
                "Reporte mensual de conversión",
                "Documentación técnica de la arquitectura",
                "Backups automáticos verificados",
            ],
            support: "Soporte prioritario y una llamada estratégica mensual 1:1.",
            timeline: "4 a 8 semanas, entregado por fases: cada una en producción antes de la siguiente.",
        },
    ] satisfies PlanDetail[],

    comparisonTitle: "Comparación completa",
    comparisonIntro:
        "Lo mismo que hay en las tarjetas, sin recortar. Si algo no aparece aquí, pregúntalo y lo añadimos.",

    comparison: [
        {
            label: "Entrega",
            rows: [
                { label: "Tiempo de entrega", values: ["2 semanas", "2–4 semanas", "4–8 semanas"] },
                { label: "Código fuente a tu nombre", values: [true, true, true] },
                { label: "Entrega por fases", values: [false, true, true] },
                { label: "Documentación técnica", values: [false, "Flujos", "Arquitectura completa"] },
            ],
        },
        {
            label: "Web",
            rows: [
                { label: "Sitio o landing de captación", values: [true, true, true] },
                { label: "Copy comercial escrito", values: [true, true, true] },
                { label: "Formulario de calificación", values: [true, true, true] },
                { label: "Analítica configurada", values: [true, true, true] },
            ],
        },
        {
            label: "Automatización",
            rows: [
                { label: "Bot de WhatsApp con IA", values: [false, true, true] },
                { label: "Agendamiento automático", values: [false, true, true] },
                { label: "Calificación de prospectos", values: [false, true, true] },
                { label: "Agentes de IA sobre tus datos", values: [false, false, true] },
                { label: "Automatizaciones entre sistemas", values: [false, "Básicas", "Avanzadas"] },
            ],
        },
        {
            label: "Datos y CRM",
            rows: [
                { label: "CRM configurado", values: [false, false, true] },
                { label: "Integraciones con tus sistemas", values: [false, "1 canal", "Múltiples"] },
                { label: "Reporte de conversión", values: [false, false, "Mensual"] },
            ],
        },
        {
            label: "Infraestructura y soporte",
            rows: [
                { label: "Servidor", values: ["Hosting estático", "VPS dedicado", "VPS premium"] },
                { label: "Backups automáticos", values: [false, false, true] },
                { label: "Canal de soporte", values: ["Correo", "WhatsApp directo", "Prioritario"] },
                { label: "Tiempo de respuesta", values: ["48 h hábiles", "< 3 h hábiles", "< 3 h prioritario"] },
                { label: "Ajustes incluidos", values: ["30 días", "1 al mes", "Según acuerdo"] },
                { label: "Llamada estratégica 1:1", values: [false, false, "Mensual"] },
            ],
        },
    ] satisfies ComparisonGroup[],

    processTitle: "Cómo se contrata",
    processIntro:
        "Cinco pasos, sin sorpresas. Nada se factura antes de que el alcance esté por escrito y aprobado.",
    process: [
        {
            num: "01",
            title: "Diagnóstico gratuito",
            description:
                "Media hora para entender qué se te está escapando. Si no somos la opción correcta, te lo decimos aquí.",
        },
        {
            num: "02",
            title: "Propuesta con alcance cerrado",
            description:
                "Qué se construye, qué no, en cuánto tiempo y por cuánto. Por escrito, para que no haya interpretaciones.",
        },
        {
            num: "03",
            title: "Anticipo y arranque",
            description:
                "50% al aprobar la propuesta. Empezamos por el flujo que más retorno tiene, no por el más vistoso.",
        },
        {
            num: "04",
            title: "Entrega por etapas",
            description:
                "Cada etapa sale a producción y se revisa contigo antes de pasar a la siguiente.",
        },
        {
            num: "05",
            title: "Publicación y traspaso",
            description:
                "El 50% restante contra entrega. Te dejamos accesos, documentación y a tu equipo sabiendo operarlo.",
        },
    ],

    howTitle: "Qué mueve el precio",
    howIntro:
        "Tres variables. Sabiendo cuáles son, puedes estimar por tu cuenta en qué rango cae tu caso antes de escribirnos.",
    factors: [
        {
            title: "Número de flujos",
            description:
                "Un bot que responde y agenda no cuesta lo mismo que uno que además consulta inventario, cobra y factura. Cada flujo añade diseño, integración y pruebas.",
        },
        {
            title: "Integraciones necesarias",
            description:
                "Conectar con un CRM que tiene API documentada es rápido. Con un sistema propio o un ERP antiguo, no. Lo revisamos antes de cotizar.",
        },
        {
            title: "Volumen de mensajes",
            description:
                "Afecta a la infraestructura, no a nuestro trabajo. Un negocio con 5.000 conversaciones al mes necesita un servidor distinto a uno con 200.",
        },
    ],

    extrasTitle: "Costes que no cobramos nosotros",
    extrasIntro:
        "Conviene tenerlos en cuenta desde el principio para que el presupuesto no se quede corto.",
    extras: [
        {
            title: "API oficial de WhatsApp",
            description:
                "Entre 50 y 75 USD al mes aproximadamente, y solo si necesitas mensajes masivos, plantillas aprobadas o cuenta verificada. Se paga a Meta, no a nosotros.",
        },
        {
            title: "Servidor",
            description:
                "Entre 6 y 40 USD al mes según volumen. Va incluido en los planes con suscripción; en proyecto único queda a tu nombre.",
        },
        {
            title: "Modelos de IA",
            description:
                "El consumo de OpenAI o Claude se factura por uso. En un negocio típico son unos pocos dólares al mes; te lo estimamos según tu volumen.",
        },
    ],

    faq: [
        {
            id: "por-que-desde",
            question: "¿Por qué los precios dicen «desde»?",
            answer:
                "Porque son un suelo, no una cotización cerrada. Dos negocios que piden «un bot de WhatsApp» pueden necesitar trabajos que difieren al triple. Publicar un precio fijo obligaría a inflarlo para cubrir el peor caso.",
        },
        {
            id: "formas-de-pago",
            question: "¿Cómo se paga?",
            answer:
                "La implementación se divide en dos: 50% al aprobar la propuesta y 50% contra entrega. La suscripción se cobra mensual y se puede cancelar avisando con un mes. Aceptamos pesos colombianos, dólares y euros.",
        },
        {
            id: "sin-permanencia",
            question: "¿Hay contrato de permanencia?",
            answer:
                "No. Si la suscripción deja de aportarte valor, la cancelas. Lo construido es tuyo: el código, los flujos y los datos se te entregan. Preferimos que te quedes porque funciona, no porque hay una cláusula.",
        },
        {
            id: "cambiar-de-plan",
            question: "¿Puedo empezar en un plan y subir después?",
            answer:
                "Sí, y es lo habitual. Cada plan incluye el anterior, así que ampliar es añadir sobre lo construido, no rehacerlo. Solo se cobra la diferencia de implementación del nuevo alcance.",
        },
        {
            id: "que-pasa-si-no-funciona",
            question: "¿Qué pasa si no funciona?",
            answer:
                "Cada plan tiene un compromiso concreto y medible: la web publicada en dos semanas, o el bot respondiendo en menos de tres minutos todos los días. Si no se cumple, seguimos trabajando sin costo adicional hasta cumplirlo.",
        },
        {
            id: "presupuesto-bajo",
            question: "¿Y si mi presupuesto no llega?",
            answer:
                "Te lo decimos en la primera conversación en vez de estirar el alcance. Muchas veces conviene empezar por un solo flujo, medir el retorno y crecer desde ahí. Y si no somos la opción correcta, también lo decimos.",
        },
    ] satisfies FaqItem[],

    ctaTitle: "Media hora y sabrás si esto es para ti",
    ctaBody:
        "Sin presentación comercial. Miramos tu caso, te decimos qué automatizar primero, qué no vale la pena todavía y en qué rango cae.",
    ctaLabel: "Agendar diagnóstico",
};

export type PricingPageContent = typeof pricingPage;

/**
 * English pricing page. Same prices, timelines and conditions as the Spanish
 * page; plan titles match `content.en.plans` so the two datasets stay joinable.
 */
export const pricingPageEn: PricingPageContent = {
    metaTitle: "AI automation pricing and plans",
    metaDescription:
        "What each plan includes, who it's for, deliverables, support and delivery times. Full comparison, how hiring works and frequently asked questions.",
    eyebrow: "Pricing",
    heading: "Everything you get, before you have to ask.",
    intro:
        "We publish our starting prices and what's behind them: what gets delivered, how fast, with what support and which costs aren't ours. Hiding it only makes the conversation longer.",
    facts: [
        { value: "From USD 750", label: "Starter project" },
        { value: "2–8 weeks", label: "Depending on scope" },
        { value: "No lock-in", label: "Contracts" },
    ],

    audienceTitle: "Who each plan is for",
    audienceIntro:
        "If you're torn between two, the smaller one is almost always the right call: it can grow, and that way the spending comes after the first result.",

    details: [
        {
            title: "Professional presence",
            audience:
                "Businesses that don't yet have a website that works, or have one that generates nothing. There isn't enough message volume yet to justify automating customer service.",
            projectTypes: ["Lead-capture landing page", "Company website", "Catalogue without checkout"],
            deliverables: [
                "Website live on your domain",
                "Source code and access in your name",
                "Sales copy written by us",
                "Qualification form connected to WhatsApp",
                "Analytics and Search Console set up",
                "A short guide to editing the text",
            ],
            support: "30 days of adjustments included after launch.",
            timeline: "2 weeks from the positioning session.",
        },
        {
            title: "Automatic sales",
            audience:
                "Businesses that already get enquiries and lose sales by not replying in time. There's enough volume for a bot to free up real hours from the first month.",
            projectTypes: [
                "Automated WhatsApp customer service",
                "Booking and reminders",
                "Lead qualification",
            ],
            deliverables: [
                "Everything in the previous plan",
                "Bot in production, trained on your information",
                "Dedicated VPS with monitoring and alerts",
                "Documented conversation flows",
                "Connection to your calendar",
                "A panel to review conversations",
            ],
            support: "Direct WhatsApp line, reply within 3 business hours. One monthly bot adjustment included.",
            timeline: "2 to 4 weeks. If you need the official API, Meta's verification adds 3 to 10 days.",
        },
        {
            title: "Smart scale",
            audience:
                "Businesses with several channels, systems that don't talk to each other, or a sales team that needs data. Here the work is in the orchestration, not in a single piece.",
            projectTypes: [
                "Integration of several systems",
                "AI agents on your own data",
                "Conversion dashboards and reports",
            ],
            deliverables: [
                "Everything in the previous plans",
                "CRM configured with your real pipeline",
                "Integrations with the systems you already use",
                "Monthly conversion report",
                "Technical documentation of the architecture",
                "Verified automatic backups",
            ],
            support: "Priority support and a monthly 1:1 strategy call.",
            timeline: "4 to 8 weeks, delivered in phases: each one live before the next starts.",
        },
    ],

    comparisonTitle: "Full comparison",
    comparisonIntro:
        "The same as the cards, without cutting anything. If something isn't listed, ask and we'll add it.",

    comparison: [
        {
            label: "Delivery",
            rows: [
                { label: "Delivery time", values: ["2 weeks", "2–4 weeks", "4–8 weeks"] },
                { label: "Source code in your name", values: [true, true, true] },
                { label: "Phased delivery", values: [false, true, true] },
                { label: "Technical documentation", values: [false, "Flows", "Full architecture"] },
            ],
        },
        {
            label: "Website",
            rows: [
                { label: "Website or lead-capture landing page", values: [true, true, true] },
                { label: "Sales copy written", values: [true, true, true] },
                { label: "Qualification form", values: [true, true, true] },
                { label: "Analytics set up", values: [true, true, true] },
            ],
        },
        {
            label: "Automation",
            rows: [
                { label: "AI WhatsApp bot", values: [false, true, true] },
                { label: "Automatic booking", values: [false, true, true] },
                { label: "Lead qualification", values: [false, true, true] },
                { label: "AI agents on your data", values: [false, false, true] },
                { label: "Automations between systems", values: [false, "Basic", "Advanced"] },
            ],
        },
        {
            label: "Data and CRM",
            rows: [
                { label: "CRM configured", values: [false, false, true] },
                { label: "Integrations with your systems", values: [false, "1 channel", "Multiple"] },
                { label: "Conversion report", values: [false, false, "Monthly"] },
            ],
        },
        {
            label: "Infrastructure and support",
            rows: [
                { label: "Server", values: ["Static hosting", "Dedicated VPS", "Premium VPS"] },
                { label: "Automatic backups", values: [false, false, true] },
                { label: "Support channel", values: ["Email", "Direct WhatsApp", "Priority"] },
                { label: "Response time", values: ["48 business hours", "< 3 business hours", "< 3 h, priority"] },
                { label: "Adjustments included", values: ["30 days", "1 a month", "As agreed"] },
                { label: "1:1 strategy call", values: [false, false, "Monthly"] },
            ],
        },
    ],

    processTitle: "How hiring works",
    processIntro:
        "Five steps, no surprises. Nothing is invoiced before the scope is in writing and approved.",
    process: [
        {
            num: "01",
            title: "Free diagnosis",
            description:
                "Half an hour to understand what's slipping through. If we're not the right option, we tell you here.",
        },
        {
            num: "02",
            title: "Proposal with a fixed scope",
            description:
                "What gets built, what doesn't, how long it takes and what it costs. In writing, so there's no room for interpretation.",
        },
        {
            num: "03",
            title: "Deposit and kick-off",
            description:
                "50% when you approve the proposal. We start with the workflow that returns the most, not the flashiest one.",
        },
        {
            num: "04",
            title: "Delivery in stages",
            description:
                "Each stage goes live and is reviewed with you before moving to the next.",
        },
        {
            num: "05",
            title: "Launch and handover",
            description:
                "The remaining 50% on delivery. We leave you access, documentation and a team that knows how to run it.",
        },
    ],

    howTitle: "What drives the price",
    howIntro:
        "Three variables. Knowing them, you can estimate on your own which range your case falls into before writing to us.",
    factors: [
        {
            title: "Number of workflows",
            description:
                "A bot that answers and books doesn't cost the same as one that also checks inventory, takes payments and invoices. Each workflow adds design, integration and testing.",
        },
        {
            title: "Integrations required",
            description:
                "Connecting to a CRM with a documented API is quick. With an in-house system or an old ERP, it isn't. We check before quoting.",
        },
        {
            title: "Message volume",
            description:
                "It affects the infrastructure, not our work. A business with 5,000 conversations a month needs a different server from one with 200.",
        },
    ],

    extrasTitle: "Costs we don't charge",
    extrasIntro:
        "Worth accounting for from the start so the budget doesn't fall short.",
    extras: [
        {
            title: "Official WhatsApp API",
            description:
                "Roughly USD 50 to 75 a month, and only if you need bulk messages, approved templates or a verified account. It's paid to Meta, not to us.",
        },
        {
            title: "Server",
            description:
                "Between USD 6 and 40 a month depending on volume. Included in subscription plans; on a one-off project it stays in your name.",
        },
        {
            title: "AI models",
            description:
                "OpenAI or Claude usage is billed by consumption. For a typical business it's a few dollars a month; we estimate it from your volume.",
        },
    ],

    faq: [
        {
            id: "por-que-desde",
            question: "Why do the prices say \"from\"?",
            answer:
                "Because they're a floor, not a closed quote. Two businesses asking for \"a WhatsApp bot\" can need jobs that differ threefold. Publishing a fixed price would mean inflating it to cover the worst case.",
        },
        {
            id: "formas-de-pago",
            question: "How do I pay?",
            answer:
                "Implementation is split in two: 50% when you approve the proposal and 50% on delivery. The subscription is billed monthly and can be cancelled with one month's notice. We accept Colombian pesos, US dollars and euros.",
        },
        {
            id: "sin-permanencia",
            question: "Is there a minimum contract term?",
            answer:
                "No. If the subscription stops adding value, you cancel it. What we built is yours: the code, the workflows and the data are handed over. We'd rather you stay because it works, not because of a clause.",
        },
        {
            id: "cambiar-de-plan",
            question: "Can I start on one plan and move up later?",
            answer:
                "Yes, and that's the usual path. Each plan includes the previous one, so upgrading means building on what exists, not redoing it. You only pay the implementation difference for the new scope.",
        },
        {
            id: "que-pasa-si-no-funciona",
            question: "What if it doesn't work?",
            answer:
                "Each plan has a concrete, measurable commitment: the website live in two weeks, or the bot replying in under three minutes every day. If it isn't met, we keep working at no extra cost until it is.",
        },
        {
            id: "presupuesto-bajo",
            question: "What if my budget doesn't stretch that far?",
            answer:
                "We tell you in the first conversation instead of stretching the scope. It often makes sense to start with a single workflow, measure the return and grow from there. And if we're not the right option, we say so too.",
        },
    ],

    ctaTitle: "Half an hour and you'll know if this is for you",
    ctaBody:
        "No sales pitch. We look at your case and tell you what to automate first, what isn't worth it yet and which range it falls into.",
    ctaLabel: "Book a diagnosis",
};

export const pricingPageByLocale: Record<Locale, PricingPageContent> = {
    es: pricingPage,
    en: pricingPageEn,
};
