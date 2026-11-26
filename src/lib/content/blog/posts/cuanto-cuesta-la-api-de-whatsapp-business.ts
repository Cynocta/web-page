import type { BlogPost } from "../types";

/**
 * Rates are Meta's own USD list rates from the rate card effective
 * 1 October 2026 (developers.facebook.com → WhatsApp → Pricing → "USD rates
 * and volume tiers"). Meta only changes prices on the first day of a quarter
 * with a month's notice, so this article is checked against the card at the
 * start of every quarter and `updatedAt` moves when a number changes.
 *
 * Search Console (Nov 2026): this is the page with the most impressions on the
 * site, almost all from "precio / precios / costo api whatsapp business"
 * variants. The title and h1 lead with "precio" because that is the word
 * people type.
 */
export const costoApiWhatsapp: BlogPost = {
    slug: "cuanto-cuesta-la-api-de-whatsapp-business",
    category: "whatsapp",

    navLabel: "Precio de la API de WhatsApp",
    title: "Precio de la API de WhatsApp Business en 2026: cuánto cuesta por país",
    excerpt:
        "Las tarifas oficiales de Meta por mensaje en Colombia, México, España y el resto de Latinoamérica, qué cambió en octubre de 2026 con los mensajes de servicio y las dos facturas que no aparecen en la tarifa.",

    metaTitle: "Precio API de WhatsApp Business 2026: tarifas por país",
    metaDescription:
        "Tarifas oficiales de Meta por mensaje (octubre de 2026) para Colombia, México, España y LATAM, los 1.000 mensajes de servicio gratis y lo que cobra el proveedor.",

    author: "diego",
    publishedAt: "2026-08-10",
    updatedAt: "2026-11-25",
    readingMinutes: 9,

    keyTakeaway:
        "Meta cobra la API de WhatsApp Business por cada mensaje entregado, según su categoría y el país de quien lo recibe. En Colombia, con la tarifa vigente desde el 1 de octubre de 2026, un mensaje de marketing cuesta 0,0125 USD y uno de utilidad, autenticación o servicio cuesta 0,0008 USD. Cada número tiene 1.000 mensajes de servicio gratis al mes; desde octubre de 2026 los que pasan de ese tope se cobran. A la tarifa de Meta hay que sumarle el proveedor de la API (BSP) y la herramienta que ejecuta el bot: son tres facturas distintas, no una.",

    blocks: [
        {
            kind: "p",
            text: "Casi todas las cotizaciones de un bot de WhatsApp mezclan tres costos que se pagan a tres empresas diferentes y se comportan de forma distinta. Separarlos es la única manera de saber si un presupuesto tiene sentido.",
        },
        {
            kind: "list",
            ordered: true,
            items: [
                "Lo que cobra Meta por entregar cada mensaje. Es el único precio público y es igual para todos.",
                "Lo que cobra tu proveedor de API (BSP) por darte acceso y soporte.",
                "Lo que cuesta la herramienta que ejecuta la lógica del bot y su alojamiento.",
            ],
        },

        {
            kind: "h2",
            id: "tarifas-por-pais",
            text: "Precio por mensaje en cada país",
        },
        {
            kind: "p",
            text: "La tarifa la decide el prefijo del número que recibe el mensaje, no el tuyo. Si tu negocio está en Bogotá pero le escribes a un cliente en Ciudad de México, pagas la tarifa de México. Estas son las tarifas de lista de Meta en dólares:",
        },
        {
            kind: "table",
            caption:
                "Tarifa de lista de Meta por mensaje entregado, en USD, vigente desde el 1 de octubre de 2026. Fuente: tarifario oficial de la plataforma de WhatsApp Business.",
            head: ["Mercado", "Marketing", "Utilidad y autenticación", "Servicio (pasados los 1.000 gratis)"],
            rows: [
                ["Colombia", "0,0125", "0,0008", "0,0008"],
                ["México", "0,0397", "0,0085", "0,0085"],
                ["Argentina", "0,0618", "0,0260", "0,0260"],
                ["Chile", "0,0889", "0,0200", "0,0200"],
                ["Perú", "0,0703", "0,0300", "0,0300"],
                ["Brasil", "0,0625", "0,0068", "0,0068"],
                ["Resto de Latinoamérica", "0,0740", "0,0113", "0,0113"],
                ["España", "0,0707", "0,0200", "0,0200"],
                ["Estados Unidos y Canadá", "0,0250", "0,0034", "0,0034"],
            ],
        },
        {
            kind: "p",
            text: "Colombia es, con diferencia, el mercado más barato de la región: un mensaje de marketing cuesta un tercio que en México y una séptima parte que en Chile, y uno de utilidad cuesta menos de una décima de centavo. «Resto de Latinoamérica» agrupa, entre otros, a Ecuador, Bolivia, Venezuela y Uruguay.",
        },
        {
            kind: "callout",
            title: "Cada cuánto cambian estas cifras",
            text: "Meta solo cambia precios el primer día de un trimestre (enero, abril, julio y octubre) y avisa con un mes de anticipación. Revisamos esta tabla al inicio de cada trimestre; la fecha de actualización está arriba. Los mensajes de utilidad y autenticación tienen además descuentos por volumen que solo se notan a partir de decenas de miles de mensajes al mes.",
        },

        {
            kind: "h2",
            id: "que-cambio",
            text: "Qué cambió en 2025 y en octubre de 2026",
        },
        {
            kind: "p",
            text: "Hasta junio de 2025, Meta cobraba por conversación: abrías una ventana de 24 horas y dentro de ella los mensajes no sumaban costo. Desde el 1 de julio de 2025 el cobro es por mensaje entregado. Si una cotización todavía habla de «conversaciones de 24 horas» como unidad de cobro, está desactualizada y sus números no sirven.",
        },
        {
            kind: "p",
            text: "El segundo cambio llegó el 1 de octubre de 2026 y es el que más cotizaciones se han saltado: los mensajes de servicio, las respuestas que envías cuando el cliente te escribe primero, dejaron de ser gratis sin límite. Ahora cada número tiene 1.000 mensajes de servicio gratis al mes, que no se acumulan, y a partir de ahí se cobran a la tarifa de utilidad del país. Las plantillas de utilidad enviadas dentro de esa misma ventana, que antes eran gratis, también se cobran.",
        },
        {
            kind: "p",
            text: "En Colombia el efecto es pequeño porque la tarifa de servicio es muy baja: 10.000 respuestas al mes cuestan unos 7,20 USD. En Chile o Perú las mismas respuestas cuestan 180 y 270 USD, y ahí el diseño de la conversación ya pesa en la factura.",
        },

        {
            kind: "h2",
            id: "categorias",
            text: "Las cuatro categorías y por qué importan",
        },
        {
            kind: "p",
            text: "Meta clasifica cada plantilla y le aplica una tarifa distinta. La diferencia entre categorías no es de céntimos: en Colombia una plantilla de marketing cuesta quince veces lo que la misma frase enviada como utilidad.",
        },
        {
            kind: "table",
            caption: "Categorías de mensaje en la plataforma de WhatsApp Business.",
            head: ["Categoría", "Para qué es", "Cómo se cobra"],
            rows: [
                ["Servicio", "Tu respuesta cuando el cliente te escribió en las últimas 24 h", "1.000 gratis al mes por número; después, tarifa de utilidad"],
                ["Utilidad", "Confirmaciones, estados de pedido, recordatorios de cita", "La tarifa más baja, con descuento por volumen"],
                ["Autenticación", "Códigos de verificación de un solo uso", "Igual que utilidad en Latinoamérica"],
                ["Marketing", "Promociones, novedades, reactivación de clientes", "La más alta, sin descuento por volumen"],
            ],
        },
        {
            kind: "callout",
            title: "La clasificación no la eliges tú",
            text: "Meta revisa el contenido de la plantilla y la reclasifica si considera que una «confirmación de pedido» es en realidad publicidad. Colar promociones en plantillas de utilidad no abarata la factura: la recategorizan y, si insistes, se arriesga la calidad del número.",
        },
        {
            kind: "p",
            text: "La consecuencia práctica es que el diseño de la conversación tiene efecto directo en el costo. Un flujo que consigue que sea el cliente quien escriba primero convierte casi todo el intercambio en mensajes de servicio, los más baratos. Un flujo que persigue al cliente con plantillas de marketing paga cada intento a la tarifa más alta.",
        },
        {
            kind: "p",
            text: "Hay una excepción útil: cuando el cliente llega desde un anuncio de clic a WhatsApp o desde el botón de una página de Facebook, se abre una ventana gratuita en la que no se cobra ningún mensaje, ni siquiera el de marketing. Solo aplica si el cliente escribe desde la app del teléfono.",
        },

        {
            kind: "h2",
            id: "cuanto-por-mes",
            text: "Cuánto pagas al mes: un ejemplo en Colombia",
        },
        {
            kind: "p",
            text: "Un negocio de servicios en Colombia con un bot de atención y campañas mensuales: recibe consultas que generan 1.500 respuestas, envía 600 recordatorios de cita y manda una campaña de 3.000 mensajes de marketing.",
        },
        {
            kind: "table",
            caption: "Factura mensual de Meta con la tarifa de Colombia de octubre de 2026, en USD.",
            head: ["Partida", "Cálculo", "Costo"],
            rows: [
                ["Respuestas de servicio", "1.500 − 1.000 gratis = 500 × 0,0008", "0,40"],
                ["Recordatorios (utilidad)", "600 × 0,0008", "0,48"],
                ["Campaña (marketing)", "3.000 × 0,0125", "37,50"],
                ["Total a Meta", "", "38,38"],
            ],
        },
        {
            kind: "p",
            text: "El 98 % de la factura es la campaña. La atención y los recordatorios cuestan menos de un dólar. El mismo negocio con clientes en México pagaría unos 128 USD al mes, casi todo por el marketing. La lección se repite en todos los países: el bot de atención casi no le cuesta a Meta; lo que mueve la factura es cuánto marketing envías.",
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
                "Margen por mensaje: algunos proveedores suman unos milésimos de dólar sobre cada mensaje. En Colombia eso puede duplicar o triplicar lo que cobra Meta por un mensaje de utilidad.",
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
            text: "Estima estas cinco cifras antes de pedir cotizaciones. Con ellas y la tabla de arriba puedes calcular tú mismo la parte de Meta, y podrás comparar propuestas que hoy no son comparables:",
        },
        {
            kind: "list",
            ordered: true,
            items: [
                "Respuestas a clientes que te escriben primero, al mes.",
                "Mensajes de utilidad que vas a enviar (confirmaciones, recordatorios).",
                "Mensajes de marketing al mes y a qué países van.",
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
            id: "precio-colombia",
            question: "¿Cuánto cobra la API de WhatsApp por mensaje en Colombia?",
            answer:
                "Con la tarifa de Meta vigente desde el 1 de octubre de 2026: 0,0125 USD por mensaje de marketing y 0,0008 USD por mensaje de utilidad, autenticación o servicio. Los primeros 1.000 mensajes de servicio de cada mes son gratis. A eso se suma lo que cobre tu proveedor de la API.",
        },
        {
            id: "whatsapp-api-gratis",
            question: "¿Hay alguna parte gratuita en la API de WhatsApp Business?",
            answer:
                "Sí, dos. Cada número tiene 1.000 mensajes de servicio gratis al mes, que son las respuestas que envías cuando el cliente te escribió en las últimas 24 horas. Y cuando el cliente llega desde un anuncio de clic a WhatsApp se abre una ventana en la que ningún mensaje se cobra. Desde octubre de 2026 las respuestas que pasan de 1.000 al mes sí se pagan.",
        },
        {
            id: "diferencia-app-gratuita",
            question: "¿En qué se diferencia de la app gratuita de WhatsApp Business?",
            answer:
                "La aplicación gratuita funciona en un teléfono y no se integra con otros sistemas. La API no tiene interfaz propia: se conecta a tu CRM o a tu automatización, admite varios agentes en paralelo y permite enviar plantillas, pero cobra por mensaje y exige verificar la empresa.",
        },
        {
            id: "numero-existente",
            question: "¿Puedo usar mi número actual de WhatsApp?",
            answer:
                "Sí. Meta permite conectar a la API un número que ya usas en la app de WhatsApp Business y seguir usando la app en el teléfono, con los chats sincronizados entre las dos y hasta seis meses de historial. A cambio, en la app se desactivan las listas de difusión y los mensajes temporales, y el número queda limitado a 20 mensajes por segundo.",
        },
        {
            id: "verificacion-empresa",
            question: "¿Qué se necesita para que aprueben la cuenta?",
            answer:
                "Meta exige verificar la empresa con documentos de constitución, un dominio propio y datos que coincidan con el registro mercantil. El proceso suele tardar entre unos días y un par de semanas según la calidad de la documentación.",
        },
    ],

    related: ["chatbot-vs-agente-de-ia", "n8n-vs-make-vs-zapier"],
    relatedServices: ["chatbot-whatsapp", "agentes-ia", "integracion-crm"],
};
