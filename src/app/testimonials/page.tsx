import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read friendly, conversational reviews from homeowners across Raleigh, Durham, Cary, and surrounding North Carolina towns."
};

const testimonials = [
  {
    name: "Megan R.",
    city: "Cary, NC",
    rating: 5,
    quote: "They were calm, thorough, and explained everything. The house feels stable again—and the plan is easy to follow."
  },
  {
    name: "James T.",
    city: "Raleigh, NC",
    rating: 5,
    quote: "Best part was the consistency. No pressure, no hype—just clear service and a solid maintenance schedule."
  },
  {
    name: "Priya S.",
    city: "Durham, NC",
    rating: 5,
    quote: "They focused on entry points and prevention. The documentation was actually useful for our home records."
  },
  {
    name: "Alex W.",
    city: "Apex, NC",
    rating: 4,
    quote: "Quick response and respectful work. They didn’t oversell—just recommended the right next step."
  },
  {
    name: "Danielle K.",
    city: "Morrisville, NC",
    rating: 5,
    quote: "We’ve used them for over a year. It’s boring now, which is exactly what I wanted from pest control."
  },
  {
    name: "Robert H.",
    city: "Wake Forest, NC",
    rating: 5,
    quote: "Professional from start to finish. The ‘barrier’ approach makes sense, and it’s been effective."
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Section
        eyebrow="Testimonials"
        title="Reviews from customers who wanted a steady plan"
        subtitle="We aim for long-term relationships built on reliability, clarity, and calm communication."
      >
        <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {testimonials.map((t) => (
            <TestimonialCard key={`${t.name}-${t.city}`} name={t.name} city={t.city} rating={t.rating} quote={t.quote} />
          ))}
        </div>

        <style>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      <Section
        eyebrow="Long-term stability"
        title="A few short stories"
        subtitle="Most customers come to us for relief—then stay for consistency."
      >
        <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <div className="card" style={{ padding: 18 }}>
            <h3>From recurring issues to routine</h3>
            <p>
              A Raleigh homeowner had recurring seasonal pressure. We established an exterior-first barrier,
              corrected a couple of entry points, then moved to a simple maintenance cadence.
              The result: fewer surprises and a predictable rhythm.
            </p>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <h3>Clear documentation for peace of mind</h3>
            <p>
              A Durham family wanted clarity more than anything. We documented findings, explained options,
              and built a plan they could understand. Now they keep service notes as part of their home maintenance binder.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>
    </>
  );
}
