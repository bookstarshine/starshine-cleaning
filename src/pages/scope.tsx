import Head from "next/head";
import styles from "@/styles/Legal.module.css";

export default function Scope() {
  return (
    <>
      <Head>
        <title>Scope of Services | Starshine Cleaning</title>
      </Head>

      <main className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.h1}>Scope of Services</h1>

          <p className={styles.meta}>
            What Is Included in Each Service
            <br />
            <em>Last updated: February 18, 2026</em>
          </p>

          <p className={styles.p}>
            This page outlines the standard scope of services for residential and commercial
            cleanings provided by Starshine Cleaning LLC. Scope definitions are intended to
            create clarity, consistency, and shared expectations prior to service.
          </p>

          {/* STANDARD CLEAN */}
          <h2 className={styles.h2}>Residential — Standard Clean</h2>

          <p className={styles.p}>
            A maintenance-focused cleaning designed to reset and maintain an already
            lived-in home.
          </p>

          <ul className={styles.ul}>
            <li>Kitchen surfaces wiped and sanitized</li>
            <li>Stovetop exterior cleaned</li>
            <li>Bathroom sinks, counters, mirrors, toilets, and showers/tubs cleaned</li>
            <li>Accessible surfaces dusted</li>
            <li>Floors vacuumed and mopped</li>
            <li>Trash removed and liners replaced (if provided)</li>
            <li>Light tidying of visible items (no decluttering or organizing projects)</li>
          </ul>

          <p className={styles.p}>
            This service does not include buildup restoration, interior appliances,
            interior cabinets, baseboards, detailed edge work, or heavy scrubbing unless otherwise noted.
          </p>

          {/* RECURRING */}
          <h2 className={styles.h2}>Residential — Recurring Service</h2>

          <p className={styles.p}>
            Recurring cleanings (weekly, biweekly, or monthly) follow the Standard Clean
            scope with consistent maintenance and priority scheduling.
          </p>

          <ul className={styles.ul}>
            <li>All items listed under Standard Clean</li>
            <li>Maintenance-level attention to high-use areas</li>
            <li>Ongoing condition management to prevent buildup</li>
          </ul>

          <p className={styles.p}>
            Recurring service maintains cleanliness but is not intended to reverse
            heavy accumulation. If buildup exceeds maintenance levels, a Deep Clean
            may be required prior to continuation.
          </p>

          {/* DEEP CLEAN */}
          <h2 className={styles.h2}>Residential — Deep Clean</h2>

          <p className={styles.p}>
            A detail-focused cleaning intended for move-ins, move-outs, rental resets,
            or homes requiring restoration-level attention.
          </p>

          <ul className={styles.ul}>
            <li>All items listed under Standard Clean</li>
            <li>Baseboards and detailed edge cleaning</li>
            <li>Focused removal of visible buildup in kitchen and bathrooms</li>
            <li>Interior microwave cleaned</li>
            <li>Exterior cabinet fronts wiped</li>
            <li>Detailed wipe-down of doors and trim (as accessible)</li>
            <li>Linens washed, dried, and beds made</li>
          </ul>

          <p className={styles.p}>
            Deep Clean service addresses visible accumulation but does not include
            permanent stain removal, paint correction, mold remediation,
            or damage repair.
          </p>

          {/* ADD-ONS */}
          <h2 className={styles.h2}>Add-On Services</h2>

          <p className={styles.p}>
            The following services are available by request and must be confirmed prior to service.
          </p>

          <h3 className={styles.h2}>Laundry</h3>

          <ul className={styles.ul}>
            <li>Washing, drying, and folding of household laundry</li>
            <li>Machines must be functional and available onsite</li>
            <li>Detergent must be provided unless otherwise arranged</li>
            <li>Service time is limited to reasonable household volumes</li>
          </ul>

          <p className={styles.p}>
            Specialty garments, stain treatment, ironing, and dry cleaning are not included.
          </p>

          <h3 className={styles.h2}>Plant Care</h3>

          <ul className={styles.ul}>
            <li>Watering of indoor plants per visible soil condition</li>
            <li>Removal of dead leaves</li>
            <li>Gentle dusting of accessible leaves</li>
          </ul>

          <p className={styles.p}>
            Plant health is not guaranteed. We are not responsible for pre-existing plant
            conditions or long-term care outcomes.
          </p>

          {/* COMMERCIAL */}
          <h2 className={styles.h2}>Commercial Cleaning</h2>

          <ul className={styles.ul}>
            <li>High-touch surface sanitation</li>
            <li>Restroom cleaning and supply reset (if supplies provided)</li>
            <li>Breakroom or kitchenette wipe-down</li>
            <li>Trash removal</li>
            <li>Floor vacuuming and mopping</li>
          </ul>

          <p className={styles.p}>
            Commercial frequency and task lists may be customized by written agreement.
          </p>

          {/* POST CONSTRUCTION */}
          <h2 className={styles.h2}>Post-Construction Cleaning</h2>

          <ul className={styles.ul}>
            <li>Removal of surface dust and debris</li>
            <li>Detailed wipe-down of accessible surfaces</li>
            <li>Floor cleaning and preparation for final presentation</li>
          </ul>

          <p className={styles.p}>
            Hazardous material removal, chemical stripping, and contractor-level remediation
            are not included.
          </p>

          {/* TURNOVERS */}
          <h2 className={styles.h2}>Vacation Rental Turnovers</h2>

          <ul className={styles.ul}>
            <li>Full reset of kitchen and bathrooms</li>
            <li>Surface wipe-down and dusting</li>
            <li>Floor vacuuming and mopping</li>
            <li>Trash removal</li>
            <li>Visual staging reset</li>
          </ul>

          <p className={styles.p}>
            Turnovers cover interior living areas only.
          </p>

          {/* GENERAL LIMITATIONS — EXPANDED */}
          <h2 className={styles.h2}>General Limitations</h2>

          <ul className={styles.ul}>
            <li>Cleaning is limited to accessible interior living areas</li>
            <li>Garages, storage rooms, basements, attics, sheds, and utility spaces are excluded unless requested in advance</li>
            <li>Exterior areas including yards, patios, decks, driveways, roofs, siding, gutters, and outdoor furniture are not included</li>
            <li>Exterior window cleaning is not included unless scheduled separately</li>
            <li>Heavy furniture or appliance moving is not performed</li>
            <li>Interior ovens, refrigerators, and windows require prior request</li>
            <li>We do not handle biohazards, pest infestations, hoarding remediation, or structural damage</li>
            <li>Permanent stains, wear, or material deterioration cannot be guaranteed to improve</li>
          </ul>

          <p className={styles.p}>
            Any services outside of the scope above must be requested and confirmed
            in writing prior to service.
          </p>

          <p className={styles.contact}>
            For clarification regarding scope prior to booking:
            <br />
            <strong>bookstarshine@gmail.com</strong>
          </p>
        </div>
      </main>
    </>
  );
}