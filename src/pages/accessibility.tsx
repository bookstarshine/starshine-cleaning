import Head from "next/head";
import styles from "@/styles/Legal.module.css";

export default function Accessibility() {
  return (
    <>
      <Head>
        <title>Accessibility | Starshine Cleaning</title>
      </Head>

      <main className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.h1}>Accessibility</h1>

          <p className={styles.meta}>
            Commitment to Inclusive Access
          </p>

          <p className={styles.p}>
            Starshine Cleaning is committed to making its website accessible
            and usable for as many people as possible.
          </p>

          <h2 className={styles.h2}>Web Accessibility</h2>
          <ul className={styles.ul}>
            <li>Keyboard navigable content</li>
            <li>Clear structure and logical headings</li>
            <li>Readable contrast and typography</li>
            <li>Responsive design across devices</li>
          </ul>

          <p className={styles.p}>
            We reference WCAG 2.1 principles and treat accessibility as an
            ongoing effort rather than a one-time checklist.
          </p>

          <h2 className={styles.h2}>Reporting an Issue</h2>
          <p className={styles.p}>
            If you encounter a barrier or require information in an alternative
            format, please contact us with:
          </p>

          <ul className={styles.ul}>
            <li>The page or feature involved</li>
            <li>Description of the problem</li>
            <li>Your device or assistive technology (if relevant)</li>
          </ul>

          <p className={styles.contact}>
            Accessibility requests may be sent to:
            <br />
            <strong>bookstarshine@gmail.com</strong>
          </p>
        </div>
      </main>
    </>
  );
}
