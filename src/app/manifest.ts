import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Cynocta",
        short_name: "Cynocta",
        description:
            "Automatizacion comercial, desarrollo web y sistemas digitales para negocios en crecimiento.",
        start_url: "/",
        display: "standalone",
        background_color: "#080c0a",
        theme_color: "#080c0a",
        icons: [
            {
                src: "/cynocta-app-icon.svg",
                sizes: "512x512",
                type: "image/svg+xml",
                purpose: "maskable",
            },
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
