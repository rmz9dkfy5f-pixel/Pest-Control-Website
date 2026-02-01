import styles from "./TestimonialCard.module.css";
import { Icon } from "./Icon";

export function TestimonialCard({
  name,
  city,
  rating,
  quote
}: {
  name: string;
  city: string;
  rating: number;
  quote: string;
}) {
  return (
    <article className={styles.card}>
      <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? styles.on : styles.off} aria-hidden="true">
            <Icon name="star" size={18} />
          </span>
        ))}
      </div>

      <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
      <div className={styles.meta}>
        <strong>{name}</strong>
        <span className={styles.city}>{city}</span>
      </div>
    </article>
  );
}
