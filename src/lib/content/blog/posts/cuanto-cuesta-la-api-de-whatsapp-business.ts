import type { BlogPost } from "../types";

/**
 * Meta moved this product from conversation-based to per-message billing on
 * 1 July 2025, and the published rate cards disagree between resellers. The
 * article commits to the billing model — which is stable and verifiable — and
 * sends the reader to Meta's rate card for the number.
 */
export const costoApiWhatsapp: BlogPost = {
    slug: "cuanto-cuesta-la-api-de-whatsapp-business",
    category: "whatsapp",

    navLabel: "Cuánto cuesta la API de WhatsApp",
    title: "Cuánto cuesta de verdad la API de WhatsApp Business",
    excerpt:
        "Meta cambió el cobro por conversación a cobro por mensaje en julio de 2025. Qué se paga, qué sigue siendo gratis y las tres partidas que no aparecen en ninguna cotización.",

    metaTitle: "Cuánto cuesta la API de WhatsApp Business en 2026",
    metaDescription:
        "El costo real de la API de WhatsApp Business: cobro por mensaje, categorías de plantilla, ventana gratuita de 24 h y los costos de proveedor que nadie cotiza.",

    author: "diego",
    publishedAt: "2026-08-10",
    readingMinutes: 8,

    keyTakeaway:
        "Desde el 1 de julio de 2025 Meta cobra por cada mensaje de plantilla entregado, no por conversación de 24 horas. El precio depende de la categoría de la plantilla —marketing, utilidad o autenticación— y del país del número que recibe. Las respuestas dentro de la ventana de servicio de 24 horas que abre el cliente no se cobran. A la tarifa de Meta hay que sumarle el margen del proveedor (BSP) y el alojamiento de la herramienta que ejecuta el bot: son tres facturas distintas, no una.",

    blocks: [
        {
            kind: "p",
            text: "Casi todas las cotizaciones de un bot de WhatsApp mezclan tres costos que se pagan a tres empresas diferentes y se comportan de forma distinta. Separarlos es la única manera de saber si un presupuesto tiene sentido.",
        },
        {
            kind: "list",
            ordered: true,
            items: [
                "Lo que cobra Meta por entregar mensajes de plantilla.",
                "Lo que cobra tu proveedor de API (BSP) por darte acceso y soporte.",
                "Lo que cuesta la herramienta que ejecuta la lógica del bot y su alojamiento.",
            ],
        },

        {
            kind: "h2",
            id: "que-cambio",
            text: "Qué cambió en julio de 2025",
        },
        {
            kind: "p",
            text: "Hasta esa fecha, Meta cobraba por conversación: abrías una ventana de 24 horas y dentro de ella los mensajes no sumaban costo. Desde el 1 de julio de 2025 el cobro es por mensaje de plantilla entregado. Si encuentras un artículo o una cotización que todavía habla de «conversaciones de 24 horas» como unidad de cobro, está desactualizado y sus números no sirven.",
        },
        {
            kind: "p",
            text: "El cambio penaliza el envío masivo y abarata la atención. Para un negocio que responde consultas, la factura suele bajar; para uno que hace campañas de difusión, sube.",
        },

        {
            kind: "h2",
            id: "categorias",
            text: "Las cuatro categorías y por qué importan",
        },
        {
            kind: "p",
            text: "Meta clasifica cada plantilla y le aplica una tarifa distinta. La diferencia entre categorías no es de céntimos: una plantilla de marketing puede costar diez o veinte veces lo que la misma frase enviada como utilidad.",
        },
        {
            kind: "table",
            caption: "Categorías de mensaje en la plataforma de WhatsApp Business.",
            head: ["Categoría", "Para qué es", "Costo relativo"],
            rows: [
                ["Servicio", "Tu respuesta dentro de la ventana de 24 h que abre el cliente", "Sin costo"],
                ["Utilidad", "Confirmaciones, estados de pedido, recordatorios de cita", "El más bajo de los de pago"],
                ["Autenticación", "Códigos de verificación de un solo uso", "Similar a utilidad"],
                ["Marketing", "Promociones, novedades, reactivación de clientes", "El más alto, sin descuento por volumen"],
            ],
        },
        {
            kind: "callout",
            title: "La clasificación no la eliges tú",
            text: "Meta revisa el contenido de la plantilla y la reclasifica si considera que una «confirmación de pedido» es en realidad publicidad. Colar promociones en plantillas de utilidad no abarata la factura: la recategorizan y, si insistes, se arriesga la calidad del número.",
        },
        {
            kind: "p",
            text: "La consecuencia práctica es que el diseño de la conversación tiene efecto directo en el costo. Un flujo que consigue que sea el cliente quien escriba primero convierte casi todo el intercambio en mensajes de servicio, que no se cobran. Un flujo que persigue al cliente con plantillas de marketing paga cada intento.",
        },

        {
            kind: "h2",
            id: "cuanto-por-mensaje",
            text: "Cuánto cuesta el mensaje en Colombia",
        },
        {
            kind: "p",
            text: "La tarifa depende del prefijo del país que recibe, no del tuyo. Colombia es uno de los mercados más baratos de la región: el mensaje de marketing está en el orden de uno o dos centavos de dólar, y los de utilidad y autenticación cuestan una fracción de eso. Meta empezó además a facturar en pesos colombianos en 2026.",
        },
        {
            kind: "callout",
            title: "Por qué no damos una cifra exacta",
            text: "Meta actualiza su tarifario varias veces al año y las cifras que publican los revendedores no coinciden entre sí. Para presupuestar, toma el número de la tarifa oficial de Meta para Colombia el día que cotizas: es la única fuente que no tiene incentivo para redondear a su favor.",
        },
        {
            kind: "p",
            text: "Para dimensionar: un negocio que responde unas mil consultas al mes, con el cliente iniciando la conversación, paga a Meta una cantidad casi despreciable, porque casi todo cae en la ventana de servicio. El mismo negocio enviando mil mensajes de marketing al mes paga una cifra pequeña pero real, y que crece de forma lineal con cada campaña.",
        },

        {
            kind: "h2",
            id: "bsp",
            text: "El costo del proveedor, que es donde está la sorpresa",
        },
        {
            kind: "p",
            text: "No se contrata la API directamente con Meta: se pasa por un proveedor de soluciones (BSP). Ahí es donde los modelos se separan y donde conviene leer la letra pequeña.",
        },
        {
            kind: "list",
            items: [
                "Margen por mensaje: algunos proveedores suman unos milésimos de dólar sobre cada mensaje. Con volumen bajo es irrelevante; con volumen alto puede superar lo que cobra Meta.",
                "Cuota mensual fija: otros cobran una suscripción por número conectado, la uses o no.",
                "Cobro por usuario o por agente: habitual en las plataformas que incluyen bandeja de entrada compartida.",
                "Límite de contactos: algunos planes cobran por contacto único al mes, un modelo que castiga justo al negocio que crece.",
            ],
        },
        {
            kind: "p",
            text: "Antes de firmar, pide la simulación de la factura con tu volumen real de mensajes y de contactos, no con el del plan que te quieren vender. La pregunta que ordena la conversación es simple: si el mes que viene duplico los mensajes, ¿cuánto pago?",
        },

        {
            kind: "h2",
            id: "tercer-costo",
            text: "El tercer costo: la herramienta que ejecuta el bot",
        },
        {
            kind: "p",
            text: "Meta entrega el mensaje y el BSP da el acceso, pero alguien tiene que decidir qué responder. Eso vive en una plataforma de automatización, un servidor propio o el software del propio proveedor. Si el bot usa un modelo de lenguaje, se suma el consumo de tokens de ese modelo, que se factura aparte y crece con la longitud de las conversaciones.",
        },
        {
            kind: "p",
            text: "Es la partida que más se olvida al cotizar y la única de las tres que se puede optimizar con diseño: acortar el contexto que se envía al modelo, cachear las respuestas frecuentes y resolver con reglas lo que no necesita un modelo bajan esta factura sin tocar la experiencia del cliente.",
        },

        {
            kind: "h2",
            id: "presupuesto",
            text: "Cómo armar el presupuesto sin llevarte sustos",
        },
        {
            kind: "p",
            text: "Estima estas cinco cifras antes de pedir cotizaciones. Con ellas cualquier proveedor serio puede darte un número, y podrás comparar propuestas que hoy no son comparables:",
        },
        {
            kind: "list",
            ordered: true,
            items: [
                "Conversaciones iniciadas por el cliente al mes.",
                "Mensajes de utilidad que vas a enviar (confirmaciones, recordatorios).",
                "Mensajes de marketing al mes, si vas a hacer campañas.",
                "Contactos únicos que vas a tocar al mes.",
                "Si el bot va a usar IA generativa o responder con reglas.",
            ],
        },
        {
            kind: "quote",
            text: "El error de presupuesto más caro no es equivocarse en la tarifa por mensaje: es descubrir en el mes cuatro que el plan cobra por contacto único.",
        },
    ],

    faq: [
        {
            id: "whatsapp-api-gratis",
            question: "¿Hay alguna parte gratuita en la API de WhatsApp Business?",
            answer:
                "Sí. Los mensajes de servicio, que son las respuestas que envías dentro de la ventana de 24 horas abierta por el cliente, no tienen costo para Meta. Un bot de atención bien diseñado hace que la mayor parte del tráfico caiga en esa ventana y pague muy poco.",
        },
        {
            id: "diferencia-app-gratuita",
            question: "¿En qué se diferencia de la app gratuita de WhatsApp Business?",
            answer:
                "La aplicación gratuita funciona en un teléfono, con un solo usuario a la vez y sin integración con otros sistemas. La API no tiene interfaz propia: se conecta a tu CRM o a tu automatización, admite varios agentes en paralelo y permite enviar plantillas, pero cobra por mensaje y exige verificar la empresa.",
        },
        {
            id: "numero-existente",
            question: "¿Puedo usar mi número actual de WhatsApp?",
            answer:
                "Sí, pero la migración borra el historial de chats de ese número y ya no podrás usarlo en la app normal: un número vive en la app o en la API, nunca en las dos. Si el número es el principal del negocio, conviene planear la migración fuera de horario de atención.",
        },
        {
            id: "verificacion-empresa",
            question: "¿Qué se necesita para que aprueben la cuenta?",
            answer:
                "Meta exige verificar la empresa con documentos de constitución, un dominio propio y datos que coincidan con el registro mercantil, además de un número que no esté activo en la app de WhatsApp. El proceso suele tardar entre unos días y un par de semanas según la calidad de la documentación.",
        },
    ],

    related: ["chatbot-vs-agente-de-ia", "n8n-vs-make-vs-zapier"],
    relatedServices: ["chatbot-whatsapp", "agentes-ia", "integracion-crm"],
};
