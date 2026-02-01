import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Titanium Barrier Pest Control—15+ years of trusted local expertise, a safety-first mission, and a premium prevention-first approach."
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About us"
        title="15 years of steady, local pest protection—without the fear tactics"
        subtitle="We built Titanium Barrier around a simple idea: prevention works best when it’s consistent, clearly explained, and designed for long-term stability."
      >
        <div className="grid" style={{ gridTemplateColumns: "1.05fr 0.95fr", alignItems: "center" }}>
          <div className="card" style={{ padding: 18 }}>
            <h3>Our story</h3>
            <p>
              Titanium Barrier Pest Control began with one goal: make pest control feel calm and predictable.
              After years in the field across the Triangle, we saw what homeowners actually needed—clear communication,
              thoughtful treatments, and a prevention plan that keeps working.
            </p>
            <p>
              Today, we serve {site.serviceArea.join(", ")} with a premium “Titanium Barrier” mindset:
              exterior-first protection, targeted interior support when needed, and a maintenance rhythm built around
              North Carolina pest cycles.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <span className="badge"><Icon name="shield" /> Safety-first guidance</span>
              <span className="badge"><Icon name="leaf" /> Eco-conscious options</span>
              <span className="badge"><Icon name="calendar" /> Maintenance plans</span>
            </div>
          </div>

          <img
            src="/assets/images/about-illustration.svg"
            alt="Warm, natural abstract illustration"
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
        eyebrow="Mission"
        title="Protection that respects your home—and your nervous system"
        subtitle="Our mission is safety, reliability, and long-term prevention. We explain what we’re doing, why it matters, and what comes next."
      >
        <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <div className="card" style={{ padding: 18 }}>
            <h3>Safety</h3>
            <p>We prioritize IPM principles and choose the lightest effective approach, with clear re-entry guidance.</p>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <h3>Reliability</h3>
            <p>Consistent visits, documentation, and a plan that doesn’t depend on luck or one-time “miracles.”</p>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <h3>Prevention</h3>
            <p>Exterior-first barrier strategies that reduce entry and keep indoor space stable over time.</p>
          </div>
        </div>

        <style>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      <Section
        eyebrow="The Titanium Barrier concept"
        title="Premium protection, delivered calmly"
        subtitle="A barrier is not a vibe. It’s a disciplined approach: map pressure points, reduce entry, reinforce seasonally, and keep records."
      >
        <div className="card" style={{ padding: 18 }}>
          <ol style={{ margin: "0 0 0 18px", color: "rgba(43,49,45,0.82)", fontWeight: 650, lineHeight: 1.7 }}>
            <li><strong>Exterior-first:</strong> Most problems start outside. We treat the perimeter and entry paths first.</li>
            <li><strong>Targeted work:</strong> When interior support is needed, it’s deliberate and measured—never random.</li>
            <li><strong>Seasonal cadence:</strong> We tune service frequency based on NC cycles to keep pressure low.</li>
            <li><strong>Clear communication:</strong> You get documentation and prevention tips that actually make sense.</li>
          </ol>
        </div>
      </Section>
    </>
  );
}
