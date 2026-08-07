/**
 * Copy for the corporate homepage sections that don't exist elsewhere.
 *
 * The landing's own sections (pains, cost, plans, form) keep living in the
 * bilingual `Content` object; these are Spanish-only for now, like the service
 * pages, and are composed into the home by the page itself.
 */

export const benefits = {
    eyebrow: "Por qué Cynocta",
    title: "Tecnología que se nota en la operación, no en la factura.",
    intro:
        "No vendemos herramientas ni horas. Entregamos sistemas que hacen un trabajo concreto y se pueden medir desde la primera semana.",
    items: [
        {
            num: "01",
            title: "Respuesta en segundos",
            description:
                "El primero que contesta se lleva la venta. Tus canales responden al instante a cualquier hora, también cuando tu equipo no está.",
        },
        {
            num: "02",
            title: "Menos trabajo repetitivo",
            description:
                "Copiar datos, enviar recordatorios, armar reportes. Todo eso deja de depender de que alguien se acuerde de hacerlo.",
        },
        {
            num: "03",
            title: "Todo medido",
            description:
                "De dónde vienen los clientes, en qué punto se caen y cuánto tarda cerrar. Sin datos, cualquier mejora es una opinión.",
        },
        {
            num: "04",
            title: "Sin quedar atados",
            description:
                "Construimos sobre herramientas estándar y código abierto. Si mañana quieres llevártelo o cambiar de proveedor, puedes.",
        },
    ],
};

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
