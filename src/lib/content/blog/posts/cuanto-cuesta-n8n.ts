import type { BlogPost } from "../types";

/**
 * Prices are n8n's own, read from n8n.io/pricing on 25 November 2026 (EUR,
 * billed annually; the page shows no monthly-billing or USD prices) and the
 * licence terms from LICENSE.md in the n8n repository. Server prices are
 * ranges, not a quote, because they depend on the provider.
 *
 * Targets the questions people type before choosing n8n: "n8n es gratis",
 * "n8n costo", "n8n es de pago", "n8n precios colombia", "n8n autoalojado".
 */
export const cuantoCuestaN8n: BlogPost = {
    slug: "cuanto-cuesta-n8n",
    category: "automatizacion",

    navLabel: "Cuánto cuesta n8n",
    title: "¿n8n es gratis? Cuánto cuesta n8n en 2026, en la nube y en tu servidor",
    excerpt:
        "n8n se puede usar gratis en tu propio servidor o pagar la versión en la nube desde 20 euros al mes. Qué incluye cada opción, qué prohíbe la licencia y cuánto cuesta de verdad autoalojarlo.",

    metaTitle: "¿n8n es gratis? Precios de n8n en 2026",
    metaDescription:
        "Cuánto cuesta n8n: planes en la nube desde 20 € al mes, la edición gratuita autoalojada, qué permite su licencia y el costo real de tener n8n en tu servidor.",

    author: "diego",
    publishedAt: "2026-11-25",
    readingMinutes: 7,

    keyTakeaway:
        "n8n es gratis si lo instalas en tu propio servidor: la edición Community no cobra licencia y su licencia permite usarlo para los procesos internos de tu empresa, aunque no revenderlo como servicio a terceros. Si prefieres que n8n lo aloje, la nube cuesta 20 € al mes por 2.500 ejecuciones (Starter) o 50 € al mes por 10.000 (Pro), con pago anual. En ambos casos n8n cuenta ejecuciones completas del flujo, no pasos. Autoalojarlo cuesta un servidor de unos 5 a 25 USD al mes más el tiempo de mantenerlo.",

    blocks: [
        {
            kind: "p",
            text: "La pregunta «¿n8n es gratis?» tiene dos respuestas correctas, y la confusión viene de ahí. El software es de código disponible y se puede instalar sin pagar nada. Pero n8n, la empresa, también vende una versión alojada en su nube, con planes de pago. Cuál te conviene depende menos del precio que de quién va a mantener el servidor.",
        },

        {
            kind: "h2",
            id: "precios-nube",
            text: "Precios de n8n en la nube",
        },
        {
            kind: "p",
            text: "En la nube, n8n se encarga del servidor, las actualizaciones y las copias de seguridad. Pagas por ejecuciones al mes. Estos son los planes publicados en su página de precios:",
        },
        {
            kind: "table",
            caption:
                "Planes de n8n, en euros al mes con facturación anual, según n8n.io/pricing en noviembre de 2026. Todos incluyen usuarios y flujos ilimitados.",
            head: ["Plan", "Precio", "Ejecuciones al mes", "Para quién"],
            rows: [
                ["Starter", "20 €", "2.500", "Un equipo pequeño con pocos flujos"],
                ["Pro", "50 €", "10.000", "Varios procesos en producción"],
                ["Business", "667 €", "40.000", "Empresas que necesitan SSO, entornos y control de versiones; hoy solo autoalojado"],
                ["Enterprise", "A consultar", "A medida", "Grandes volúmenes y requisitos de cumplimiento"],
            ],
        },
        {
            kind: "p",
            text: "Hay una prueba gratuita de la nube que no pide tarjeta, y las startups de menos de 20 empleados y menos de 5 millones de euros de financiación tienen el plan Business a mitad de precio. Los datos de la nube se alojan en servidores de Frankfurt, en la Unión Europea.",
        },
        {
            kind: "callout",
            title: "Qué cuenta como una ejecución",
            text: "Una ejecución es una corrida completa del flujo, sin importar cuántos pasos tenga ni cuántos datos procese. Un flujo de veinte nodos que procesa quinientos registros consume una ejecución. Es la diferencia principal con Zapier y Make, que cobran por cada paso u operación.",
        },

        {
            kind: "h2",
            id: "gratis-autoalojado",
            text: "n8n gratis: la edición Community autoalojada",
        },
        {
            kind: "p",
            text: "La edición Community se descarga del repositorio público de n8n y se instala en cualquier servidor, normalmente con Docker. No tiene límite de ejecuciones ni de flujos: el límite lo pone la capacidad de tu servidor.",
        },
        {
            kind: "p",
            text: "Lo que no es: software libre en el sentido clásico. n8n usa su propia «Sustainable Use License», y conviene leer qué permite antes de construir un negocio encima:",
        },
        {
            kind: "list",
            items: [
                "Permite usarlo y modificarlo para los procesos internos de tu empresa, o para uso personal o sin fines comerciales.",
                "No permite ofrecer n8n a terceros como un servicio comercial, por ejemplo venderlo alojado a tus clientes como si fuera tu producto.",
                "Algunas funciones quedan fuera de la edición gratuita y piden licencia de pago: inicio de sesión único (SSO), entornos separados de pruebas y producción, y control de versiones con Git.",
            ],
        },
        {
            kind: "p",
            text: "Para una pyme que quiere automatizar su propia operación, ninguna de esas restricciones suele aplicar. Se notan en empresas con equipos grandes, donde el SSO y los entornos separados dejan de ser un lujo.",
        },

        {
            kind: "h2",
            id: "costo-real",
            text: "Lo que cuesta de verdad autoalojar n8n",
        },
        {
            kind: "p",
            text: "La licencia es gratis; el servidor y el tiempo no. Un servidor virtual de 2 núcleos y 4 GB de memoria, suficiente para miles de ejecuciones al día en flujos normales, cuesta entre unos 5 y 25 USD al mes según el proveedor. Encima de eso hay trabajo que en la nube hace n8n:",
        },
        {
            kind: "list",
            items: [
                "Actualizar n8n, que publica versiones con frecuencia, y probar que los flujos sigan funcionando después.",
                "Copias de seguridad de la base de datos, donde viven los flujos y las credenciales.",
                "Certificado HTTPS, dominio y cortafuegos, porque los webhooks quedan expuestos a internet.",
                "Alertas cuando un flujo falla o el servidor se queda sin memoria, antes de que lo note un cliente.",
            ],
        },
        {
            kind: "table",
            caption: "Comparación orientativa para unas 10.000 ejecuciones al mes.",
            head: ["Opción", "Costo mensual", "Quién mantiene el servidor"],
            rows: [
                ["n8n en la nube (Pro)", "50 € con pago anual", "n8n"],
                ["n8n autoalojado", "5 a 25 USD de servidor", "Tú o tu proveedor"],
                ["Zapier o Make con flujos de varios pasos", "Varias veces más, porque cobran por paso", "La plataforma"],
            ],
        },
        {
            kind: "p",
            text: "La cuenta cambia con el volumen. Con pocas ejecuciones, el plan Starter sale más barato que pagar a alguien por mantener un servidor. Con decenas de miles de ejecuciones al mes, o con flujos que mueven datos sensibles que prefieres no sacar de tu infraestructura, autoalojar gana con claridad.",
        },

        {
            kind: "h2",
            id: "colombia",
            text: "Cuánto cuesta n8n en Colombia",
        },
        {
            kind: "p",
            text: "n8n no tiene precios locales: la nube se paga en euros con tarjeta internacional, así que el costo en pesos se mueve con la tasa de cambio y tu banco puede sumar una comisión por compra en el exterior. Autoalojado, el servidor se puede contratar en dólares con cualquier proveedor internacional o con uno local que facture en pesos.",
        },
        {
            kind: "p",
            text: "Para un negocio colombiano que empieza, el plan Starter alcanza para probar dos o tres procesos. Cuando la automatización ya sostiene ventas o atención, conviene pasar a un servidor propio, donde el costo deja de crecer con cada ejecución.",
        },
        {
            kind: "quote",
            text: "La pregunta útil no es si n8n es gratis, sino quién se entera primero cuando un flujo deja de funcionar un sábado.",
        },
    ],

    faq: [
        {
            id: "n8n-es-gratis",
            question: "¿n8n es gratis?",
            answer:
                "Sí, si lo instalas en tu propio servidor: la edición Community no cobra licencia ni limita ejecuciones. La versión en la nube de n8n es de pago, desde 20 € al mes con facturación anual.",
        },
        {
            id: "uso-comercial",
            question: "¿Puedo usar n8n gratis en mi empresa?",
            answer:
                "Sí, para automatizar los procesos internos de tu empresa. Lo que la licencia no permite es vender n8n a terceros como servicio alojado. Funciones como SSO o entornos separados requieren una licencia de pago.",
        },
        {
            id: "que-es-ejecucion",
            question: "¿Qué cuenta como una ejecución en n8n?",
            answer:
                "Cada corrida completa de un flujo, sin importar cuántos pasos tenga ni cuántos registros procese. Un flujo de veinte pasos que se dispara cien veces consume cien ejecuciones.",
        },
        {
            id: "n8n-colombia",
            question: "¿Cuánto cuesta n8n en Colombia?",
            answer:
                "Lo mismo que en cualquier país: la nube se cobra en euros (20 € al mes el plan Starter y 50 € el Pro, con pago anual) y el costo en pesos depende de la tasa de cambio. Autoalojado, pagas solo el servidor, entre unos 5 y 25 USD al mes.",
        },
    ],

    related: ["n8n-vs-make-vs-zapier", "chatbot-vs-agente-de-ia"],
    relatedServices: ["automatizaciones-n8n", "automatizacion-de-procesos", "integraciones-api"],
};
