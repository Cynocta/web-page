import type { Metadata } from "next";
import PageShell from "@/components/layout/page-shell";
import { pageMetadata } from "@/lib/metadata";
import s from "@/components/legal.module.css";

/** Without this the page inherits the root canonical ("/") and tells Google it
 *  is the homepage, which drops it from the index. */
export const metadata: Metadata = pageMetadata({
    path: "/privacidad",
    title: "Política de privacidad",
    description:
        "Cómo Cynocta recoge, trata y protege los datos personales de quienes usan su sitio web y contratan sus servicios.",
});

/**
 * Rendered inside the site chrome. It used to be a bare <div> with no header or
 * footer, so anyone landing here from search had no link back into the site —
 * a dead end for readers and for the authority the page receives.
 */
export default function PrivacidadPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Política de privacidad", href: "/privacidad" },
            ]}
        >
        <div className={s.legalPage}>
            <header className={s.hero}>
                <p className={s.kicker}>Cynocta</p>
                <h1 className={s.title}>Política de privacidad</h1>
                <p className={s.subtitle}>Última actualización: septiembre de 2026</p>
            </header>

            <div className={s.shell}>
                <section className={s.legalSection}>
                    <p>
                        Cynocta protege la información personal conforme a la Ley 1581 de 2012 y demás normas
                        aplicables en Colombia.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>1. Responsable del tratamiento</h2>
                    <div className={s.contact}>
                        <div>
                            <span>Cynocta</span>
                            <p>https://www.cynocta.com</p>
                        </div>
                        <div>
                            <span>Correo</span>
                            <p>cynoctaadmin@gmail.com</p>
                        </div>
                        <div>
                            <span>Teléfono</span>
                            <p>+57 305 2580874</p>
                        </div>
                    </div>
                </section>

                <section className={s.legalSection}>
                    <h2>2. Principios de tratamiento</h2>
                    <ul>
                        <li>Legalidad</li>
                        <li>Finalidad</li>
                        <li>Libertad</li>
                        <li>Transparencia</li>
                        <li>Seguridad</li>
                        <li>Confidencialidad</li>
                    </ul>
                </section>

                <section className={s.legalSection}>
                    <h2>3. Datos recopilados</h2>
                    <h3>Datos directos</h3>
                    <ul>
                        <li>Nombre</li>
                        <li>Teléfono</li>
                        <li>Email</li>
                        <li>Empresa</li>
                    </ul>
                    <h3>Datos automáticos</h3>
                    <ul>
                        <li>Páginas visitadas, duración de la visita y enlaces pulsados</li>
                        <li>Tipo de dispositivo, navegador y ubicación aproximada (país o ciudad)</li>
                        <li>Canal de origen de la visita (buscador, redes sociales, enlace directo)</li>
                    </ul>
                    <h3>Formulario de diagnóstico</h3>
                    <p>
                        Las respuestas del formulario de diagnóstico no se guardan en nuestros servidores. Al
                        terminarlo, el sitio abre WhatsApp con tus respuestas redactadas y eres tú quien decide
                        si enviar el mensaje.
                    </p>
                    <h3>Datos de terceros</h3>
                    <ul>
                        <li>Información de clientes del cliente (cuando usa nuestros bots)</li>
                    </ul>
                </section>

                <section className={s.legalSection}>
                    <h2>4. Finalidad</h2>
                    <ul>
                        <li>Prestar servicios</li>
                        <li>Automatizar atención</li>
                        <li>Procesar mensajes</li>
                        <li>Analizar comportamiento</li>
                        <li>Marketing (con autorización)</li>
                    </ul>
                </section>

                <section className={s.legalSection}>
                    <h2>5. Tratamiento de datos de terceros</h2>
                    <p>Cuando el cliente usa nuestros sistemas:</p>
                    <ul>
                        <li>Cynocta actúa como encargado del tratamiento</li>
                        <li>El cliente es el responsable de los datos</li>
                    </ul>
                    <p>El cliente garantiza que tiene autorización para usar dichos datos.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>6. Uso de tecnologías y terceros</h2>
                    <p>Para operar el sitio y prestar los servicios se utilizan, entre otros:</p>
                    <ul>
                        <li>WhatsApp y WhatsApp Business Platform (Meta Platforms), para la mensajería.</li>
                        <li>Google Analytics 4 (Google LLC), para la medición de visitas del sitio web.</li>
                        <li>Vercel, para el alojamiento del sitio web.</li>
                        <li>Proveedores de servidores en la nube y de modelos de IA, en los proyectos que lo requieren.</li>
                    </ul>
                    <p>
                        Estos proveedores pueden tratar datos fuera de Colombia. Solo se trabaja con proveedores
                        que ofrecen garantías de seguridad y confidencialidad adecuadas.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>7. Inteligencia artificial</h2>
                    <p>Los datos pueden ser procesados por IA para:</p>
                    <ul>
                        <li>Generar respuestas</li>
                        <li>Analizar mensajes</li>
                    </ul>
                    <p>No se toman decisiones automatizadas con efectos legales.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>8. Derechos del titular</h2>
                    <p>El usuario puede:</p>
                    <ul>
                        <li>Acceder</li>
                        <li>Rectificar</li>
                        <li>Eliminar</li>
                        <li>Revocar autorización</li>
                    </ul>
                    <p>Solicitudes a: cynoctaadmin@gmail.com</p>
                </section>

                <section className={s.legalSection}>
                    <h2>9. Seguridad</h2>
                    <ul>
                        <li>Control de acceso</li>
                        <li>Encriptación</li>
                        <li>Buenas prácticas</li>
                    </ul>
                    <p>No garantizamos seguridad absoluta.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>10. Conservación</h2>
                    <p>Los datos se almacenan mientras:</p>
                    <ul>
                        <li>Exista relación contractual</li>
                        <li>Sea necesario legalmente</li>
                    </ul>
                </section>

                <section className={s.legalSection}>
                    <h2>11. Cookies y almacenamiento en el navegador</h2>
                    <h3>Analítica</h3>
                    <p>
                        El sitio usa Google Analytics 4, que instala las cookies <code>_ga</code> y{" "}
                        <code>_ga_*</code> para distinguir visitas y medir cómo se usa el sitio, por ejemplo qué
                        páginas se leen y qué canal de contacto se elige. Caducan a los 2 años. Google Analytics
                        no nos entrega tu nombre, correo ni número de teléfono.
                    </p>
                    <h3>Preferencias</h3>
                    <p>
                        La divisa que eliges para ver los precios (USD, COP o EUR) se guarda en el almacenamiento
                        local de tu navegador para recordarla en tu próxima visita. No sale de tu dispositivo.
                    </p>
                    <h3>Cómo desactivarlas</h3>
                    <p>
                        Puedes bloquear o borrar las cookies desde la configuración de tu navegador, o instalar
                        el complemento de inhabilitación de Google Analytics (tools.google.com/dlpage/gaoptout).
                        El sitio sigue funcionando con normalidad sin ellas.
                    </p>
                </section>

                <section className={s.legalSection}>
                    <h2>12. Menores de edad</h2>
                    <p>No recolectamos datos de menores intencionalmente.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>13. Transferencias</h2>
                    <p>Los datos pueden compartirse con:</p>
                    <ul>
                        <li>Los proveedores tecnológicos indicados en la sección 6</li>
                        <li>Autoridades competentes, cuando lo exija la ley</li>
                    </ul>
                    <p>Cynocta no vende ni alquila datos personales.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>14. Modificaciones</h2>
                    <p>La política puede cambiar en cualquier momento.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>15. Contacto</h2>
                    <p>cynoctaadmin@gmail.com</p>
                    <p>+57 305 2580874</p>
                    <p>https://www.cynocta.com</p>
                </section>

                <section className={s.legalSection}>
                    <h2>16. Aceptación</h2>
                    <p>El uso del servicio implica aceptación de esta política.</p>
                </section>
            </div>
        </div>
        </PageShell>
    );
}
