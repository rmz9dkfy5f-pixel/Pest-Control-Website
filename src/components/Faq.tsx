"use client";

import { useId, useState } from "react";
import styles from "./Faq.module.css";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const base = useId();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className={styles.wrap}>
      {items.map((it, idx) => {
        const id = `${base}-${idx}`;
        const expanded = open === id;
        return (
          <div key={id} className={styles.item}>
            <button
              className={styles.q}
              aria-expanded={expanded}
              aria-controls={`${id}-panel`}
              onClick={() => setOpen(expanded ? null : id)}
            >
              {it.q}
              <span className={styles.caret} aria-hidden="true">{expanded ? "–" : "+"}</span>
            </button>
            <div id={`${id}-panel`} className={styles.a} hidden={!expanded}>
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
