import "./globals.css";
import { bodyFont, brandFont, headingFont, monoFont } from "@/lib/fonts";
import { JsonLd } from "@/components/structured-data";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { I18nProvider } from "@/components/i18n-provider";

export { metadata } from "@/lib/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${headingFont.variable} ${brandFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <I18nProvider>
          <JsonLd data={organizationJsonLd()} />
          <JsonLd data={websiteJsonLd()} />
          <div className="relative z-10">{children}</div>
        </I18nProvider>
      </body>
    </html>
  );
}
