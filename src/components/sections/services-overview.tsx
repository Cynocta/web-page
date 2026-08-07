import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/icons";
import { serviceList, servicePath } from "@/lib/content/services";
import s from "./services-hub.module.css";

/**
 * Homepage services block.
 *
 * Reads the same registry the hub and the footer use, so a new service shows up
 * in all three without being written out again.
 */
export default function ServicesOverviewSection() {
    return (
        <Section id="servicios" tone="surface">
            <SectionHeader
                eyebrow="Servicios"
                title="Cerramos las grietas por donde se te van los clientes."
                intro="Cinco frentes que se contratan por separado o se combinan. La mayoría de los proyectos empieza por uno y crece desde ahí."
            />

            <div className={s.grid}>
                {serviceList.map((service, i) => (
                    <Reveal key={service.slug} delay={i * 60}>
                        <Link href={servicePath(service.slug)} className={s.card}>
                            <div className={s.icon}>
                                <ServiceIcon kind={service.icon} />
                            </div>
                            <h3 className={s.title}>{service.cardTitle}</h3>
                            <p className={s.summary}>{service.cardSummary}</p>
                            <span className={s.arrow} aria-hidden="true">
                                VER SERVICIO →
                            </span>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
