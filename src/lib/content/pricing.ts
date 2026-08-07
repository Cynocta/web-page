import type { FaqItem } from "./faq";

/**
 * Copy for the standalone pricing page. Spanish only for now, like the service
 * pages — so it claims no hreflang alternate.
 */
export const pricingPage = {
    metaTitle: "Precios de automatización con IA",
    metaDescription:
        "Precios de referencia de implementación y suscripción: web, chatbot de WhatsApp y proyectos a medida. Sin contratos de permanencia y con el alcance explicado.",
    eyebrow: "Precios",
    heading: "Precios de referencia, propuestas a medida.",
    intro:
        "Publicamos las cifras de partida porque esconderlas solo hace perder el tiempo a los dos. El número final depende del alcance, y eso se decide hablando.",
    facts: [
        { value: "Desde 750 USD", label: "Proyecto inicial" },
        { value: "Sin permanencia", label: "Contratos" },
        { value: "USD · COP · EUR", label: "Divisas" },
    ],
    howTitle: "Cómo se calcula el precio",
    howIntro:
        "Tres variables mueven la cifra. Sabiendo cuáles son, puedes estimar por tu cuenta en qué rango cae tu caso antes de escribirnos.",
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
                "La implementación se divide en dos: una parte al arrancar y el resto contra entrega. La suscripción se cobra mensual y se puede cancelar avisando con un mes. Aceptamos pesos colombianos, dólares y euros.",
        },
        {
            id: "sin-permanencia",
            question: "¿Hay contrato de permanencia?",
            answer:
                "No. Si la suscripción deja de aportarte valor, la cancelas. Lo construido es tuyo: el código, los flujos y los datos se te entregan. Preferimos que te quedes porque funciona, no porque hay una cláusula.",
        },
        {
            id: "presupuesto-bajo",
            question: "¿Y si mi presupuesto no llega?",
            answer:
                "Te lo decimos en la primera conversación en vez de estirar el alcance. Muchas veces conviene empezar por un solo flujo, medir el retorno y crecer desde ahí. Y si no somos la opción correcta, también lo decimos.",
        },
    ] satisfies FaqItem[],
};
