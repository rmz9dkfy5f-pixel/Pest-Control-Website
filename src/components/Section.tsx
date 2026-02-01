import styles from "./Section.module.css";

export function Section({
  eyebrow,
  title,
  subtitle,
  children
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        {(eyebrow || title || subtitle) && (
          <header className={styles.header}>
            {eyebrow && <div className="kicker">{eyebrow}</div>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
