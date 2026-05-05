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
                src: "/logo.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
}
