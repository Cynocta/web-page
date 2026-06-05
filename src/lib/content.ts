export type Locale = "es" | "en";
export type Currency = "COP" | "USD" | "EUR";

export type NavItem = { label: string; href: string };

export type Service = {
    title: string;
    description: string;
    tags: string[];
    kind: "web" | "chat" | "ops" | "kpi";
};

export type ProcessStep = {
    num: string;
    title: string;
    description: string;
};

export type Plan = {
    plan: string;
    title: string;
    description: string;
    uniquePaymentCOP: number | null;
    delivery: string | null;
    monthlySubscriptionCOP: number | null;
    disclaimer?: string | null;
    badge: string | null;
    featured: boolean;
    features: Array<{ label: string; active: boolean }>;
    guaranteeTitle: string;
    guaranteeText: string;
    whatsappText: string;
};

export type Result = {
    context: string;
    metric: string;
    metricLabel: string;
    summary: string;
};

export type HeroStat = {
    prefix: string;
    value: string;
    label: string;
};

export type Content = {
    logoAlt: string;
    navItems: NavItem[];
    navCta: string;
    navCtaWhatsappText: string;
    navMenuLabel: string;
    navCloseLabel: string;
    navMenuAriaLabel: string;
    hero: {
        eyebrow: string;
        title: {
            line1Em: string;
            line1Text: string;
            line2Text: string;
            line2Em: string;
        };
        subtitle: string;
        primaryCta: string;
        primaryCtaWhatsappText: string;
        secondaryCta: string;
        stats: HeroStat[];
        visual: {
            kicker: string;
            title: string;
            pill: string;
            liveFunnel: string;
            updated: string;
            inquiries: string;
            replies: string;
            appointments: string;
            chatTitle: string;
            chatUser: string;
            chatBot: string;
            responseLabel: string;
            flow: string[];
        };
        aria: {
            stats: string;
            visual: string;
            flow: string;
        };
    };
    services: {
        tag: string;
        title: string;
        items: Service[];
    };
    process: {
        tag: string;
        title: string;
        steps: ProcessStep[];
    };
    plans: {
        tag: string;
        title: string;
        subtitle: string;
        note: string;
        cta: string;
        labels: {
            setupUnique: string;
            oneTime: string;
            delivery: string;
            monthly: string;
        };
        currencyLabel: string;
        previewLabel: string;
        detailsShow: string;
        detailsHide: string;
        items: Plan[];
    };
    results: {
        tag: string;
        title: string;
        items: Result[];
    };
    contact: {
        tag: string;
        title: string;
        titleEmphasis: string;
        whatsappText: string;
        iconsLabel: string;
        labels: {
            whatsapp: string;
            instagram: string;
            email: string;
            whatsappTitle: string;
            instagramTitle: string;
            emailTitle: string;
        };
    };
    footer: {
        copy: string;
        backToTopLabel: string;
        whatsappText: string;
        links: Array<{ label: string; href: string; type?: "link" | "legal" | "whatsapp" | "external" | "mailto" | "tel" }>;
    };
    languageToggleLabel: string;
};

export const currencyOptions: Currency[] = ["COP", "USD", "EUR"];

export const currencyRates: Record<Currency, number> = {
    COP: 1,
    USD: 1 / 4000,
    EUR: 1 / 4300,
};

export const formatCurrency = (amountCOP: number, currency: Currency) => {
    const value = amountCOP * currencyRates[currency];
    const locale = currency === "COP" ? "es-CO" : currency === "USD" ? "en-US" : "es-ES";

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(value);
};

