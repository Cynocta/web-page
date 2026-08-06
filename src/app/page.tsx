import { JsonLd } from "@/components/structured-data";
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
import { professionalServiceJsonLd } from "@/lib/structured-data";

export default function Home() {
    return (
        <div className="cyn-page">
            <JsonLd data={professionalServiceJsonLd()} />
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

