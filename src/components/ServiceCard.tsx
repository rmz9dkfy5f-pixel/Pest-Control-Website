import Link from "next/link";
import styles from "./ServiceCard.module.css";
import { Service } from "@/lib/services";
import { Icon } from "./Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">
        <Icon name={service.icon} size={22} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{service.name}</h3>
        <p className={styles.summary}>{service.summary}</p>

        <ul className={styles.bullets}>
          {service.benefits.slice(0, 3).map((b) => <li key={b}>{b}</li>)}
        </ul>

        <div className={styles.actions}>
          <Link className="btn btn-primary" href={`/services/${service.slug}`}>View Details</Link>
          <a className="btn btn-quiet" href="/contact#contact-form">Request Quote</a>
        </div>
      </div>
    </article>
  );
}
