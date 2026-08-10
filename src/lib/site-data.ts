export const siteName = "Cynocta";
export const siteDescription =
    "Cynocta ayuda a negocios y empresas a crecer con automatización comercial, páginas web de alto rendimiento y sistemas digitales orientados a conversión.";
export const contactPhone = "+57 305 2580874";
export const contactEmail = "cynoctaadmin@gmail.com";
export const instagramUrl = "https://www.instagram.com/cynocta_ai/?utm_source=ig_web_button_share_sheet";
/** Must match the host the site is actually served from: cynocta.com redirects
 *  to www, so a non-www fallback points every canonical at a redirect. */
const fallbackSiteUrl = "https://www.cynocta.com";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (() => {
    if (!rawSiteUrl) {
        return fallbackSiteUrl;
    }

    try {
        return new URL(rawSiteUrl).origin;
    } catch {
        return fallbackSiteUrl;
    }
})();

export const buildWhatsappLink = (text: string) =>
    `https://wa.me/573052580874?text=${encodeURIComponent(text)}`;
