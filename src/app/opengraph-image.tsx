import { ImageResponse } from "next/og";

export const alt = "Cynocta - Automatizacion y web inteligente para negocios";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background:
                        "radial-gradient(1200px 500px at 15% 10%, #183229 0%, #080c0a 55%), linear-gradient(120deg, #080c0a 0%, #0e1410 100%)",
                    color: "#f2f5f3",
                    padding: "72px",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        alignSelf: "flex-start",
                        fontSize: 26,
                        letterSpacing: 6,
                        textTransform: "uppercase",
                        color: "#00ffa3",
                    }}
                >
                    Cynocta
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        maxWidth: "920px",
                    }}
                >
                    <div
                        style={{
                            fontSize: 70,
                            lineHeight: 1.08,
                            fontWeight: 600,
                        }}
                    >
                        Automatizacion y web inteligente para negocios
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            lineHeight: 1.35,
                            color: "#9db2a8",
                        }}
                    >
                        Captacion, conversion y operacion digital en un solo sistema.
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
