import Header from "@/components/layout/header";
import SiteFooter from "@/components/layout/site-footer";
import ContactCtaSection from "@/components/sections/contact-cta";
import FoundersSection from "@/components/sections/founders";
import HomeFaqSection from "@/components/sections/home-faq";
import HomeHero from "@/components/sections/home-hero";
import LiveDemoSection from "@/components/sections/live-demo";
import PricingSection from "@/components/sections/pricing";
import ResultsSection from "@/components/sections/results";
import ServicesOverviewSection from "@/components/sections/services-overview";
import TechnologiesSection from "@/components/sections/technologies";
import UseCasesSection from "@/components/sections/use-cases";
import { JsonLd } from "@/components/structured-data";
import type { Locale } from "@/lib/content";
import { homeContent } from "@/lib/content/home";
import { ROUTE_MAP } from "@/lib/i18n/routes";
import { faqItemsJsonLd, plansJsonLd, professionalServiceJsonLd } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";

/**
 * The corporate homepage.
 *
 * It introduces the company and routes to the rest of the site rather than
 * trying to close a sale in one scroll — pricing lives on /precios, the
 * qualification form on /contacto, and the problem framing on /servicios.
 *
 * Order, and why:
 *   services → demo → results      what we do, watching it work, the numbers
 *   use cases → technologies        how it applies, what it is built with
 *   pricing → founders → FAQ        what it costs, who does it, the objections
 *   contact                         the action
 * Bands alternate black and surface down the page in that order, so no two
 * neighbours share a tone and read as one block.
 */
export default function LandingPage({ locale }: { locale: Locale }) {
    const isEs = locale === "es";
    const pageUrl = `${siteUrl}${ROUTE_MAP.home[locale] === "/" ? "" : ROUTE_MAP.home[locale]}`;
    const faq = homeContent[locale].faq;

    return (
        <div className="cyn-page">
            <JsonLd data={professionalServiceJsonLd()} />
            {/* The home renders the same three plans as /precios and was the only
                one of the two shipping them unmarked — and the plan @ids already
                resolve against the home, so this is where they belong. */}
            {plansJsonLd(locale).map((plan) => (
                <JsonLd key={plan["@id"]} data={plan} />
            ))}
            <JsonLd data={faqItemsJsonLd(faq.items, pageUrl, faq.title, locale)} />
            <Header />

            <main>
                <HomeHero
                    primaryHref={isEs ? "/contacto" : "/en#contacto"}
                    secondaryHref={isEs ? "/servicios" : "/en#resultados"}
                />
                <ServicesOverviewSection locale={locale} />
                <LiveDemoSection locale={locale} />
                <ResultsSection />
                <UseCasesSection locale={locale} />
                <TechnologiesSection locale={locale} />
                <PricingSection ctaHref={isEs ? "/contacto" : "/en#contacto"} />
                <FoundersSection locale={locale} />
                <HomeFaqSection locale={locale} />
                <ContactCtaSection />
            </main>

            <SiteFooter locale={locale} />
        </div>
    );
}
