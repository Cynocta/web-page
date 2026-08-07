import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import PainsSection from "@/components/sections/pains";
import CostSection from "@/components/sections/cost";
import Reveal from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/icons";
import {
    SERVICES_BASE_PATH,
    serviceList,
    servicePath,
    servicesHub,
} from "@/lib/content/services";
import s from "@/components/sections/services-hub.module.css";

export const metadata: Metadata = {
    title: servicesHub.metaTitle,
    description: servicesHub.metaDescription,
    alternates: { canonical: SERVICES_BASE_PATH },
    openGraph: {
        title: `${servicesHub.metaTitle} | Cynocta`,
        description: servicesHub.metaDescription,
        url: SERVICES_BASE_PATH,
    },
};

export default function ServiciosPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: SERVICES_BASE_PATH },
            ]}
        >
            <PageHero
                eyebrow={servicesHub.eyebrow}
                title={servicesHub.heading}
                intro={servicesHub.intro}
                primary={{ label: servicesHub.ctaLabel, href: "/#formulario" }}
                secondary={{ label: "Ver precios", href: "/precios" }}
            />

            <section className={s.section}>
                <div className={`cyn-section ${s.inner}`}>
                    <p className="cyn-section-tag">{servicesHub.listTitle}</p>
                    <h2 className="cyn-section-title">Elige por donde te duele.</h2>

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
                </div>
            </section>

            {/* The problem framing moved off the homepage and lives here, where
                someone is actually choosing between services. */}
            <PainsSection />
            <CostSection />
        </PageShell>
    );
}
