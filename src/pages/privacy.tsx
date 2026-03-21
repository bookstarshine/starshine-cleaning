import Head from "next/head";
import styles from "@/styles/Legal.module.css";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Starshine Cleaning</title>
      </Head>

      <main className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.h1}>Privacy Policy</h1>

          <p className={styles.meta}>
            How Information Is Collected and Used
            <br />
            <em>Last updated: February 17, 2026</em>
          </p>

          <p className={styles.p}>
            This Privacy Policy describes how Starshine Cleaning LLC ("we", "us")
            collects, uses, and protects personal information in connection with
            this website and the services offered.
          </p>

          <h2 className={styles.h2}>Information You Provide</h2>
          <p className={styles.p}>
            You may choose to provide personal information when you:
          </p>

          <ul className={styles.ul}>
            <li>Submit a booking request or inquiry</li>
            <li>Communicate by email, phone, or text</li>
            <li>Provide access instructions or service preferences</li>
          </ul>

          <p className={styles.p}>
            This information may include your name, contact details, address,
            scheduling information, and notes relevant to providing cleaning services.
          </p>

          <h2 className={styles.h2}>How This Information Is Used</h2>
          <ul className={styles.ul}>
            <li>Scheduling and confirming services</li>
            <li>Communicating about appointments</li>
            <li>Processing payments and invoices</li>
            <li>Maintaining internal service records</li>
            <li>Improving service quality</li>
          </ul>

          <h2 className={styles.h2}>Email Communications</h2>
<p className={styles.p}>
  If you provide your email address through booking requests, inquiries,
  payments, or service communications, Starshine Cleaning LLC may use
  that email address to contact you regarding scheduling, service updates,
  invoices, customer support, and related business communications.
</p>

<p className={styles.p}>
  You may opt out of non-essential or promotional emails at any time by
  using the unsubscribe option included in communications or by contacting
  us directly. Service-related communications necessary to fulfill booked
  services may still be sent.
</p>

          <h2 className={styles.h2}>Analytics and Cookies</h2>
          <p className={styles.p}>
            This website may use basic analytics tools to understand aggregate
            traffic patterns. These tools collect non-identifying information such as
            browser type and general location. They are used only to improve the
            website and understand how visitors find our services.
          </p>

          <h2 className={styles.h2}>Sharing of Information</h2>
          <p className={styles.p}>
            Personal information is never sold. Information may be shared only when necessary:
          </p>

          <ul className={styles.ul}>
            <li>With payment processors or scheduling tools</li>
            <li>With service providers assisting with operations</li>
            <li>When required by law</li>
          </ul>

          <h2 className={styles.h2}>Data Retention</h2>
          <p className={styles.p}>
            Records related to bookings and communications may be retained as
            reasonably necessary for business, accounting, and legal purposes.
          </p>

          <h2 className={styles.h2}>Security</h2>
          <p className={styles.p}>
            Reasonable safeguards are used to protect personal information.
            No system can be guaranteed perfectly secure.
          </p>

          <h2 className={styles.h2}>Your Rights</h2>
          <p className={styles.p}>
            You may request access, correction, or deletion of personal information
            where legally permitted.
          </p>

          <h2 className={styles.h2}>Contact</h2>
          <p className={styles.contact}>
            Questions about this policy may be directed to:
            <br />
            <strong>bookstarshine@gmail.com</strong>
          </p>
        </div>
      </main>
    </>
  );
}
