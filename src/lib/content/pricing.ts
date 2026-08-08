import type { FaqItem } from "./faq";

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
 * Copy for the pricing page. Spanish only for now, like the service and
 * solution trees, so it claims no hreflang alternate.
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
