import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ContactCtaSection from "@/components/sections/contact-cta";
import CostSection from "@/components/sections/cost";
import HeroSection from "@/components/sections/hero";
import LeadFormSection from "@/components/sections/lead-form";
import PainsSection from "@/components/sections/pains";
import PlansSection from "@/components/sections/plans";
import ProcessSection from "@/components/sections/process";
import ResultsSection from "@/components/sections/results";
import ServicesSection from "@/components/sections/services";
import { JsonLd } from "@/components/structured-data";
import type { Locale } from "@/lib/content";
import { plansJsonLd, professionalServiceJsonLd } from "@/lib/schema";

/**
 * The landing page body, shared by both locales. The route files are thin
 * wrappers that only supply the locale and the metadata.
 */
export default function LandingPage({ locale }: { locale: Locale }) {
    return (
        <div className="cyn-page">
            <JsonLd data={professionalServiceJsonLd()} />
            {plansJsonLd(locale).map((plan) => (
                <JsonLd key={plan["@id"]} data={plan} />
            ))}
            <Navigation />

            <main>
                <HeroSection />
                <PainsSection />
                <CostSection />
                <ServicesSection />
                <ProcessSection />
                <ResultsSection />
                <PlansSection />
                <LeadFormSection />
                <ContactCtaSection />
            </main>

            <Footer />
        </div>
    );
}
