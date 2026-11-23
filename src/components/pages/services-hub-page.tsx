import Link from "next/link";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import PainsSection from "@/components/sections/pains";
import CostSection from "@/components/sections/cost";
import Reveal from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/icons";
import { JsonLd } from "@/components/structured-data";
import type { Locale } from "@/lib/content";
import { serviceListFor, servicePath, servicesHubByLocale } from "@/lib/content/services";
import { localePath } from "@/lib/i18n/routes";
import { ORGANIZATION_ID } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";
import s from "@/components/sections/services-hub.module.css";

const LABELS = {
    es: {
        home: "Inicio",
        crumb: "Servicios",
        secondary: "Ver precios",
        gridTitle: "Empieza por lo que más te está costando.",
        seeService: "Ver servicio",
    },
    en: {
        home: "Home",
        crumb: "Services",
        secondary: "See pricing",
        gridTitle: "Start with what's costing you the most.",
        seeService: "See service",
    },
} satisfies Record<Locale, Record<string, string>>;

/** The services hub, shared by /servicios and /en/services. */
export default function ServicesHubPage({ locale }: { locale: Locale }) {
    const hub = servicesHubByLocale[locale];
    const list = serviceListFor(locale);
    const t = LABELS[locale];
    const path = localePath("services", locale);

    /** The catalogue as an ordered list, so the hub declares what it indexes. */
    const collectionJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${siteUrl}${path}#collection`,
        url: `${siteUrl}${path}`,
        name: hub.metaTitle,
        description: hub.metaDescription,
        inLanguage: locale,
        about: { "@id": ORGANIZATION_ID },
        mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement: list.map((service, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: service.cardTitle,
                url: `${siteUrl}${servicePath(service.slug, locale)}`,
            })),
        },
    };

    return (
        <PageShell
            locale={locale}
            crumbs={[
                { label: t.home, href: localePath("home", locale) },
                { label: t.crumb, href: path },
            ]}
        >
            <JsonLd data={collectionJsonLd} />
            <PageHero
                eyebrow={hub.eyebrow}
                title={hub.heading}
                intro={hub.intro}
                primary={{ label: hub.ctaLabel, href: localePath("contact", locale) }}
                secondary={{ label: t.secondary, href: localePath("pricing", locale) }}
            />

            <section className={s.section}>
                <div className={`cyn-section ${s.inner}`}>
                    <p className="cyn-section-tag">{hub.listTitle}</p>
                    <h2 className="cyn-section-title">{t.gridTitle}</h2>

                    {/* An index, not ten cards. Ten boxes of icon-plus-heading-
                        plus-text is the grid every template ships with, and at
                        ten it is also slower to read than a list: the names are
                        what a visitor is scanning for, so the names carry the
                        row and the rule holds them together. */}
                    <ul className={s.index}>
                        {list.map((service, i) => (
                            <li key={service.slug} className={s.row}>
                                <Reveal delay={i * 40} className={s.slot}>
                                    <Link
                                        href={servicePath(service.slug, locale)}
                                        className={s.entry}
                                        aria-label={`${service.cardTitle} — ${t.seeService}`}
                                    >
                                        <span className={s.head}>
                                            <span className={s.icon} aria-hidden="true">
                                                <ServiceIcon kind={service.icon} />
                                            </span>
                                            <h3 className={s.title}>{service.cardTitle}</h3>
                                            <span className={s.arrow} aria-hidden="true">
                                                →
                                            </span>
                                        </span>
                                        <span className={s.summary}>{service.cardSummary}</span>
                                    </Link>
                                </Reveal>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* The problem framing moved off the homepage and lives here, where
                someone is actually choosing between services. */}
            <PainsSection />
            <CostSection />
        </PageShell>
    );
}
