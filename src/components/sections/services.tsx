import { ServiceIcon } from "@/components/icons";
import { services } from "@/lib/site-data";

export default function ServicesSection() {
    return (
        <section className="cyn-section" id="servicios">
            <p className="cyn-section-tag">Soluciones</p>
            <h2 className="cyn-section-title">
                Construimos el sistema
                <br />
                digital que tu negocio necesita.
            </h2>

            <div className="cyn-services-grid">
                {services.map((service) => (
                    <article key={service.title} className="cyn-service-card">
                        <div className="cyn-service-icon">
                            <ServiceIcon kind={service.kind} />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div>
                            {service.tags.map((tag) => (
                                <span key={tag} className="cyn-service-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
