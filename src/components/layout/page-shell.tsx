import Header from "@/components/layout/header";
import SiteFooter from "@/components/layout/site-footer";
import Breadcrumbs, { type Crumb } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/structured-data";
import { breadcrumbsJsonLd } from "@/lib/schema";

/**
 * Standard frame for every interior page: header, breadcrumbs, content, footer.
 *
 * The homepage composes its own body because it opens on a hero that reaches
 * under the header and has no breadcrumb trail; everything else goes through
 * here so the chrome stays identical across the site.
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
            <Header />

            <main>
                <Breadcrumbs crumbs={crumbs} />
                {children}
            </main>

            <SiteFooter />
        </div>
    );
}
