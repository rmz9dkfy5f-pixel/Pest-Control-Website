# Titanium Barrier Pest Control — Website

Production-ready marketing site built with **Next.js (App Router) + TypeScript**.

## 1) Local setup (VS Code)
1. Install Node.js (LTS recommended).
2. In VS Code terminal:

```bash
npm install
npm run dev
```

3. Open:
- http://localhost:3000

## 2) Build for production
```bash
npm run build
npm run start
```

## 3) Deploy options
### Option A: Vercel (fastest)
- Push repo to GitHub
- Import into Vercel
- Build command: `npm run build`
- Output: Next.js default

### Option B: VPS / Nginx (Node server)
- Build and run:
```bash
npm install
npm run build
npm run start -- -p 3000
```
- Reverse proxy with Nginx to `http://127.0.0.1:3000`

## 4) Updating domain + SEO
- Edit `src/lib/site.ts`:
  - `domain`, `phone`, `email`, `address`, `serviceArea`
- Update `/public/sitemap.xml` with your real domain.

## 5) Contact form behavior
The form POSTs to `/api/contact` and logs submissions on the server.
To make it real, replace the handler with:
- SMTP provider (Postmark / SendGrid)
- CRM webhook (HubSpot / Jobber / ServiceTitan, etc.)
- Zapier / Make.com workflow

## 6) Optional add-ons (recommended)
- Booking: Calendly embed or a “Request appointment” time-picker
- CRM: HubSpot/Jobber integration + lead pipeline
- Automated reminders: SMS/email reminders via Twilio + calendar integration
- Reviews: Google Reviews pull-in + review request automation
- Analytics: Plausible/GA4 with conversion tracking on “Request Quote”
