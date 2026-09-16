import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Space Grotesk, the site's heading face, embedded for the cards.
 *
 * Satori's built-in font has no bold and measures some word gaps wide, so
 * titles came out regular weight with visible double spaces. Satori can't read
 * variable fonts, hence the static Latin WOFF files (OFL — see the licence next
 * to them). Every card is prerendered at build time, where `process.cwd()` is
 * the project root.
 */
const fontDir = join(process.cwd(), "src/assets/fonts");
const fonts = [
    { name: "Space Grotesk", weight: 400 as const, style: "normal" as const, data: readFileSync(join(fontDir, "space-grotesk-latin-400-normal.woff")) },
    { name: "Space Grotesk", weight: 600 as const, style: "normal" as const, data: readFileSync(join(fontDir, "space-grotesk-latin-600-normal.woff")) },
];

/**
 * The one Open Graph card every shared URL renders through.
 *
 * Social previews are the first thing a link shows in WhatsApp, LinkedIn or an
 * AI answer's source list, so each service, solution and article gets a card
 * that names the page instead of repeating the homepage's. One renderer keeps
 * all of them visually identical to each other.
 *
 * Satori (behind `ImageResponse`) only lays out flexbox, so every element with
 * more than one child declares `display: flex` explicitly.
 */
export function renderOgImage({
    eyebrow,
    title,
    subtitle,
}: {
    /** Short label above the title: the section the page belongs to. */
    eyebrow: string;
    title: string;
    subtitle?: string;
}) {
    // Long service headings would wrap to four lines at the display size.
    const titleSize = title.length > 70 ? 54 : title.length > 45 ? 62 : 72;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "68px 72px",
                    fontFamily: "Space Grotesk",
                    color: "#f8f8f8",
                    background:
                        "radial-gradient(900px 520px at 88% 0%, rgba(25,245,156,0.22) 0%, rgba(7,8,9,0) 62%), radial-gradient(700px 420px at 0% 100%, rgba(121,226,255,0.10) 0%, rgba(7,8,9,0) 66%), #070809",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: 26,
                            letterSpacing: 10,
                            textTransform: "uppercase",
                            color: "#19f59c",
                        }}
                    >
                        Cynocta
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "10px 20px",
                            borderRadius: 999,
                            border: "1px solid rgba(25,245,156,0.35)",
                            background: "rgba(25,245,156,0.08)",
                            color: "#a4a7ae",
                            fontSize: 22,
                        }}
                    >
                        {eyebrow}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 1000 }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: titleSize,
                            lineHeight: 1.08,
                            fontWeight: 600,
                            letterSpacing: -1.5,
                        }}
                    >
                        {title}
                    </div>
                    {subtitle && (
                        <div
                            style={{
                                display: "flex",
                                fontSize: 28,
                                lineHeight: 1.4,
                                color: "#a4a7ae",
                                maxWidth: 940,
                            }}
                        >
                            {subtitle}
                        </div>
                    )}
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "1px solid rgba(255,255,255,0.10)",
                        paddingTop: 26,
                        fontSize: 22,
                        color: "#666a72",
                    }}
                >
                    <div style={{ display: "flex" }}>Automatización con IA · WhatsApp · n8n</div>
                    <div style={{ display: "flex", color: "#19f59c" }}>cynocta.com</div>
                </div>
            </div>
        ),
        { width: 1200, height: 630, fonts },
    );
}
