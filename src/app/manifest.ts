import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Cynocta — Automatización con IA",
        short_name: "Cynocta",
        description:
            "Chatbots de WhatsApp, agentes de IA y automatizaciones con n8n para negocios en LATAM.",
        lang: "es",
        start_url: "/",
        display: "standalone",
        background_color: "#080c0a",
        theme_color: "#080c0a",
        /* Android installs and Lighthouse want a raster icon at 512px; the SVG
           stays for the browsers that prefer it. */
        icons: [
            { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
            { src: "/apple-icon", sizes: "180x180", type: "image/png" },
            { src: "/logo.svg", sizes: "any", type: "image/svg+xml" },
        ],
    };
}
