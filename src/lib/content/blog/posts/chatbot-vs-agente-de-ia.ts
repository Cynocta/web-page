import type { BlogPost } from "../types";

export const chatbotVsAgenteIa: BlogPost = {
    slug: "chatbot-vs-agente-de-ia",
    category: "inteligencia-artificial",

    navLabel: "Chatbot vs agente de IA",
    title: "Chatbot o agente de IA: la diferencia que decide el presupuesto",
    excerpt:
        "Un chatbot sigue un guion; un agente decide qué hacer y ejecuta acciones. La distinción no es de marketing: cambia el costo, el riesgo y lo que hay que construir alrededor.",

    metaTitle: "Chatbot vs agente de IA: diferencias y cuándo usar cada uno",
    metaDescription:
        "Qué separa a un chatbot de reglas de un agente de IA con herramientas: control, costo, manejo de errores y en qué casos conviene cada uno para un negocio.",

    author: "mateo",
    publishedAt: "2026-08-10",
    readingMinutes: 7,

    keyTakeaway:
        "Un chatbot recorre un árbol de respuestas que alguien escribió por adelantado: es predecible, barato y se rompe en cuanto el cliente se sale del guion. Un agente de IA recibe un objetivo y decide en cada turno qué responder y qué herramienta usar —consultar el inventario, agendar, escribir en el CRM—, así que resuelve casos que nadie previó, pero cuesta más por conversación y puede equivocarse de formas nuevas. La elección no depende de cuál es más moderno, sino de si tus consultas son repetitivas o abiertas.",

    blocks: [
        {
            kind: "p",
            text: "«Chatbot con IA» se usa hoy para cosas que se parecen poco entre sí: desde un menú de opciones numeradas hasta un sistema que consulta tu base de datos y agenda una cita. Como el precio de ambas cosas se diferencia en un orden de magnitud, vale la pena tener clara la frontera antes de pedir una cotización.",
        },

        {
            kind: "h2",
            id: "chatbot",
            text: "Qué es un chatbot de reglas",
        },
        {
            kind: "p",
            text: "Un flujo conversacional definido de antemano. El cliente escribe, el sistema reconoce una intención o un número de menú, y devuelve la respuesta que le corresponde en el árbol. Todo lo que puede decir está escrito por una persona.",
        },
        {
            kind: "p",
            text: "Sus virtudes son reales y a menudo se menosprecian: es determinista, así que la misma pregunta da la misma respuesta siempre; su costo por conversación es prácticamente cero porque no consume tokens de ningún modelo; y su comportamiento es auditable, lo que importa cuando el mensaje toca precios, garantías o condiciones legales.",
        },
        {
            kind: "p",
            text: "Su límite también es real: cualquier pregunta que no esté prevista termina en «no entendí» o en un humano. Y el mantenimiento crece con el árbol, porque cada caso nuevo es una rama más.",
        },

        {
            kind: "h2",
            id: "agente",
            text: "Qué es un agente de IA",
        },
        {
            kind: "p",
            text: "Un agente no recorre un árbol: recibe un objetivo, un contexto y un conjunto de herramientas, y decide en cada turno qué hacer. Las herramientas son funciones que tú defines y que el modelo puede invocar: consultar el stock, buscar una factura, crear una cita, escalar a una persona.",
        },
        {
            kind: "p",
            text: "Esa capacidad de decidir es lo que cambia el resultado. El cliente puede preguntar dos cosas a la vez, cambiar de idea a mitad de frase o escribir con faltas y el agente sigue la conversación. No hay que prever cada camino, porque el modelo compone la respuesta a partir de lo que tiene disponible.",
        },
        {
            kind: "p",
            text: "A cambio se pagan tres cosas: cada conversación consume tokens y por tanto cuesta dinero; el comportamiento es probabilístico, así que la misma pregunta puede recibir respuestas distintas; y el sistema puede afirmar con seguridad algo que no es cierto si no se le dan los datos y los límites correctos.",
        },

        {
            kind: "h2",
            id: "comparativa",
            text: "Las diferencias que se notan en producción",
        },
        {
            kind: "table",
            head: ["", "Chatbot de reglas", "Agente de IA"],
            rows: [
                ["Cómo decide", "Árbol escrito por una persona", "El modelo elige en cada turno"],
                ["Preguntas no previstas", "No las resuelve", "Suele resolverlas"],
                ["Costo por conversación", "Cercano a cero", "Proporcional al uso del modelo"],
                ["Previsibilidad", "Total", "Acotada por diseño y pruebas"],
                ["Puede ejecutar acciones", "Solo las del guion", "Sí, mediante herramientas definidas"],
                ["Qué se mantiene", "Ramas del árbol", "Instrucciones, herramientas y datos"],
            ],
        },

        {
            kind: "h2",
            id: "cual-elegir",
            text: "Cuál conviene a tu caso",
        },
        {
            kind: "p",
            text: "La pregunta útil no es cuál es mejor, sino cómo se distribuyen tus consultas. Revisa doscientas conversaciones reales de los últimos meses y cuenta cuántas responden a las diez preguntas más frecuentes.",
        },
        {
            kind: "list",
            items: [
                "Si esas diez cubren la gran mayoría —horarios, precios, ubicación, disponibilidad—, un chatbot de reglas resuelve el problema por una fracción del costo. Pagar un modelo de lenguaje para repetir el horario de atención es un gasto sin retorno.",
                "Si la cola larga es amplia, cada cliente pregunta cosas distintas o la respuesta correcta depende de datos que cambian, el agente se paga solo.",
                "Si la conversación tiene que hacer algo —consultar un pedido concreto, mover una cita, cotizar con variables—, necesitas herramientas, y ahí el agente es el camino natural.",
            ],
        },
        {
            kind: "callout",
            title: "El híbrido suele ganar",
            text: "En la práctica, la arquitectura que mejor funciona resuelve con reglas las preguntas frecuentes y deriva al agente solo lo que se sale del guion. Se conserva el costo bajo en el 80 % del tráfico y la flexibilidad donde de verdad hace falta.",
        },

        {
            kind: "h2",
            id: "controles",
            text: "Lo que hay que construir alrededor de un agente",
        },
        {
            kind: "p",
            text: "Un agente en producción no es un modelo con un prompt. Es un modelo con límites, y esos límites son la mayor parte del trabajo de implementación:",
        },
        {
            kind: "list",
            ordered: true,
            items: [
                "Datos acotados: el agente responde sobre tu catálogo y tus políticas, no sobre lo que el modelo recuerde del mundo. Sin esto es donde aparecen las respuestas inventadas.",
                "Herramientas con permisos: leer el inventario es seguro; emitir una nota de crédito, no. Cada herramienta necesita su alcance definido.",
                "Reglas de escalado: cuándo deja de intentar y pasa a un humano. Un reclamo enfadado no debería dar tres vueltas con un bot.",
                "Registro de conversaciones: para poder revisar qué respondió y corregirlo. Sin registro no hay mejora, solo intuición.",
                "Techo de gasto: un límite de consumo por conversación y por mes, para que un error de bucle no se convierta en una factura.",
            ],
        },
        {
            kind: "quote",
            text: "La diferencia entre una demo que impresiona y un agente que aguanta un año en producción está entera en esos cinco controles.",
        },

        {
            kind: "h2",
            id: "empezar",
            text: "Por dónde empezar",
        },
        {
            kind: "p",
            text: "Por el caso más repetitivo que tengas, no por el más impresionante. Automatizar la pregunta que llega cuarenta veces al día devuelve horas desde la primera semana y deja el sistema instalado, medido y con datos reales. Sobre esa base, ampliar a los casos complejos es una decisión informada; empezar por ellos es una apuesta.",
        },
    ],

    faq: [
        {
            id: "agente-inventa",
            question: "¿Un agente de IA puede inventarse información sobre mi negocio?",
            answer:
                "Puede, si se le pregunta algo que no está en los datos que le diste. Se controla acotando sus respuestas a tus fuentes, dándole una salida explícita para decir que no lo sabe y probándolo con preguntas difíciles antes de publicarlo. Un agente bien construido escala a un humano en lugar de improvisar.",
        },
        {
            id: "cuanto-cuesta-agente",
            question: "¿Cuánto más caro es un agente que un chatbot?",
            answer:
                "En implementación, un agente exige más trabajo porque hay que construir las herramientas, los datos y los controles. En operación, cada conversación consume tokens del modelo, mientras que un chatbot de reglas no consume nada. La diferencia mensual depende del volumen y de la longitud de las conversaciones.",
        },
        {
            id: "reemplaza-humano",
            question: "¿Reemplaza a la persona que hoy atiende?",
            answer:
                "En la práctica reordena su trabajo: absorbe las preguntas repetitivas y las consultas fuera de horario, y deja para la persona los casos con matiz, negociación o reclamo. El indicador que conviene medir no es cuántas conversaciones cierra solo, sino cuánto baja el tiempo de primera respuesta.",
        },
    ],

    related: ["cuanto-cuesta-la-api-de-whatsapp-business", "n8n-vs-make-vs-zapier"],
    relatedServices: ["agentes-ia", "chatbot-whatsapp", "automatizacion-de-procesos"],
};
