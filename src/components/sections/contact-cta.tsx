import { MailIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { buildWhatsappLink, contactEmail, instagramUrl } from "@/lib/site-data";

export default function ContactCtaSection() {
    return (
        <section className="cyn-cta-section" id="contacto">
            <p className="cyn-cta-tag">Siguiente paso</p>
            <h2>
                Si tu negocio ya crecio,
                <br />
                tu sistema <em>tambien debe hacerlo.</em>
            </h2>
            <div className="cyn-contact-icons" aria-label="Canales de contacto">
                <a
                    href={buildWhatsappLink("Hola, quiero mi diagnostico gratuito")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyn-contact-icon-btn"
                    aria-label="Abrir WhatsApp de Cynocta"
                    title="WhatsApp"
                >
                    <WhatsAppIcon />
                </a>
                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyn-contact-icon-btn"
                    aria-label="Abrir Instagram de Cynocta"
                    title="Instagram"
                >
                    <InstagramIcon />
                </a>
                <a
                    href={`mailto:${contactEmail}`}
                    className="cyn-contact-icon-btn"
                    aria-label="Enviar correo a Cynocta"
                    title="Correo"
                >
                    <MailIcon />
                </a>
            </div>
        </section>
    );
}
