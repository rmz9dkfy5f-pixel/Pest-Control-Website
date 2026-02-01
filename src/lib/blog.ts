export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  dateISO: string;
  readingMinutes: number;
  tags: string[];
  content: { h?: string; p?: string; list?: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "spring-pest-prep-north-carolina",
    title: "Spring Pest Prep in North Carolina: Calm Prevention That Works",
    description: "A steady checklist for spring: sealing gaps, managing moisture, and reinforcing your exterior barrier.",
    dateISO: "2026-01-10",
    readingMinutes: 6,
    tags: ["Seasonal", "Prevention", "Home Care"],
    content: [
      { p: "Spring in NC brings warmer nights, more humidity, and more pest pressure. The goal isn’t to panic—it’s to remove the easy wins pests look for." },
      { h: "Your 20-minute exterior walkaround" },
      { list: ["Check door sweeps and weather stripping", "Look for gaps around hose bibs and utility lines", "Trim vegetation away from siding", "Reduce standing water (gutters, planters, tarps)"] },
      { h: "Why barriers matter" },
      { p: "Most issues start outside. A consistent exterior-first approach reduces entry and keeps indoor spaces quieter." }
    ]
  },
  {
    slug: "termite-risk-signals-to-watch",
    title: "Termite Risk Signals to Watch (Without Spiraling)",
    description: "A grounded guide to moisture, wood contact, and what to do when you notice warning signs.",
    dateISO: "2025-12-05",
    readingMinutes: 5,
    tags: ["Termites", "Inspection", "Education"],
    content: [
      { p: "Termites are common in the Southeast. What matters is reducing risk and keeping documentation—so you always know where you stand." },
      { h: "Top risk factors" },
      { list: ["Persistent moisture near the foundation", "Wood-to-soil contact", "Dense mulch right against the structure", "Poor crawlspace ventilation"] },
      { p: "If you’re unsure, schedule an inspection. Clarity beats guesswork." }
    ]
  },
  {
    slug: "mosquito-yard-setup",
    title: "Mosquito Control Starts With Yard Setup",
    description: "A practical approach: reduce breeding zones, protect high-use areas, and maintain through peak season.",
    dateISO: "2025-11-18",
    readingMinutes: 4,
    tags: ["Mosquito", "Outdoor", "Maintenance"],
    content: [
      { p: "Mosquito pressure is often a yard-design problem: water, shade, and protected resting spots." },
      { h: "Small changes, big payoff" },
      { list: ["Refresh birdbaths twice a week", "Store buckets and toys upside down", "Keep gutters flowing", "Focus treatment where you gather (patio edges, shrubs nearby)"] }
    ]
  }
];

export const postBySlug = (slug: string) => posts.find(p => p.slug === slug);
