"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Where on the page a link sits: the section id, or the site chrome. */
function locationOf(element: Element) {
    const section = element.closest("section[id]");
    if (section) return section.id;
    if (element.closest("header")) return "header";
    if (element.closest("footer")) return "footer";
    return "page";
}

/**
 * Conversion tracking for every contact route on the site, from one listener.
 *
 * Installing GA4 on its own only counts visits; what the redesign has to prove
 * is whether more people reach out. Rather than threading an onClick through
 * every CTA, WhatsApp link and email link in a dozen components — and missing
 * the next one someone adds — this listens once at the document and classifies
 * the link by its href:
 *
 *   wa.me / mailto: / tel:        → `generate_lead`, with the channel
 *   /contacto or #contacto        → `cta_click`, with the label
 *
 * Mark `generate_lead` as a key event in the GA4 admin so it counts as a
 * conversion. The lead form fires its own `generate_lead` on completion, since
 * it opens WhatsApp from script rather than from a link.
 */
export default function AnalyticsEvents() {
    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            const target = event.target;
            if (!(target instanceof Element)) return;

            const link = target.closest("a[href]");
            if (!(link instanceof HTMLAnchorElement)) return;

            const href = link.getAttribute("href") ?? "";
            const location = locationOf(link);

            if (href.includes("wa.me/")) {
                trackEvent("generate_lead", { method: "whatsapp", link_location: location });
            } else if (href.startsWith("mailto:")) {
                trackEvent("generate_lead", { method: "email", link_location: location });
            } else if (href.startsWith("tel:")) {
                trackEvent("generate_lead", { method: "phone", link_location: location });
            } else if (href === "/contacto" || href === "/en/contact" || href.endsWith("#contacto")) {
                trackEvent("cta_click", {
                    link_text: link.textContent?.replace(/\s+/g, " ").trim().slice(0, 100),
                    link_url: href,
                    link_location: location,
                });
            }
        };

        // Capture phase, so a component that stops propagation can't hide a click.
        document.addEventListener("click", onClick, { capture: true });
        return () => document.removeEventListener("click", onClick, { capture: true });
    }, []);

    return null;
}
