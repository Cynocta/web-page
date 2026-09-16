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
import { JsonLd } from "@/components/structured-data";
import { pageMetadata } from "@/lib/metadata";
import { ORGANIZATION_ID } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
    path: SERVICES_BASE_PATH,
    title: servicesHub.metaTitle,
    description: servicesHub.metaDescription,
});

/** The catalogue as an ordered list, so the hub declares what it indexes. */
const servicesHubJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}${SERVICES_BASE_PATH}#collection`,
    url: `${siteUrl}${SERVICES_BASE_PATH}`,
    name: servicesHub.metaTitle,
    description: servicesHub.metaDescription,
    inLanguage: "es",
    about: { "@id": ORGANIZATION_ID },
    mainEntity: {
        "@type": "ItemList",
        numberOfItems: serviceList.length,
        itemListElement: serviceList.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.cardTitle,
            url: `${siteUrl}${servicePath(service.slug)}`,
        })),
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
            <JsonLd data={servicesHubJsonLd} />
            <PageHero
                eyebrow={servicesHub.eyebrow}
                title={servicesHub.heading}
                intro={servicesHub.intro}
                primary={{ label: servicesHub.ctaLabel, href: "/contacto" }}
                secondary={{ label: "Ver precios", href: "/precios" }}
            />

            <section className={s.section}>
                <div className={`cyn-section ${s.inner}`}>
                    <p className="cyn-section-tag">{servicesHub.listTitle}</p>
                    <h2 className="cyn-section-title">Empieza por lo que más te está costando.</h2>

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
