import Link from "next/link";
import { Section } from "@/components/Section";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";

export default function HomePage() {
  return (
    <>
      <section
        style={{
          padding: "78px 0 46px",
          backgroundImage: "url(/assets/images/hero-texture.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 22, alignItems: "center" }}>
            <div>
              <div className="kicker">15+ years • Raleigh–Durham–Cary • Prevention-first</div>
              <h1 style={{ fontSize: "clamp(34px, 4vw, 54px)", marginTop: 12 }}>
                A calm, professional “barrier” against pests—built for long-term stability.
              </h1>
              <p style={{ fontSize: 17, maxWidth: 720 }}>
                Titanium Barrier Pest Control delivers consistent protection using a clear, exterior-first strategy.
                No fear tactics. No guesswork. Just reliable service that respects your home and schedule.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
                <a className="btn btn-primary" href="/contact#contact-form">Book Inspection</a>
                <a className="btn btn-quiet" href={`tel:${site.phoneE164}`}>Call {site.phoneDisplay}</a>
                <Link className="btn btn-quiet" href="/services">Explore Services</Link>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
                <span className="badge"><Icon name="shield" /> Licensed & Insured</span>
                <span className="badge"><Icon name="leaf" /> Eco-conscious options</span>
                <span className="badge"><Icon name="calendar" /> Predictable maintenance plans</span>
              </div>
            </div>

            <div className="card" style={{ padding: 16, borderRadius: 24, background: "rgba(255,255,255,0.78)" }}>
              <div className="kicker">Service area</div>
              <h3 style={{ marginTop: 10 }}>Proudly serving</h3>
              <p style={{ marginTop: 8 }}>
                {site.serviceArea.join(", ")} and surrounding NC towns.
              </p>

              <div style={{ borderTop: "1px solid rgba(43,49,45,0.10)", marginTop: 14, paddingTop: 14 }}>
                <div className="kicker">Credibility</div>
                <ul style={{ margin: "10px 0 0 18px", color: "rgba(43,49,45,0.78)", fontWeight: 650 }}>
                  <li>15+ years of local expertise</li>
                  <li>Clear documentation and recommendations</li>
                  <li>Respectful, safety-first communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Core services"
        title="Practical protection—delivered with consistency"
        subtitle="Each service is designed to reduce entry, stabilize conditions, and keep your home feeling normal again."
      >
        <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {services.slice(0, 6).map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>

        <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/services">View All Services</Link>
          <a className="btn btn-quiet" href="/contact#contact-form">Request a Quote</a>
        </div>

        <style>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      <Section
        eyebrow="The Titanium Barrier approach"
        title="A premium protective mindset—exterior-first, clearly explained, consistently maintained"
        subtitle="We build confidence through a steady process: inspection, targeted treatment, and reinforcement over time."
      >
        <div className="grid" style={{ gridTemplateColumns: "1.05fr 0.95fr", alignItems: "center" }}>
          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginBottom: 8 }}>What you can expect</h3>
            <ul style={{ margin: "10px 0 0 18px", color: "rgba(43,49,45,0.78)", fontWeight: 650, lineHeight: 1.7 }}>
              <li>Clear, calm explanation of findings and next steps</li>
              <li>Targeted work designed to reduce entry and pressure points</li>
              <li>Seasonal adjustments based on NC pest cycles</li>
              <li>Documentation so you always know what’s been done</li>
            </ul>
            <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/about">Why Titanium Barrier</Link>
              <a className="btn btn-quiet" href="/contact#contact-form">Schedule Service</a>
            </div>
          </div>

          <img
            src="/assets/images/service-diagram.svg"
            alt="A simple diagram showing Inspect, Treat, Maintain"
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
        eyebrow="Ready when you are"
        title="Get a quote without pressure"
        subtitle="Tell us what’s going on. We’ll respond with clear options and a steady plan."
      >
        <div className="card" style={{ padding: 18, display: "flex", justifyContent: "space-between", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kicker">Fast response • Calm communication</div>
            <p style={{ marginTop: 10 }}>
              We’ll confirm your service area, ask a few practical questions, and recommend the next best step—inspection, barrier treatment, or a plan.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="/contact#contact-form">Request a Quote</a>
            <a className="btn btn-quiet" href={`tel:${site.phoneE164}`}>Call {site.phoneDisplay}</a>
          </div>
        </div>
      </Section>
    </>
  );
}
