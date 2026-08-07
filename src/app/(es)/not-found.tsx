import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import SiteFooter from "@/components/layout/site-footer";
import { siteUrl } from "@/lib/site-data";

/**
 * Lives inside the Spanish group so 404s keep the site chrome — with multiple
 * root layouts and no top-level layout, Next would otherwise fall back to its
 * own unstyled page.
 */
export const metadata: Metadata = {
    // Set explicitly: with no top-level layout there is nothing above this route
    // to inherit it from, and Next falls back to localhost without it.
    metadataBase: new URL(siteUrl),
    title: "Página no encontrada",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <div className="cyn-page">
            <Header />

            <main>
                <section className="cyn-section" style={{ minHeight: "52vh" }}>
                    <p className="cyn-section-tag">Error 404</p>
                    <h1 className="cyn-section-title">Esta página no existe.</h1>
                    <p className="cyn-section-sub">
                        Puede que el enlace esté roto o que la página se haya movido. Desde el inicio
                        encuentras todo lo demás.
                    </p>
                    <p style={{ marginTop: "2rem" }}>
                        <Link href="/" className="cyn-toggle-btn is-active" style={{ padding: "12px 20px" }}>
                            Volver al inicio
                        </Link>
                    </p>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
}
