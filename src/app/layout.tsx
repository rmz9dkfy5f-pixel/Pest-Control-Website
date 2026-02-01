import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} | Calm, Prevention-First Pest Control`,
    template: `%s | ${site.name}`
  },
  description:
    "Professional, prevention-first pest control with 15+ years of trusted local expertise. Serving Raleigh, Durham, Cary, and surrounding North Carolina towns.",
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description:
      "Calm, professional pest control built around long-term prevention and clear communication.",
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
