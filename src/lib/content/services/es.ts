import type { ServiceDetail, ServicesHub } from "./types";

export const servicesHubEs: ServicesHub = {
    metaTitle: "Servicios de automatización con IA para negocios",
    metaDescription:
        "Desarrollo web y software a medida, automatización de procesos, agentes de IA, chatbots, integraciones y consultoría tecnológica para empresas en Latinoamérica.",
    eyebrow: "Servicios",
    heading: "Diez formas de dejar de perder clientes.",
    intro:
        "Cada servicio resuelve una grieta concreta por donde se te escapan ventas o se te van las horas. Se contratan por separado o combinados: la mayoría de los proyectos empieza por uno y crece desde ahí.",
    listTitle: "Qué implementamos",
    ctaTitle: "¿No sabes por cuál empezar?",
    ctaBody:
        "Cuéntanos qué se te está escapando y te decimos con honestidad cuál resuelve más por menos, o si tu caso no es para nosotros.",
    ctaLabel: "Quiero un diagnóstico",
};

/** First batch. The registry index merges this with `es-extra` and applies
 *  the full `Record<ServiceSlug, ServiceDetail>` type to the result. */
export const servicesEs: Record<string, ServiceDetail> = {
    "chatbot-whatsapp": {
        slug: "chatbot-whatsapp",
        navLabel: "Chatbot de WhatsApp",
        cardTitle: "Chatbot de WhatsApp con IA",
        cardSummary:
            "Atiende, califica y agenda 24/7 en el canal donde tus clientes ya te escriben.",
        icon: "chat",
        metaTitle: "Chatbot de WhatsApp con IA para empresas",
        metaDescription:
            "Implementamos bots de WhatsApp que responden en segundos, califican prospectos y agendan citas. Con API oficial de Meta o número propio, integrado a tu CRM.",
        eyebrow: "Servicio",
        heading: "Un bot de WhatsApp que responde como tu mejor vendedor.",
        intro:
            "El 80% de los negocios en Latinoamérica vende por WhatsApp y casi ninguno responde a tiempo. Montamos un asistente con IA que contesta en segundos, entiende lo que preguntan, califica al prospecto y agenda, sin sonar a robot ni a menú de opciones.",
        facts: [
            { value: "2–4 semanas", label: "Implementación" },
            { value: "Desde 1.500 USD", label: "Proyecto" },
            { value: "24/7", label: "Cobertura" },
        ],
        problem: {
            title: "Por qué importa",
            body: "Un cliente que escribe a las nueve de la noche y recibe respuesta al día siguiente ya compró en otro lado. No es un problema de esfuerzo: es que nadie puede estar disponible siempre. El bot cubre exactamente las horas en las que hoy pierdes.",
        },
        includes: {
            title: "Qué incluye",
            items: [
                {
                    title: "Flujo conversacional diseñado para tu negocio",
                    description:
                        "No una plantilla genérica: partimos de tus conversaciones reales para definir qué pregunta el cliente y qué necesita saber antes de comprar.",
                },
                {
                    title: "Respuestas con modelo de lenguaje",
                    description:
                        "El bot razona sobre tu catálogo, precios y políticas en vez de seguir un árbol de opciones. Responde a preguntas que no anticipaste.",
                },
                {
                    title: "Calificación automática de prospectos",
                    description:
                        "Distingue quién está listo para comprar y quién solo pregunta, y te pasa solo los que valen tu tiempo.",
                },
                {
                    title: "Agendamiento conectado a tu calendario",
                    description:
                        "Ofrece horarios reales, confirma la cita y envía recordatorios. Se acaba el ida y vuelta para cuadrar una hora.",
                },
                {
                    title: "Derivación a persona",
                    description:
                        "Cuando detecta que no puede resolver, pasa la conversación a tu equipo con el contexto ya recogido.",
                },
                {
                    title: "Servidor dedicado y monitoreo",
                    description:
                        "VPS propio para que el bot no dependa de un servicio compartido, con alertas si algo se cae.",
                },
            ],
        },
        process: {
            title: "Cómo lo hacemos",
            steps: [
                {
                    num: "01",
                    title: "Diagnóstico de conversaciones",
                    description:
                        "Revisamos tus chats reales para ver qué se pregunta, dónde se cae la venta y qué se puede automatizar sin perder cercanía.",
                },
                {
                    num: "02",
                    title: "Diseño del flujo",
                    description:
                        "Definimos el tono, las rutas de conversación y el punto exacto donde el bot pasa a una persona.",
                },
                {
                    num: "03",
                    title: "Construcción e integración",
                    description:
                        "Montamos el bot, lo conectamos a tu calendario y CRM, y lo entrenamos con tu información real.",
                },
                {
                    num: "04",
                    title: "Pruebas y ajuste",
                    description:
                        "Lo probamos con conversaciones reales antes de abrirlo, y ajustamos durante las primeras semanas según lo que ocurra.",
                },
            ],
        },
        stack: {
            title: "Con qué lo construimos",
            intro:
                "Herramientas estándar de la industria, no software propietario que te deje atado. Si mañana quieres llevártelo, es tuyo.",
            tools: ["WhatsApp Business Platform (Meta)", "n8n", "OpenAI", "Claude", "Twilio", "Google Calendar", "Supabase"],
        },
        faq: [
            {
                id: "api-oficial",
                question: "¿Necesito la API oficial de WhatsApp?",
                answer:
                    "Solo si vas a enviar mensajes masivos, usar plantillas aprobadas, atender desde varios agentes o quieres cuenta verificada. Si únicamente respondes conversaciones que inicia el cliente desde un número, se puede montar sin la API oficial y sin ese costo mensual adicional.",
            },
            {
                id: "se-nota-robot",
                question: "¿Se va a notar que es un bot?",
                answer:
                    "Responde con lenguaje natural y tu tono, no con menús numerados. Aun así recomendamos declarar que es un asistente: genera más confianza que fingir, y los clientes lo aceptan bien cuando la respuesta es útil e inmediata.",
            },
            {
                id: "que-pasa-si-falla",
                question: "¿Qué pasa si el bot no entiende algo?",
                answer:
                    "Deriva a una persona con el historial de la conversación ya recogido, en vez de insistir o dar una respuesta equivocada. Ese umbral se calibra: prefiere pasar a humano antes que arriesgar una respuesta incorrecta sobre precios o disponibilidad.",
            },
        ],
        related: ["agentes-ia", "integracion-crm", "automatizaciones-n8n"],
    },

    "automatizacion-de-procesos": {
        slug: "automatizacion-de-procesos",
        navLabel: "Automatización de procesos",
        cardTitle: "Automatización de procesos",
        cardSummary:
            "Conectamos tus herramientas para que el trabajo repetitivo deje de pasar por una persona.",
        icon: "ops",
        metaTitle: "Automatización de procesos para PYMES",
        metaDescription:
            "Conectamos tus herramientas con n8n y Make para eliminar el trabajo manual repetitivo: seguimiento de leads, facturación, reportes y traspaso de datos entre sistemas.",
        eyebrow: "Servicio",
        heading: "El trabajo repetitivo no necesita a una persona.",
        intro:
            "Copiar datos de un sistema a otro, enviar el mismo correo de seguimiento, armar el reporte del mes a mano. Son horas que se van en tareas que una automatización hace sin equivocarse y sin descansar.",
        facts: [
            { value: "1–3 semanas", label: "Por flujo" },
            { value: "Desde 750 USD", label: "Proyecto" },
            { value: "Sin código propietario", label: "Portabilidad" },
        ],
        problem: {
            title: "Por qué importa",
            body: "El coste de una tarea manual no es solo el tiempo: es que depende de que alguien se acuerde. El seguimiento que no se hizo, el dato que se copió mal, el reporte que llegó tarde. Un flujo automatizado ejecuta igual el lunes que el viernes a las siete.",
        },
        includes: {
            title: "Qué incluye",
            items: [
                {
                    title: "Mapa de procesos",
                    description:
                        "Identificamos qué tareas se repiten, cuánto tiempo consumen y cuáles conviene automatizar primero por retorno.",
                },
                {
                    title: "Flujos construidos y documentados",
                    description:
                        "Cada automatización queda documentada: qué la dispara, qué hace y qué pasa si falla. No una caja negra que solo nosotros entendemos.",
                },
                {
                    title: "Conexión entre tus herramientas",
                    description:
                        "CRM, hojas de cálculo, facturación, correo, WhatsApp y calendario funcionando como un solo sistema.",
                },
                {
                    title: "Manejo de errores",
                    description:
                        "Reintentos, alertas y registro de fallos. Una automatización que falla en silencio es peor que no tenerla.",
                },
                {
                    title: "Servidor propio",
                    description:
                        "Los flujos corren en tu infraestructura, sin límites de ejecuciones ni costes por volumen que escalan solos.",
                },
            ],
        },
        process: {
            title: "Cómo lo hacemos",
            steps: [
                {
                    num: "01",
                    title: "Auditoría de tareas",
                    description:
                        "Una sesión para listar qué se hace a mano, con qué frecuencia y cuánto cuesta en horas reales.",
                },
                {
                    num: "02",
                    title: "Priorización por retorno",
                    description:
                        "No automatizamos todo: empezamos por lo que más tiempo libera con menos complejidad.",
                },
                {
                    num: "03",
                    title: "Construcción por etapas",
                    description:
                        "Un flujo a la vez, en producción y funcionando antes de pasar al siguiente.",
                },
                {
                    num: "04",
                    title: "Traspaso y monitoreo",
                    description:
                        "Te enseñamos cómo leer y ajustar lo construido, y dejamos alertas para saber si algo deja de correr.",
                },
            ],
        },
        stack: {
            title: "Con qué lo construimos",
            intro:
                "n8n como motor principal por una razón concreta: es open source y se autohospeda, así que no pagas por ejecución ni quedas atado a un proveedor.",
            tools: ["n8n", "Make", "Zapier", "Google Workspace", "Airtable", "Supabase", "Docker"],
        },
        faq: [
            {
                id: "n8n-vs-make",
                question: "¿Por qué n8n y no Make o Zapier?",
                answer:
                    "n8n se autohospeda: pagas el servidor, no cada ejecución, lo que cambia mucho la cuenta cuando el volumen crece. Make y Zapier son más rápidos de montar y los usamos cuando el caso es simple o el cliente ya trabaja con ellos.",
            },
            {
                id: "que-se-puede-automatizar",
                question: "¿Qué procesos conviene automatizar?",
                answer:
                    "Los que son repetitivos, tienen reglas claras y ocurren seguido: seguimiento de leads, traspaso de datos entre sistemas, recordatorios, generación de reportes y facturación recurrente. Lo que requiere criterio o negociación se queda con una persona.",
            },
        ],
        related: ["automatizaciones-n8n", "integraciones-api", "consultoria-tecnologica"],
    },

    "agentes-ia": {
        slug: "agentes-ia",
        navLabel: "Agentes de IA",
        cardTitle: "Agentes de IA",
        cardSummary:
            "No siguen un guion: razonan sobre el objetivo y ejecutan acciones en tus sistemas.",
        icon: "kpi",
        metaTitle: "Desarrollo de agentes de IA para empresas",
        metaDescription:
            "Agentes que consultan tus datos, deciden qué herramienta usar y ejecutan acciones reales en tu CRM, calendario o inventario. Más allá del chatbot con guion.",
        eyebrow: "Servicio",
        heading: "Un agente decide; un chatbot solo responde.",
        intro:
            "Un chatbot sigue las ramas que alguien programó. Un agente de IA razona sobre el objetivo, consulta la información que necesita, elige qué herramienta usar y ejecuta la acción. Es la diferencia entre responder una pregunta y resolver el asunto.",
        facts: [
            { value: "3–6 semanas", label: "Implementación" },
            { value: "Proyecto a medida", label: "Alcance" },
            { value: "Con tus datos", label: "Conocimiento" },
        ],
        problem: {
            title: "Por qué importa",
            body: "La mayoría de las consultas no caben en un árbol de opciones. «¿Tienen algo parecido pero más barato y disponible esta semana?» requiere consultar catálogo, stock y agenda a la vez. Programar cada combinación es imposible; razonar sobre ellas, no.",
        },
        includes: {
            title: "Qué incluye",
            items: [
                {
                    title: "Base de conocimiento con tus datos",
                    description:
                        "El agente consulta tu catálogo, precios, políticas y documentación en vez de improvisar. Recuperación sobre fuentes reales, no memoria del modelo.",
                },
                {
                    title: "Herramientas conectadas",
                    description:
                        "Puede consultar disponibilidad, crear registros, agendar o escalar según lo que la conversación requiera.",
                },
                {
                    title: "Límites y salvaguardas",
                    description:
                        "Definimos qué puede hacer solo y qué necesita confirmación humana. Un agente sin límites es un riesgo, no una ventaja.",
                },
                {
                    title: "Trazabilidad",
                    description:
                        "Cada decisión y acción queda registrada, para poder revisar qué hizo el agente y por qué.",
                },
                {
                    title: "Evaluación continua",
                    description:
                        "Medimos aciertos y errores sobre casos reales, y ajustamos instrucciones y fuentes con esos datos.",
                },
            ],
        },
        process: {
            title: "Cómo lo hacemos",
            steps: [
                {
                    num: "01",
                    title: "Definición del alcance",
                    description:
                        "Qué debe poder resolver el agente, con qué información y hasta dónde puede actuar sin supervisión.",
                },
                {
                    num: "02",
                    title: "Preparación de las fuentes",
                    description:
                        "Estructuramos tu información para que el agente la consulte de forma fiable, no aproximada.",
                },
                {
                    num: "03",
                    title: "Construcción y conexión",
                    description:
                        "Montamos el agente, le damos las herramientas y establecemos las salvaguardas.",
                },
                {
                    num: "04",
                    title: "Evaluación antes de abrir",
                    description:
                        "Lo probamos contra casos reales y medimos el porcentaje de aciertos antes de ponerlo frente a clientes.",
                },
            ],
        },
        stack: {
            title: "Con qué lo construimos",
            intro:
                "Modelos según el caso: no todos los problemas necesitan el modelo más caro, y algunos no necesitan modelo en absoluto.",
            tools: ["OpenAI", "Claude (Anthropic)", "n8n", "Supabase", "PostgreSQL", "Vectorize", "LangGraph"],
        },
        faq: [
            {
                id: "diferencia-chatbot",
                question: "¿En qué se diferencia de un chatbot?",
                answer:
                    "Un chatbot sigue un guion: si el usuario dice A, responde B. Un agente razona sobre el objetivo, decide qué herramienta usar y ejecuta acciones —consultar el calendario, escribir en el CRM, cerrar una cita— sin que cada rama esté programada de antemano.",
            },
            {
                id: "inventa-cosas",
                question: "¿Y si el agente inventa información?",
                answer:
                    "Por eso responde sobre fuentes tuyas y no desde la memoria del modelo. Cuando no encuentra el dato, lo dice y deriva, en lugar de completar. Las acciones sensibles requieren confirmación humana, y todo queda registrado para auditar.",
            },
            {
                id: "cuando-conviene",
                question: "¿Cuándo conviene un agente y cuándo basta un bot?",
                answer:
                    "Si tus consultas se repiten y caben en unas pocas rutas, un bot bien hecho es más barato y más predecible. El agente se justifica cuando las preguntas cruzan varias fuentes o requieren decidir entre opciones que no se pueden enumerar.",
            },
        ],
        related: ["chatbot-whatsapp", "automatizacion-de-procesos", "software-a-medida"],
    },

    "integracion-crm": {
        slug: "integracion-crm",
        navLabel: "Integración con CRM",
        cardTitle: "Integración con CRM",
        cardSummary:
            "Que cada conversación termine registrada donde tu equipo la puede ver y seguir.",
        icon: "ops",
        metaTitle: "Integración de WhatsApp y web con tu CRM",
        metaDescription:
            "Conectamos WhatsApp, formularios y campañas con HubSpot, Pipedrive, Zoho o Salesforce. Cada lead entra con su contexto y nada se pierde entre herramientas.",
        eyebrow: "Servicio",
        heading: "Un lead que no queda registrado es un lead perdido.",
        intro:
            "El prospecto escribe por WhatsApp, alguien responde desde el móvil, y esa conversación no existe para el resto del equipo. Conectamos los canales con tu CRM para que cada contacto entre con su historial y su siguiente paso.",
        facts: [
            { value: "1–2 semanas", label: "Implementación" },
            { value: "Desde 750 USD", label: "Proyecto" },
            { value: "Sin cambiar de CRM", label: "Compatibilidad" },
        ],
        problem: {
            title: "Por qué importa",
            body: "Cuando la información vive en el móvil de cada persona, el seguimiento depende de la memoria. Se pierde el contexto al pasar un cliente de una persona a otra, y no hay forma de saber cuántas oportunidades quedaron sin respuesta.",
        },
        includes: {
            title: "Qué incluye",
            items: [
                {
                    title: "Conexión de canales",
                    description:
                        "WhatsApp, formularios de la web, campañas y correo entrando al mismo lugar con su origen identificado.",
                },
                {
                    title: "Registro automático de conversaciones",
                    description:
                        "Lo que el bot o el equipo conversa queda asociado al contacto, sin que nadie lo copie a mano.",
                },
                {
                    title: "Calificación y etapas",
                    description:
                        "Los prospectos entran clasificados y avanzan de etapa según lo que ocurre, no según quién se acuerde de moverlos.",
                },
                {
                    title: "Seguimiento automatizado",
                    description:
                        "Recordatorios y secuencias para que nadie se enfríe esperando una segunda respuesta.",
                },
                {
                    title: "Reportes de conversión",
                    description:
                        "De dónde vienen los clientes, en qué etapa se caen y cuánto tarda cerrar. Números, no impresiones.",
                },
            ],
        },
        process: {
            title: "Cómo lo hacemos",
            steps: [
                {
                    num: "01",
                    title: "Revisión de tu operación",
                    description:
                        "Qué CRM usas (o si conviene empezar por uno), cómo entran hoy los leads y dónde se pierde el rastro.",
                },
                {
                    num: "02",
                    title: "Diseño del embudo",
                    description:
                        "Definimos etapas, campos y reglas de asignación que reflejen cómo vendes de verdad.",
                },
                {
                    num: "03",
                    title: "Conexión e importación",
                    description:
                        "Integramos los canales y migramos lo que ya tienes, sin perder histórico.",
                },
                {
                    num: "04",
                    title: "Formación del equipo",
                    description:
                        "Una automatización que el equipo no entiende se abandona en un mes. Dejamos a tu gente sabiendo usarla.",
                },
            ],
        },
        stack: {
            title: "Con qué lo construimos",
            intro:
                "Trabajamos sobre el CRM que ya tienes. Si no tienes ninguno, recomendamos según tamaño de equipo y presupuesto, no por comisión.",
            tools: ["HubSpot", "Pipedrive", "Zoho CRM", "Salesforce", "n8n", "Make", "Google Sheets"],
        },
        faq: [
            {
                id: "ya-tengo-crm",
                question: "¿Tengo que cambiar de CRM?",
                answer:
                    "No. Trabajamos sobre HubSpot, Pipedrive, Zoho y Salesforce mediante sus APIs. Cambiar de CRM es un proyecto en sí mismo y rara vez es lo que hace falta: casi siempre el problema es que el que hay no está conectado a los canales.",
            },
            {
                id: "sin-crm",
                question: "¿Y si no uso ningún CRM todavía?",
                answer:
                    "Se puede empezar con algo simple y ordenado antes de pagar una licencia. Lo importante es que los leads queden registrados con su origen y su estado; la herramienta se puede migrar después sin perder el histórico.",
            },
        ],
        related: ["integraciones-api", "dashboards", "automatizacion-de-procesos"],
    },

    "paginas-web-que-convierten": {
        slug: "paginas-web-que-convierten",
        navLabel: "Webs que convierten",
        cardTitle: "Webs que convierten",
        cardSummary:
            "Estructura comercial y velocidad real, no una tarjeta de presentación bonita.",
        icon: "web",
        metaTitle: "Diseño de páginas web que convierten para negocios",
        metaDescription:
            "Webs y landing pages con estructura comercial, rápidas y medibles. Formulario de calificación, integración con WhatsApp y analítica desde el primer día.",
        eyebrow: "Servicio",
        heading: "Una web que no genera clientes es un gasto.",
        intro:
            "La mayoría de las webs de negocio están hechas para verse bien, no para vender. Construimos sitios con estructura comercial: qué ve el visitante primero, qué objeción se responde antes, y cómo se convierte en una conversación.",
        facts: [
            { value: "2 semanas", label: "Entrega" },
            { value: "Desde 750 USD", label: "Proyecto" },
            { value: "Medible", label: "Analítica incluida" },
        ],
        problem: {
            title: "Por qué importa",
            body: "El visitante decide en segundos si sigue leyendo. Si la web no dice qué haces, para quién y qué pasa si te escribe, se va. Y si tarda en cargar en el móvil, se va antes de leer nada.",
        },
        includes: {
            title: "Qué incluye",
            items: [
                {
                    title: "Estructura pensada para convertir",
                    description:
                        "Problema, solución, prueba, precio y siguiente paso, en el orden en que el visitante los necesita.",
                },
                {
                    title: "Copy comercial",
                    description:
                        "Escribimos el texto. No entregamos una plantilla para que la rellenes tú, que es donde mueren la mayoría de los proyectos web.",
                },
                {
                    title: "Formulario de calificación",
                    description:
                        "En vez de un botón directo a WhatsApp, unas pocas preguntas que filtran y te llegan con contexto.",
                },
                {
                    title: "Rendimiento real en móvil",
                    description:
                        "Optimizada para cargar rápido en un teléfono con datos móviles, que es como la va a ver la mayoría.",
                },
                {
                    title: "SEO técnico desde el inicio",
                    description:
                        "Metadatos, datos estructurados, sitemap y canonicals correctos. Es mucho más barato hacerlo bien que arreglarlo después.",
                },
                {
                    title: "Analítica configurada",
                    description:
                        "Sabes cuánta gente llega, de dónde y en qué punto se va. Sin eso, cualquier mejora es opinión.",
                },
            ],
        },
        process: {
            title: "Cómo lo hacemos",
            steps: [
                {
                    num: "01",
                    title: "Sesión de posicionamiento",
                    description:
                        "Qué vendes, a quién, y por qué te elegirían a ti. De ahí sale el mensaje, no de un catálogo de plantillas.",
                },
                {
                    num: "02",
                    title: "Estructura y copy",
                    description:
                        "Definimos las secciones y escribimos el texto antes de diseñar. El diseño sirve al mensaje, no al revés.",
                },
                {
                    num: "03",
                    title: "Diseño y construcción",
                    description:
                        "Interfaz propia, sin plantillas genéricas, construida para cargar rápido y funcionar en cualquier pantalla.",
                },
                {
                    num: "04",
                    title: "Publicación y medición",
                    description:
                        "Sale a producción con analítica y Search Console configurados, listos para medir desde el primer visitante.",
                },
            ],
        },
        stack: {
            title: "Con qué lo construimos",
            intro:
                "Sitios estáticos y renderizado en servidor: cargan rápido porque no hay nada que esperar, y son baratos de mantener.",
            tools: ["Next.js", "React", "TypeScript", "Vercel", "Google Analytics", "Search Console", "Microsoft Clarity"],
        },
        faq: [
            {
                id: "wordpress",
                question: "¿Por qué no WordPress?",
                answer:
                    "Porque el mantenimiento y la velocidad terminan costando más de lo que ahorra. Construimos con Next.js sobre hosting estático: carga en menos de un segundo, no hay plugins que actualizar y no hay superficie de ataque que vigilar.",
            },
            {
                id: "puedo-editar",
                question: "¿Podré editar el contenido yo?",
                answer:
                    "Sí. Se puede conectar un gestor de contenidos para los textos y secciones que vayas a cambiar seguido. Lo definimos al inicio: gestionar todo es más caro y casi nunca se usa.",
            },
        ],
        related: ["software-a-medida", "chatbot-whatsapp", "integracion-crm"],
    },
};
