import Head from "next/head";
import styles from "@/styles/Legal.module.css";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use | Starshine Cleaning</title>
      </Head>

      <main className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.h1}>Terms of Use</h1>
          <p className={styles.meta}>
            Conditions for Using This Website
            <br />
            <em>Last updated: February 17, 2026</em>
          </p>

          <p className={styles.p}>
            These Terms of Use ("Terms") govern your access to and use of the
            Starshine Cleaning LLC website (the "Site"). By using the Site, you
            agree to these Terms. If you do not agree, please refrain from using
            the Site.
          </p>

          <h2 className={styles.h2}>Informational Purpose Only</h2>
          <p className={styles.p}>
            The content on this Site is provided for general informational
            purposes about Starshine Cleaning and the services offered. It does
            not constitute professional advice, a binding quote, or a formal
            service agreement.
          </p>

          <h2 className={styles.h2}>No Guarantee of Completeness or Accuracy</h2>
          <p className={styles.p}>
            Reasonable efforts are made to keep information current and
            accurate. However, we do not guarantee that content is complete,
            up to date, or free from error.
          </p>

          <h2 className={styles.h2}>Intellectual Property</h2>
          <p className={styles.p}>
            Unless otherwise indicated, the text, images, logo, and other
            materials on the Site are the intellectual property of Starshine
            Cleaning LLC or are used with appropriate permission. They may not
            be reproduced or used for commercial purposes without prior written
            consent.
          </p>

          <h2 className={styles.h2}>Acceptable Use</h2>
          <ul className={styles.ul}>
            <li>Violates any applicable law or regulation</li>
            <li>Attempts to gain unauthorized access to systems or data</li>
            <li>Interferes with Site functionality or infrastructure</li>
            <li>Involves automated scraping or harvesting</li>
          </ul>

          <h2 className={styles.h2}>Limitation of Liability</h2>
          <p className={styles.p}>
            To the fullest extent permitted by law, Starshine Cleaning LLC is
            not liable for any damages arising out of or in connection with your
            use of, or inability to use, the Site.
          </p>

          <h2 className={styles.h2}>Changes to the Site and These Terms</h2>
          <p className={styles.p}>
            The Site, its content, and these Terms may be updated from time to
            time. Changes are effective when posted. Continued use after changes
            are posted constitutes acceptance.
          </p>

      
          <p className={styles.contact}>
            Questions about these Terms may be directed to:{" "}
            <strong>bookstarshine@gmail.com</strong>
          </p>
        </div>
      </main>
    </>
  );
}
