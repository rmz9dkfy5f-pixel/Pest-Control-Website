import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Seasonal pest trends in North Carolina, prevention tips, and practical home maintenance advice—written in a calm, clear voice."
};

export default function BlogPage() {
  return (
    <>
      <Section
        eyebrow="Blog"
        title="Pest prevention and home care—North Carolina edition"
        subtitle="Seasonal guidance, practical tips, and the kind of advice that reduces surprises."
      >
        <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {posts.map((p) => (
            <article key={p.slug} className="card" style={{ padding: 18 }}>
              <div className="kicker">{new Date(p.dateISO).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} • {p.readingMinutes} min</div>
              <h3 style={{ marginTop: 10 }}>{p.title}</h3>
              <p style={{ marginTop: 8 }}>{p.description}</p>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                {p.tags.map((t) => <span key={t} className="badge">{t}</span>)}
              </div>

              <div style={{ marginTop: 14 }}>
                <Link className="btn btn-primary" href={`/blog/${p.slug}`}>Read Article</Link>
              </div>
            </article>
          ))}
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
