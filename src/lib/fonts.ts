import { DM_Mono, Inter, Space_Grotesk } from "next/font/google";

export const bodyFont = Inter({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export const headingFont = Space_Grotesk({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const brandFont = Space_Grotesk({
    variable: "--font-brand",
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

export const monoFont = DM_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});
