import type { BlogPost } from "../types";

/**
 * Third-party pricing changes. Figures here are orders of magnitude and the
 * article says where to verify them, rather than quoting a number that will be
 * wrong in six months and can't be corrected once it's been cited.
 */
export const n8nVsMakeVsZapier: BlogPost = {
    slug: "n8n-vs-make-vs-zapier",
    category: "automatizacion",

    navLabel: "n8n vs Make vs Zapier",
    title: "n8n, Make o Zapier: cuál elegir según lo que vas a automatizar",
    excerpt:
        "Las tres hacen lo mismo en la demo. Se separan en cómo cobran, en qué pasa cuando un flujo falla y en si puedes llevarte el trabajo contigo. Comparativa desde la implementación real.",

    metaTitle: "n8n vs Make vs Zapier: cuál elegir en 2026",
    metaDescription:
        "Comparativa práctica de n8n, Make y Zapier: modelo de cobro, límites reales, manejo de errores y cuándo conviene cada una. Escrita desde proyectos implementados.",

    author: "diego",
    publishedAt: "2026-08-10",
    readingMinutes: 9,

    keyTakeaway:
        "Zapier cobra por acción ejecutada, Make por operación de cada módulo y n8n por ejecución completa del flujo, sin importar cuántos pasos tenga. Esa diferencia, y no la lista de funciones, es la que decide el costo: un flujo de ocho pasos cuesta ocho veces más en Zapier que en n8n para el mismo trabajo. Zapier conviene por debajo de unos 100 USD al mes de gasto; a partir de ahí n8n autoalojado casi siempre gana. Make queda en medio y destaca cuando el flujo tiene mucha lógica visual.",

    blocks: [
        {
            kind: "p",
            text: "Las tres plataformas conectan aplicaciones y ejecutan flujos sin que escribas un backend. En una demo de quince minutos parecen intercambiables: eliges un disparador, arrastras unas cajas, la cosa funciona. La diferencia aparece al tercer mes, cuando el flujo se ejecuta diez mil veces y llega la factura.",
        },
        {
            kind: "p",
            text: "Esta comparativa no repite la tabla de funciones que ya está en las tres páginas oficiales. Se centra en las cuatro cosas que cambian la decisión cuando el flujo pasa a producción: cómo cobran, qué pasa cuando algo falla, qué tan lejos llega el límite del editor visual y si puedes llevarte lo construido a otra parte.",
        },

        {
            kind: "h2",
            id: "como-cobran",
            text: "Cómo cobra cada una (aquí se decide casi todo)",
        },
        {
            kind: "p",
            text: "El modelo de cobro es la variable con más peso y la que menos se mira al elegir. Las tres venden «operaciones», pero cuentan cosas distintas:",
        },
        {
            kind: "list",
            items: [
                "Zapier cuenta cada acción. Un Zap de cinco pasos que corre mil veces consume cinco mil tareas.",
                "Make cuenta cada operación de cada módulo, con una lógica parecida, aunque su paquete base es más barato y el salto entre planes es más suave.",
                "n8n cuenta la ejecución completa del flujo. Un workflow de veinte nodos que procesa quinientos registros es una ejecución, no veinte ni diez mil.",
            ],
        },
        {
            kind: "p",
            text: "El efecto compuesto es grande. Para un escenario de diez mil ejecuciones mensuales con ocho pasos cada una, n8n en la nube ronda las decenas de dólares al mes; Make, un par de cientos; Zapier, varios cientos. No es que Zapier sea caro por capricho: es que su unidad de cobro crece con la complejidad del flujo, y los flujos siempre se vuelven más complejos.",
        },
        {
            kind: "callout",
            title: "Verifica los precios en la fuente",
            text: "Las tres plataformas cambian planes y límites varias veces al año. Las cifras de arriba son órdenes de magnitud para dimensionar la decisión, no una cotización. Antes de firmar, contrasta con las páginas de precios oficiales de n8n, Make y Zapier con tu volumen real.",
        },

        {
            kind: "h2",
            id: "comparativa",
            text: "Comparativa rápida",
        },
        {
            kind: "table",
            caption: "Diferencias que importan al pasar a producción.",
            head: ["", "Zapier", "Make", "n8n"],
            rows: [
                ["Unidad de cobro", "Acción ejecutada", "Operación por módulo", "Ejecución de flujo"],
                ["Autoalojado", "No", "No", "Sí, sin límite de ejecuciones"],
                ["Código dentro del flujo", "Limitado", "Parcial", "JavaScript y Python nativos"],
                ["Curva de aprendizaje", "La más suave", "Media", "La más exigente"],
                ["Catálogo de integraciones", "El más amplio", "Amplio", "Menor, con HTTP genérico"],
                ["Portabilidad del trabajo", "Baja", "Baja", "Alta: el flujo es un JSON tuyo"],
            ],
        },

        {
            kind: "h2",
            id: "cuando-zapier",
            text: "Cuándo Zapier es la respuesta correcta",
        },
        {
            kind: "p",
            text: "Cuando el volumen es bajo, los flujos son cortos y nadie del equipo quiere mantener infraestructura. Zapier tiene el catálogo de integraciones más grande del mercado y la curva de aprendizaje más suave: una persona de operaciones sin perfil técnico construye algo útil en una tarde.",
        },
        {
            kind: "p",
            text: "Ese es un argumento real y suele subestimarse. Una automatización que el equipo puede corregir sin llamar a nadie vale más que otra un 40 % más barata que solo entiende quien la construyó. Si tu gasto mensual en automatización está por debajo de los 100 USD, migrar a otra herramienta te va a costar más en horas de lo que ahorras en licencias.",
        },

        {
            kind: "h2",
            id: "cuando-make",
            text: "Cuándo Make",
        },
        {
            kind: "p",
            text: "Make destaca cuando el flujo tiene ramificaciones, iteradores y agregadores: su lienzo visual muestra la forma de la lógica mejor que la lista vertical de Zapier. Para transformaciones de datos con varios caminos posibles, ver el flujo dibujado ahorra horas de depuración.",
        },
        {
            kind: "p",
            text: "También es el punto de entrada más barato de los tres si necesitas la nube gestionada. El inconveniente es el mismo que el de Zapier: sigues alquilando la casa. Si la plataforma sube precios o cierra una integración, no tienes salida que no sea rehacer el trabajo.",
        },

        {
            kind: "h2",
            id: "cuando-n8n",
            text: "Cuándo n8n",
        },
        {
            kind: "p",
            text: "n8n gana en tres situaciones concretas: volumen alto, lógica que se sale de lo que el editor visual permite expresar, y datos que no pueden salir de tu infraestructura.",
        },
        {
            kind: "list",
            items: [
                "Volumen: al cobrar por ejecución y no por paso, el costo deja de crecer con la complejidad del flujo.",
                "Lógica: puedes escribir JavaScript o Python dentro de un nodo cuando el problema no cabe en una caja predefinida, sin salir de la herramienta.",
                "Control: la edición comunitaria se autoaloja en un servidor propio por el costo del servidor. Para un negocio que maneja datos de clientes bajo la Ley 1581 de 2012, que la información no pase por un tercero deja de ser una preferencia técnica.",
                "Portabilidad: un flujo de n8n es un JSON que exportas y mueves. No es una promesa de marketing, es un archivo.",
            ],
        },
        {
            kind: "p",
            text: "El costo está en otro lado: alguien tiene que mantener ese servidor, actualizar la instancia y responder cuando se cae a las once de la noche. Autoalojar no es gratis, es cambiar una factura por trabajo. Si nadie en tu equipo va a hacer ese trabajo, n8n en su versión de nube sigue siendo competitivo y te quita el problema de encima.",
        },

        {
            kind: "h2",
            id: "errores",
            text: "Lo que nadie mira en la demo: qué pasa cuando falla",
        },
        {
            kind: "p",
            text: "Toda automatización falla. La API del CRM devuelve un 500, el cliente escribe un emoji que rompe el parser, el token caduca un domingo. La pregunta útil no es si falla, sino qué encuentras el lunes.",
        },
        {
            kind: "p",
            text: "Antes de elegir, prueba deliberadamente estas tres cosas en la versión gratuita:",
        },
        {
            kind: "list",
            ordered: true,
            items: [
                "Reintentos: ¿puedes definir cuántas veces reintenta y con qué espera entre intentos, o solo se marca como fallido?",
                "Historial de ejecuciones: ¿ves los datos exactos que entraron y salieron de cada paso, o solo un mensaje de error?",
                "Aviso: ¿te enteras del fallo por una alerta, o porque un cliente reclama tres días después?",
            ],
        },
        {
            kind: "quote",
            text: "Una automatización sin alerta de fallo no es una automatización: es una fuga de datos que todavía no has descubierto.",
        },

        {
            kind: "h2",
            id: "como-decidir",
            text: "Cómo decidir en diez minutos",
        },
        {
            kind: "p",
            text: "Toma el flujo que más veces vas a ejecutar. Cuenta sus pasos y multiplícalos por las ejecuciones mensuales que esperas: ese número es tu consumo en Zapier y aproximadamente en Make, mientras que en n8n tu consumo es solo el número de ejecuciones. Lleva ambos números a las páginas de precios y compara. Si la diferencia anual no paga varios días de trabajo de configuración y mantenimiento, quédate con la herramienta más simple.",
        },
        {
            kind: "p",
            text: "Y una regla que se cumple casi siempre: empieza por lo simple. Es más fácil migrar un flujo que ya demostró su valor en Zapier que justificar un servidor para una automatización que todavía no sabes si vas a usar.",
        },
    ],

    faq: [
        {
            id: "n8n-gratis",
            question: "¿n8n es realmente gratis?",
            answer:
                "La edición comunitaria de n8n es de código abierto y se autoaloja sin límite de ejecuciones, pero necesita un servidor que alguien debe pagar y mantener. El costo real es el del servidor más las horas de administración. La versión en la nube que gestiona n8n sí tiene un plan de pago mensual.",
        },
        {
            id: "migrar-zapier-n8n",
            question: "¿Se pueden migrar flujos de Zapier a n8n automáticamente?",
            answer:
                "No existe una conversión automática fiable entre plataformas: los flujos se reconstruyen a mano. Un flujo sencillo se rehace en menos de una hora; uno con muchas ramificaciones y transformaciones puede llevar un día. Conviene migrar primero el flujo de mayor volumen, que es el que paga la migración.",
        },
        {
            id: "cual-para-whatsapp",
            question: "¿Cuál conviene para automatizar WhatsApp?",
            answer:
                "Las tres se conectan a la API de WhatsApp Business, pero un bot conversacional ejecuta un flujo por cada mensaje recibido. Con el cobro por acción de Zapier ese volumen se vuelve caro rápido, así que para conversaciones lo habitual es n8n; para notificaciones puntuales cualquiera de las tres sirve.",
        },
    ],

    related: ["chatbot-vs-agente-de-ia", "cuanto-cuesta-la-api-de-whatsapp-business"],
    relatedServices: ["automatizaciones-n8n", "automatizacion-de-procesos", "integraciones-api"],
};
