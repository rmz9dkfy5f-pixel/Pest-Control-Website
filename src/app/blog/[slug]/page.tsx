import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { posts, postBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = postBySlug(params.slug);
  if (!post) return { title: "Blog Post" };
  return { title: post.title, description: post.description };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postBySlug(params.slug);
  if (!post) return notFound();

  return (
    <>
      <Section
        eyebrow="Blog"
        title={post.title}
        subtitle={post.description}
      >
        <div className="card" style={{ padding: 18 }}>
          <div className="kicker">
            {new Date(post.dateISO).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • {post.readingMinutes} min read
          </div>

          <div style={{ marginTop: 14 }}>
            {post.content.map((b, idx) => (
              <div key={idx} style={{ marginTop: 12 }}>
                {b.h && <h3 style={{ marginTop: 12 }}>{b.h}</h3>}
                {b.p && <p style={{ fontWeight: 650 }}>{b.p}</p>}
                {b.list && (
                  <ul style={{ margin: "8px 0 0 18px", color: "rgba(43,49,45,0.80)", fontWeight: 650, lineHeight: 1.7 }}>
                    {b.list.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="/contact#contact-form">Request a Quote</a>
            <Link className="btn btn-quiet" href="/blog">Back to Blog</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
