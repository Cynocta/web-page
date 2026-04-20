import type { Metadata } from "next";
import { DM_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteName = "Cynocta";
const siteDescription =
  "Cynocta ayuda a negocios y empresas a crecer con automatizacion comercial, paginas web de alto rendimiento y sistemas digitales orientados a conversion.";
const fallbackSiteUrl = "https://cynocta.com";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (() => {
  if (!rawSiteUrl) {
    return fallbackSiteUrl;
  }

  try {
    return new URL(rawSiteUrl).origin;
  } catch {
    return fallbackSiteUrl;
  }
})();
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const brandFont = Space_Grotesk({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const monoFont = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cynocta | Automatizacion y web inteligente para negocios",
    template: "%s | Cynocta",
  },
  description: siteDescription,
  keywords: [
    "Cynocta",
    "automatizacion comercial",
    "automatizacion de procesos",
    "agencia de automatizacion",
    "landing pages",
    "desarrollo web para negocios",
    "conversion digital",
  ],
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/cynocta-reference-favicon.png?v=ref-1", type: "image/png" },
    ],
    shortcut: ["/cynocta-reference-favicon.png?v=ref-1"],
    apple: "/cynocta-reference-favicon.png?v=ref-1",
  },
  openGraph: {
    type: "website",
    locale: "es_419",
    url: siteUrl,
    siteName,
    title: "Cynocta | Automatizacion y web inteligente para negocios",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cynocta - Automatizacion y web inteligente para negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cynocta | Automatizacion y web inteligente para negocios",
    description: siteDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(googleVerification
    ? {
      verification: {
        google: googleVerification,
      },
    }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/cynocta-logo-main.svg`,
    description: siteDescription,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "es",
    description: siteDescription,
  };

  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${headingFont.variable} ${brandFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
