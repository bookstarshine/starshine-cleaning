import Link from "next/link";
import styles from "./CTA.module.css";

type CTAProps = {
  title: string;
  text?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTA({
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTAProps) {
  return (
    <section className={styles.wrap} aria-label="Call to action">
      <div className={styles.card}>
        <div className={styles.left}>
          <h2 className={styles.title}>{title}</h2>
          {text ? <p className={styles.text}>{text}</p> : null}
        </div>

        <div className={styles.actions}>
          <Link className={`${styles.primary} btn btnPrimary`} href={primaryHref}>
            {primaryLabel}
          </Link>

          {secondaryHref && secondaryLabel ? (
            <Link
              className={`${styles.secondary} btn btnSecondary`}
              href={secondaryHref}
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
