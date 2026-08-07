import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Breadcrumbs, { type Crumb } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/structured-data";
import { breadcrumbsJsonLd } from "@/lib/schema";

/**
 * Standard frame for every interior page: nav, breadcrumbs, content, footer.
 *
 * The landing keeps its own composition because it opens on a full-viewport
 * hero with no breadcrumb trail; everything else goes through here so the
 * chrome stays identical across the site.
 */
export default function PageShell({
    crumbs,
    children,
}: {
    crumbs: Crumb[];
    children: React.ReactNode;
}) {
    return (
        <div className="cyn-page">
            {crumbs.length > 1 && <JsonLd data={breadcrumbsJsonLd(crumbs)} />}
            <Navigation />

            <main>
                <Breadcrumbs crumbs={crumbs} />
                {children}
            </main>

            <Footer />
        </div>
    );
}
