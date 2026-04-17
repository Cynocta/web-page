import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import GlobalParallaxBackground from "./components/global-parallax-background";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "StartApp | Automatizacion y soluciones tecnologicas para negocios",
  description:
    "Automatizaciones, paginas web y soluciones tecnologicas interactivas para negocios y empresas que quieren crecer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <GlobalParallaxBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
