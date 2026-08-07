import "../globals.css";
import SiteShell from "@/components/layout/site-shell";

export { metadata } from "@/lib/metadata";

/** Root layout for the Spanish tree, which lives at the site root. */
export default function EsRootLayout({ children }: { children: React.ReactNode }) {
    return <SiteShell locale="es">{children}</SiteShell>;
}
