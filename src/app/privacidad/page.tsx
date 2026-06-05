import s from "@/components/legal.module.css";

export default function PrivacidadPage() {
    return (
        <div className={s.legalPage}>
            <header className={s.hero}>
                <p className={s.kicker}>Cynocta</p>
                <h1 className={s.title}>Politica de privacidad</h1>
                <p className={s.subtitle}>Ultima actualizacion: Mayo 2026</p>
            </header>

            <div className={s.shell}>
                <section className={s.legalSection}>
                    <p>
                        Cynocta protege la informacion personal conforme a la Ley 1581 de 2012 y demas normas
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
                            <span>Telefono</span>
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
                        <li>Telefono</li>
                        <li>Email</li>
                        <li>Empresa</li>
                    </ul>
                    <h3>Datos automaticos</h3>
                    <ul>
                        <li>IP</li>
                        <li>Cookies</li>
                        <li>Navegacion</li>
                    </ul>
                    <h3>Datos de terceros</h3>
                    <ul>
                        <li>Informacion de clientes del cliente (cuando usa nuestros bots)</li>
                    </ul>
                </section>

                <section className={s.legalSection}>
                    <h2>4. Finalidad</h2>
                    <ul>
                        <li>Prestar servicios</li>
                        <li>Automatizar atencion</li>
                        <li>Procesar mensajes</li>
                        <li>Analizar comportamiento</li>
                        <li>Marketing (con autorizacion)</li>
                    </ul>
                </section>

                <section className={s.legalSection}>
                    <h2>5. Tratamiento de datos de terceros</h2>
                    <p>Cuando el cliente usa nuestros sistemas:</p>
                    <ul>
                        <li>Cynocta actua como encargado del tratamiento</li>
                        <li>El cliente es el responsable de los datos</li>
                    </ul>
                    <p>El cliente garantiza que tiene autorizacion para usar dichos datos.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>6. Uso de tecnologias y terceros</h2>
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
                        <li>Revocar autorizacion</li>
                    </ul>
                    <p>Solicitudes a: cynoctaadmin@gmail.com</p>
                </section>

                <section className={s.legalSection}>
                    <h2>9. Seguridad</h2>
                    <ul>
                        <li>Control de acceso</li>
                        <li>Encriptacion</li>
                        <li>Buenas practicas</li>
                    </ul>
                    <p>No garantizamos seguridad absoluta.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>10. Conservacion</h2>
                    <p>Los datos se almacenan mientras:</p>
                    <ul>
                        <li>Exista relacion contractual</li>
                        <li>Sea necesario legalmente</li>
                    </ul>
                </section>

                <section className={s.legalSection}>
                    <h2>11. Cookies</h2>
                    <p>Se usan cookies para:</p>
                    <ul>
                        <li>Analitica</li>
                        <li>Personalizacion</li>
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
                        <li>Proveedores tecnologicos</li>
                        <li>Autoridades legales</li>
                    </ul>
                </section>

                <section className={s.legalSection}>
                    <h2>14. Modificaciones</h2>
                    <p>La politica puede cambiar en cualquier momento.</p>
                </section>

                <section className={s.legalSection}>
                    <h2>15. Contacto</h2>
                    <p>cynoctaadmin@gmail.com</p>
                    <p>+57 305 2580874</p>
                    <p>https://www.cynocta.com</p>
                </section>

                <section className={s.legalSection}>
                    <h2>16. Aceptacion</h2>
                    <p>El uso del servicio implica aceptacion de esta politica.</p>
                </section>
            </div>
        </div>
    );
}
