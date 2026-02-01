export const site = {
  name: "Titanium Barrier Pest Control",
  domain: "example.com",
  phoneDisplay: "(919) 555-0148",
  phoneE164: "+19195550148",
  email: "help@titaniumbarrierpest.com",
  address: {
    street: "123 Oak & Sage Way",
    city: "Raleigh",
    region: "NC",
    postal: "27601",
    country: "US"
  },
  hours: [
    { days: "Mon–Fri", hours: "8:00 AM – 6:00 PM" },
    { days: "Sat", hours: "9:00 AM – 2:00 PM" },
    { days: "Sun", hours: "Closed" }
  ],
  serviceArea: ["Raleigh", "Durham", "Cary", "Apex", "Morrisville", "Wake Forest", "Holly Springs", "Chapel Hill"],
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#"
  }
} as const;
