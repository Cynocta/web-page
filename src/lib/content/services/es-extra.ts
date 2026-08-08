import type { ServiceDetail } from "./types";

/**
 * Second batch of services. Kept in its own module so neither file grows past
 * the point where it's navigable; both are merged in the registry index.
 */
export const servicesEsExtra: Record<string, ServiceDetail> = {
    "software-a-medida": {
        slug: "software-a-medida",
        navLabel: "Software a medida",
        cardTitle: "Software a medida",
        cardSummary:
            "Cuando ninguna herramienta del mercado encaja con cómo trabaja tu negocio.",
        icon: "code",
        metaTitle: "Desarrollo de software a medida para empresas",
        metaDescription:
            "Aplicaciones internas, portales de cliente y herramientas de operación construidas sobre tu proceso real, no sobre el de un producto genérico.",
        eyebrow: "Servicio",
        heading: "Software que se adapta a tu proceso, no al revés.",
        intro:
            "Llega un punto en que la hoja de cálculo compartida deja de aguantar y ningún SaaS encaja sin obligarte a cambiar cómo trabajas. Ahí tiene sentido construir: una herramienta que hace exactamente lo tuyo, sin las noventa funciones que nunca usarías.",
        facts: [
            { value: "4–10 semanas", label: "Primera versión" },
            { value: "Proyecto a medida", label: "Alcance" },
            { value: "Código tuyo", label: "Propiedad" },
        ],
        problem: {
            title: "Por qué importa",
            body: "Adaptar el negocio a un software genérico tiene un coste que no aparece en la factura: procesos torcidos para encajar en el producto, datos en tres sitios y gente haciendo de puente entre herramientas. Construir a medida solo se justifica cuando ese coste ya es mayor que el del desarrollo.",
        },
        includes: {
            title: "Qué incluye",
            items: [
                {
                    title: "Descubrimiento antes de escribir código",
                    description:
                        "Mapeamos el proceso real, no el que está documentado. Casi siempre difieren, y ahí está el valor.",
                },
                {
                    title: "Primera versión con el alcance mínimo útil",
                    description:
                        "La menor cantidad de producto que ya te sirve en producción. Se amplía con uso real, no con suposiciones.",
                },
                {
                    title: "Interfaz pensada para quien la usa a diario",
                    description:
                        "Si tu equipo la va a abrir ocho horas al día, la velocidad y los atajos importan más que la estética.",
                },
                {
                    title: "Autenticación y control de accesos",
                    description:
                        "Quién ve qué y quién puede cambiar qué, definido desde el inicio y no parcheado después.",
                },
                {
                    title: "Código, repositorio y despliegue a tu nombre",
                    description:
                        "Todo queda en tu infraestructura. Puedes cambiar de proveedor sin renegociar nada.",
                },
                {
                    title: "Documentación técnica",
                    description:
                        "Arquitectura, decisiones y cómo levantarlo, para que otro equipo pueda continuarlo.",
                },
            ],
        },
        process: {
            title: "Cómo lo hacemos",
            steps: [
                {
                    num: "01",
                    title: "Descubrimiento",
                    description:
                        "Sesiones con quien hace el trabajo hoy. Salimos con el proceso mapeado y el alcance mínimo acordado.",
                },
                {
                    num: "02",
                    title: "Prototipo navegable",
                    description:
                        "Ves y usas la interfaz antes de que exista la lógica. Corregir aquí cuesta horas, no semanas.",
                },
                {
                    num: "03",
                    title: "Construcción por módulos",
                    description:
                        "Cada módulo entra en producción y se usa antes de empezar el siguiente.",
                },
                {
                    num: "04",
                    title: "Traspaso",
                    description:
                        "Accesos, documentación y formación al equipo. Con soporte acordado mientras se estabiliza.",
                },
            ],
        },
        stack: {
            title: "Con qué lo construimos",
            intro:
                "Tecnologías con comunidad grande y documentación abierta, para que encontrar a otro desarrollador no sea un problema tuyo.",
            tools: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Docker", "Vercel"],
        },
        faq: [
            {
                id: "cuando-a-medida",
                question: "¿Cuándo conviene a medida y cuándo un SaaS?",
                answer:
                    "Si existe un producto que cubre el 80% de lo tuyo, cómpralo: sale más barato y ya está probado. A medida se justifica cuando tu proceso es la ventaja competitiva, cuando ningún producto encaja sin torcerlo, o cuando las licencias por usuario ya superan el coste de construir.",
            },
            {
                id: "quien-lo-mantiene",
                question: "¿Quién lo mantiene después?",
                answer:
                    "Puedes hacerlo tú, nosotros con un acuerdo de soporte, u otro equipo. Por eso el código, el repositorio y la documentación quedan a tu nombre desde el primer día y usamos tecnologías estándar: no queremos que dependas de nosotros por falta de alternativas.",
            },
            {
                id: "cuanto-tarda",
                question: "¿Cuánto tarda una primera versión?",
                answer:
                    "Entre cuatro y diez semanas según el alcance. Trabajamos por módulos, así que empiezas a usar la primera parte antes de que el proyecto termine. Un plazo mayor a eso suele indicar que el alcance inicial es demasiado ambicioso.",
            },
        ],
        related: ["automatizacion-de-procesos", "integraciones-api", "dashboards"],
    },

    "integraciones-api": {
        slug: "integraciones-api",
        navLabel: "Integraciones con APIs",
        cardTitle: "Integraciones con APIs",
        cardSummary:
            "Que tus herramientas se hablen entre sí, con manejo de errores de verdad.",
        icon: "api",
        metaTitle: "Integración de sistemas y APIs para empresas",
        metaDescription:
            "Conectamos tus herramientas mediante sus APIs con reintentos, alertas y trazabilidad. Sin scripts frágiles que fallan en silencio.",
        eyebrow: "Servicio",
        heading: "Dos sistemas que no se hablan cuestan una persona.",
        intro:
            "Cuando la información tiene que pasar de una herramienta a otra y no hay puente, alguien hace de puente. Esa persona copia, pega y ocasionalmente se equivoca. Construimos el puente para que no haga falta.",
        facts: [
            { value: "1–3 semanas", label: "Por integración" },
            { value: "Desde 750 USD", label: "Proyecto" },
            { value: "Con reintentos", label: "Tolerancia a fallos" },
        ],
        problem: {
            title: "Por qué importa",
            body: "Las integraciones frágiles son peores que no tenerlas: dan confianza hasta el día que fallan sin avisar y descubres el desfase una semana después. La diferencia entre un script y una integración seria está en qué pasa cuando algo sale mal.",
        },
        includes: {
            title: "Qué incluye",
            items: [
                {
                    title: "Mapeo de datos entre sistemas",
                    description:
                        "Qué campo de aquí corresponde a cuál de allá, qué se transforma y qué hacer con lo que no encaja.",
                },
                {
                    title: "Manejo de errores explícito",
                    description:
                        "Reintentos con espera progresiva, cola de fallidos y alerta cuando algo requiere intervención humana.",
                },
                {
                    title: "Idempotencia",
                    description:
                        "Reintentar no duplica registros. Suena obvio, y es donde fallan la mayoría de las integraciones caseras.",
                },
                {
                    title: "Registro de cada ejecución",
                    description:
                        "Qué entró, qué salió y cuándo. Sin eso, depurar un desfase de datos es adivinar.",
                },
                {
                    title: "Gestión de credenciales",
                    description:
                        "Tokens y secretos fuera del código, con rotación posible sin volver a desplegar.",
                },
                {
                    title: "Documentación del contrato",
                    description:
                        "Qué dispara la integración, con qué frecuencia corre y qué límites tiene la API del otro lado.",
                },
            ],
        },
        process: {
            title: "Cómo lo hacemos",
            steps: [
                {
                    num: "01",
                    title: "Revisión de las APIs",
                    description:
                        "Qué permite cada sistema, qué límites de uso tiene y si hay webhooks o toca consultar periódicamente.",
                },
                {
                    num: "02",
                    title: "Diseño del flujo de datos",
                    description:
                        "Dirección, frecuencia, qué gana en caso de conflicto y qué se considera un error recuperable.",
                },
                {
                    num: "03",
                    title: "Construcción y pruebas",
                    description:
                        "Se prueba contra datos reales en un entorno aparte antes de tocar producción.",
                },
                {
                    num: "04",
                    title: "Monitoreo",
                    description:
                        "Alertas si deja de correr o si la tasa de error sube. Una integración sin monitoreo es una bomba de tiempo.",
                },
            ],
        },
        stack: {
            title: "Con qué lo construimos",
            intro:
                "n8n cuando el flujo se beneficia de ser visible y editable; código propio cuando la lógica no cabe en un nodo.",
            tools: ["n8n", "Node.js", "TypeScript", "REST", "GraphQL", "Webhooks", "PostgreSQL", "Docker"],
        },
        faq: [
            {
                id: "sistema-sin-api",
                question: "¿Y si mi sistema no tiene API?",
                answer:
                    "Se revisa caso por caso. A veces hay exportación programada, base de datos accesible o un módulo de integración sin documentar. Cuando no hay ninguna vía razonable, lo decimos: automatizar contra una interfaz que no está pensada para eso se rompe con cada actualización.",
            },
            {
                id: "limites-api",
                question: "¿Qué pasa con los límites de uso de las APIs?",
                answer:
                    "Se diseñan desde el inicio. Agrupamos peticiones, espaciamos ejecuciones y usamos webhooks en vez de consultar en bucle cuando el sistema lo permite. Si tu volumen supera el plan contratado del proveedor, lo detectamos antes de construir.",
            },
        ],
        related: ["automatizaciones-n8n", "integracion-crm", "software-a-medida"],
    },

    "automatizaciones-n8n": {
        slug: "automatizaciones-n8n",
        navLabel: "Automatizaciones con n8n",
        cardTitle: "Automatizaciones con n8n",
        cardSummary:
            "Flujos autohospedados: pagas el servidor, no cada ejecución.",
        icon: "flow",
        metaTitle: "Implementación y consultoría de n8n",
        metaDescription:
            "Instalación de n8n autohospedado, diseño de flujos, nodos personalizados y migración desde Zapier o Make. Sin costes por ejecución.",
        eyebrow: "Servicio",
        heading: "n8n bien montado: sin límite de ejecuciones.",
        intro:
            "n8n es el motor con el que construimos la mayoría de nuestras automatizaciones, y es open source. Eso cambia la economía: pagas un servidor, no cada vez que un flujo corre. Con volumen, la diferencia frente a Zapier o Make deja de ser marginal.",
        facts: [
            { value: "1–2 semanas", label: "Puesta en marcha" },
            { value: "Desde 6 USD/mes", label: "Coste de servidor" },
            { value: "Sin límite", label: "Ejecuciones" },
        ],
        problem: {
            title: "Por qué importa",
            body: "Las plataformas por ejecución son cómodas hasta que funcionan. Cuando la automatización tiene éxito y el volumen crece, la factura crece con él —justo cuando más valor te está dando. Autohospedar invierte esa curva: el coste se aplana.",
        },
        includes: {
            title: "Qué incluye",
            items: [
                {
                    title: "Instalación en tu servidor",
                    description:
                        "n8n con Docker, HTTPS, copias de seguridad y actualizaciones controladas. En tu infraestructura o en una que gestionamos.",
                },
                {
                    title: "Diseño de los flujos",
                    description:
                        "Construidos para ser legibles: otro desarrollador debería entender qué hace cada uno sin preguntarnos.",
                },
                {
                    title: "Nodos personalizados cuando hacen falta",
                    description:
                        "Si tu sistema no tiene nodo, se escribe. Es JavaScript, no magia propietaria.",
                },
                {
                    title: "Migración desde Zapier o Make",
                    description:
                        "Reconstruimos lo que ya tienes y lo verificamos en paralelo antes de apagar el anterior.",
                },
                {
                    title: "Entornos separados",
                    description:
                        "Pruebas y producción aparte, para no depurar en el flujo del que dependen tus clientes.",
                },
                {
                    title: "Formación a tu equipo",
                    description:
                        "Para que puedan ajustar lo simple sin llamarnos. Lo complejo se queda con nosotros si lo prefieres.",
                },
            ],
        },
        process: {
            title: "Cómo lo hacemos",
            steps: [
                {
                    num: "01",
                    title: "Dimensionado",
                    description:
                        "Cuántas ejecuciones al mes, qué picos y qué integraciones. De ahí sale el servidor, no de un plan estándar.",
                },
                {
                    num: "02",
                    title: "Instalación y seguridad",
                    description:
                        "Despliegue con HTTPS, accesos, backups y monitoreo antes de mover un solo flujo.",
                },
                {
                    num: "03",
                    title: "Construcción o migración",
                    description:
                        "Flujo a flujo, verificando resultados contra el sistema anterior cuando hay migración.",
                },
                {
                    num: "04",
                    title: "Traspaso documentado",
                    description:
                        "Cada flujo con su descripción, su disparador y qué hacer si falla.",
                },
            ],
        },
        stack: {
            title: "Con qué lo construimos",
            intro:
                "n8n como motor, con lo mínimo alrededor para que sea estable y observable.",
            tools: ["n8n", "Docker", "PostgreSQL", "Traefik", "DigitalOcean", "Hetzner", "Node.js"],
        },
        faq: [
            {
                id: "n8n-vs-zapier",
                question: "¿Cuándo compensa n8n frente a Zapier o Make?",
                answer:
                    "Cuando el volumen crece o la lógica se complica. Con pocos cientos de ejecuciones al mes y flujos simples, Zapier o Make son más rápidos de montar y no requieren servidor. A partir de unos miles, o si necesitas lógica que no cabe en un nodo estándar, n8n sale mejor.",
            },
            {
                id: "quien-mantiene-servidor",
                question: "¿Quién mantiene el servidor?",
                answer:
                    "Como prefieras. Puede quedar a tu nombre y lo gestionas tú, o lo incluimos en un plan con suscripción y nos encargamos del monitoreo, las copias y las actualizaciones. En ambos casos la instancia y los flujos son tuyos.",
            },
            {
                id: "nube-de-n8n",
                question: "¿Y la versión en la nube de n8n?",
                answer:
                    "Es una opción válida si prefieres no tener servidor. Cuesta más por ejecución que autohospedar pero elimina el mantenimiento. La recomendamos cuando el volumen es bajo y no hay nadie técnico en el equipo.",
            },
        ],
        related: ["automatizacion-de-procesos", "integraciones-api", "agentes-ia"],
    },

    dashboards: {
        slug: "dashboards",
        navLabel: "Dashboards",
        cardTitle: "Dashboards y reportes",
        cardSummary:
            "Los números que usas para decidir, en un sitio y actualizados solos.",
        icon: "kpi",
        metaTitle: "Dashboards y reportes de conversión a medida",
        metaDescription:
            "Paneles con tus datos reales: embudo por etapas, origen de clientes y tiempos de respuesta. Actualizados automáticamente, sin armar el reporte a mano.",
        eyebrow: "Servicio",
        heading: "Decidir con datos, no con impresiones.",
        intro:
            "Casi todos los negocios tienen los datos. Lo que no tienen es el lugar donde mirarlos juntos. Construimos el panel que responde a las tres o cuatro preguntas que de verdad mueven tus decisiones, y lo dejamos actualizándose solo.",
        facts: [
            { value: "1–3 semanas", label: "Implementación" },
            { value: "Desde 750 USD", label: "Proyecto" },
            { value: "Automático", label: "Actualización" },
        ],
        problem: {
            title: "Por qué importa",
            body: "Un reporte que alguien arma a mano cada mes llega tarde, cuesta horas y nadie confía del todo en él. Y un panel con cuarenta métricas no es mejor: es igual de inútil que ninguna, porque no dice qué mirar primero.",
        },
        includes: {
            title: "Qué incluye",
            items: [
                {
                    title: "Definición de las métricas que importan",
                    description:
                        "Empezamos por qué decisiones quieres tomar. De ahí salen las métricas, no al revés.",
                },
                {
                    title: "Conexión a tus fuentes reales",
                    description:
                        "CRM, WhatsApp, web, publicidad y facturación, unificados con la misma definición de cada dato.",
                },
                {
                    title: "Embudo por etapas",
                    description:
                        "Cuántos entran, dónde se caen y cuánto tarda cerrar. Es la vista que más decisiones cambia.",
                },
                {
                    title: "Origen de los clientes",
                    description:
                        "Qué canal trae gente que compra, no solo gente que llega. Sin eso, optimizar publicidad es tirar dardos.",
                },
                {
                    title: "Actualización automática",
                    description:
                        "Sin exportar ni pegar. El panel refleja lo que pasó hasta hace minutos.",
                },
                {
                    title: "Envío programado",
                    description:
                        "El resumen llega a tu correo o WhatsApp con la periodicidad que definas.",
                },
            ],
        },
        process: {
            title: "Cómo lo hacemos",
            steps: [
                {
                    num: "01",
                    title: "Sesión de preguntas",
                    description:
                        "Qué decisiones tomas cada semana y qué te falta saber para tomarlas mejor.",
                },
                {
                    num: "02",
                    title: "Auditoría de datos",
                    description:
                        "Qué existe, dónde vive y qué tan fiable es. A veces el primer trabajo es arreglar la captura.",
                },
                {
                    num: "03",
                    title: "Construcción del panel",
                    description:
                        "Empezando por la vista principal. Las secundarias se añaden cuando la primera ya se usa.",
                },
                {
                    num: "04",
                    title: "Revisión al mes",
                    description:
                        "Ajustamos según qué miras de verdad. Lo que nadie abre en un mes, se quita.",
                },
            ],
        },
        stack: {
            title: "Con qué lo construimos",
            intro:
                "Según dónde vivan tus datos y quién los vaya a consultar. No siempre hace falta una herramienta de BI.",
            tools: ["Metabase", "Looker Studio", "PostgreSQL", "Supabase", "n8n", "Google Sheets", "Next.js"],
        },
        faq: [
            {
                id: "que-metricas",
                question: "¿Qué métricas debería mirar?",
                answer:
                    "Depende de qué decides. Para casi todos: cuántas consultas entran, cuántas se atienden a tiempo, cuántas se convierten y de dónde vinieron. Cuatro números bien definidos cambian más decisiones que un panel con cuarenta.",
            },
            {
                id: "datos-desordenados",
                question: "¿Y si mis datos están desordenados?",
                answer:
                    "Es lo habitual, y se detecta en la auditoría. A veces el primer trabajo no es el panel sino arreglar cómo se captura la información. Te lo decimos antes de cobrar por un dashboard que mostraría datos poco fiables.",
            },
        ],
        related: ["integracion-crm", "integraciones-api", "consultoria-tecnologica"],
    },

    "consultoria-tecnologica": {
        slug: "consultoria-tecnologica",
        navLabel: "Consultoría tecnológica",
        cardTitle: "Consultoría tecnológica",
        cardSummary:
            "Decidir qué construir, qué comprar y qué no hacer todavía.",
        icon: "advisory",
        metaTitle: "Consultoría tecnológica para empresas en crecimiento",
        metaDescription:
            "Diagnóstico independiente de tu operación y tu stack: qué automatizar primero, qué comprar, qué construir y en qué orden invertir.",
        eyebrow: "Servicio",
        heading: "A veces la mejor recomendación es no construir nada.",
        intro:
            "Antes de invertir en desarrollo conviene saber si hace falta. Revisamos tu operación, tus herramientas y tus números, y salimos con un plan priorizado: qué resolver primero, qué comprar hecho, qué construir y qué dejar como está.",
        facts: [
            { value: "1–2 semanas", label: "Diagnóstico" },
            { value: "Entregable escrito", label: "Resultado" },
            { value: "Sin compromiso", label: "De contratarnos" },
        ],
        problem: {
            title: "Por qué importa",
            body: "El error caro no suele ser elegir mal la herramienta: es automatizar un proceso que había que rediseñar, o construir algo que ya existía por 20 dólares al mes. Un diagnóstico honesto cuesta una fracción de eso y a veces concluye que no somos necesarios.",
        },
        includes: {
            title: "Qué incluye",
            items: [
                {
                    title: "Mapa de la operación actual",
                    description:
                        "Cómo entra un cliente, por dónde pasa y dónde se atasca. Con tiempos reales, no estimados.",
                },
                {
                    title: "Inventario de herramientas",
                    description:
                        "Qué pagas, qué usas de verdad y qué se solapa. Casi siempre aparece algo que se puede cancelar.",
                },
                {
                    title: "Priorización por retorno",
                    description:
                        "Qué resolver primero según horas liberadas o ingresos recuperados, contra esfuerzo de implementación.",
                },
                {
                    title: "Recomendación de construir o comprar",
                    description:
                        "Con nombres concretos y rangos de precio, incluidos productos que no vendemos ni implementamos.",
                },
                {
                    title: "Plan por fases",
                    description:
                        "Qué hacer este trimestre, qué el siguiente y qué señales indican que toca pasar a lo próximo.",
                },
                {
                    title: "Documento entregable",
                    description:
                        "Todo por escrito, tuyo. Puedes ejecutarlo con nosotros, con tu equipo o con otro proveedor.",
                },
            ],
        },
        process: {
            title: "Cómo lo hacemos",
            steps: [
                {
                    num: "01",
                    title: "Sesiones con el equipo",
                    description:
                        "Hablamos con quien hace el trabajo, no solo con quien lo dirige. Ahí aparecen los atascos reales.",
                },
                {
                    num: "02",
                    title: "Revisión de datos y herramientas",
                    description:
                        "Volúmenes, tiempos de respuesta, tasas de conversión y qué está pagando la empresa hoy.",
                },
                {
                    num: "03",
                    title: "Análisis y priorización",
                    description:
                        "Ordenamos las oportunidades por retorno sobre esfuerzo, con supuestos explícitos.",
                },
                {
                    num: "04",
                    title: "Entrega y presentación",
                    description:
                        "Documento y sesión para discutirlo. Las objeciones de tu equipo suelen mejorar el plan.",
                },
            ],
        },
        stack: {
            title: "Cómo trabajamos",
            intro:
                "El entregable es un documento y un plan, no una demo. Estas son las áreas que revisamos.",
            tools: [
                "Mapa de procesos",
                "Análisis de embudo",
                "Auditoría de stack",
                "Estimación de retorno",
                "Arquitectura de datos",
                "Plan por fases",
            ],
        },
        faq: [
            {
                id: "y-si-no-hace-falta",
                question: "¿Y si concluyen que no necesito nada?",
                answer:
                    "Te lo decimos y el diagnóstico termina ahí. Ha pasado: negocios cuyo problema era de precio o de oferta, no de tecnología. Cobrar por implementar algo que no iba a mover la aguja es la forma más rápida de perder una recomendación.",
            },
            {
                id: "recomiendan-competencia",
                question: "¿Recomiendan herramientas que ustedes no implementan?",
                answer:
                    "Sí, y con frecuencia. Si un producto de 30 dólares al mes resuelve el 90% de tu caso, esa es la recomendación. Nuestro margen no debería decidir tu arquitectura.",
            },
            {
                id: "descuento",
                question: "¿El costo se descuenta si contrato después?",
                answer:
                    "Si decides implementar con nosotros dentro de los tres meses siguientes, el valor del diagnóstico se descuenta del proyecto. La idea es que la consultoría no sea una barrera para empezar.",
            },
        ],
        related: ["automatizacion-de-procesos", "dashboards", "software-a-medida"],
    },
};
