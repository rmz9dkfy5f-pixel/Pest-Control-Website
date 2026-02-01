import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of pest control services: general pest control, termite protection, mosquito control, rodent control, preventative barrier treatments, maintenance plans, and emergency response."
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="A complete set of services—built around prevention and stability"
        subtitle="Choose a service below to see benefits, a step-by-step process, and FAQs written in a clear, reassuring voice."
      >
        <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>

        <style>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      <Section
        eyebrow="Pricing"
        title="Straightforward pricing guidance"
        subtitle="Every property is different. We quote based on size, pressure, and the most effective plan for long-term stability."
      >
        <div className="card" style={{ padding: 18 }}>
          <p style={{ marginBottom: 0 }}>
            For most homes, we can provide a quote quickly after a few questions (or an inspection when appropriate).
            We’ll be clear about what’s included, what’s optional, and what cadence makes sense.
          </p>
        </div>
      </Section>
    </>
  );
}
