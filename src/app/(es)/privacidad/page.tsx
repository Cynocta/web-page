import type { Metadata } from "next";
import s from "@/components/legal.module.css";

/** Without this the page inherits the root canonical ("/") and tells Google it
 *  is the homepage, which drops it from the index. */
export const metadata: Metadata = {
    title: "Política de privacidad",
    description:
        "Cómo Cynocta recoge, trata y protege los datos personales de quienes usan su sitio web y contratan sus servicios.",
    alternates: {
        canonical: "/privacidad",
    },
    openGraph: {
        title: "Política de privacidad | Cynocta",
        description:
            "Cómo Cynocta recoge, trata y protege los datos personales de quienes usan su sitio web y contratan sus servicios.",
        url: "/privacidad",
    },
};

export default function PrivacidadPage() {
    return (
        <div className={s.legalPage}>
            <header className={s.hero}>
                <p className={s.kicker}>Cynocta</p>
                <h1 className={s.title}>Política de privacidad</h1>
                <p className={s.subtitle}>Última actualización: Mayo 2026</p>
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
                        <li>IP</li>
                        <li>Cookies</li>
                        <li>Navegación</li>
                    </ul>
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
                    <p>
                        Se utilizan servicios como WhatsApp (Meta), servidores cloud y APIs. Los datos pueden
                        ser transferidos internacionalmente.
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
                    <h2>11. Cookies</h2>
                    <p>Se usan cookies para:</p>
                    <ul>
                        <li>Analítica</li>
                        <li>Personalización</li>
                    </ul>
                    <p>El usuario puede desactivarlas.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>12. Menores de edad</h2>
                    <p>No recolectamos datos de menores intencionalmente.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>13. Transferencias</h2>
                    <p>Los datos pueden compartirse con:</p>
                    <ul>
                        <li>Proveedores tecnológicos</li>
                        <li>Autoridades legales</li>
                    </ul>
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
    );
}
