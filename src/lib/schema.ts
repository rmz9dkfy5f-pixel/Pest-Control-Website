import { site } from "./site";
import { Service } from "./services";

export function localBusinessJsonLd() {
  const url = `https://${site.domain}`;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url,
    telephone: site.phoneE164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country
    },
    areaServed: site.serviceArea.map((c) => ({ "@type": "City", name: c })),
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.hours.split("–")[0]?.trim() ?? "",
      closes: h.hours.split("–")[1]?.trim() ?? ""
    }))
  };
}

export function serviceJsonLd(service: Service) {
  const url = `https://${site.domain}/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    areaServed: site.serviceArea.map((c) => ({ "@type": "City", name: c })),
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phoneE164
    },
    url
  };
}
