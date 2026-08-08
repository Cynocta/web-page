import type { Content } from "./types";

export const es: Content = {
    logoAlt: "Logo de Cynocta",
    navItems: [
        { label: "Servicios", href: "/servicios" },
        { label: "Precios", href: "/precios" },
        { label: "Resultados", href: "/#resultados" },
        { label: "FAQ", href: "/preguntas-frecuentes" },
    ],
    navCta: "Agendar llamada",
    navCtaHref: "/contacto",
    navMenuLabel: "Menú",
    navCloseLabel: "Cerrar",
    navMenuAriaLabel: "Abrir menú",
    hero: {
        eyebrow: "Automatización con IA para empresas en crecimiento",
        title: {
            line1Em: "Automatiza",
            line1Text: " tu negocio y",
            line2Text: "deja de perder ",
            line2Em: "clientes",
        },
        subtitle:
            "Implementamos automatizaciones, IA y sistemas web que capturan clientes, responden 24/7 y escalan tu operación sin esfuerzo.",
        primaryCta: "Agendar diagnóstico gratis",
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
            chatUser: "Necesito responder más rápido a mis consultas.",
            chatBot: "Listo. Te muestro el flujo y agendo una llamada.",
            responseLabel: "Respuesta promedio",
            flow: ["Ads", "IA", "Agenda", "Venta"],
        },
        aria: {
            stats: "Beneficios clave",
            visual: "Demostración de automatización",
            flow: "Flujo de automatización",
        },
    },
    pains: {
        tag: "El problema",
        title: "Si tu negocio crece pero sientes que se te escapan ventas... no es tu imaginación.",
        intro:
            "La mayoría de los negocios que llegan a nosotros no tienen un problema de producto. Tienen un problema de sistema: venden bien, pero pierden clientes en las grietas que nadie está cuidando. ¿Reconoces alguna de estas?",
        items: [
            {
                num: "01",
                title: "Respondes tarde y el cliente ya le compró a otro.",
                description:
                    "Escribe a las 9 de la noche, tú contestas al otro día, y para entonces ya se fue con quien respondió primero.",
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
                    "Si tú no estás, no se responde, no se agenda, no se vende. El negocio depende de tu presencia constante.",
            },
            {
                num: "04",
                title: "Inviertes en publicidad pero los leads se enfrían.",
                description:
                    "Llegan interesados, pero nadie los filtra ni les da seguimiento, y el dinero del anuncio se diluye.",
            },
            {
                num: "05",
                title: "Tu web se ve bien pero no genera nada.",
                description:
                    "Es una tarjeta de presentación bonita, no una herramienta que traiga clientes.",
            },
        ],
        closing:
            "Ninguno de estos problemas se arregla trabajando más horas. Se arreglan con un sistema que trabaje cuando tú no puedes.",
        aria: {
            carousel: "Carrusel de problemas frecuentes",
            prev: "Problema anterior",
            next: "Problema siguiente",
            goTo: "Ir al problema",
        },
    },
    cost: {
        tag: "El costo",
        title: "Cada mensaje sin responder es una venta que alguien más cerró.",
        body:
            "No se trata de un chat perdido. Se trata del cliente que iba a comprar, del que iba a agendar, del que iba a recomendarte. Un negocio que responde en menos de 5 minutos multiplica sus cierres frente a uno que responde en horas. La diferencia no está en vender más caro ni en anunciar más: está en no dejar caer al que ya te buscó.",
    },
    services: {
        tag: "Soluciones",
        title: "No vendemos herramientas.\nCerramos las grietas por donde se te van los clientes.",
        items: [
            {
                title: "Web que convierte",
                description:
                    "Landing pages y sitios con estructura comercial real, diseñados para generar leads y cerrar.",
                tags: ["Diseño", "Copy", "Conversión"],
                kind: "web",
            },
            {
                title: "Automatización de conversaciones",
                description:
                    "Flujos para WhatsApp y otros canales que filtran prospectos, responden rápido y derivan automáticamente.",
                tags: ["WhatsApp", "Calificación", "Seguimiento"],
                kind: "chat",
            },
            {
                title: "Operación centralizada",
                description:
                    "Conectamos herramientas y procesos para que todo funcione en un sistema coherente y accionable.",
                tags: ["CRM", "Integración", "Flujos"],
                kind: "ops",
            },
            {
                title: "Reportes accionables",
                description:
                    "Panel de conversión, embudo por etapas y métricas para optimizar donde más impacta.",
                tags: ["Dashboard", "Embudo", "KPIs"],
                kind: "kpi",
            },
        ],
        moreLink: { label: "Ver los cinco servicios en detalle", href: "/servicios" },
    },
    process: {
        tag: "Metodología",
        title: "Cuatro pasos.\nResultados desde la primera semana.",
        steps: [
            {
                num: "01",
                title: "Diagnóstico",
                description:
                    "Detectamos cuellos de botella en captación, respuesta y seguimiento en una sesión express.",
            },
            {
                num: "02",
                title: "Propuesta por etapas",
                description:
                    "Plan realista con entregables rápidos para que veas resultados desde el inicio.",
            },
            {
                num: "03",
                title: "Implementación guiada",
                description:
                    "Construimos web, automatizaciones e integraciones con foco en simplicidad operativa.",
            },
            {
                num: "04",
                title: "Optimización continua",
                description:
                    "Medimos conversión y ajustamos mensajes, flujos y ofertas para escalar resultados.",
            },
        ],
    },
    plans: {
        tag: "Planes",
        title: "Precios de referencia,\npropuestas a medida.",
        subtitle:
            "Estos valores te orientan sobre el punto de partida de cada nivel. El número exacto depende de tu negocio y de qué tan lejos quieras llevar el sistema, por eso preferimos escucharte antes de cotizar.",
        note: "Sin contratos largos. Implementación en días, no meses.",
        cta: "Quiero resolverlo",
        labels: {
            from: "Desde",
            oneTimeProject: "Proyecto único",
            perMonth: "/mes",
            subscription: "suscripción",
        },
        currencyLabel: "Divisa",
        previewLabel: "Resumen del plan",
        detailsShow: "Ver detalles",
        detailsHide: "Ocultar detalles",
        items: [
            {
                plan: "PLAN 1",
                title: "Presencia Profesional",
                description: "Para negocios que aún no tienen presencia digital",
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
                    { label: "Responsive y rápida", active: true },
                    { label: "Automatizaciones", active: false },
                    { label: "CRM y reportes", active: false },
                ],
                guaranteeTitle: "Nuestro compromiso",
                guaranteeText:
                    "Tu web lista y funcionando en 2 semanas. Si tienes algún ajuste, lo resolvemos rápidamente.",
            },
            {
                plan: "PLAN 2",
                title: "Ventas Automáticas",
                description: "Para negocios que pierden ventas por no responder a tiempo",
                uniquePaymentUSD: 1500,
                delivery: null,
                monthlySubscriptionUSD: 150,
                customPrice: null,
                customPriceNote: null,
                priceNote: "Precio de referencia según el nivel de automatización que necesites.",
                disclaimer:
                    "Si tu negocio necesita enviar mensajes masivos o usar WhatsApp verificado, se suma el costo de la API oficial (~$50–$75 USD/mes). Si solo necesitas responder chats, no aplica.",
                badge: "MÁS SOLICITADO",
                featured: true,
                features: [
                    { label: "Todo el plan 1 incluido", active: true },
                    { label: "Bot WhatsApp que atiende 24/7", active: true },
                    { label: "Respuestas automáticas personalizadas", active: true },
                    { label: "VPS dedicado - estabilidad garantizada", active: true },
                    { label: "Soporte directo por WhatsApp", active: true },
                    { label: "1 ajuste mensual al bot incluido", active: true },
                ],
                guaranteeTitle: "Nuestro compromiso",
                guaranteeText:
                    "Tu bot responde clientes en menos de 3 minutos, todos los días. Y si necesitas algo, nosotros respondemos en menos de 3 horas por WhatsApp.",
            },
            {
                plan: "PLAN 3",
                title: "Escala Inteligente",
                description: "Para escalar ventas con procesos, datos y seguimiento",
                uniquePaymentUSD: null,
                delivery: null,
                monthlySubscriptionUSD: null,
                customPrice: "Proyecto a medida",
                customPriceNote: "Cotización personalizada según tu operación",
                priceNote: "Cada negocio a este nivel es distinto. Lo definimos contigo.",
                disclaimer:
                    "Si tu negocio necesita enviar mensajes masivos o usar WhatsApp verificado, se suma el costo de la API oficial (~$50–$75 USD/mes). Si solo necesitas responder chats, no aplica.",
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
            },
        ],
    },
    form: {
        tag: "Hablemos",
        title: "Cuéntanos qué se te está escapando.",
        subtitle:
            "No es una cotización genérica. Queremos entender tu caso para decirte, con honestidad, si podemos ayudarte y cómo.",
        questions: [
            {
                id: "business",
                label: "¿Qué tipo de negocio tienes?",
                hint: "Ej: clínica dental, inmobiliaria, tienda online, escuela...",
                kind: "text",
                placeholder: "Escribe tu tipo de negocio",
            },
            {
                id: "pain",
                label: "¿Qué es lo que más te está costando hoy?",
                kind: "choice",
                options: [
                    { value: "respuesta", label: "Pierdo clientes porque no respondo a tiempo" },
                    { value: "volumen", label: "Recibo muchos mensajes y no doy abasto" },
                    { value: "dependencia", label: "Todo el negocio depende de mí" },
                    { value: "leads", label: "Invierto en publicidad pero los leads se enfrían" },
                    { value: "web", label: "Mi web no me genera clientes" },
                ],
            },
            {
                id: "volume",
                label: "¿Cuántos mensajes o consultas recibes al mes, aproximadamente?",
                kind: "choice",
                options: [
                    { value: "<50", label: "Menos de 50" },
                    { value: "50-200", label: "Entre 50 y 200" },
                    { value: "200-500", label: "Entre 200 y 500" },
                    { value: ">500", label: "Más de 500" },
                ],
            },
            {
                id: "age",
                label: "¿Hace cuánto vienes arrastrando este problema?",
                kind: "choice",
                options: [
                    { value: "reciente", label: "Recién empiezo" },
                    { value: "meses", label: "Unos meses" },
                    { value: "anio", label: "Más de un año" },
                ],
            },
        ],
        submit: "Quiero resolverlo",
        submitHint: "Abriremos WhatsApp con tus respuestas listas para enviar.",
        requiredHint: "Responde esta pregunta para continuar.",
        next: "Siguiente",
        back: "Atrás",
        stepOf: "Pregunta {current} de {total}",
        messageIntro: "Hola, quiero resolver lo que se me está escapando.",
    },
    results: {
        tag: "Resultados reales",
        title: "Lo que dicen los números.",
        items: [
            {
                context: "Clínica dental local",
                metric: "+43%",
                metricLabel: "más citas cerradas en 30 días",
                summary:
                    "Pasaron de agendar manualmente a un flujo automático en WhatsApp con confirmaciones y recordatorios.",
            },
            {
                context: "Agencia inmobiliaria",
                metric: "2x",
                metricLabel: "más visitas agendadas en 21 días",
                summary:
                    "Automatizaron el primer contacto y el prefiltrado de prospectos para agendar visitas sin fricción.",
            },
            {
                context: "Escuela de idiomas online",
                metric: "<2min",
                metricLabel: "tiempo de primera respuesta",
                summary:
                    "Su conversión de consulta a inscripción subió al automatizar la primera respuesta.",
            },
        ],
    },
    contact: {
        tag: "Siguiente paso",
        title: "Si tu negocio ya creció,",
        titleEmphasis: "tu sistema también debe hacerlo.",
        whatsappText: "Hola, quiero mi diagnóstico gratuito",
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
        copy: "(c) 2026 Cynocta - Automatización de precisión",
        backToTopLabel: "Volver al inicio",
        whatsappText: "Hola, quiero contactar a Cynocta",
        marquee: [
            "Automatización con IA",
            "Resultados reales",
            "Conversión garantizada",
            "Soporte 24/7",
            "Sin contratos largos",
        ],
        channelLabels: {
            whatsapp: "WhatsApp",
            instagram: "Instagram",
            email: "Correo",
            phone: "Llamar",
        },
        links: [
            { label: "Servicios", href: "/servicios", type: "link" },
            { label: "Precios", href: "/precios", type: "link" },
            { label: "Proceso", href: "/#proceso", type: "link" },
            { label: "Preguntas frecuentes", href: "/preguntas-frecuentes", type: "link" },
            { label: "Términos y condiciones", href: "/terminos", type: "legal" },
            { label: "Política de privacidad", href: "/privacidad", type: "legal" },
            { label: "WhatsApp", href: "whatsapp", type: "whatsapp" },
            { label: "Instagram", href: "instagram", type: "external" },
            { label: "Correo", href: "email", type: "mailto" },
            { label: "Llamar", href: "phone", type: "tel" },
        ],
    },
    languageToggleLabel: "Idioma",
};
