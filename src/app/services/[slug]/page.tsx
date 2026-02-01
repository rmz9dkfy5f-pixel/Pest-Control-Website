import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { services, serviceBySlug } from "@/lib/services";
import { Icon } from "@/components/Icon";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const svc = serviceBySlug(params.slug);
  if (!svc) return { title: "Service" };
  return {
    title: svc.name,
    description: svc.summary
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const svc = serviceBySlug(params.slug);
  if (!svc) return notFound();

  return (
    <>
      <JsonLd data={serviceJsonLd(svc)} />

      <Section
        eyebrow="Service"
        title={svc.name}
        subtitle={svc.summary}
      >
        <div className="grid" style={{ gridTemplateColumns: "1.05fr 0.95fr", alignItems: "start" }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span className="badge"><Icon name={svc.icon} /> Benefits</span>
            </div>
            <ul style={{ margin: "12px 0 0 18px", color: "rgba(43,49,45,0.80)", fontWeight: 650, lineHeight: 1.7 }}>
              {svc.benefits.map((b) => <li key={b}>{b}</li>)}
            </ul>

            <div style={{ marginTop: 16, borderTop: "1px solid rgba(43,49,45,0.10)", paddingTop: 14 }}>
              <div className="kicker">Best for</div>
              <ul style={{ margin: "10px 0 0 18px", color: "rgba(43,49,45,0.78)", fontWeight: 650, lineHeight: 1.7 }}>
                {svc.whoItsFor.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
              <a className="btn btn-primary" href="/contact#contact-form">Request a Quote</a>
              <Link className="btn btn-quiet" href="/services">Back to Services</Link>
            </div>

            {svc.pricingNote && (
              <p style={{ marginTop: 12, color: "rgba(43,49,45,0.72)", fontWeight: 700 }}>
                <strong>Pricing:</strong> {svc.pricingNote}
              </p>
            )}
          </div>

          <img
            src="/assets/images/service-diagram.svg"
            alt="A simple earth-tone diagram illustrating a calm, step-by-step process"
            className="card"
            style={{ borderRadius: 24, border: "1px solid rgba(43,49,45,0.14)", boxShadow: "var(--shadow-soft)" }}
            loading="lazy"
          />
        </div>

        <style>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      <Section
        eyebrow="Treatment process"
        title="A clear, steady process"
        subtitle="We keep the experience predictable: understand the situation, apply the right measure, reinforce the barrier, and confirm stability."
      >
        <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {svc.process.map((step) => (
            <div key={step.title} className="card" style={{ padding: 18 }}>
              <div className="kicker">{step.title}</div>
              <p style={{ marginTop: 10, fontWeight: 650 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      <Section
        eyebrow="FAQs"
        title="Questions we hear often"
        subtitle="Clear answers, no scare language—just what you need to know to make a good decision."
      >
        <Faq items={svc.faqs} />
      </Section>
    </>
  );
}
