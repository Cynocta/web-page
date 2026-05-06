export default function TerminosPage() {
    return (
        <div className="cyn-legal-page">
            <header className="cyn-legal-hero">
                <p className="cyn-legal-kicker">Cynocta</p>
                <h1 className="cyn-legal-title">Terminos y condiciones de uso</h1>
                <p className="cyn-legal-subtitle">Documento legal vinculante</p>
            </header>

            <div className="cyn-legal-shell">
                <div className="cyn-legal-meta">
                    <div className="cyn-legal-meta-card">
                        <span className="cyn-legal-meta-label">Ultima actualizacion</span>
                        <strong className="cyn-legal-meta-value">Mayo 2025</strong>
                    </div>
                    <div className="cyn-legal-meta-card">
                        <span className="cyn-legal-meta-label">Version</span>
                        <strong className="cyn-legal-meta-value">1.0</strong>
                    </div>
                    <div className="cyn-legal-meta-card">
                        <span className="cyn-legal-meta-label">Jurisdiccion</span>
                        <strong className="cyn-legal-meta-value">Colombia</strong>
                    </div>
                </div>

                <div className="cyn-legal-callout">
                    Al acceder, registrarse o utilizar cualquier servicio ofrecido por Cynocta, usted declara haber
                    leido, comprendido y aceptado en su totalidad los presentes Terminos y Condiciones. Este
                    documento constituye un contrato legalmente vinculante entre usted y Cynocta. Si no esta de
                    acuerdo con alguna de estas disposiciones, debera abstenerse de utilizar nuestros servicios.
                </div>

                <section className="cyn-legal-section">
                    <h2>1. Definiciones</h2>
                    <p>
                        Para los efectos de estos Terminos y Condiciones, los siguientes terminos tendran el
                        significado que a continuacion se establece:
                    </p>
                    <dl className="cyn-legal-definition-grid">
                        <div className="cyn-legal-definition">
                            <dt>Cynocta</dt>
                            <dd>
                                Empresa proveedora de soluciones tecnologicas de automatizacion, desarrollo web,
                                inteligencia artificial y optimizacion de procesos digitales, con domicilio en la
                                Republica de Colombia.
                            </dd>
                        </div>
                        <div className="cyn-legal-definition">
                            <dt>Cliente</dt>
                            <dd>
                                Persona natural o juridica, mayor de edad o con capacidad legal suficiente, que
                                contrata o utiliza los servicios ofrecidos por Cynocta bajo los presentes Terminos y
                                Condiciones.
                            </dd>
                        </div>
                        <div className="cyn-legal-definition">
                            <dt>Servicios</dt>
                            <dd>
                                El conjunto de soluciones tecnologicas ofrecidas por Cynocta, que incluyen, sin
                                limitarse a: desarrollo web, automatizacion de procesos, chatbots, bots de WhatsApp,
                                integraciones con plataformas externas y aplicaciones de inteligencia artificial.
                            </dd>
                        </div>
                        <div className="cyn-legal-definition">
                            <dt>Plataforma</dt>
                            <dd>
                                El conjunto de herramientas, interfaces, sistemas y aplicaciones a traves de los
                                cuales se prestan los Servicios, incluyendo el sitio web https://www.cynocta.com.
                            </dd>
                        </div>
                        <div className="cyn-legal-definition">
                            <dt>Usuario Final</dt>
                            <dd>
                                Persona que interactua con los sistemas automatizados o chatbots implementados por
                                Cynocta en nombre del Cliente.
                            </dd>
                        </div>
                        <div className="cyn-legal-definition">
                            <dt>Contenido</dt>
                            <dd>
                                Toda informacion, datos, textos, imagenes, videos, archivos y materiales que el
                                Cliente cargue, transmita o gestione a traves de los Servicios.
                            </dd>
                        </div>
                        <div className="cyn-legal-definition">
                            <dt>API de WhatsApp</dt>
                            <dd>
                                Interfaz de programacion de aplicaciones de WhatsApp Business gestionada por Meta
                                Platforms Inc., utilizada para automatizar comunicaciones mediante la plataforma de
                                mensajeria WhatsApp.
                            </dd>
                        </div>
                        <div className="cyn-legal-definition">
                            <dt>Datos Personales</dt>
                            <dd>
                                Cualquier informacion vinculada o que pueda asociarse a una persona natural
                                determinada o determinable, segun la definicion de la Ley 1581 de 2012 y normas
                                complementarias.
                            </dd>
                        </div>
                        <div className="cyn-legal-definition">
                            <dt>Terceros Proveedores</dt>
                            <dd>
                                Empresas externas a Cynocta cuyos servicios, infraestructuras o plataformas se
                                utilizan como parte del ecosistema tecnologico para prestar los Servicios al Cliente
                                (ej. Meta, AWS, Google, Twilio).
                            </dd>
                        </div>
                    </dl>
                </section>

                <section className="cyn-legal-section">
                    <h2>2. Descripcion del servicio</h2>
                    <p>
                        Cynocta es una empresa de tecnologia especializada en el diseno, desarrollo e
                        implementacion de soluciones digitales orientadas a la automatizacion de procesos
                        comerciales y operativos. Nuestro portafolio de servicios comprende las siguientes
                        categorias:
                    </p>
                    <h3>2.1. Desarrollo Web</h3>
                    <ul>
                        <li>Diseno y desarrollo de sitios web corporativos, institucionales y de comercio electronico.</li>
                        <li>Creacion de landing pages optimizadas para conversion.</li>
                        <li>Desarrollo de aplicaciones web a medida (Web Apps).</li>
                        <li>Mantenimiento, actualizacion y soporte de plataformas digitales existentes.</li>
                        <li>Optimizacion de experiencia de usuario (UX/UI) y rendimiento web.</li>
                    </ul>
                    <h3>2.2. Automatizacion de Atencion al Cliente</h3>
                    <ul>
                        <li>Implementacion de flujos automatizados de atencion por chat, correo electronico y mensajeria.</li>
                        <li>Diseno de arboles de decision y scripts de conversacion automatizada.</li>
                        <li>Integracion con sistemas de gestion de relaciones con el cliente (CRM).</li>
                        <li>Configuracion de respuestas automaticas y segmentacion de consultas.</li>
                        <li>Derivacion inteligente a agentes humanos cuando sea necesario.</li>
                    </ul>
                    <h3>2.3. Bots de WhatsApp 24/7</h3>
                    <ul>
                        <li>Desarrollo e implementacion de bots de mensajeria automatizada en WhatsApp Business API.</li>
                        <li>Gestion de plantillas de mensajes aprobadas por Meta.</li>
                        <li>Envio programado de mensajes transaccionales, notificaciones y campanas.</li>
                        <li>Integracion de catalogos de productos y flujos de atencion posventa.</li>
                        <li>Monitoreo de conversaciones y generacion de reportes de interaccion.</li>
                    </ul>
                    <h3>2.4. Integraciones con Herramientas Externas</h3>
                    <ul>
                        <li>Conexion de sistemas con plataformas como Google Calendar, Google Sheets, Gmail, Slack, entre otros.</li>
                        <li>Integracion con pasarelas de pago (ej. PayU, MercadoPago, Wompi).</li>
                        <li>Sincronizacion de datos entre plataformas CRM, ERP y herramientas de marketing.</li>
                        <li>Conexion con APIs de terceros para ampliar la funcionalidad de los sistemas del Cliente.</li>
                    </ul>
                    <h3>2.5. Soluciones de Inteligencia Artificial</h3>
                    <ul>
                        <li>Implementacion de modelos de lenguaje natural (LLM) para chatbots conversacionales avanzados.</li>
                        <li>Desarrollo de asistentes virtuales entrenados con informacion especifica del negocio del Cliente.</li>
                        <li>Automatizacion de clasificacion, analisis y respuesta a consultas mediante IA.</li>
                        <li>Integracion de IA en procesos de ventas, soporte tecnico y gestion de pedidos.</li>
                    </ul>
                    <div className="cyn-legal-note">
                        Importante: Los Servicios de Cynocta son herramientas tecnologicas de apoyo. Cynocta no
                        garantiza resultados comerciales especificos derivados del uso de sus Servicios, ni asegura
                        el logro de metas de ventas, conversion o crecimiento.
                    </div>
                </section>

                <section className="cyn-legal-section">
                    <h2>3. Condiciones de uso del servicio</h2>
                    <h3>3.1. Requisitos del Cliente</h3>
                    <p>Para acceder y utilizar los Servicios de Cynocta, el Cliente debera:</p>
                    <ul>
                        <li>Ser mayor de 18 anos o contar con capacidad legal suficiente para celebrar contratos.</li>
                        <li>
                            Proporcionar informacion veraz, completa y actualizada al momento del registro y
                            durante toda la relacion contractual.
                        </li>
                        <li>
                            Contar con los permisos y autorizaciones necesarios para utilizar las plataformas de
                            terceros integradas con los Servicios de Cynocta.
                        </li>
                        <li>
                            Disponer de una cuenta de WhatsApp Business valida y activa, con numero telefonico
                            habilitado, en caso de contratar servicios de mensajeria automatizada.
                        </li>
                    </ul>
                    <h3>3.2. Compromisos del Cliente</h3>
                    <p>El Cliente se compromete expresamente a:</p>
                    <ul>
                        <li>Utilizar los Servicios exclusivamente con fines licitos y de conformidad con la legislacion colombiana y aplicable.</li>
                        <li>
                            No enviar comunicaciones masivas no solicitadas (spam) ni mensajes a destinatarios que
                            no hayan otorgado su consentimiento previo, expreso e informado.
                        </li>
                        <li>
                            Cumplir integramente con la Ley 1581 de 2012 (Ley de Proteccion de Datos Personales),
                            el Decreto 1377 de 2013 y demas normas complementarias en materia de habeas data.
                        </li>
                        <li>Cumplir con las Politicas de Uso Aceptable de WhatsApp Business y las condiciones de Meta Platforms Inc.</li>
                        <li>No utilizar los Servicios para difundir contenido ilegal, ofensivo, discriminatorio, enganoso, amenazante o que infrinja derechos de terceros.</li>
                        <li>No intentar vulnerar, eludir o interferir con la seguridad, integridad o disponibilidad de los sistemas de Cynocta.</li>
                        <li>No reproducir, copiar, redistribuir, modificar ni comercializar los Servicios o cualquier componente de los mismos sin autorizacion escrita previa de Cynocta.</li>
                    </ul>
                    <h3>3.3. Conductas Prohibidas</h3>
                    <p>Quedan expresamente prohibidas las siguientes conductas:</p>
                    <ul>
                        <li>Uso de los Servicios para actividades de fraude, phishing, suplantacion de identidad o cualquier actividad que induzca a error a terceros.</li>
                        <li>Envio de mensajes que promuevan actividades ilegales, violencia, pornografia, o que atenten contra la dignidad humana.</li>
                        <li>Comercializacion no autorizada de bases de datos de terceros.</li>
                        <li>Uso de los Servicios para actividades de competencia desleal contra Cynocta o sus clientes.</li>
                        <li>Acceso no autorizado a sistemas, cuentas o datos de otros Clientes.</li>
                    </ul>
                    <div className="cyn-legal-note">
                        El incumplimiento de cualquiera de las obligaciones establecidas en esta seccion faculta
                        a Cynocta para suspender o terminar el acceso a los Servicios de manera inmediata, sin
                        perjuicio de las acciones legales que correspondan.
                    </div>
                </section>

                <section className="cyn-legal-section">
                    <h2>4. Responsabilidad sobre WhatsApp y servicios de terceros</h2>
                    <h3>4.1. Independencia de Cynocta respecto a Meta</h3>
                    <p>
                        Cynocta es un proveedor de tecnologia independiente y no tiene ninguna relacion de
                        propiedad, afiliacion, representacion ni asociacion con Meta Platforms Inc. (propietaria de
                        WhatsApp, Facebook e Instagram). Los Servicios de mensajeria automatizada de Cynocta se
                        desarrollan sobre la infraestructura de la WhatsApp Business API, la cual esta sujeta en su
                        totalidad a las politicas, terminos y condiciones establecidos por Meta.
                    </p>
                    <h3>4.2. Responsabilidades del Cliente frente a WhatsApp</h3>
                    <p>El Cliente asume plena y exclusiva responsabilidad sobre:</p>
                    <ul>
                        <li>La titularidad y gestion de su cuenta de WhatsApp Business y los numeros telefonicos asociados.</li>
                        <li>La veracidad y licitud del contenido de los mensajes enviados a traves de la plataforma.</li>
                        <li>El cumplimiento de las politicas de uso aceptable de WhatsApp Business vigentes, incluyendo restricciones de horario, volumen de mensajes y categorias de contenido permitido.</li>
                        <li>La obtencion del consentimiento expreso de los destinatarios antes de iniciar comunicaciones de marketing o promocionales.</li>
                        <li>El mantenimiento del numero de telefono en buenas condiciones y la prevencion de reportes de spam por parte de los usuarios.</li>
                    </ul>
                    <h3>4.3. Exoneracion de Responsabilidad por Terceros</h3>
                    <p>Cynocta no sera responsable por:</p>
                    <ul>
                        <li>Bloqueo, suspension, inhabilitacion o eliminacion de cuentas de WhatsApp Business por parte de Meta, independientemente de la causa.</li>
                        <li>Rechazo, demora en aprobacion o eliminacion de plantillas de mensajes por parte de Meta.</li>
                        <li>Cambios unilaterales en las politicas, precios o condiciones de uso de WhatsApp Business API por parte de Meta.</li>
                        <li>Interrupciones, fallas, errores o perdida de datos en servicios de terceros integrados con la Plataforma (Google, AWS, Twilio, u otros).</li>
                        <li>Modificaciones en APIs de terceros que afecten el funcionamiento de las integraciones desarrolladas por Cynocta.</li>
                    </ul>
                    <p>
                        Cuando los Servicios de terceros presenten fallas ajenas al control de Cynocta, esta pondra
                        sus mejores esfuerzos en identificar el problema y comunicarlo al Cliente, pero no garantiza
                        la resolucion del mismo ni asume responsabilidad por los perjuicios que pudieren derivarse.
                    </p>
                </section>

                <section className="cyn-legal-section">
                    <h2>5. Costos, facturacion y pagos</h2>
                    <h3>5.1. Estructura de Precios</h3>
                    <p>
                        Los Servicios de Cynocta se estructuran generalmente bajo alguno o varios de los
                        siguientes esquemas de facturacion:
                    </p>
                    <div className="cyn-legal-table">
                        <div className="cyn-legal-table-row">
                            <strong>Tipo</strong>
                            <strong>Descripcion</strong>
                            <strong>Condicion</strong>
                        </div>
                        <div className="cyn-legal-table-row">
                            <strong>Pago unico (Setup)</strong>
                            <span>
                                Cubre la configuracion inicial, desarrollo y puesta en marcha del proyecto. Incluye
                                levantamiento de requerimientos, diseno de flujos e implementacion tecnica.
                            </span>
                            <span>Pagadero antes del inicio del proyecto</span>
                        </div>
                        <div className="cyn-legal-table-row">
                            <strong>Suscripcion mensual</strong>
                            <span>
                                Cubre el mantenimiento continuo, soporte tecnico, actualizaciones menores y
                                disponibilidad del servicio activo.
                            </span>
                            <span>Pagadero el primer dia habil de cada mes</span>
                        </div>
                        <div className="cyn-legal-table-row">
                            <strong>Desarrollo adicional</strong>
                            <span>
                                Funcionalidades, modulos o integraciones no contemplados en el alcance inicial
                                acordado.
                            </span>
                            <span>Cotizado y facturado por separado</span>
                        </div>
                        <div className="cyn-legal-table-row">
                            <strong>Soporte extendido</strong>
                            <span>Atencion prioritaria fuera del horario habitual o por fuera del SLA estandar.</span>
                            <span>Tarifas adicionales aplicables segun contrato</span>
                        </div>
                    </div>
                    <h3>5.2. Costos de Terceros</h3>
                    <p>
                        Los costos asociados a servicios de infraestructura y plataformas de terceros NO se
                        encuentran incluidos en las tarifas de Cynocta, salvo que se indique lo contrario de forma
                        explicita y por escrito en la propuesta comercial o contrato de prestacion de servicios.
                        Entre los costos de terceros que corren por cuenta del Cliente se encuentran, sin limitarse
                        a:
                    </p>
                    <ul>
                        <li>Tarifas de la WhatsApp Business API (costos por conversacion segun politicas de Meta).</li>
                        <li>Costos de servidores en la nube (AWS, Google Cloud, DigitalOcean, etc.).</li>
                        <li>Licencias de software de terceros requeridas para el funcionamiento del proyecto.</li>
                        <li>Costos de dominios, certificados SSL y servicios de correo electronico.</li>
                        <li>Tarifas de pasarelas de pago y procesadores de transacciones.</li>
                    </ul>
                    <h3>5.3. Condiciones de Pago</h3>
                    <ul>
                        <li>Los pagos deberan realizarse en las fechas y mediante los medios de pago acordados en la propuesta comercial o contrato de servicios.</li>
                        <li>En caso de retraso en el pago de la suscripcion mensual superior a cinco (5) dias calendario, Cynocta podra suspender los Servicios sin previo aviso hasta tanto se regularice la situacion.</li>
                        <li>La reactivacion de los Servicios despues de una suspension por falta de pago podra estar sujeta al cobro de una tarifa de reconexion.</li>
                        <li>Los pagos realizados no son reembolsables, salvo en los casos expresamente contemplados en la propuesta comercial o cuando la causa de la terminacion sea imputable exclusivamente a Cynocta.</li>
                        <li>Cynocta se reserva el derecho de actualizar sus tarifas con un aviso previo minimo de treinta (30) dias calendario al Cliente.</li>
                    </ul>
                    <h3>5.4. Impuestos</h3>
                    <p>
                        Todos los precios indicados por Cynocta no incluyen impuestos, tasas o contribuciones de
                        caracter fiscal, salvo que se indique expresamente lo contrario. El Cliente sera responsable
                        de cualquier impuesto aplicable en su jurisdiccion derivado de la contratacion de los
                        Servicios.
                    </p>
                </section>

                <section className="cyn-legal-section">
                    <h2>6. Propiedad intelectual</h2>
                    <h3>6.1. Titularidad de Cynocta</h3>
                    <p>
                        Salvo acuerdo expreso y por escrito en contrario, todo el codigo fuente, algoritmos,
                        automatizaciones, flujos conversacionales, disenos, metodologias, documentacion tecnica y
                        desarrollos creados por Cynocta en el marco de la prestacion de los Servicios son y
                        permaneceran de propiedad exclusiva de Cynocta o sus licenciantes.
                    </p>
                    <p>
                        Lo anterior incluye, sin limitarse a: componentes reutilizables, librerias propias,
                        integraciones genericas, plantillas de flujos y cualquier elemento de software de caracter
                        modular que Cynocta utilice en multiples proyectos.
                    </p>
                    <h3>6.2. Licencia de Uso al Cliente</h3>
                    <p>
                        En virtud del pago de los Servicios contratados y mientras se mantenga vigente la
                        relacion comercial, Cynocta otorga al Cliente una licencia de uso limitada, no exclusiva,
                        intransferible y revocable sobre los desarrollos realizados especificamente para el
                        proyecto del Cliente. Esta licencia no implica transferencia de la propiedad intelectual.
                    </p>
                    <h3>6.3. Transferencia de Derechos</h3>
                    <p>
                        En caso de que el Cliente desee adquirir la titularidad plena del codigo fuente y los
                        desarrollos realizados, debera acordarlo expresamente con Cynocta mediante un contrato de
                        cesion de derechos patrimoniales de autor, el cual podra implicar costos adicionales a los
                        servicios regulares.
                    </p>
                    <h3>6.4. Propiedad del Cliente</h3>
                    <p>El Cliente conservara en todo momento la titularidad sobre:</p>
                    <ul>
                        <li>Su marca, logotipo y demas elementos de identidad corporativa.</li>
                        <li>Los contenidos, textos, imagenes y materiales audiovisuales de su propiedad que proporcione a Cynocta para el desarrollo de los proyectos.</li>
                        <li>Sus bases de datos de clientes, contactos, transacciones y demas datos de negocio.</li>
                        <li>Las cuentas de plataformas digitales (WhatsApp Business, redes sociales, dominios) de titularidad del Cliente.</li>
                    </ul>
                    <h3>6.5. Confidencialidad</h3>
                    <p>
                        Ambas partes se comprometen a mantener la confidencialidad de toda informacion sensible,
                        tecnica, comercial o estrategica que sea compartida en el marco de la relacion de
                        servicios, y a no divulgarla a terceros sin el consentimiento previo y escrito de la parte
                        propietaria de dicha informacion. Esta obligacion subsistira durante un periodo de dos (2)
                        anos despues de la terminacion de la relacion contractual.
                    </p>
                </section>

                <section className="cyn-legal-section">
                    <h2>7. Inteligencia artificial y automatizacion</h2>
                    <h3>7.1. Naturaleza de las Soluciones de IA</h3>
                    <p>
                        Los productos basados en inteligencia artificial desarrollados por Cynocta, incluidos
                        chatbots, asistentes virtuales y sistemas de respuesta automatizada, operan sobre modelos
                        de lenguaje y tecnologias de procesamiento de lenguaje natural (NLP) de terceros, o sobre
                        modelos propios. Estas soluciones generan respuestas de manera autonoma basandose en el
                        entrenamiento, las instrucciones y los datos proporcionados.
                    </p>
                    <h3>7.2. Limitaciones de la IA</h3>
                    <p>El Cliente reconoce y acepta que:</p>
                    <ul>
                        <li>Los sistemas de inteligencia artificial pueden generar respuestas inexactas, incompletas o que no reflejen fielmente la informacion del negocio del Cliente.</li>
                        <li>Los modelos de IA pueden presentar "alucinaciones" (generacion de informacion ficticia presentada como real), lo cual es una limitacion tecnica inherente a esta tecnologia.</li>
                        <li>El rendimiento de los sistemas de IA puede verse afectado por cambios en los modelos subyacentes, actualizaciones de los proveedores de IA o modificaciones en los parametros de entrenamiento.</li>
                        <li>Los sistemas de IA no reemplazan el criterio humano en decisiones sensibles de negocio, legales, medicas, financieras o de cualquier otra naturaleza que requiera asesoramiento profesional especializado.</li>
                    </ul>
                    <h3>7.3. Responsabilidad del Cliente sobre la IA</h3>
                    <p>El Cliente es el unico responsable de:</p>
                    <ul>
                        <li>Revisar y validar periodicamente las respuestas generadas por los sistemas de IA implementados.</li>
                        <li>Supervisar las interacciones entre los sistemas automatizados y sus usuarios finales.</li>
                        <li>Corregir de manera oportuna cualquier respuesta incorrecta o inapropiada que el sistema genere.</li>
                        <li>Notificar a Cynocta cuando identifique fallos sistematicos en el comportamiento del sistema para su correccion.</li>
                        <li>Verificar que la informacion suministrada a los sistemas de IA para entrenamiento o contexto sea veraz, actualizada y de su legitima titularidad.</li>
                    </ul>
                    <div className="cyn-legal-note">
                        Cynocta no garantiza la exactitud, completitud ni idoneidad de las respuestas generadas
                        automaticamente por los sistemas de inteligencia artificial. El uso de estas tecnologias
                        es bajo la entera responsabilidad del Cliente.
                    </div>
                </section>

                <section className="cyn-legal-section">
                    <h2>8. Disponibilidad y niveles de servicio (SLA)</h2>
                    <h3>8.1. Objetivo de Disponibilidad</h3>
                    <p>
                        Cynocta realizara sus mejores esfuerzos tecnicos y operativos para garantizar una
                        disponibilidad de los Servicios del noventa y cinco por ciento (95%) mensual, medida en
                        tiempo activo sobre el total del mes calendario, excluyendo los mantenimientos programados
                        y las causas de fuerza mayor.
                    </p>
                    <h3>8.2. Mantenimientos Programados</h3>
                    <p>
                        Cynocta podra realizar mantenimientos preventivos o correctivos en su infraestructura de
                        manera periodica. En la medida de lo posible, Cynocta notificara al Cliente con al menos
                        cuarenta y ocho (48) horas de anticipacion, salvo en situaciones de urgencia tecnica que
                        requieran intervencion inmediata.
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
                    <h3>8.4. Soporte Tecnico</h3>
                    <p>
                        El soporte tecnico incluido en la suscripcion mensual comprende la atencion de consultas,
                        reportes de errores y resolucion de incidencias relacionadas con los Servicios contratados,
                        dentro del horario de atencion de Cynocta. El tiempo de respuesta y resolucion variara
                        segun la criticidad del incidente y se detallara en el contrato de servicios correspondiente.
                    </p>
                </section>

                <section className="cyn-legal-section">
                    <h2>9. Privacidad y proteccion de datos personales</h2>
                    <h3>9.1. Marco Legal Aplicable</h3>
                    <p>
                        Cynocta cumple con la Ley Estatutaria 1581 de 2012, el Decreto Reglamentario 1377 de 2013
                        y demas normas concordantes sobre Proteccion de Datos Personales en Colombia. Asimismo,
                        Cynocta procura alinearse con estandares internacionales de privacidad aplicables cuando
                        corresponda.
                    </p>
                    <h3>9.2. Datos del Cliente</h3>
                    <p>
                        Los datos que el Cliente proporcione a Cynocta seran tratados conforme a la Politica de
                        Privacidad de Cynocta, la cual se encuentra disponible en https://www.cynocta.com. Cynocta
                        utilizara estos datos exclusivamente para la prestacion de los Servicios contratados y no
                        los comercializara ni cedera a terceros sin el consentimiento del titular, salvo obligacion
                        legal.
                    </p>
                    <h3>9.3. Datos de Terceros Tratados por el Cliente</h3>
                    <p>El Cliente actua como responsable del tratamiento de los datos personales de sus propios clientes y usuarios finales. En consecuencia, el Cliente debera:</p>
                    <ul>
                        <li>Contar con las autorizaciones legales suficientes para tratar los datos personales de sus usuarios a traves de las herramientas de Cynocta.</li>
                        <li>Registrar su base de datos ante la Superintendencia de Industria y Comercio (SIC) cuando aplique.</li>
                        <li>Implementar las medidas tecnicas y organizacionales adecuadas para proteger los datos personales de sus usuarios.</li>
                        <li>Responder directamente ante los titulares de los datos y ante las autoridades de control por el tratamiento que realice a traves de los Servicios de Cynocta.</li>
                    </ul>
                    <h3>9.4. Seguridad de la Informacion</h3>
                    <p>
                        Cynocta implementa medidas tecnicas razonables para proteger la informacion de sus
                        Clientes frente a accesos no autorizados, perdidas, alteraciones o divulgaciones indebidas.
                        Sin embargo, Cynocta no puede garantizar la seguridad absoluta de la informacion transmitida
                        por Internet, dado que ningun sistema de transmision de datos es completamente invulnerable.
                    </p>
                </section>

                <section className="cyn-legal-section">
                    <h2>10. Limitacion de responsabilidad</h2>
                    <h3>10.1. Alcance de la Responsabilidad de Cynocta</h3>
                    <p>En la maxima medida permitida por la legislacion colombiana aplicable, Cynocta no sera responsable por:</p>
                    <ul>
                        <li>Perdida de ingresos, ventas, ganancias o participacion de mercado.</li>
                        <li>Danos emergentes o lucro cesante derivados del uso o imposibilidad de uso de los Servicios.</li>
                        <li>Danos indirectos, incidentales, especiales, punitivos o consecuentes.</li>
                        <li>Perdida o corrupcion de datos causada por fallas en servicios de terceros.</li>
                        <li>Errores o inexactitudes en las respuestas generadas por sistemas de inteligencia artificial.</li>
                        <li>Danos causados por el uso indebido de los Servicios por parte del Cliente o de terceros con acceso otorgado por este.</li>
                        <li>Decisiones comerciales o estrategicas tomadas por el Cliente basandose en informacion generada por los Servicios de Cynocta.</li>
                    </ul>
                    <h3>10.2. Limite Maximo de Responsabilidad</h3>
                    <p>
                        En caso de que Cynocta sea declarada responsable por algun perjuicio derivado de los
                        Servicios, la responsabilidad maxima de Cynocta frente al Cliente estara limitada al valor
                        de los pagos realizados por el Cliente a Cynocta durante los tres (3) meses calendario
                        inmediatamente anteriores al hecho generador del perjuicio.
                    </p>
                    <h3>10.3. Indemnidad</h3>
                    <p>
                        El Cliente se compromete a mantener indemne a Cynocta, sus directivos, empleados, socios y
                        proveedores, frente a cualquier reclamacion, demanda, perjuicio, costo o gasto (incluyendo
                        honorarios legales) que surja como consecuencia del uso indebido de los Servicios por parte
                        del Cliente, del incumplimiento de estos Terminos y Condiciones, o de la violacion de
                        derechos de terceros.
                    </p>
                </section>

                <section className="cyn-legal-section">
                    <h2>11. Vigencia y terminacion del contrato</h2>
                    <h3>11.1. Vigencia</h3>
                    <p>
                        Los presentes Terminos y Condiciones entran en vigor desde el momento en que el Cliente
                        accede o utiliza los Servicios de Cynocta por primera vez, o desde la firma del contrato de
                        prestacion de servicios correspondiente, y permaneceran vigentes hasta su terminacion
                        conforme a lo dispuesto en esta seccion.
                    </p>
                    <h3>11.2. Terminacion por Parte del Cliente</h3>
                    <p>
                        El Cliente podra dar por terminado el contrato de servicios con Cynocta, notificando por
                        escrito su decision con un minimo de treinta (30) dias calendario de antelacion. Los pagos
                        realizados hasta la fecha de terminacion no seran reembolsables.
                    </p>
                    <h3>11.3. Terminacion por Parte de Cynocta</h3>
                    <p>
                        Cynocta podra suspender o terminar el acceso a los Servicios, de manera inmediata o con
                        previo aviso segun la gravedad del caso, en los siguientes supuestos:
                    </p>
                    <ul>
                        <li>Incumplimiento de cualquiera de las obligaciones establecidas en estos Terminos y Condiciones.</li>
                        <li>Uso de los Servicios para actividades ilicitas, fraudulentas o contrarias a la moral y el orden publico.</li>
                        <li>Falta de pago de las sumas adeudadas por mas de diez (10) dias habiles.</li>
                        <li>Conducta hostil, amenazante o abusiva por parte del Cliente o sus representantes hacia el personal de Cynocta.</li>
                        <li>Orden judicial, administrativa o de autoridad competente que lo requiera.</li>
                    </ul>
                    <h3>11.4. Efectos de la Terminacion</h3>
                    <p>Una vez terminado el contrato:</p>
                    <ul>
                        <li>El Cliente perdera el acceso a los Servicios y a la Plataforma de Cynocta.</li>
                        <li>Cynocta entregara al Cliente, dentro de los quince (15) dias siguientes a la terminacion, los datos y contenidos de titularidad del Cliente que se encuentren en los sistemas de Cynocta, en los formatos disponibles.</li>
                        <li>Las obligaciones de confidencialidad y las disposiciones relativas a propiedad intelectual subsistiran con posterioridad a la terminacion del contrato.</li>
                    </ul>
                </section>

                <section className="cyn-legal-section">
                    <h2>12. Modificaciones a los Terminos y Condiciones</h2>
                    <p>
                        Cynocta se reserva el derecho de modificar, actualizar o revisar los presentes Terminos y
                        Condiciones en cualquier momento, con o sin previo aviso. Las modificaciones entraran en
                        vigor desde el momento de su publicacion en el sitio web https://www.cynocta.com o desde la
                        notificacion al Cliente por los medios de contacto registrados.
                    </p>
                    <p>
                        Se considerara que el Cliente ha aceptado las modificaciones si continua haciendo uso de
                        los Servicios luego de la entrada en vigor de los cambios. El Cliente que no este de acuerdo
                        con las modificaciones debera notificarlo por escrito a Cynocta y podra dar por terminado el
                        contrato conforme a lo dispuesto en la seccion 11.
                    </p>
                    <div className="cyn-legal-note">
                        Recomendamos al Cliente revisar periodicamente los Terminos y Condiciones publicados en
                        nuestro sitio web para mantenerse informado sobre posibles actualizaciones.
                    </div>
                </section>

                <section className="cyn-legal-section">
                    <h2>13. Fuerza mayor y caso fortuito</h2>
                    <p>
                        Cynocta no sera responsable por el incumplimiento o retraso en la prestacion de los
                        Servicios cuando dicho incumplimiento o retraso sea consecuencia de causas que esten fuera
                        de su control razonable, incluyendo, sin limitarse a: desastres naturales, pandemias, actos
                        de guerra, terrorismo, huelgas generales, decisiones gubernamentales, fallas masivas de
                        infraestructura de internet, o cualquier otro evento de caso fortuito o fuerza mayor.
                    </p>
                    <p>
                        Ante la ocurrencia de un evento de fuerza mayor, Cynocta notificara al Cliente en el menor
                        tiempo posible e implementara las medidas razonables para mitigar los efectos del evento y
                        restablecer los Servicios.
                    </p>
                </section>

                <section className="cyn-legal-section">
                    <h2>14. Ley aplicable y resolucion de conflictos</h2>
                    <h3>14.1. Ley Aplicable</h3>
                    <p>
                        Los presentes Terminos y Condiciones se rigen, interpretan y ejecutan de conformidad con
                        las leyes de la Republica de Colombia, incluyendo, en lo pertinente, el Codigo Civil, el
                        Codigo de Comercio, la Ley 527 de 1999 (comercio electronico), la Ley 1480 de 2011 (Estatuto
                        del Consumidor) y la Ley 1581 de 2012 (proteccion de datos personales).
                    </p>
                    <h3>14.2. Resolucion de Conflictos</h3>
                    <p>
                        En caso de controversias derivadas o relacionadas con estos Terminos y Condiciones o con
                        los Servicios de Cynocta, las partes acuerdan:
                    </p>
                    <ul>
                        <li>Intentar resolver el conflicto de manera amigable mediante negociacion directa, dentro de los quince (15) dias habiles siguientes a la notificacion del desacuerdo.</li>
                        <li>Si la negociacion directa no prospera, las partes podran someter el conflicto a un proceso de mediacion ante el Centro de Arbitraje y Conciliacion de la Camara de Comercio de Medellin.</li>
                        <li>En caso de que la mediacion tampoco resuelva el conflicto, las partes acuerdan someterse a la jurisdiccion de los jueces ordinarios competentes de la ciudad de Medellin, Colombia, renunciando expresamente a cualquier otro fuero que pudiere corresponderles.</li>
                    </ul>
                </section>

                <section className="cyn-legal-section">
                    <h2>15. Disposiciones generales</h2>
                    <h3>15.1. Integralidad del Acuerdo</h3>
                    <p>
                        Los presentes Terminos y Condiciones, junto con la propuesta comercial o contrato de
                        servicios suscrito entre las partes, constituyen el acuerdo completo entre Cynocta y el
                        Cliente respecto al objeto de dicho acuerdo, y reemplaza cualquier comunicacion o
                        entendimiento previo, ya sea verbal o escrito.
                    </p>
                    <h3>15.2. Divisibilidad</h3>
                    <p>
                        Si alguna disposicion de estos Terminos y Condiciones fuera declarada invalida, ilegal o
                        inaplicable por una autoridad competente, dicha disposicion se considerara separable de las
                        demas y no afectara la validez y aplicabilidad del resto del documento.
                    </p>
                    <h3>15.3. No Renuncia</h3>
                    <p>
                        El hecho de que Cynocta no ejerza o haga cumplir algun derecho o disposicion de estos
                        Terminos y Condiciones no constituira renuncia a dicho derecho o disposicion. Cualquier
                        renuncia debe constar por escrito y ser firmada por un representante autorizado de Cynocta.
                    </p>
                    <h3>15.4. Comunicaciones</h3>
                    <p>
                        Todas las comunicaciones formales entre las partes deberan realizarse por escrito, a
                        traves de los medios de contacto registrados o los indicados en el contrato de servicios.
                        Las comunicaciones enviadas por correo electronico se entenderan recibidas al dia habil
                        siguiente de su envio.
                    </p>
                </section>

                <section className="cyn-legal-section">
                    <h2>16. Informacion de contacto</h2>
                    <p>
                        Para consultas sobre estos Terminos y Condiciones, soporte tecnico, reportes de incidencias
                        o cualquier otra comunicacion relacionada con los Servicios de Cynocta, puede contactarnos
                        a traves de los siguientes canales:
                    </p>
                    <div className="cyn-legal-contact">
                        <div>
                            <span>Sitio web</span>
                            <p>https://www.cynocta.com</p>
                        </div>
                        <div>
                            <span>Correo electronico</span>
                            <p>cynoctaadmin@gmail.com</p>
                        </div>
                        <div>
                            <span>WhatsApp</span>
                            <p>+57 305 2580874</p>
                        </div>
                        <div>
                            <span>Horario de atencion</span>
                            <p>Lunes a viernes, 8:00 a.m. - 6:00 p.m. (hora Colombia)</p>
                        </div>
                        <div>
                            <span>Tiempo de respuesta</span>
                            <p>Maximo 48 horas habiles</p>
                        </div>
                    </div>
                </section>

                <section className="cyn-legal-section">
                    <h2>17. Aceptacion de Terminos y Condiciones</h2>
                    <div className="cyn-legal-accept">
                        <p>
                            Al acceder, registrarse o utilizar los Servicios de Cynocta, el Cliente declara
                            expresamente que ha leido, comprendido y acepta en su totalidad los presentes Terminos y
                            Condiciones de Uso, asi como la Politica de Privacidad de Cynocta. Este consentimiento
                            tiene caracter vinculante y produce plenos efectos legales.
                        </p>
                    </div>
                </section>

                <p className="cyn-legal-signoff">— Cynocta | Automatizacion y Desarrollo Digital —</p>
                <p className="cyn-legal-site">www.cynocta.com</p>
            </div>
        </div>
    );
}
