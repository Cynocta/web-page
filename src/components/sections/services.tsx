"use client";

import { ServiceIcon } from "@/components/icons";
import { useI18n } from "@/components/i18n-provider";

export default function ServicesSection() {
    const { copy } = useI18n();
    const [titleLine1, titleLine2] = copy.services.title.split("\n");

    return (
        <section className="cyn-section" id="servicios">
            <p className="cyn-section-tag">{copy.services.tag}</p>
            <h2 className="cyn-section-title">
                {titleLine1}
                <br />
                {titleLine2}
            </h2>

            <div className="cyn-services-grid">
                {copy.services.items.map((service) => (
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
