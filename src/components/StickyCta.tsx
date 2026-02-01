"use client";

import styles from "./StickyCta.module.css";
import { site } from "@/lib/site";

export function StickyCta() {
  return (
    <div className={styles.wrap} aria-label="Sticky schedule bar">
      <div className={styles.inner}>
        <div className={styles.text}>
          <strong>Schedule service</strong>
          <span className={styles.muted}>Calm, prevention-first pest control.</span>
        </div>
        <div className={styles.actions}>
          <a className="btn btn-primary" href="/contact#contact-form">Book Inspection</a>
          <a className="btn btn-quiet" href={`tel:${site.phoneE164}`}>Call</a>
        </div>
      </div>
    </div>
  );
}
