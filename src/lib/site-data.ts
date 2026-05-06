export const siteName = "Cynocta";
export const siteDescription =
    "Cynocta ayuda a negocios y empresas a crecer con automatizacion comercial, paginas web de alto rendimiento y sistemas digitales orientados a conversion.";
export const contactPhone = "+57 305 2580874";
export const contactEmail = "cynoctaadmin@gmail.com";
export const instagramUrl = "https://www.instagram.com/cynocta_ai/?utm_source=ig_web_button_share_sheet";
const fallbackSiteUrl = "https://cynocta.com";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (() => {
    if (!rawSiteUrl) {
        return fallbackSiteUrl;
    }

    try {
        return new URL(rawSiteUrl).origin;
    } catch {
        return fallbackSiteUrl;
    }
})();

export const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Planes", href: "#planes" },
];

export type ServiceKind = "web" | "chat" | "ops" | "kpi";

export type Service = {
    title: string;
    description: string;
    tags: string[];
    kind: ServiceKind;
};

export const services: Service[] = [
    {
        title: "Web que convierte",
        description:
            "Landing pages y sitios con estructura comercial real, disenados para generar leads y cerrar.",
        tags: ["Diseno", "Copy", "Conversion"],
        kind: "web",
    },
    {
        title: "Automatizacion de conversaciones",
        description:
            "Flujos para WhatsApp y otros canales que filtran prospectos, responden rapido y derivan automaticamente.",
        tags: ["WhatsApp", "Calificacion", "Seguimiento"],
        kind: "chat",
    },
    {
        title: "Operacion centralizada",
        description:
            "Conectamos herramientas y procesos para que todo funcione en un sistema coherente y accionable.",
        tags: ["CRM", "Integracion", "Flujos"],
        kind: "ops",
    },
    {
        title: "Reportes accionables",
        description:
            "Panel de conversion, embudo por etapas y metricas para optimizar donde mas impacta.",
        tags: ["Dashboard", "Embudo", "KPIs"],
        kind: "kpi",
    },
];

export type ProcessStep = {
    num: string;
    title: string;
    description: string;
};

export const processSteps: ProcessStep[] = [
    {
        num: "01",
        title: "Diagnostico",
        description:
            "Detectamos cuellos de botella en captacion, respuesta y seguimiento en una sesion express.",
    },
    {
        num: "02",
        title: "Propuesta por etapas",
        description:
            "Plan realista con entregables rapidos para que veas resultados desde el inicio.",
    },
    {
        num: "03",
        title: "Implementacion guiada",
        description:
            "Construimos web, automatizaciones e integraciones con foco en simplicidad operativa.",
    },
    {
        num: "04",
        title: "Optimizacion continua",
        description:
            "Medimos conversion y ajustamos mensajes, flujos y ofertas para escalar resultados.",
    },
];

export type Plan = {
    plan: string;
    title: string;
    description: string;
    uniquePayment: string | null;
    delivery: string | null;
    monthlySubscription: string | null;
    disclaimer?: string | null;
    badge: string | null;
    featured: boolean;
    features: Array<{ label: string; active: boolean }>;
    guaranteeTitle: string;
    guaranteeText: string;
    whatsappText: string;
};

export const plans: Plan[] = [
    {
        plan: "PLAN 1",
        title: "Presencia Profesional",
        description: "Para negocios que aún no tienen presencia digital",
        uniquePayment: "$990.000",
        delivery: "Entrega en 2 semanas",
        monthlySubscription: null,
        disclaimer: null,
        badge: null,
        featured: false,
        features: [
            { label: "Web profesional lista para vender", active: true },
            { label: "Formulario + CTA WhatsApp", active: true },
            { label: "Copy comercial optimizado", active: true },
            { label: "Responsive y rapida", active: true },
            { label: "Automatizaciones", active: false },
            { label: "CRM y reportes", active: false },
        ],
        guaranteeTitle: "Nuestro compromiso",
        guaranteeText:
            "Tu web lista y funcionando en 2 semanas. Si tienes algún ajuste, lo resolvemos rápidamente.",
        whatsappText: "Hola, me interesa el plan Presencia Profesional",
    },
    {
        plan: "PLAN 2",
        title: "Ventas Automáticas",
        description: "Para negocios que pierden ventas por no responder a tiempo",
        uniquePayment: "$1.490.000",
        delivery: null,
        monthlySubscription: "$197.000",
        disclaimer: "No incluye costos de WhatsApp API oficial (aprox $200.000 - $300.000 COP/mes)",
        badge: "MAS SOLICITADO",
        featured: true,
        features: [
            { label: "Todo el plan 1 incluido", active: true },
            { label: "Bot WhatsApp que atiende 24/7", active: true },
            { label: "Respuestas automáticas personalizadas", active: true },
            { label: "VPS dedicado — estabilidad garantizada", active: true },
            { label: "Soporte directo por WhatsApp", active: true },
            { label: "1 ajuste mensual al bot incluido", active: true },
        ],
        guaranteeTitle: "Nuestro compromiso",
        guaranteeText:
            "Tu bot responde clientes en menos de 3 minutos, todos los días. Y si necesitas algo, nosotros respondemos en menos de 3 horas por WhatsApp.",
        whatsappText: "Hola, me interesa el plan Ventas Automáticas",
    },
    {
        plan: "PLAN 3",
        title: "Escala Inteligente",
        description: "Para escalar ventas con procesos, datos y seguimiento",
        uniquePayment: "$3.200.000",
        delivery: null,
        monthlySubscription: "$397.000",
        disclaimer: "No incluye costos de WhatsApp API oficial (aprox $200.000 - $300.000 COP/mes)",
        badge: null,
        featured: false,
        features: [
            { label: "Todo el plan 2 incluido", active: true },
            { label: "CRM para seguimiento de clientes", active: true },
            { label: "Reporte mensual de conversión", active: true },
            { label: "Automatizaciones avanzadas", active: true },
            { label: "Llamada estratégica mensual 1:1", active: true },
            { label: "VPS premium + backups automáticos", active: true },
        ],
        guaranteeTitle: "Nuestro compromiso",
        guaranteeText:
            "Cada mes te mostramos en números cómo tu sistema está trayendo más clientes. No solo entregamos tecnología, hacemos seguimiento a tus resultados.",
        whatsappText: "Hola, me interesa el plan Escala Inteligente",
    },
];

export type Result = {
    context: string;
    metric: string;
    metricLabel: string;
    summary: string;
};

export const results: Result[] = [
    {
        context: "Clinica dental local",
        metric: "+43%",
        metricLabel: "mas citas cerradas en 30 dias",
        summary:
            "Pasaron de agendar manualmente a un flujo automatico en WhatsApp con confirmaciones y recordatorios.",
    },
    {
        context: "Agencia inmobiliaria",
        metric: "2x",
        metricLabel: "mas visitas agendadas en 21 dias",
        summary:
            "Automatizaron el primer contacto y el prefiltrado de prospectos para agendar visitas sin friccion.",
    },
    {
        context: "Escuela de idiomas online",
        metric: "<2min",
        metricLabel: "tiempo de primera respuesta",
        summary:
            "Su conversion de consulta a inscripcion subio al automatizar la primera respuesta.",
    },
];

export const heroStats = [
    { prefix: "+", value: "50", label: "Negocios automatizados" },
    { prefix: "<", value: "5s", label: "Primera respuesta" },
    { prefix: "+", value: "30%", label: "Aumento en conversiones" },
];

export const buildWhatsappLink = (text: string) =>
    `https://wa.me/573052580874?text=${encodeURIComponent(text)}`;