export const content: Record<Locale, Content> = {
    es: {
        logoAlt: "Logo de Cynocta",
        navItems: [
            { label: "Servicios", href: "#servicios" },
            { label: "Proceso", href: "#proceso" },
            { label: "Planes", href: "#planes" },
        ],
        navCta: "Agendar llamada",
        navCtaWhatsappText: "Hola, quiero agendar una llamada con Cynocta",
        navMenuLabel: "Menu",
        navCloseLabel: "Cerrar",
        navMenuAriaLabel: "Abrir menu",
        hero: {
            eyebrow: "Automatizacion con IA para empresas en crecimiento",
            title: {
                line1Em: "Automatiza",
                line1Text: " tu negocio y",
                line2Text: "deja de perder ",
                line2Em: "clientes",
            },
            subtitle:
                "Implementamos automatizaciones, IA y sistemas web que capturan clientes, responden 24/7 y escalan tu operacion sin esfuerzo.",
            primaryCta: "Agendar diagnostico gratis",
            primaryCtaWhatsappText: "Hola, quiero agendar un diagnostico gratis",
            secondaryCta: "Ver casos reales",
            stats: [
                { prefix: "+", value: "50", label: "Negocios automatizados" },
                { prefix: "<", value: "5s", label: "Primera respuesta" },
                { prefix: "+", value: "30%", label: "Aumento en conversiones" },
            ],
            visual: {
                kicker: "Sistema activo",
                title: "Dashboard de ventas con IA",
                pill: "+32% este mes",
                liveFunnel: "Embudo en vivo",
                updated: "Actualizado 12 min",
                inquiries: "Consultas",
                replies: "Respuestas",
                appointments: "Citas",
                chatTitle: "Chatbot 24/7",
                chatUser: "Necesito responder mas rapido a mis consultas.",
                chatBot: "Listo. Te muestro el flujo y agendo una llamada.",
                responseLabel: "Respuesta promedio",
                flow: ["Ads", "IA", "Agenda", "Venta"],
            },
            aria: {
                stats: "Beneficios clave",
                visual: "Demostracion de automatizacion",
                flow: "Flujo de automatizacion",
            },
        },
        services: {
            tag: "Soluciones",
            title: "Construimos el sistema\ndigital que tu negocio necesita.",
            items: [
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
            ],
        },
        process: {
            tag: "Metodologia",
            title: "Cuatro pasos.\nResultados desde la primera semana.",
            steps: [
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
            ],
        },
        plans: {
            tag: "Planes",
            title: "Elige tu nivel\nde transformacion.",
            subtitle: "Sin contratos largos. Implementacion en dias, no meses.",
            note: "Compara opciones de entrada, automatizacion y escala sin perder claridad.",
            cta: "Cotizar",
            labels: {
                setupUnique: "Setup unico desde",
                oneTime: "Pago unico desde",
                delivery: "Entrega",
                monthly: "Suscripcion mensual desde",
            },
            currencyLabel: "Divisa",
            previewLabel: "Resumen del plan",
            detailsShow: "Ver detalles",
            detailsHide: "Ocultar detalles",
            items: [
                {
                    plan: "PLAN 1",
                    title: "Presencia Profesional",
                    description: "Para negocios que aun no tienen presencia digital",
                    uniquePaymentCOP: 990000,
                    delivery: "Entrega en 2 semanas",
                    monthlySubscriptionCOP: null,
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
                        "Tu web lista y funcionando en 2 semanas. Si tienes algun ajuste, lo resolvemos rapidamente.",
                    whatsappText: "Hola, me interesa el plan Presencia Profesional",
                },
                {
                    plan: "PLAN 2",
                    title: "Ventas Automaticas",
                    description: "Para negocios que pierden ventas por no responder a tiempo",
                    uniquePaymentCOP: 1490000,
                    delivery: null,
                    monthlySubscriptionCOP: 197000,
                    disclaimer:
                        "No incluye costos de WhatsApp API oficial (aprox $200.000 - $300.000 COP/mes)",
                    badge: "MAS SOLICITADO",
                    featured: true,
                    features: [
                        { label: "Todo el plan 1 incluido", active: true },
                        { label: "Bot WhatsApp que atiende 24/7", active: true },
                        { label: "Respuestas automaticas personalizadas", active: true },
                        { label: "VPS dedicado - estabilidad garantizada", active: true },
                        { label: "Soporte directo por WhatsApp", active: true },
                        { label: "1 ajuste mensual al bot incluido", active: true },
                    ],
                    guaranteeTitle: "Nuestro compromiso",
                    guaranteeText:
                        "Tu bot responde clientes en menos de 3 minutos, todos los dias. Y si necesitas algo, nosotros respondemos en menos de 3 horas por WhatsApp.",
                    whatsappText: "Hola, me interesa el plan Ventas Automaticas",
                },
                {
                    plan: "PLAN 3",
                    title: "Escala Inteligente",
                    description: "Para escalar ventas con procesos, datos y seguimiento",
                    uniquePaymentCOP: 3200000,
                    delivery: null,
                    monthlySubscriptionCOP: 397000,
                    disclaimer:
                        "No incluye costos de WhatsApp API oficial (aprox $200.000 - $300.000 COP/mes)",
                    badge: null,
                    featured: false,
                    features: [
                        { label: "Todo el plan 2 incluido", active: true },
                        { label: "CRM para seguimiento de clientes", active: true },
                        { label: "Reporte mensual de conversion", active: true },
                        { label: "Automatizaciones avanzadas", active: true },
                        { label: "Llamada estrategica mensual 1:1", active: true },
                        { label: "VPS premium + backups automaticos", active: true },
                    ],
                    guaranteeTitle: "Nuestro compromiso",
                    guaranteeText:
                        "Cada mes te mostramos en numeros como tu sistema esta trayendo mas clientes. No solo entregamos tecnologia, hacemos seguimiento a tus resultados.",
                    whatsappText: "Hola, me interesa el plan Escala Inteligente",
                },
            ],
        },
        results: {
            tag: "Resultados reales",
            title: "Lo que dicen los numeros.",
            items: [
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
            ],
        },
        contact: {
            tag: "Siguiente paso",
            title: "Si tu negocio ya crecio,",
            titleEmphasis: "tu sistema tambien debe hacerlo.",
            whatsappText: "Hola, quiero mi diagnostico gratuito",
            iconsLabel: "Canales de contacto",
            labels: {
                whatsapp: "Abrir WhatsApp de Cynocta",
                instagram: "Abrir Instagram de Cynocta",
                email: "Enviar correo a Cynocta",
                whatsappTitle: "WhatsApp",
                instagramTitle: "Instagram",
                emailTitle: "Correo",
            },
        },
        footer: {
            copy: "(c) 2026 Cynocta - Automatizacion de precision",
            backToTopLabel: "Volver al inicio",
            whatsappText: "Hola, quiero contactar a Cynocta",
            links: [
                { label: "Servicios", href: "#servicios", type: "link" },
                { label: "Proceso", href: "#proceso", type: "link" },
                { label: "Planes", href: "#planes", type: "link" },
                { label: "Terminos y condiciones", href: "/terminos", type: "legal" },
                { label: "Politica de privacidad", href: "/privacidad", type: "legal" },
                { label: "WhatsApp", href: "whatsapp", type: "whatsapp" },
                { label: "Instagram", href: "instagram", type: "external" },
                { label: "Correo", href: "email", type: "mailto" },
                { label: "Llamar", href: "phone", type: "tel" },
            ],
        },
        languageToggleLabel: "Idioma",
    },
    en: {
        logoAlt: "Cynocta logo",
        navItems: [
            { label: "Services", href: "#servicios" },
            { label: "Process", href: "#proceso" },
            { label: "Plans", href: "#planes" },
        ],
        navCta: "Schedule a call",
        navCtaWhatsappText: "Hi, I'd like to schedule a call with Cynocta",
        navMenuLabel: "Menu",
        navCloseLabel: "Close",
        navMenuAriaLabel: "Open menu",
        hero: {
            eyebrow: "AI automation for growing businesses",
            title: {
                line1Em: "Automate",
                line1Text: " your business and",
                line2Text: "stop losing ",
                line2Em: "customers",
            },
            subtitle:
                "We implement automation, AI, and web systems that capture clients, respond 24/7, and scale your operation effortlessly.",
            primaryCta: "Schedule a free diagnosis",
            primaryCtaWhatsappText: "Hi, I'd like to schedule a free diagnosis",
            secondaryCta: "See real cases",
            stats: [
                { prefix: "+", value: "50", label: "Businesses automated" },
                { prefix: "<", value: "5s", label: "First response" },
                { prefix: "+", value: "30%", label: "Conversion lift" },
            ],
            visual: {
                kicker: "System online",
                title: "AI sales dashboard",
                pill: "+32% this month",
                liveFunnel: "Live funnel",
                updated: "Updated 12 min ago",
                inquiries: "Inquiries",
                replies: "Replies",
                appointments: "Appointments",
                chatTitle: "Chatbot 24/7",
                chatUser: "I need to reply to inquiries faster.",
                chatBot: "Done. I'll show you the flow and schedule a call.",
                responseLabel: "Avg response",
                flow: ["Ads", "AI", "Schedule", "Sale"],
            },
            aria: {
                stats: "Key benefits",
                visual: "Automation demo",
                flow: "Automation flow",
            },
        },
        services: {
            tag: "Solutions",
            title: "We build the digital system\nyour business needs.",
            items: [
                {
                    title: "Websites that convert",
                    description:
                        "Landing pages and sites with real commercial structure, designed to generate leads and close.",
                    tags: ["Design", "Copy", "Conversion"],
                    kind: "web",
                },
                {
                    title: "Conversation automation",
                    description:
                        "Flows for WhatsApp and other channels that qualify leads, respond fast, and route automatically.",
                    tags: ["WhatsApp", "Qualification", "Follow-up"],
                    kind: "chat",
                },
                {
                    title: "Centralized operations",
                    description:
                        "We connect tools and processes so everything works in a coherent, actionable system.",
                    tags: ["CRM", "Integration", "Flows"],
                    kind: "ops",
                },
                {
                    title: "Actionable reporting",
                    description:
                        "Conversion panels, stage funnels, and metrics to optimize where it matters most.",
                    tags: ["Dashboard", "Funnel", "KPIs"],
                    kind: "kpi",
                },
            ],
        },
        process: {
            tag: "Methodology",
            title: "Four steps.\nResults from the first week.",
            steps: [
                {
                    num: "01",
                    title: "Diagnosis",
                    description:
                        "We identify bottlenecks in capture, response, and follow-up in an express session.",
                },
                {
                    num: "02",
                    title: "Phased proposal",
                    description:
                        "A realistic plan with quick deliverables so you see results from day one.",
                },
                {
                    num: "03",
                    title: "Guided implementation",
                    description:
                        "We build web, automations, and integrations focused on operational simplicity.",
                },
                {
                    num: "04",
                    title: "Continuous optimization",
                    description:
                        "We measure conversion and tune messages, flows, and offers to scale results.",
                },
            ],
        },
        plans: {
            tag: "Plans",
            title: "Choose your level\nof transformation.",
            subtitle: "No long contracts. Implementation in days, not months.",
            note: "Compare entry, automation, and scale options without losing clarity.",
            cta: "Get a quote",
            labels: {
                setupUnique: "One-time setup from",
                oneTime: "One-time payment from",
                delivery: "Delivery",
                monthly: "Monthly subscription from",
            },
            currencyLabel: "Currency",
            previewLabel: "Plan summary",
            detailsShow: "View details",
            detailsHide: "Hide details",
            items: [
                {
                    plan: "PLAN 1",
                    title: "Professional presence",
                    description: "For businesses that still lack a digital presence",
                    uniquePaymentCOP: 990000,
                    delivery: "Delivery in 2 weeks",
                    monthlySubscriptionCOP: null,
                    disclaimer: null,
                    badge: null,
                    featured: false,
                    features: [
                        { label: "Sales-ready professional website", active: true },
                        { label: "Form + WhatsApp CTA", active: true },
                        { label: "Optimized commercial copy", active: true },
                        { label: "Responsive and fast", active: true },
                        { label: "Automations", active: false },
                        { label: "CRM and reports", active: false },
                    ],
                    guaranteeTitle: "Our commitment",
                    guaranteeText:
                        "Your website live and running in 2 weeks. If you need tweaks, we fix them quickly.",
                    whatsappText: "Hi, I'm interested in the Professional Presence plan",
                },
                {
                    plan: "PLAN 2",
                    title: "Automatic sales",
                    description: "For businesses losing sales by not replying in time",
                    uniquePaymentCOP: 1490000,
                    delivery: null,
                    monthlySubscriptionCOP: 197000,
                    disclaimer:
                        "Does not include official WhatsApp API costs (approx COP $200,000 - $300,000 / month)",
                    badge: "MOST REQUESTED",
                    featured: true,
                    features: [
                        { label: "Everything in plan 1", active: true },
                        { label: "WhatsApp bot responding 24/7", active: true },
                        { label: "Personalized auto replies", active: true },
                        { label: "Dedicated VPS - guaranteed stability", active: true },
                        { label: "Direct WhatsApp support", active: true },
                        { label: "1 monthly bot adjustment included", active: true },
                    ],
                    guaranteeTitle: "Our commitment",
                    guaranteeText:
                        "Your bot replies to customers in under 3 minutes, every day. If you need anything, we reply within 3 hours on WhatsApp.",
                    whatsappText: "Hi, I'm interested in the Automatic Sales plan",
                },
                {
                    plan: "PLAN 3",
                    title: "Smart scale",
                    description: "To scale sales with processes, data, and follow-up",
                    uniquePaymentCOP: 3200000,
                    delivery: null,
                    monthlySubscriptionCOP: 397000,
                    disclaimer:
                        "Does not include official WhatsApp API costs (approx COP $200,000 - $300,000 / month)",
                    badge: null,
                    featured: false,
                    features: [
                        { label: "Everything in plan 2", active: true },
                        { label: "CRM for client follow-up", active: true },
                        { label: "Monthly conversion report", active: true },
                        { label: "Advanced automations", active: true },
                        { label: "Monthly 1:1 strategy call", active: true },
                        { label: "Premium VPS + automatic backups", active: true },
                    ],
                    guaranteeTitle: "Our commitment",
                    guaranteeText:
                        "Each month we show in numbers how your system is bringing more clients. We do not just deliver tech, we track your results.",
                    whatsappText: "Hi, I'm interested in the Smart Scale plan",
                },
            ],
        },
        results: {
            tag: "Real results",
            title: "What the numbers say.",
            items: [
                {
                    context: "Local dental clinic",
                    metric: "+43%",
                    metricLabel: "more appointments closed in 30 days",
                    summary:
                        "They moved from manual scheduling to an automated WhatsApp flow with confirmations and reminders.",
                },
                {
                    context: "Real estate agency",
                    metric: "2x",
                    metricLabel: "more visits scheduled in 21 days",
                    summary:
                        "They automated first contact and prospect pre-qualification to schedule visits without friction.",
                },
                {
                    context: "Online language school",
                    metric: "<2min",
                    metricLabel: "time to first response",
                    summary:
                        "Their inquiry-to-enrollment conversion rose after automating the first response.",
                },
            ],
        },
        contact: {
            tag: "Next step",
            title: "If your business has grown,",
            titleEmphasis: "your system must grow too.",
            whatsappText: "Hi, I want my free diagnosis",
            iconsLabel: "Contact channels",
            labels: {
                whatsapp: "Open Cynocta WhatsApp",
                instagram: "Open Cynocta Instagram",
                email: "Send email to Cynocta",
                whatsappTitle: "WhatsApp",
                instagramTitle: "Instagram",
                emailTitle: "Email",
            },
        },
        footer: {
            copy: "(c) 2026 Cynocta - Precision automation",
            backToTopLabel: "Back to top",
            whatsappText: "Hi, I'd like to contact Cynocta",
            links: [
                { label: "Services", href: "#servicios", type: "link" },
                { label: "Process", href: "#proceso", type: "link" },
                { label: "Plans", href: "#planes", type: "link" },
                { label: "Terms and conditions", href: "/terminos", type: "legal" },
                { label: "Privacy policy", href: "/privacidad", type: "legal" },
                { label: "WhatsApp", href: "whatsapp", type: "whatsapp" },
                { label: "Instagram", href: "instagram", type: "external" },
                { label: "Email", href: "email", type: "mailto" },
                { label: "Call", href: "phone", type: "tel" },
            ],
        },
        languageToggleLabel: "Language",
    },
};
