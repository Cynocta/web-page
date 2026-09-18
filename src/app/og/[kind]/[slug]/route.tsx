import { POST_SLUGS, getPost } from "@/lib/content/blog";
import { SERVICE_SLUGS, getService, getServiceByEnSlug } from "@/lib/content/services";
import { serviceSlugEn } from "@/lib/content/services/nav";
import { SOLUTION_SLUGS, getSolution } from "@/lib/content/solutions";
import { renderOgImage } from "@/lib/og-image";

/**
 * Per-page social cards at a stable URL: /og/<kind>/<slug>.
 *
 * These started as `opengraph-image.tsx` files inside each dynamic segment. The
 * images generated fine, but Next never attached them to the pages — with one
 * root layout per locale there is no shared root for file-based metadata to
 * resolve through — and their URLs carry a build hash, so they couldn't be
 * referenced by hand either. A route handler with a plain path fixes both, and
 * `generateStaticParams` still renders every card at build time.
 */
const KINDS = {
    servicios: {
        slugs: SERVICE_SLUGS,
        eyebrow: "Servicio",
        resolve: (slug: string) => {
            const item = getService(slug);
            return item && { title: item.heading, subtitle: item.cardSummary };
        },
    },
    /** English service pages, addressed by their English slug. */
    services: {
        slugs: SERVICE_SLUGS.map((slug) => serviceSlugEn[slug]),
        eyebrow: "Service",
        resolve: (slug: string) => {
            const item = getServiceByEnSlug(slug);
            return item && { title: item.heading, subtitle: item.cardSummary };
        },
    },
    soluciones: {
        slugs: SOLUTION_SLUGS,
        eyebrow: "Solución",
        resolve: (slug: string) => {
            const item = getSolution(slug);
            return item && { title: item.heading, subtitle: item.cardSummary };
        },
    },
    blog: {
        slugs: POST_SLUGS,
        eyebrow: "Guía",
        resolve: (slug: string) => {
            const item = getPost(slug);
            return item && { title: item.title, subtitle: item.excerpt };
        },
    },
} as const;

type Kind = keyof typeof KINDS;

export const dynamicParams = false;

export function generateStaticParams() {
    return (Object.keys(KINDS) as Kind[]).flatMap((kind) =>
        KINDS[kind].slugs.map((slug) => ({ kind, slug })),
    );
}

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ kind: string; slug: string }> },
) {
    const { kind, slug } = await params;
    const config = KINDS[kind as Kind];
    const page = config?.resolve(slug);

    if (!page) {
        return new Response("Not found", { status: 404 });
    }

    return renderOgImage({ eyebrow: config.eyebrow, title: page.title, subtitle: page.subtitle });
}
