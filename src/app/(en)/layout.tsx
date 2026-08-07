import "../globals.css";
import SiteShell from "@/components/layout/site-shell";

export { metadataEn as metadata } from "@/lib/metadata";

/** Root layout for the English tree, served under /en. */
export default function EnRootLayout({ children }: { children: React.ReactNode }) {
    return <SiteShell locale="en">{children}</SiteShell>;
}
