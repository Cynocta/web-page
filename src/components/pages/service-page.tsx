import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import ServiceBody from "@/components/sections/service-body";
import { JsonLd } from "@/components/structured-data";
import type { Locale } from "@/lib/content";
import { servicePath, type ServiceDetail } from "@/lib/content/services";
import { localePath } from "@/lib/i18n/routes";
import { serviceDetailJsonLd, serviceFaqJsonLd } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";

const LABELS = {
    es: { home: "Inicio", services: "Servicios", primary: "Quiero resolverlo", secondary: "Ver planes" },
    en: { home: "Home", services: "Services", primary: "Let's solve it", secondary: "See plans" },
} satisfies Record<Locale, Record<string, string>>;

/** One service page, shared by /servicios/<slug> and /en/services/<slug>. */
export default function ServicePage({ service, locale }: { service: ServiceDetail; locale: Locale }) {
    const t = LABELS[locale];
    const path = servicePath(service.slug, locale);
    const pageUrl = `${siteUrl}${path}`;

    return (
        <PageShell
            locale={locale}
            crumbs={[
                { label: t.home, href: localePath("home", locale) },
                { label: t.services, href: localePath("services", locale) },
                { label: service.navLabel, href: path },
            ]}
        >
            <JsonLd data={serviceDetailJsonLd(service, pageUrl, locale)} />
            <JsonLd data={serviceFaqJsonLd(service, pageUrl, locale)} />

            <PageHero
                eyebrow={service.eyebrow}
                title={service.heading}
                intro={service.intro}
                primary={{ label: t.primary, href: localePath("contact", locale) }}
                secondary={{ label: t.secondary, href: localePath("pricing", locale) }}
                facts={service.facts}
            />

            <ServiceBody service={service} locale={locale} />
        </PageShell>
    );
}
