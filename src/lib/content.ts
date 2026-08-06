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
    /** Reference floor price, in USD. `null` when the plan is quoted case by case. */
    uniquePaymentUSD: number | null;
    delivery: string | null;
    /** Reference monthly subscription, in USD. Kept visually separate from the setup fee. */
    monthlySubscriptionUSD: number | null;
    /** Replaces the number when the plan has no public price (plan 3). */
    customPrice: string | null;
    customPriceNote: string | null;
    /** Italic line under the price block that frames it as orientative. */
    priceNote: string;
    disclaimer?: string | null;
    badge: string | null;
    featured: boolean;
    features: Array<{ label: string; active: boolean }>;
    guaranteeTitle: string;
    guaranteeText: string;
};

export type Pain = {
    /** Short label shown on the carousel card, e.g. "01". */
    num: string;
    title: string;
    description: string;
};

export type FormOption = { value: string; label: string };

export type FormQuestion = {
    id: "business" | "pain" | "volume" | "age";
    label: string;
    hint?: string;
    kind: "text" | "choice";
    placeholder?: string;
    options?: FormOption[];
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
    pains: {
        tag: string;
        title: string;
        intro: string;
        items: Pain[];
        closing: string;
        aria: {
            carousel: string;
            prev: string;
            next: string;
            goTo: string;
        };
    };
    cost: {
        tag: string;
        title: string;
        body: string;
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
            /** "Desde" / "From" — every number is framed as a floor, never a closed quote. */
            from: string;
            oneTimeProject: string;
            perMonth: string;
            subscription: string;
        };
        currencyLabel: string;
        previewLabel: string;
        detailsShow: string;
        detailsHide: string;
        items: Plan[];
    };
    form: {
        tag: string;
        title: string;
        subtitle: string;
        questions: FormQuestion[];
        submit: string;
        submitHint: string;
        requiredHint: string;
        next: string;
        back: string;
        /** Step counter template; `{current}` and `{total}` are substituted. */
        stepOf: string;
        /** Prefix of the WhatsApp message built from the answers. */
        messageIntro: string;
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

/** USD leads: prices are quoted in dollars and converted from there. */
export const currencyOptions: Currency[] = ["USD", "COP", "EUR"];

export const defaultCurrency: Currency = "USD";

/** Multipliers applied to a USD base amount. */
export const currencyRates: Record<Currency, number> = {
    USD: 1,
    COP: 4000,
    EUR: 0.92,
};

/** Rounds converted amounts to a clean figure so COP doesn't render as $3.000.000,00. */
const roundForCurrency = (value: number, currency: Currency) => {
    if (currency === "COP") {
        return Math.round(value / 10000) * 10000;
    }
    return Math.round(value / 10) * 10;
};

export const formatCurrency = (amountUSD: number, currency: Currency) => {
    const value = roundForCurrency(amountUSD * currencyRates[currency], currency);
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
            { label: "El problema", href: "#problema" },
            { label: "Servicios", href: "#servicios" },
            { label: "Resultados", href: "#resultados" },
            { label: "Planes", href: "#planes" },
        ],
        navCta: "Agendar llamada",
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
            secondaryCta: "Ver casos reales",
            stats: [
                { prefix: "+", value: "52", label: "Negocios automatizados" },
                { prefix: "<", value: "5s", label: "Primera respuesta" },
                { prefix: "+", value: "34%", label: "Aumento en conversiones" },
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
        pains: {
            tag: "El problema",
            title: "Si tu negocio crece pero sientes que se te escapan ventas... no es tu imaginacion.",
            intro:
                "La mayoria de los negocios que llegan a nosotros no tienen un problema de producto. Tienen un problema de sistema: venden bien, pero pierden clientes en las grietas que nadie esta cuidando. Reconoces alguna de estas?",
            items: [
                {
                    num: "01",
                    title: "Respondes tarde y el cliente ya le compro a otro.",
                    description:
                        "Escribe a las 9 de la noche, tu contestas al otro dia, y para entonces ya se fue con quien respondio primero.",
                },
                {
                    num: "02",
                    title: "Los mensajes se te acumulan y contestas cuando puedes.",
                    description:
                        "Entre atender el negocio y responder chats, siempre hay alguien esperando y algunos ni vuelven.",
                },
                {
                    num: "03",
                    title: "Todo pasa por ti.",
                    description:
                        "Si tu no estas, no se responde, no se agenda, no se vende. El negocio depende de tu presencia constante.",
                },
                {
                    num: "04",
                    title: "Inviertes en publicidad pero los leads se enfrian.",
                    description:
                        "Llegan interesados, pero nadie los filtra ni les da seguimiento, y el dinero del anuncio se diluye.",
                },
                {
                    num: "05",
                    title: "Tu web se ve bien pero no genera nada.",
                    description:
                        "Es una tarjeta de presentacion bonita, no una herramienta que traiga clientes.",
                },
            ],
            closing:
                "Ninguno de estos problemas se arregla trabajando mas horas. Se arreglan con un sistema que trabaje cuando tu no puedes.",
            aria: {
                carousel: "Carrusel de problemas frecuentes",
                prev: "Problema anterior",
                next: "Problema siguiente",
                goTo: "Ir al problema",
            },
        },
        cost: {
            tag: "El costo",
            title: "Cada mensaje sin responder es una venta que alguien mas cerro.",
            body:
                "No se trata de un chat perdido. Se trata del cliente que iba a comprar, del que iba a agendar, del que iba a recomendarte. Un negocio que responde en menos de 5 minutos multiplica sus cierres frente a uno que responde en horas. La diferencia no esta en vender mas caro ni en anunciar mas: esta en no dejar caer al que ya te busco.",
        },
        services: {
            tag: "Soluciones",
            title: "No vendemos herramientas.\nCerramos las grietas por donde se te van los clientes.",
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
            title: "Precios de referencia,\npropuestas a medida.",
            subtitle:
                "Estos valores te orientan sobre el punto de partida de cada nivel. El numero exacto depende de tu negocio y de que tan lejos quieras llevar el sistema, por eso preferimos escucharte antes de cotizar.",
            note: "Sin contratos largos. Implementacion en dias, no meses.",
            cta: "Quiero resolverlo",
            labels: {
                from: "Desde",
                oneTimeProject: "Proyecto unico",
                perMonth: "/mes",
                subscription: "suscripcion",
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
                    uniquePaymentUSD: 750,
                    delivery: "Entrega en 2 semanas",
                    monthlySubscriptionUSD: null,
                    customPrice: null,
                    customPriceNote: null,
                    priceNote: "Precio de referencia. El valor final depende del alcance de tu web.",
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
                },
                {
                    plan: "PLAN 2",
                    title: "Ventas Automaticas",
                    description: "Para negocios que pierden ventas por no responder a tiempo",
                    uniquePaymentUSD: 1500,
                    delivery: null,
                    monthlySubscriptionUSD: 150,
                    customPrice: null,
                    customPriceNote: null,
                    priceNote: "Precio de referencia segun el nivel de automatizacion que necesites.",
                    disclaimer:
                        "Si tu negocio necesita enviar mensajes masivos o usar WhatsApp verificado, se suma el costo de la API oficial (~$50–$75 USD/mes). Si solo necesitas responder chats, no aplica.",
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
                },
                {
                    plan: "PLAN 3",
                    title: "Escala Inteligente",
                    description: "Para escalar ventas con procesos, datos y seguimiento",
                    uniquePaymentUSD: null,
                    delivery: null,
                    monthlySubscriptionUSD: null,
                    customPrice: "Proyecto a medida",
                    customPriceNote: "Cotizacion personalizada segun tu operacion",
                    priceNote: "Cada negocio a este nivel es distinto. Lo definimos contigo.",
                    disclaimer:
                        "Si tu negocio necesita enviar mensajes masivos o usar WhatsApp verificado, se suma el costo de la API oficial (~$50–$75 USD/mes). Si solo necesitas responder chats, no aplica.",
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
                },
            ],
        },
        form: {
            tag: "Hablemos",
            title: "Cuentanos que se te esta escapando.",
            subtitle:
                "No es una cotizacion generica. Queremos entender tu caso para decirte, con honestidad, si podemos ayudarte y como.",
            questions: [
                {
                    id: "business",
                    label: "Que tipo de negocio tienes?",
                    hint: "Ej: clinica dental, inmobiliaria, tienda online, escuela...",
                    kind: "text",
                    placeholder: "Escribe tu tipo de negocio",
                },
                {
                    id: "pain",
                    label: "Que es lo que mas te esta costando hoy?",
                    kind: "choice",
                    options: [
                        { value: "respuesta", label: "Pierdo clientes porque no respondo a tiempo" },
                        { value: "volumen", label: "Recibo muchos mensajes y no doy abasto" },
                        { value: "dependencia", label: "Todo el negocio depende de mi" },
                        { value: "leads", label: "Invierto en publicidad pero los leads se enfrian" },
                        { value: "web", label: "Mi web no me genera clientes" },
                    ],
                },
                {
                    id: "volume",
                    label: "Cuantos mensajes o consultas recibes al mes, aproximadamente?",
                    kind: "choice",
                    options: [
                        { value: "<50", label: "Menos de 50" },
                        { value: "50-200", label: "Entre 50 y 200" },
                        { value: "200-500", label: "Entre 200 y 500" },
                        { value: ">500", label: "Mas de 500" },
                    ],
                },
                {
                    id: "age",
                    label: "Hace cuanto vienes arrastrando este problema?",
                    kind: "choice",
                    options: [
                        { value: "reciente", label: "Recien empiezo" },
                        { value: "meses", label: "Unos meses" },
                        { value: "anio", label: "Mas de un anio" },
                    ],
                },
            ],
            submit: "Quiero resolverlo",
            submitHint: "Abriremos WhatsApp con tus respuestas listas para enviar.",
            requiredHint: "Responde esta pregunta para continuar.",
            next: "Siguiente",
            back: "Atras",
            stepOf: "Pregunta {current} de {total}",
            messageIntro: "Hola, quiero resolver lo que se me esta escapando.",
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
            { label: "The problem", href: "#problema" },
            { label: "Services", href: "#servicios" },
            { label: "Results", href: "#resultados" },
            { label: "Plans", href: "#planes" },
        ],
        navCta: "Schedule a call",
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
            secondaryCta: "See real cases",
            stats: [
                { prefix: "+", value: "52", label: "Businesses automated" },
                { prefix: "<", value: "5s", label: "First response" },
                { prefix: "+", value: "34%", label: "Conversion lift" },
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
        pains: {
            tag: "The problem",
            title: "If your business is growing but sales keep slipping away... it's not your imagination.",
            intro:
                "Most businesses that come to us don't have a product problem. They have a system problem: they sell well, but they lose customers through the cracks nobody is watching. Do any of these sound familiar?",
            items: [
                {
                    num: "01",
                    title: "You reply late and the customer already bought from someone else.",
                    description:
                        "They message at 9pm, you answer the next day, and by then they're gone with whoever replied first.",
                },
                {
                    num: "02",
                    title: "Messages pile up and you answer when you can.",
                    description:
                        "Between running the business and replying to chats, someone is always waiting and some never come back.",
                },
                {
                    num: "03",
                    title: "Everything runs through you.",
                    description:
                        "If you're not there, nobody replies, nothing gets booked, nothing gets sold. The business depends on you being constantly present.",
                },
                {
                    num: "04",
                    title: "You spend on ads but the leads go cold.",
                    description:
                        "Interested people come in, but nobody qualifies or follows up on them, and the ad budget dissolves.",
                },
                {
                    num: "05",
                    title: "Your website looks good but generates nothing.",
                    description:
                        "It's a pretty business card, not a tool that brings in customers.",
                },
            ],
            closing:
                "None of these problems get fixed by working more hours. They get fixed with a system that works when you can't.",
            aria: {
                carousel: "Carousel of common problems",
                prev: "Previous problem",
                next: "Next problem",
                goTo: "Go to problem",
            },
        },
        cost: {
            tag: "The cost",
            title: "Every unanswered message is a sale someone else closed.",
            body:
                "It's not just a lost chat. It's the customer who was going to buy, the one who was going to book, the one who was going to refer you. A business that replies in under 5 minutes multiplies its close rate against one that replies in hours. The difference isn't charging more or advertising more: it's not dropping the person who already came looking for you.",
        },
        services: {
            tag: "Solutions",
            title: "We don't sell tools.\nWe close the cracks your customers slip through.",
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
            title: "Reference prices,\ntailored proposals.",
            subtitle:
                "These figures show you the starting point of each level. The exact number depends on your business and how far you want to take the system, which is why we'd rather listen before quoting.",
            note: "No long contracts. Implementation in days, not months.",
            cta: "I want to fix this",
            labels: {
                from: "From",
                oneTimeProject: "One-time project",
                perMonth: "/mo",
                subscription: "subscription",
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
                    uniquePaymentUSD: 750,
                    delivery: "Delivery in 2 weeks",
                    monthlySubscriptionUSD: null,
                    customPrice: null,
                    customPriceNote: null,
                    priceNote: "Reference price. The final figure depends on the scope of your site.",
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
                },
                {
                    plan: "PLAN 2",
                    title: "Automatic sales",
                    description: "For businesses losing sales by not replying in time",
                    uniquePaymentUSD: 1500,
                    delivery: null,
                    monthlySubscriptionUSD: 150,
                    customPrice: null,
                    customPriceNote: null,
                    priceNote: "Reference price based on the level of automation you need.",
                    disclaimer:
                        "If your business needs bulk messaging or a verified WhatsApp number, the official API cost (~$50–$75 USD/mo) applies. If you only need to reply to chats, it doesn't.",
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
                },
                {
                    plan: "PLAN 3",
                    title: "Smart scale",
                    description: "To scale sales with processes, data, and follow-up",
                    uniquePaymentUSD: null,
                    delivery: null,
                    monthlySubscriptionUSD: null,
                    customPrice: "Custom project",
                    customPriceNote: "Personalized quote based on your operation",
                    priceNote: "Every business at this level is different. We define it with you.",
                    disclaimer:
                        "If your business needs bulk messaging or a verified WhatsApp number, the official API cost (~$50–$75 USD/mo) applies. If you only need to reply to chats, it doesn't.",
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
                },
            ],
        },
        form: {
            tag: "Let's talk",
            title: "Tell us what's slipping away.",
            subtitle:
                "This isn't a generic quote. We want to understand your case so we can tell you honestly whether we can help, and how.",
            questions: [
                {
                    id: "business",
                    label: "What kind of business do you run?",
                    hint: "E.g. dental clinic, real estate, online store, school...",
                    kind: "text",
                    placeholder: "Type your business type",
                },
                {
                    id: "pain",
                    label: "What's costing you the most right now?",
                    kind: "choice",
                    options: [
                        { value: "respuesta", label: "I lose customers because I don't reply in time" },
                        { value: "volumen", label: "I get too many messages and can't keep up" },
                        { value: "dependencia", label: "The whole business depends on me" },
                        { value: "leads", label: "I spend on ads but the leads go cold" },
                        { value: "web", label: "My website doesn't bring me customers" },
                    ],
                },
                {
                    id: "volume",
                    label: "Roughly how many messages or inquiries do you get per month?",
                    kind: "choice",
                    options: [
                        { value: "<50", label: "Fewer than 50" },
                        { value: "50-200", label: "Between 50 and 200" },
                        { value: "200-500", label: "Between 200 and 500" },
                        { value: ">500", label: "More than 500" },
                    ],
                },
                {
                    id: "age",
                    label: "How long have you been dealing with this?",
                    kind: "choice",
                    options: [
                        { value: "reciente", label: "Just getting started" },
                        { value: "meses", label: "A few months" },
                        { value: "anio", label: "More than a year" },
                    ],
                },
            ],
            submit: "I want to fix this",
            submitHint: "We'll open WhatsApp with your answers ready to send.",
            requiredHint: "Answer this question to continue.",
            next: "Next",
            back: "Back",
            stepOf: "Question {current} of {total}",
            messageIntro: "Hi, I want to fix what's slipping away.",
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
