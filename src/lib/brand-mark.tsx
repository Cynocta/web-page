import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/** The logo as a data URI, read once at build time from the same file the header uses. */
const logoDataUri = `data:image/svg+xml;base64,${readFileSync(
    join(process.cwd(), "public/logo.svg"),
).toString("base64")}`;

/**
 * Raster app icon: the logo on the site's dark tile.
 *
 * The site only shipped an SVG icon. Safari and iOS ignore SVG for the
 * home-screen icon, Android wants a PNG in the manifest, and Google's search
 * result favicon expects a square raster at a multiple of 48px — so the same
 * mark is rendered to PNG at whatever size the caller asks for.
 */
export function renderBrandMark(size: number) {
    const pad = Math.round(size * 0.14);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "radial-gradient(circle at 50% 35%, #0f2a1f 0%, #070809 70%)",
                    borderRadius: Math.round(size * 0.22),
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img src={logoDataUri} width={size - pad * 2} height={size - pad * 2} />
            </div>
        ),
        { width: size, height: size },
    );
}
