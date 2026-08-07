import Header from "@/components/layout/header";
import SiteFooter from "@/components/layout/site-footer";
import BenefitsSection from "@/components/sections/benefits";
import ContactCtaSection from "@/components/sections/contact-cta";
import FoundersSection from "@/components/sections/founders";
import HomeHero from "@/components/sections/home-hero";
import ResultsSection from "@/components/sections/results";
import ServicesOverviewSection from "@/components/sections/services-overview";
import TechnologiesSection from "@/components/sections/technologies";
import UseCasesSection from "@/components/sections/use-cases";
import { JsonLd } from "@/components/structured-data";
import type { Locale } from "@/lib/content";
import { professionalServiceJsonLd } from "@/lib/schema";

/**
 * The corporate homepage.
 *
 * It introduces the company and routes to the rest of the site rather than
 * trying to close a sale in one scroll — pricing lives on /precios, the
 * qualification form on /contacto, and the problem framing on /servicios.
 */
export default function LandingPage({ locale }: { locale: Locale }) {
    const isEs = locale === "es";

    return (
        <div className="cyn-page">
            <JsonLd data={professionalServiceJsonLd()} />
            <Header />

            <main>
                <HomeHero
                    primaryHref={isEs ? "/contacto" : "/en#contacto"}
                    secondaryHref={isEs ? "/servicios" : "/en#resultados"}
                />
                <ServicesOverviewSection />
                <BenefitsSection />
                <TechnologiesSection />
                <UseCasesSection />
                <FoundersSection />
                <ResultsSection />
                <ContactCtaSection />
            </main>

            <SiteFooter />
        </div>
    );
}
