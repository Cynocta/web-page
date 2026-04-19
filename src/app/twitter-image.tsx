import { ImageResponse } from "next/og";

export const alt = "Cynocta - Sistemas digitales para negocios";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
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
                        "radial-gradient(1000px 420px at 12% 8%, #183229 0%, #080c0a 55%), linear-gradient(120deg, #080c0a 0%, #0e1410 100%)",
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
                            fontSize: 64,
                            lineHeight: 1.08,
                            fontWeight: 600,
                        }}
                    >
                        Automatizacion comercial para crecer sin caos
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            lineHeight: 1.35,
                            color: "#9db2a8",
                        }}
                    >
                        Cynocta: web, automatizacion y procesos digitales orientados a resultados.
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
