import Head from "next/head";
import styles from "@/styles/Legal.module.css";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Starshine Cleaning</title>
      </Head>

      <main className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.h1}>Terms of Service & Cancellation Policy</h1>

          <p className={styles.meta}>
            <em>Last Updated: February 18, 2026</em>
          </p>

          <p className={styles.p}>
            By submitting a booking request or completing payment for services,
            you agree to the following Terms of Service.
          </p>

          <h2 className={styles.h2}>Scope of Services</h2>
          <p className={styles.p}>
            Starshine Cleaning LLC provides residential and commercial cleaning
            services as described in your booking confirmation email.
            Services are limited to those agreed upon in writing prior to the
            appointment. Additional requests may be declined or billed separately.
          </p>
          <p className={styles.p}>
            We reserve the right to refuse or discontinue service due to safety
            concerns, hazardous conditions, aggressive animals, structural
            instability, or inappropriate conduct.
          </p>

          <h2 className={styles.h2}>Estimates & Pricing</h2>
          <p className={styles.p}>
            Pricing is based on the size, condition, and scope described at the
            time of booking. If actual conditions materially differ, we reserve
            the right to adjust pricing or decline service.
          </p>

          <h2 className={styles.h2}>Payment Terms</h2>
          <p className={styles.p}>
            Payment is due prior to or on the day of service as specified in your
            confirmation email. Appointments are not secured until payment is
            received. Returned payments or chargebacks may incur additional fees.
          </p>

          <h2 className={styles.h2}>Access to Property</h2>
          <p className={styles.p}>
            Clients are responsible for providing safe and timely access.
            Failure to provide access at the scheduled time may result in
            cancellation and applicable fees.
          </p>
          <p className={styles.p}>
            Clients must secure pets and remove fragile or high-value items prior
            to service.
          </p>

          <h2 className={styles.h2}>Satisfaction & Damage Reporting</h2>
          <p className={styles.p}>
            Any concerns or alleged damages must be reported within 24 hours of
            service completion. Failure to report within this timeframe
            constitutes acceptance of the work performed.
          </p>
          <p className={styles.p}>
            At our discretion, we may re-clean the affected area or offer a
            partial credit. Refunds are not guaranteed.
          </p>

          <h2 className={styles.h2}>Limitation of Liability</h2>
          <p className={styles.p}>
            To the maximum extent permitted by law, Starshine Cleaning shall not
            be liable for indirect, incidental, special, consequential, or
            punitive damages.
          </p>
          <p className={styles.p}>
            We are not responsible for pre-existing damage, normal wear and tear,
            improperly installed fixtures, faulty materials, aging finishes, or
            manufacturer defects.
          </p>
          <p className={styles.p}>
            Liability for any claim shall not exceed the total amount paid for
            the specific service in question. We are only liable for damages
            caused by proven gross negligence or willful misconduct.
          </p>

          <h2 className={styles.h2}>Hazardous Conditions</h2>
          <p className={styles.p}>
            We do not provide remediation for mold, asbestos, lead paint,
            biohazards, pest infestations, or hoarding conditions. Service may
            be suspended immediately if hazardous conditions are discovered.
          </p>

          <h2 className={styles.h2}>Cancellation Policy</h2>
          <p className={styles.p}>
            Cancellations or rescheduling require at least 48 hours’ notice.
          </p>
          <ul className={styles.ul}>
            <li>More than 48 hours: No fee</li>
            <li>Same-day cancellation or lockout: Up to 100%</li>
          </ul>

          <h2 className={styles.h2}>Recurring Services</h2>
          <p className={styles.p}>
            Recurring services may be paused or terminated by either party with
            written notice. Pricing may be adjusted with advance notice.
            Missed cleanings may result in repricing.
          </p>

<h2 className={styles.h2}>Communications Consent</h2>
<p className={styles.p}>
  By providing contact information, including an email address or phone
  number, you consent to receive communications related to scheduling,
  service delivery, billing, customer support, and other service-related
  matters.
</p>
          <h2 className={styles.h2}>Force Majeure</h2>
          <p className={styles.p}>
            We are not liable for delays or inability to perform due to events
            beyond our control, including weather, natural disasters, or
            governmental restrictions.
          </p>

          <h2 className={styles.h2}>Governing Law</h2>
          <p className={styles.p}>
            These Terms are governed by the laws of the State of Utah.
            Any disputes shall be resolved in the appropriate courts of Utah.
          </p>

           <p className={styles.contact}>
            Questions regarding these Terms may be directed to:
            <br />
            <strong>bookstarshine@gmail.com</strong>
          </p>
        </div>
      </main>
    </>
  );
}
