import Link from "next/link";
import { buildWhatsappLink, contactEmail, contactPhone, instagramUrl } from "@/lib/site-data";

export default function Footer() {
    return (
        <footer className="cyn-footer">
            <p className="cyn-footer-copy">(c) 2026 Cynocta - Automatizacion de precision</p>
            <div className="cyn-footer-links">
                <Link href="#servicios">Servicios</Link>
                <Link href="#proceso">Proceso</Link>
                <Link href="#planes">Planes</Link>
                <a
                    href={buildWhatsappLink("Hola, quiero contactar a Cynocta")}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WhatsApp
                </a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href={`mailto:${contactEmail}`}>Correo</a>
                <a href={`tel:${contactPhone.replace(/\s+/g, "")}`}>Llamar</a>
            </div>
        </footer>
    );
}
