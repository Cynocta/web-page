import { JsonLd } from "@/components/structured-data";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ContactCtaSection from "@/components/sections/contact-cta";
import HeroSection from "@/components/sections/hero";
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
                <ServicesSection />
                <ProcessSection />
                <PlansSection />
                <ResultsSection />
                <ContactCtaSection />
            </main>

            <Footer />
        </div>
    );
}

