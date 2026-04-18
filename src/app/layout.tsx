import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const monoFont = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Cynocta | Automatizacion y web inteligente para negocios",
  description:
    "Automatizaciones, paginas web y sistemas comerciales visuales para negocios y empresas que quieren crecer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
