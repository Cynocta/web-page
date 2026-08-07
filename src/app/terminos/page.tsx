import type { Metadata } from "next";
import s from "@/components/legal.module.css";

/** Without this the page inherits the root canonical ("/") and tells Google it
 *  is the homepage, which drops it from the index. */
export const metadata: Metadata = {
    title: "Términos y condiciones",
    description:
        "Términos y condiciones de uso de los servicios de automatización, desarrollo web e integración de procesos de Cynocta.",
    alternates: {
        canonical: "/terminos",
    },
    openGraph: {
        title: "Términos y condiciones | Cynocta",
        description:
            "Términos y condiciones de uso de los servicios de automatización, desarrollo web e integración de procesos de Cynocta.",
        url: "/terminos",
    },
};

export default function TerminosPage() {
    return (
        <div className={s.legalPage}>
            <header className={s.hero}>
                <p className={s.kicker}>Cynocta</p>
                <h1 className={s.title}>Términos y condiciones de uso</h1>
                <p className={s.subtitle}>Documento legal vinculante</p>
            </header>

            <div className={s.shell}>
                <div className={s.meta}>
                    <div className={s.metaCard}>
                        <span className={s.metaLabel}>Última actualización</span>
                        <strong className={s.metaValue}>Mayo 2025</strong>
                    </div>
                    <div className={s.metaCard}>
                        <span className={s.metaLabel}>Versión</span>
                        <strong className={s.metaValue}>1.0</strong>
                    </div>
                    <div className={s.metaCard}>
                        <span className={s.metaLabel}>Jurisdicción</span>
                        <strong className={s.metaValue}>Colombia</strong>
                    </div>
                </div>

                <div className={s.callout}>
                    Al acceder, registrarse o utilizar cualquier servicio ofrecido por Cynocta, usted declara haber
                    leído, comprendido y aceptado en su totalidad los presentes Términos y Condiciones. Este
                    documento constituye un contrato legalmente vinculante entre usted y Cynocta. Si no está de
                    acuerdo con alguna de estas disposiciones, deberá abstenerse de utilizar nuestros servicios.
                </div>

                <section className={s.legalSection}>
                    <h2>1. Definiciones</h2>
                    <p>
                        Para los efectos de estos Términos y Condiciones, los siguientes términos tendrán el
                        significado que a continuación se establece:
                    </p>
                    <dl className={s.definitionGrid}>
                        <div className={s.definition}>
                            <dt>Cynocta</dt>
                            <dd>
                                Empresa proveedora de soluciones tecnológicas de automatización, desarrollo web,
                                inteligencia artificial y optimización de procesos digitales, con domicilio en la
                                República de Colombia.
                            </dd>
                        </div>
                        <div className={s.definition}>
                            <dt>Cliente</dt>
                            <dd>
                                Persona natural o jurídica, mayor de edad o con capacidad legal suficiente, que
                                contrata o utiliza los servicios ofrecidos por Cynocta bajo los presentes Términos y
                                Condiciones.
                            </dd>
                        </div>
                        <div className={s.definition}>
                            <dt>Servicios</dt>
                            <dd>
                                El conjunto de soluciones tecnológicas ofrecidas por Cynocta, que incluyen, sin
                                limitarse a: desarrollo web, automatización de procesos, chatbots, bots de WhatsApp,
                                integraciones con plataformas externas y aplicaciones de inteligencia artificial.
                            </dd>
                        </div>
                        <div className={s.definition}>
                            <dt>Plataforma</dt>
                            <dd>
                                El conjunto de herramientas, interfaces, sistemas y aplicaciones a través de los
                                cuales se prestan los Servicios, incluyendo el sitio web https://www.cynocta.com.
                            </dd>
                        </div>
                        <div className={s.definition}>
                            <dt>Usuario Final</dt>
                            <dd>
                                Persona que interactúa con los sistemas automatizados o chatbots implementados por
                                Cynocta en nombre del Cliente.
                            </dd>
                        </div>
                        <div className={s.definition}>
                            <dt>Contenido</dt>
                            <dd>
                                Toda información, datos, textos, imágenes, videos, archivos y materiales que el
                                Cliente cargue, transmita o gestione a través de los Servicios.
                            </dd>
                        </div>
                        <div className={s.definition}>
                            <dt>API de WhatsApp</dt>
                            <dd>
                                Interfaz de programación de aplicaciones de WhatsApp Business gestionada por Meta
                                Platforms Inc., utilizada para automatizar comunicaciones mediante la plataforma de
                                mensajería WhatsApp.
                            </dd>
                        </div>
                        <div className={s.definition}>
                            <dt>Datos Personales</dt>
                            <dd>
                                Cualquier información vinculada o que pueda asociarse a una persona natural
                                determinada o determinable, según la definición de la Ley 1581 de 2012 y normas
                                complementarias.
                            </dd>
                        </div>
                        <div className={s.definition}>
                            <dt>Terceros Proveedores</dt>
                            <dd>
                                Empresas externas a Cynocta cuyos servicios, infraestructuras o plataformas se
                                utilizan como parte del ecosistema tecnológico para prestar los Servicios al Cliente
                                (ej. Meta, AWS, Google, Twilio).
                            </dd>
                        </div>
                    </dl>
                </section>

                <section className={s.legalSection}>
                    <h2>2. Descripción del servicio</h2>
                    <p>
                        Cynocta es una empresa de tecnología especializada en el diseño, desarrollo e
                        implementación de soluciones digitales orientadas a la automatización de procesos
                        comerciales y operativos. Nuestro portafolio de servicios comprende las siguientes
                        categorías:
                    </p>
                    <h3>2.1. Desarrollo Web</h3>
                    <ul>
                        <li>Diseño y desarrollo de sitios web corporativos, institucionales y de comercio electrónico.</li>
                        <li>Creación de landing pages optimizadas para conversión.</li>
                        <li>Desarrollo de aplicaciones web a medida (Web Apps).</li>
                        <li>Mantenimiento, actualización y soporte de plataformas digitales existentes.</li>
                        <li>Optimización de experiencia de usuario (UX/UI) y rendimiento web.</li>
                    </ul>
                    <h3>2.2. Automatización de Atención al Cliente</h3>
                    <ul>
                        <li>Implementación de flujos automatizados de atención por chat, correo electrónico y mensajería.</li>
                        <li>Diseño de árboles de decisión y scripts de conversación automatizada.</li>
                        <li>Integración con sistemas de gestión de relaciones con el cliente (CRM).</li>
                        <li>Configuración de respuestas automáticas y segmentación de consultas.</li>
                        <li>Derivacion inteligente a agentes humanos cuando sea necesario.</li>
                    </ul>
                    <h3>2.3. Bots de WhatsApp 24/7</h3>
                    <ul>
                        <li>Desarrollo e implementación de bots de mensajería automatizada en WhatsApp Business API.</li>
                        <li>Gestión de plantillas de mensajes aprobadas por Meta.</li>
                        <li>Envío programado de mensajes transaccionales, notificaciones y campañas.</li>
                        <li>Integración de catalogos de productos y flujos de atención posventa.</li>
                        <li>Monitoreo de conversaciones y generación de reportes de interacción.</li>
                    </ul>
                    <h3>2.4. Integraciones con Herramientas Externas</h3>
                    <ul>
                        <li>Conexión de sistemas con plataformas como Google Calendar, Google Sheets, Gmail, Slack, entre otros.</li>
                        <li>Integración con pasarelas de pago (ej. PayU, MercadoPago, Wompi).</li>
                        <li>Sincronización de datos entre plataformas CRM, ERP y herramientas de marketing.</li>
                        <li>Conexión con APIs de terceros para ampliar la funcionalidad de los sistemas del Cliente.</li>
                    </ul>
                    <h3>2.5. Soluciones de Inteligencia Artificial</h3>
                    <ul>
                        <li>Implementación de modelos de lenguaje natural (LLM) para chatbots conversacionales avanzados.</li>
                        <li>Desarrollo de asistentes virtuales entrenados con información específica del negocio del Cliente.</li>
                        <li>Automatización de clasificación, análisis y respuesta a consultas mediante IA.</li>
                        <li>Integración de IA en procesos de ventas, soporte técnico y gestión de pedidos.</li>
                    </ul>
                    <div className={s.note}>
                        Importante: Los Servicios de Cynocta son herramientas tecnológicas de apoyo. Cynocta no
                        garantiza resultados comerciales específicos derivados del uso de sus Servicios, ni asegura
                        el logro de metas de ventas, conversión o crecimiento.
                    </div>
                </section>

                <section className={s.legalSection}>
                    <h2>3. Condiciones de uso del servicio</h2>
                    <h3>3.1. Requisitos del Cliente</h3>
                    <p>Para acceder y utilizar los Servicios de Cynocta, el Cliente deberá:</p>
                    <ul>
                        <li>Ser mayor de 18 años o contar con capacidad legal suficiente para celebrar contratos.</li>
                        <li>
                            Proporcionar información veraz, completa y actualizada al momento del registro y
                            durante toda la relación contractual.
                        </li>
                        <li>
                            Contar con los permisos y autorizaciones necesarios para utilizar las plataformas de
                            terceros integradas con los Servicios de Cynocta.
                        </li>
                        <li>
                            Disponer de una cuenta de WhatsApp Business valida y activa, con número telefónico
                            habilitado, en caso de contratar servicios de mensajería automatizada.
                        </li>
                    </ul>
                    <h3>3.2. Compromisos del Cliente</h3>
                    <p>El Cliente se compromete expresamente a:</p>
                    <ul>
                        <li>Utilizar los Servicios exclusivamente con fines lícitos y de conformidad con la legislación colombiana y aplicable.</li>
                        <li>
                            No enviar comunicaciones masivas no solicitadas (spam) ni mensajes a destinatarios que
                            no hayan otorgado su consentimiento previo, expreso e informado.
                        </li>
                        <li>
                            Cumplir íntegramente con la Ley 1581 de 2012 (Ley de Protección de Datos Personales),
                            el Decreto 1377 de 2013 y demás normas complementarias en materia de habeas data.
                        </li>
                        <li>Cumplir con las Políticas de Uso Aceptable de WhatsApp Business y las condiciones de Meta Platforms Inc.</li>
                        <li>No utilizar los Servicios para difundir contenido ilegal, ofensivo, discriminatorio, engañoso, amenazante o que infrinja derechos de terceros.</li>
                        <li>No intentar vulnerar, eludir o interferir con la seguridad, integridad o disponibilidad de los sistemas de Cynocta.</li>
                        <li>No reproducir, copiar, redistribuir, modificar ni comercializar los Servicios o cualquier componente de los mismos sin autorización escrita previa de Cynocta.</li>
                    </ul>
                    <h3>3.3. Conductas Prohibidas</h3>
                    <p>Quedan expresamente prohibidas las siguientes conductas:</p>
                    <ul>
                        <li>Uso de los Servicios para actividades de fraude, phishing, suplantación de identidad o cualquier actividad que induzca a error a terceros.</li>
                        <li>Envío de mensajes que promuevan actividades ilegales, violencia, pornografía, o que atenten contra la dignidad humana.</li>
                        <li>Comercialización no autorizada de bases de datos de terceros.</li>
                        <li>Uso de los Servicios para actividades de competencia desleal contra Cynocta o sus clientes.</li>
                        <li>Acceso no autorizado a sistemas, cuentas o datos de otros Clientes.</li>
                    </ul>
                    <div className={s.note}>
                        El incumplimiento de cualquiera de las obligaciones establecidas en esta sección faculta
                        a Cynocta para suspender o terminar el acceso a los Servicios de manera inmediata, sin
                        perjuicio de las acciones legales que correspondan.
                    </div>
                </section>

                <section className={s.legalSection}>
                    <h2>4. Responsabilidad sobre WhatsApp y servicios de terceros</h2>
                    <h3>4.1. Independencia de Cynocta respecto a Meta</h3>
                    <p>
                        Cynocta es un proveedor de tecnología independiente y no tiene ninguna relación de
                        propiedad, afiliación, representación ni asociación con Meta Platforms Inc. (propietaria de
                        WhatsApp, Facebook e Instagram). Los Servicios de mensajería automatizada de Cynocta se
                        desarrollan sobre la infraestructura de la WhatsApp Business API, la cual está sujeta en su
                        totalidad a las políticas, términos y condiciones establecidos por Meta.
                    </p>
                    <h3>4.2. Responsabilidades del Cliente frente a WhatsApp</h3>
                    <p>El Cliente asume plena y exclusiva responsabilidad sobre:</p>
                    <ul>
                        <li>La titularidad y gestión de su cuenta de WhatsApp Business y los números telefónicos asociados.</li>
                        <li>La veracidad y licitud del contenido de los mensajes enviados a través de la plataforma.</li>
                        <li>El cumplimiento de las políticas de uso aceptable de WhatsApp Business vigentes, incluyendo restricciones de horario, volumen de mensajes y categorías de contenido permitido.</li>
                        <li>La obtención del consentimiento expreso de los destinatarios antes de iniciar comunicaciones de marketing o promocionales.</li>
                        <li>El mantenimiento del número de teléfono en buenas condiciones y la prevención de reportes de spam por parte de los usuarios.</li>
                    </ul>
                    <h3>4.3. Exoneración de Responsabilidad por Terceros</h3>
                    <p>Cynocta no será responsable por:</p>
                    <ul>
                        <li>Bloqueo, suspensión, inhabilitación o eliminación de cuentas de WhatsApp Business por parte de Meta, independientemente de la causa.</li>
                        <li>Rechazo, demora en aprobación o eliminación de plantillas de mensajes por parte de Meta.</li>
                        <li>Cambios unilaterales en las políticas, precios o condiciones de uso de WhatsApp Business API por parte de Meta.</li>
                        <li>Interrupciones, fallas, errores o pérdida de datos en servicios de terceros integrados con la Plataforma (Google, AWS, Twilio, u otros).</li>
                        <li>Modificaciones en APIs de terceros que afecten el funcionamiento de las integraciones desarrolladas por Cynocta.</li>
                    </ul>
                    <p>
                        Cuando los Servicios de terceros presenten fallas ajenas al control de Cynocta, esta pondrá
                        sus mejores esfuerzos en identificar el problema y comunicarlo al Cliente, pero no garantiza
                        la resolución del mismo ni asume responsabilidad por los perjuicios que pudieren derivarse.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>5. Costos, facturación y pagos</h2>
                    <h3>5.1. Estructura de Precios</h3>
                    <p>
                        Los Servicios de Cynocta se estructuran generalmente bajo alguno o varios de los
                        siguientes esquemas de facturación:
                    </p>
                    <div className={s.table}>
                        <div className={s.tableRow}>
                            <strong>Tipo</strong>
                            <strong>Descripción</strong>
                            <strong>Condición</strong>
                        </div>
                        <div className={s.tableRow}>
                            <strong>Pago único (Setup)</strong>
                            <span>
                                Cubre la configuración inicial, desarrollo y puesta en marcha del proyecto. Incluye
                                levantamiento de requerimientos, diseño de flujos e implementación técnica.
                            </span>
                            <span>Pagadero antes del inicio del proyecto</span>
                        </div>
                        <div className={s.tableRow}>
                            <strong>Suscripción mensual</strong>
                            <span>
                                Cubre el mantenimiento continuo, soporte técnico, actualizaciones menores y
                                disponibilidad del servicio activo.
                            </span>
                            <span>Pagadero el primer día hábil de cada mes</span>
                        </div>
                        <div className={s.tableRow}>
                            <strong>Desarrollo adicional</strong>
                            <span>
                                Funcionalidades, módulos o integraciones no contemplados en el alcance inicial
                                acordado.
                            </span>
                            <span>Cotizado y facturado por separado</span>
                        </div>
                        <div className={s.tableRow}>
                            <strong>Soporte extendido</strong>
                            <span>Atención prioritaria fuera del horario habitual o por fuera del SLA estándar.</span>
                            <span>Tarifas adicionales aplicables según contrato</span>
                        </div>
                    </div>
                    <h3>5.2. Costos de Terceros</h3>
                    <p>
                        Los costos asociados a servicios de infraestructura y plataformas de terceros NO se
                        encuentran incluidos en las tarifas de Cynocta, salvo que se indique lo contrario de forma
                        explícita y por escrito en la propuesta comercial o contrato de prestación de servicios.
                        Entre los costos de terceros que corren por cuenta del Cliente se encuentran, sin limitarse
                        a:
                    </p>
                    <ul>
                        <li>Tarifas de la WhatsApp Business API (costos por conversación según políticas de Meta).</li>
                        <li>Costos de servidores en la nube (AWS, Google Cloud, DigitalOcean, etc.).</li>
                        <li>Licencias de software de terceros requeridas para el funcionamiento del proyecto.</li>
                        <li>Costos de dominios, certificados SSL y servicios de correo electrónico.</li>
                        <li>Tarifas de pasarelas de pago y procesadores de transacciones.</li>
                    </ul>
                    <h3>5.3. Condiciones de Pago</h3>
                    <ul>
                        <li>Los pagos deberán realizarse en las fechas y mediante los medios de pago acordados en la propuesta comercial o contrato de servicios.</li>
                        <li>En caso de retraso en el pago de la suscripción mensual superior a cinco (5) días calendario, Cynocta podrá suspender los Servicios sin previo aviso hasta tanto se regularice la situación.</li>
                        <li>La reactivación de los Servicios después de una suspensión por falta de pago podrá estar sujeta al cobro de una tarifa de reconexión.</li>
                        <li>Los pagos realizados no son reembolsables, salvo en los casos expresamente contemplados en la propuesta comercial o cuando la causa de la terminación sea imputable exclusivamente a Cynocta.</li>
                        <li>Cynocta se reserva el derecho de actualizar sus tarifas con un aviso previo mínimo de treinta (30) días calendario al Cliente.</li>
                    </ul>
                    <h3>5.4. Impuestos</h3>
                    <p>
                        Todos los precios indicados por Cynocta no incluyen impuestos, tasas o contribuciones de
                        carácter fiscal, salvo que se indique expresamente lo contrario. El Cliente será responsable
                        de cualquier impuesto aplicable en su jurisdicción derivado de la contratación de los
                        Servicios.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>6. Propiedad intelectual</h2>
                    <h3>6.1. Titularidad de Cynocta</h3>
                    <p>
                        Salvo acuerdo expreso y por escrito en contrario, todo el código fuente, algoritmos,
                        automatizaciones, flujos conversacionales, diseños, metodologías, documentación técnica y
                        desarrollos creados por Cynocta en el marco de la prestación de los Servicios son y
                        permanecerán de propiedad exclusiva de Cynocta o sus licenciantes.
                    </p>
                    <p>
                        Lo anterior incluye, sin limitarse a: componentes reutilizables, librerías propias,
                        integraciones genéricas, plantillas de flujos y cualquier elemento de software de carácter
                        modular que Cynocta utilice en múltiples proyectos.
                    </p>
                    <h3>6.2. Licencia de Uso al Cliente</h3>
                    <p>
                        En virtud del pago de los Servicios contratados y mientras se mantenga vigente la
                        relación comercial, Cynocta otorga al Cliente una licencia de uso limitada, no exclusiva,
                        intransferible y revocable sobre los desarrollos realizados específicamente para el
                        proyecto del Cliente. Esta licencia no implica transferencia de la propiedad intelectual.
                    </p>
                    <h3>6.3. Transferencia de Derechos</h3>
                    <p>
                        En caso de que el Cliente desee adquirir la titularidad plena del código fuente y los
                        desarrollos realizados, deberá acordarlo expresamente con Cynocta mediante un contrato de
                        cesión de derechos patrimoniales de autor, el cual podrá implicar costos adicionales a los
                        servicios regulares.
                    </p>
                    <h3>6.4. Propiedad del Cliente</h3>
                    <p>El Cliente conservará en todo momento la titularidad sobre:</p>
                    <ul>
                        <li>Su marca, logotipo y demás elementos de identidad corporativa.</li>
                        <li>Los contenidos, textos, imágenes y materiales audiovisuales de su propiedad que proporcione a Cynocta para el desarrollo de los proyectos.</li>
                        <li>Sus bases de datos de clientes, contactos, transacciones y demás datos de negocio.</li>
                        <li>Las cuentas de plataformas digitales (WhatsApp Business, redes sociales, dominios) de titularidad del Cliente.</li>
                    </ul>
                    <h3>6.5. Confidencialidad</h3>
                    <p>
                        Ambas partes se comprometen a mantener la confidencialidad de toda información sensible,
                        técnica, comercial o estrategica que sea compartida en el marco de la relación de
                        servicios, y a no divulgarla a terceros sin el consentimiento previo y escrito de la parte
                        propietaria de dicha información. Esta obligación subsistirá durante un periodo de dos (2)
                        años después de la terminación de la relación contractual.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>7. Inteligencia artificial y automatización</h2>
                    <h3>7.1. Naturaleza de las Soluciones de IA</h3>
                    <p>
                        Los productos basados en inteligencia artificial desarrollados por Cynocta, incluidos
                        chatbots, asistentes virtuales y sistemas de respuesta automatizada, operan sobre modelos
                        de lenguaje y tecnologías de procesamiento de lenguaje natural (NLP) de terceros, o sobre
                        modelos propios. Estas soluciones generan respuestas de manera autónoma basándose en el
                        entrenamiento, las instrucciones y los datos proporcionados.
                    </p>
                    <h3>7.2. Limitaciones de la IA</h3>
                    <p>El Cliente reconoce y acepta que:</p>
                    <ul>
                        <li>Los sistemas de inteligencia artificial pueden generar respuestas inexactas, incompletas o que no reflejen fielmente la información del negocio del Cliente.</li>
                        <li>Los modelos de IA pueden presentar "alucinaciones" (generación de información ficticia presentada como real), lo cual es una limitación técnica inherente a esta tecnología.</li>
                        <li>El rendimiento de los sistemas de IA puede verse afectado por cambios en los modelos subyacentes, actualizaciones de los proveedores de IA o modificaciones en los parámetros de entrenamiento.</li>
                        <li>Los sistemas de IA no reemplazan el criterio humano en decisiones sensibles de negocio, legales, medicas, financieras o de cualquier otra naturaleza que requiera asesoramiento profesional especializado.</li>
                    </ul>
                    <h3>7.3. Responsabilidad del Cliente sobre la IA</h3>
                    <p>El Cliente es el único responsable de:</p>
                    <ul>
                        <li>Revisar y validar periódicamente las respuestas generadas por los sistemas de IA implementados.</li>
                        <li>Supervisar las interacciones entre los sistemas automatizados y sus usuarios finales.</li>
                        <li>Corregir de manera oportuna cualquier respuesta incorrecta o inapropiada que el sistema genere.</li>
                        <li>Notificar a Cynocta cuando identifique fallos sistemáticos en el comportamiento del sistema para su corrección.</li>
                        <li>Verificar que la información suministrada a los sistemas de IA para entrenamiento o contexto sea veraz, actualizada y de su legítima titularidad.</li>
                    </ul>
                    <div className={s.note}>
                        Cynocta no garantiza la exactitud, completitud ni idoneidad de las respuestas generadas
                        automáticamente por los sistemas de inteligencia artificial. El uso de estas tecnologías
                        es bajo la entera responsabilidad del Cliente.
                    </div>
                </section>

                <section className={s.legalSection}>
                    <h2>8. Disponibilidad y niveles de servicio (SLA)</h2>
                    <h3>8.1. Objetivo de Disponibilidad</h3>
                    <p>
                        Cynocta realizará sus mejores esfuerzos técnicos y operativos para garantizar una
                        disponibilidad de los Servicios del noventa y cinco por ciento (95%) mensual, medida en
                        tiempo activo sobre el total del mes calendario, excluyendo los mantenimientos programados
                        y las causas de fuerza mayor.
                    </p>
                    <h3>8.2. Mantenimientos Programados</h3>
                    <p>
                        Cynocta podrá realizar mantenimientos preventivos o correctivos en su infraestructura de
                        manera periodica. En la medida de lo posible, Cynocta notificará al Cliente con al menos
                        cuarenta y ocho (48) horas de anticipación, salvo en situaciones de urgencia técnica que
                        requieran intervención inmediata.
                    </p>
                    <h3>8.3. Exclusiones del SLA</h3>
                    <p>El objetivo de disponibilidad establecido no aplica ni genera compensaciones en los siguientes casos:</p>
                    <ul>
                        <li>Interrupciones causadas por fallas en servicios de terceros (Meta, proveedores de nube, operadores de telecomunicaciones, etc.).</li>
                        <li>Mantenimientos de emergencia necesarios para preservar la seguridad o integridad de los sistemas.</li>
                        <li>Casos de fuerza mayor o caso fortuito (desastres naturales, pandemia, actos terroristas, fallos masivos de infraestructura de internet, entre otros).</li>
                        <li>Problemas derivados del uso indebido de los Servicios por parte del Cliente o de terceros con acceso otorgado por el Cliente.</li>
                        <li>Restricciones o bloqueos impuestos por autoridades gubernamentales o decisiones de plataformas de terceros.</li>
                    </ul>
                    <h3>8.4. Soporte Técnico</h3>
                    <p>
                        El soporte técnico incluido en la suscripción mensual comprende la atención de consultas,
                        reportes de errores y resolución de incidencias relacionadas con los Servicios contratados,
                        dentro del horario de atención de Cynocta. El tiempo de respuesta y resolución variará
                        según la criticidad del incidente y se detallará en el contrato de servicios correspondiente.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>9. Privacidad y protección de datos personales</h2>
                    <h3>9.1. Marco Legal Aplicable</h3>
                    <p>
                        Cynocta cumple con la Ley Estatutaria 1581 de 2012, el Decreto Reglamentario 1377 de 2013
                        y demás normas concordantes sobre Protección de Datos Personales en Colombia. Asimismo,
                        Cynocta procura alinearse con estándares internacionales de privacidad aplicables cuando
                        corresponda.
                    </p>
                    <h3>9.2. Datos del Cliente</h3>
                    <p>
                        Los datos que el Cliente proporcione a Cynocta serán tratados conforme a la Política de
                        Privacidad de Cynocta, la cual se encuentra disponible en https://www.cynocta.com. Cynocta
                        utilizará estos datos exclusivamente para la prestación de los Servicios contratados y no
                        los comercializará ni cederá a terceros sin el consentimiento del titular, salvo obligación
                        legal.
                    </p>
                    <h3>9.3. Datos de Terceros Tratados por el Cliente</h3>
                    <p>El Cliente actúa como responsable del tratamiento de los datos personales de sus propios clientes y usuarios finales. En consecuencia, el Cliente deberá:</p>
                    <ul>
                        <li>Contar con las autorizaciones legales suficientes para tratar los datos personales de sus usuarios a través de las herramientas de Cynocta.</li>
                        <li>Registrar su base de datos ante la Superintendencia de Industria y Comercio (SIC) cuando aplique.</li>
                        <li>Implementar las medidas técnicas y organizacionales adecuadas para proteger los datos personales de sus usuarios.</li>
                        <li>Responder directamente ante los titulares de los datos y ante las autoridades de control por el tratamiento que realice a través de los Servicios de Cynocta.</li>
                    </ul>
                    <h3>9.4. Seguridad de la Información</h3>
                    <p>
                        Cynocta implementa medidas técnicas razonables para proteger la información de sus
                        Clientes frente a accesos no autorizados, pérdidas, alteraciones o divulgaciones indebidas.
                        Sin embargo, Cynocta no puede garantizar la seguridad absoluta de la información transmitida
                        por Internet, dado que ningún sistema de transmisión de datos es completamente invulnerable.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>10. Limitación de responsabilidad</h2>
                    <h3>10.1. Alcance de la Responsabilidad de Cynocta</h3>
                    <p>En la máxima medida permitida por la legislación colombiana aplicable, Cynocta no será responsable por:</p>
                    <ul>
                        <li>Pérdida de ingresos, ventas, ganancias o participación de mercado.</li>
                        <li>Daños emergentes o lucro cesante derivados del uso o imposibilidad de uso de los Servicios.</li>
                        <li>Daños indirectos, incidentales, especiales, punitivos o consecuentes.</li>
                        <li>Pérdida o corrupción de datos causada por fallas en servicios de terceros.</li>
                        <li>Errores o inexactitudes en las respuestas generadas por sistemas de inteligencia artificial.</li>
                        <li>Daños causados por el uso indebido de los Servicios por parte del Cliente o de terceros con acceso otorgado por este.</li>
                        <li>Decisiones comerciales o estratégicas tomadas por el Cliente basándose en información generada por los Servicios de Cynocta.</li>
                    </ul>
                    <h3>10.2. Límite Máximo de Responsabilidad</h3>
                    <p>
                        En caso de que Cynocta sea declarada responsable por algún perjuicio derivado de los
                        Servicios, la responsabilidad máxima de Cynocta frente al Cliente estará limitada al valor
                        de los pagos realizados por el Cliente a Cynocta durante los tres (3) meses calendario
                        inmediatamente anteriores al hecho generador del perjuicio.
                    </p>
                    <h3>10.3. Indemnidad</h3>
                    <p>
                        El Cliente se compromete a mantener indemne a Cynocta, sus directivos, empleados, socios y
                        proveedores, frente a cualquier reclamación, demanda, perjuicio, costo o gasto (incluyendo
                        honorarios legales) que surja como consecuencia del uso indebido de los Servicios por parte
                        del Cliente, del incumplimiento de estos Términos y Condiciones, o de la violación de
                        derechos de terceros.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>11. Vigencia y terminación del contrato</h2>
                    <h3>11.1. Vigencia</h3>
                    <p>
                        Los presentes Términos y Condiciones entran en vigor desde el momento en que el Cliente
                        accede o utiliza los Servicios de Cynocta por primera vez, o desde la firma del contrato de
                        prestación de servicios correspondiente, y permanecerán vigentes hasta su terminación
                        conforme a lo dispuesto en esta sección.
                    </p>
                    <h3>11.2. Terminación por Parte del Cliente</h3>
                    <p>
                        El Cliente podrá dar por terminado el contrato de servicios con Cynocta, notificando por
                        escrito su decisión con un mínimo de treinta (30) días calendario de antelacion. Los pagos
                        realizados hasta la fecha de terminación no serán reembolsables.
                    </p>
                    <h3>11.3. Terminación por Parte de Cynocta</h3>
                    <p>
                        Cynocta podrá suspender o terminar el acceso a los Servicios, de manera inmediata o con
                        previo aviso según la gravedad del caso, en los siguientes supuestos:
                    </p>
                    <ul>
                        <li>Incumplimiento de cualquiera de las obligaciones establecidas en estos Términos y Condiciones.</li>
                        <li>Uso de los Servicios para actividades ilícitas, fraudulentas o contrarias a la moral y el orden público.</li>
                        <li>Falta de pago de las sumas adeudadas por más de diez (10) días hábiles.</li>
                        <li>Conducta hostil, amenazante o abusiva por parte del Cliente o sus representantes hacia el personal de Cynocta.</li>
                        <li>Orden judicial, administrativa o de autoridad competente que lo requiera.</li>
                    </ul>
                    <h3>11.4. Efectos de la Terminación</h3>
                    <p>Una vez terminado el contrato:</p>
                    <ul>
                        <li>El Cliente perderá el acceso a los Servicios y a la Plataforma de Cynocta.</li>
                        <li>Cynocta entregara al Cliente, dentro de los quince (15) días siguientes a la terminación, los datos y contenidos de titularidad del Cliente que se encuentren en los sistemas de Cynocta, en los formatos disponibles.</li>
                        <li>Las obligaciones de confidencialidad y las disposiciones relativas a propiedad intelectual subsistiran con posterioridad a la terminación del contrato.</li>
                    </ul>
                </section>

                <section className={s.legalSection}>
                    <h2>12. Modificaciones a los Términos y Condiciones</h2>
                    <p>
                        Cynocta se reserva el derecho de modificar, actualizar o revisar los presentes Términos y
                        Condiciones en cualquier momento, con o sin previo aviso. Las modificaciones entrarán en
                        vigor desde el momento de su publicación en el sitio web https://www.cynocta.com o desde la
                        notificación al Cliente por los medios de contacto registrados.
                    </p>
                    <p>
                        Se considerará que el Cliente ha aceptado las modificaciones si continua haciendo uso de
                        los Servicios luego de la entrada en vigor de los cambios. El Cliente que no este de acuerdo
                        con las modificaciones deberá notificarlo por escrito a Cynocta y podrá dar por terminado el
                        contrato conforme a lo dispuesto en la sección 11.
                    </p>
                    <div className={s.note}>
                        Recomendamos al Cliente revisar periódicamente los Términos y Condiciones publicados en
                        nuestro sitio web para mantenerse informado sobre posibles actualizaciones.
                    </div>
                </section>

                <section className={s.legalSection}>
                    <h2>13. Fuerza mayor y caso fortuito</h2>
                    <p>
                        Cynocta no será responsable por el incumplimiento o retraso en la prestación de los
                        Servicios cuando dicho incumplimiento o retraso sea consecuencia de causas que estén fuera
                        de su control razonable, incluyendo, sin limitarse a: desastres naturales, pandemias, actos
                        de guerra, terrorismo, huelgas generales, decisiones gubernamentales, fallas masivas de
                        infraestructura de internet, o cualquier otro evento de caso fortuito o fuerza mayor.
                    </p>
                    <p>
                        Ante la ocurrencia de un evento de fuerza mayor, Cynocta notificará al Cliente en el menor
                        tiempo posible e implementara las medidas razonables para mitigar los efectos del evento y
                        restablecer los Servicios.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>14. Ley aplicable y resolución de conflictos</h2>
                    <h3>14.1. Ley Aplicable</h3>
                    <p>
                        Los presentes Términos y Condiciones se rigen, interpretan y ejecutan de conformidad con
                        las leyes de la República de Colombia, incluyendo, en lo pertinente, el Código Civil, el
                        Código de Comercio, la Ley 527 de 1999 (comercio electrónico), la Ley 1480 de 2011 (Estatuto
                        del Consumidor) y la Ley 1581 de 2012 (protección de datos personales).
                    </p>
                    <h3>14.2. Resolución de Conflictos</h3>
                    <p>
                        En caso de controversias derivadas o relacionadas con estos Términos y Condiciones o con
                        los Servicios de Cynocta, las partes acuerdan:
                    </p>
                    <ul>
                        <li>Intentar resolver el conflicto de manera amigable mediante negociación directa, dentro de los quince (15) días hábiles siguientes a la notificación del desacuerdo.</li>
                        <li>Si la negociación directa no prospera, las partes podrán someter el conflicto a un proceso de mediacion ante el Centro de Arbitraje y Conciliación de la Cámara de Comercio de Medellín.</li>
                        <li>En caso de que la mediacion tampoco resuelva el conflicto, las partes acuerdan someterse a la jurisdicción de los jueces ordinarios competentes de la ciudad de Medellín, Colombia, renunciando expresamente a cualquier otro fuero que pudiere corresponderles.</li>
                    </ul>
                </section>

                <section className={s.legalSection}>
                    <h2>15. Disposiciones generales</h2>
                    <h3>15.1. Integralidad del Acuerdo</h3>
                    <p>
                        Los presentes Términos y Condiciones, junto con la propuesta comercial o contrato de
                        servicios suscrito entre las partes, constituyen el acuerdo completo entre Cynocta y el
                        Cliente respecto al objeto de dicho acuerdo, y reemplaza cualquier comunicación o
                        entendimiento previo, ya sea verbal o escrito.
                    </p>
                    <h3>15.2. Divisibilidad</h3>
                    <p>
                        Si alguna disposición de estos Términos y Condiciones fuera declarada inválida, ilegal o
                        inaplicable por una autoridad competente, dicha disposición se considerará separable de las
                        demás y no afectará la validez y aplicabilidad del resto del documento.
                    </p>
                    <h3>15.3. No Renuncia</h3>
                    <p>
                        El hecho de que Cynocta no ejerza o haga cumplir algún derecho o disposición de estos
                        Términos y Condiciones no constituirá renuncia a dicho derecho o disposición. Cualquier
                        renuncia debe constar por escrito y ser firmada por un representante autorizado de Cynocta.
                    </p>
                    <h3>15.4. Comunicaciones</h3>
                    <p>
                        Todas las comunicaciones formales entre las partes deberán realizarse por escrito, a
                        través de los medios de contacto registrados o los indicados en el contrato de servicios.
                        Las comunicaciones enviadas por correo electrónico se entenderán recibidas al día hábil
                        siguiente de su envío.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>16. Información de contacto</h2>
                    <p>
                        Para consultas sobre estos Términos y Condiciones, soporte técnico, reportes de incidencias
                        o cualquier otra comunicación relacionada con los Servicios de Cynocta, puede contactarnos
                        a través de los siguientes canales:
                    </p>
                    <div className={s.contact}>
                        <div>
                            <span>Sitio web</span>
                            <p>https://www.cynocta.com</p>
                        </div>
                        <div>
                            <span>Correo electrónico</span>
                            <p>cynoctaadmin@gmail.com</p>
                        </div>
                        <div>
                            <span>WhatsApp</span>
                            <p>+57 305 2580874</p>
                        </div>
                        <div>
                            <span>Horario de atención</span>
                            <p>Lunes a viernes, 8:00 a.m. - 6:00 p.m. (hora Colombia)</p>
                        </div>
                        <div>
                            <span>Tiempo de respuesta</span>
                            <p>Máximo 48 horas hábiles</p>
                        </div>
                    </div>
                </section>

                <section className={s.legalSection}>
                    <h2>17. Aceptación de Términos y Condiciones</h2>
                    <div className={s.accept}>
                        <p>
                            Al acceder, registrarse o utilizar los Servicios de Cynocta, el Cliente declara
                            expresamente que ha leído, comprendido y acepta en su totalidad los presentes Términos y
                            Condiciones de Uso, así como la Política de Privacidad de Cynocta. Este consentimiento
                            tiene carácter vinculante y produce plenos efectos legales.
                        </p>
                    </div>
                </section>

                <p className={s.signoff}>— Cynocta | Automatización y Desarrollo Digital —</p>
                <p className={s.site}>www.cynocta.com</p>
            </div>
        </div>
    );
}
