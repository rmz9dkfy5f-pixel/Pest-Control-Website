"use client";

import type { Metadata } from "next";
import { useMemo, useState } from "react";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote or schedule an inspection. Serving Raleigh, Durham, Cary, and surrounding North Carolina towns. Calm, clear communication from the first message."
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  issue: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    address: "",
    issue: ""
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const canSend = useMemo(() => form.name.trim() && form.email.trim() && form.issue.trim(), [form]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSend || status === "sending") return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", address: "", issue: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Section
        eyebrow="Contact"
        title="Request a quote or schedule an inspection"
        subtitle="Tell us what’s going on. We’ll respond with clear options and the next best step."
      >
        <div className="grid" style={{ gridTemplateColumns: "1.05fr 0.95fr", alignItems: "start" }}>
          <div className="card" style={{ padding: 18 }} id="contact-form">
            <form onSubmit={submit} aria-label="Contact form">
              <div className="kicker">Contact form</div>

              <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
                <label>
                  <strong>Name</strong><br />
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    aria-label="Name"
                    style={inputStyle}
                  />
                </label>

                <label>
                  <strong>Email</strong><br />
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    type="email"
                    aria-label="Email"
                    style={inputStyle}
                  />
                </label>

                <label>
                  <strong>Phone</strong><br />
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    type="tel"
                    aria-label="Phone"
                    placeholder="Optional"
                    style={inputStyle}
                  />
                </label>

                <label>
                  <strong>Address</strong><br />
                  <input
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    aria-label="Address"
                    placeholder="Optional"
                    style={inputStyle}
                  />
                </label>

                <label>
                  <strong>What’s going on?</strong><br />
                  <textarea
                    value={form.issue}
                    onChange={(e) => setForm({ ...form, issue: e.target.value })}
                    required
                    aria-label="Issue description"
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Describe what you’re noticing (where, when, and how long)."
                  />
                </label>

                <button className="btn btn-primary" type="submit" disabled={!canSend || status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send request"}
                </button>

                {status === "sent" && (
                  <div className="badge" role="status">
                    Thanks—your request was sent. We’ll follow up with clear next steps.
                  </div>
                )}
                {status === "error" && (
                  <div className="badge" role="status" style={{ borderColor: "rgba(181,138,90,0.45)" }}>
                    Something went wrong. Please call {site.phoneDisplay} or try again.
                  </div>
                )}
              </div>
            </form>
          </div>

          <div style={{ display: "grid", gap: 14 }}>
            <div className="card" style={{ padding: 18 }}>
              <div className="kicker">Call now</div>
              <p style={{ marginTop: 10 }}>
                Prefer to talk? We’re happy to help. You’ll get a calm, clear recommendation—inspection, barrier work, or a plan.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn btn-primary" href={`tel:${site.phoneE164}`}>Click-to-call</a>
                <a className="btn btn-quiet" href={`mailto:${site.email}`}>Email</a>
              </div>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <div className="kicker">Hours</div>
              <ul style={{ margin: "10px 0 0 18px", color: "rgba(43,49,45,0.78)", fontWeight: 650 }}>
                {site.hours.map((h) => <li key={h.days}><strong>{h.days}:</strong> {h.hours}</li>)}
              </ul>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <div className="kicker">What happens after you contact us?</div>
              <ol style={{ margin: "10px 0 0 18px", color: "rgba(43,49,45,0.80)", fontWeight: 650, lineHeight: 1.7 }}>
                <li>We confirm your service area and ask a few practical questions.</li>
                <li>We recommend the next best step (inspection, barrier service, or plan).</li>
                <li>We schedule a time and explain exactly what to expect.</li>
                <li>After service, you receive a clear summary and prevention guidance.</li>
              </ol>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 980px){
            .grid{ grid-template-columns: 1fr !important; }
          }
          input, textarea{
            font: inherit;
          }
        `}</style>
      </Section>

      <Section
        eyebrow="Map"
        title="Serving Raleigh, Durham, Cary—and nearby towns"
        subtitle="We cover the Triangle region and surrounding communities."
      >
        <div className="card" style={{ padding: 10, overflow: "hidden" }}>
          <iframe
            title="Service region map"
            aria-label="Map of Triangle service region"
            src="https://www.google.com/maps?q=Raleigh%2C%20NC&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, borderRadius: 18 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 14,
  border: "1px solid rgba(43,49,45,0.14)",
  background: "rgba(255,255,255,0.82)",
  boxShadow: "0 0 0 rgba(0,0,0,0)"
};
