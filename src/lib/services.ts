export type Service = {
  slug: string;
  name: string;
  summary: string;
  icon: "shield" | "leaf" | "home" | "bolt" | "bug" | "mouse" | "spray" | "calendar";
  benefits: string[];
  whoItsFor: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  pricingNote?: string;
};

export const services: Service[] = [
  {
    slug: "general-pest-control",
    name: "General Pest Control",
    summary: "Calm, consistent control for common household pests—built around prevention, not panic.",
    icon: "home",
    benefits: ["Targeted treatment that respects your space", "Entry-point reduction guidance", "Family- and pet-conscious options"],
    whoItsFor: ["Homes with recurring ants, roaches, spiders, or pantry pests", "New homeowners who want a clean baseline", "Residents wanting a predictable plan"],
    process: [
      { title: "Inspect", desc: "We look for activity patterns and likely entry points inside and out." },
      { title: "Treat", desc: "We apply targeted measures where pests live and travel—no drama, just precision." },
      { title: "Reinforce", desc: "We share practical prevention steps and schedule follow-ups if needed." }
    ],
    faqs: [
      { q: "Do you use harsh chemicals?", a: "We prioritize integrated pest management (IPM) and use the lightest effective approach. We’ll walk you through options and safety steps clearly." },
      { q: "How quickly will I notice results?", a: "Many situations improve within days, but long-term stability comes from breaking cycles and reinforcing barriers over time." }
    ],
    pricingNote: "Call for a quote based on home size and needs."
  },
  {
    slug: "termite-protection",
    name: "Termite Protection",
    summary: "Proactive protection and clear reporting—so you know what’s happening and why.",
    icon: "shield",
    benefits: ["Inspection + risk assessment", "Focused treatment plan", "Ongoing monitoring options"],
    whoItsFor: ["Homeowners in termite-active areas", "Real estate transactions", "Anyone who wants prevention with documentation"],
    process: [
      { title: "Inspect", desc: "We check key risk zones and moisture conditions, then explain findings plainly." },
      { title: "Protect", desc: "We install a protective plan designed to reduce risk and discourage activity." },
      { title: "Monitor", desc: "Optional maintenance plans keep the protective strategy steady over time." }
    ],
    faqs: [
      { q: "Is termite protection a one-time thing?", a: "Termites are a long game. A strong start helps, and periodic monitoring is how you keep confidence year after year." },
      { q: "Will you provide documentation?", a: "Yes—clear notes, recommendations, and service records for your files." }
    ],
    pricingNote: "Call for quote (varies by foundation type and coverage)."
  },
  {
    slug: "mosquito-control",
    name: "Mosquito Control",
    summary: "Outdoor comfort without overreacting—reduce breeding zones and protect gathering areas.",
    icon: "leaf",
    benefits: ["Yard assessment focused on breeding conditions", "Barrier treatments for key zones", "Seasonal plan options"],
    whoItsFor: ["Families using patios and backyards", "Homes near standing water", "Anyone who wants fewer bites with a calmer approach"],
    process: [
      { title: "Assess", desc: "We identify likely breeding and resting zones and suggest simple fixes." },
      { title: "Treat", desc: "We apply a barrier strategy in targeted outdoor areas." },
      { title: "Maintain", desc: "Seasonal cadence keeps pressure down through peak months." }
    ],
    faqs: [
      { q: "Do you treat the whole yard?", a: "We focus on high-impact zones—where mosquitoes rest, breed, and where you actually spend time." },
      { q: "Is it safe for kids and pets?", a: "We’ll explain precautions and re-entry guidance up front. Safety and clarity are part of the service." }
    ],
    pricingNote: "Seasonal plans available. Call for details."
  },
  {
    slug: "rodent-control",
    name: "Rodent Control",
    summary: "A clean, methodical approach: identify entry points, reduce access, and stabilize the environment.",
    icon: "mouse",
    benefits: ["Entry-point identification and sealing guidance", "Humane-minded options where appropriate", "Follow-up to confirm stability"],
    whoItsFor: ["Homes with attic or crawlspace activity", "Garages with recurring intrusions", "Residents who want closure, not chaos"],
    process: [
      { title: "Locate", desc: "We identify access points, travel paths, and contributing conditions." },
      { title: "Stabilize", desc: "We implement a control plan and prioritize exclusion strategies." },
      { title: "Confirm", desc: "We follow up to ensure conditions remain stable." }
    ],
    faqs: [
      { q: "Will you seal entry points?", a: "We provide clear recommendations and can coordinate next steps. The goal is fewer repeats." },
      { q: "How do you prevent recurrence?", a: "Exclusion + sanitation guidance + follow-up checks. Rodent control is best when it’s systematic." }
    ],
    pricingNote: "Call for quote (scope depends on access points and structure)."
  },
  {
    slug: "preventative-barrier-treatments",
    name: "Preventative Barrier Treatments",
    summary: "Our signature approach: a premium exterior-first barrier designed to reduce entry and disrupt travel paths.",
    icon: "spray",
    benefits: ["Exterior-first protection strategy", "Focused attention on entry points", "Seasonally adjustable plan"],
    whoItsFor: ["Homes that want proactive protection", "Busy households that prefer maintenance over surprises", "Properties with recurring seasonal pests"],
    process: [
      { title: "Map the perimeter", desc: "We identify likely entry paths and pressure points." },
      { title: "Build the barrier", desc: "We apply a calm, consistent protective treatment around key zones." },
      { title: "Tune the plan", desc: "We adjust seasonally based on local pest cycles and your property." }
    ],
    faqs: [
      { q: "What is the “Titanium Barrier” concept?", a: "It’s our premium protective mindset: exterior-first, consistent maintenance, and clear communication—built for long-term stability." },
      { q: "How often do you treat?", a: "It depends on the season and pressure. We’ll recommend a cadence that fits your property and comfort level." }
    ],
    pricingNote: "Maintenance plans available. Call for options."
  },
  {
    slug: "annual-maintenance-plans",
    name: "Annual Maintenance Plans",
    summary: "Predictable protection with scheduled visits—so pest control becomes boring (in the best way).",
    icon: "calendar",
    benefits: ["Scheduled visits and reminders", "Priority scheduling", "Consistent documentation"],
    whoItsFor: ["Homeowners who want a set-it-and-forget-it plan", "Families with seasonal pressure", "Property managers"],
    process: [
      { title: "Set baseline", desc: "We establish the starting point with an inspection and initial service." },
      { title: "Maintain", desc: "We follow a seasonal cadence designed for stability." },
      { title: "Support", desc: "You get clear communication and adjustments when conditions change." }
    ],
    faqs: [
      { q: "Can I cancel anytime?", a: "We keep plans straightforward. We’ll explain terms clearly before you commit." },
      { q: "Do you send reminders?", a: "Yes—email and/or SMS reminders are easy to add once you choose a plan." }
    ],
    pricingNote: "Plans vary. Call for a quote."
  },
  {
    slug: "emergency-pest-response",
    name: "Emergency Pest Response",
    summary: "Fast, calm help when you need it—focused on immediate relief and a plan to prevent repeat issues.",
    icon: "bolt",
    benefits: ["Priority scheduling when available", "Immediate stabilization steps", "Clear next actions"],
    whoItsFor: ["Sudden activity spikes", "Time-sensitive situations (events, showings)", "Anyone who wants a steady hand quickly"],
    process: [
      { title: "Rapid assessment", desc: "We gather details and focus on the highest-impact areas first." },
      { title: "Stabilize", desc: "We apply targeted treatment and reduce immediate pressure." },
      { title: "Prevention plan", desc: "We outline what to do next to prevent recurrence." }
    ],
    faqs: [
      { q: "How fast can you get here?", a: "It depends on the day’s schedule, but we prioritize urgent cases whenever possible." },
      { q: "Will one visit solve it?", a: "Sometimes yes, often it’s a sequence: stabilize now, prevent long-term with a barrier and follow-up." }
    ],
    pricingNote: "Call for availability and quote."
  }
];

export const serviceBySlug = (slug: string) => services.find(s => s.slug === slug);
