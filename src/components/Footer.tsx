import Link from "next/link";
import styles from "./Footer.module.css";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <img
              src="/assets/images/logo-titanium-barrier.svg"
              alt="Titanium Barrier Pest Control"
              width={240}
              height={64}
              className={styles.logo}
              loading="lazy"
            />
            <p className={styles.tag}>
              Calm, consistent protection—built on 15 years of local experience and a prevention-first mindset.
            </p>
            <div className={styles.ctaRow}>
              <a className="btn btn-primary" href="/contact#contact-form">Schedule Service</a>
              <a className="btn btn-quiet" href={`tel:${site.phoneE164}`}>Call {site.phoneDisplay}</a>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <div className={styles.colTitle}>Navigation</div>
              <Link className={styles.link} href="/">Home</Link>
              <Link className={styles.link} href="/about">About</Link>
              <Link className={styles.link} href="/services">Services</Link>
              <Link className={styles.link} href="/testimonials">Testimonials</Link>
              <Link className={styles.link} href="/blog">Blog</Link>
              <Link className={styles.link} href="/contact">Contact</Link>
            </div>

            <div className={styles.col}>
              <div className={styles.colTitle}>Service Area</div>
              <div className={styles.muted}>
                {site.serviceArea.join(", ")} and surrounding NC towns.
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.colTitle}>Contact</div>
              <div className={styles.muted}>
                {site.address.street}<br/>
                {site.address.city}, {site.address.region} {site.address.postal}
              </div>
              <div className={styles.muted}>
                <a className={styles.linkInline} href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a><br/>
                <a className={styles.linkInline} href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.colTitle}>Legal</div>
              <a className={styles.link} href="#">Privacy Policy</a>
              <a className={styles.link} href="#">Terms of Service</a>
              <a className={styles.link} href="#">Accessibility</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className={styles.social}>
            <a href={site.socials.facebook} aria-label="Facebook">Facebook</a>
            <a href={site.socials.instagram} aria-label="Instagram">Instagram</a>
            <a href={site.socials.linkedin} aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
