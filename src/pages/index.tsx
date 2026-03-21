// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import aboutStyles from "@/styles/About.module.css";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starshine Cleaning | House Cleaning in Park City, UT</title>

        <meta
          name="description"
          content="Thoughtful residential and recurring house cleaning in Park City, Utah — clear pricing, consistent results, and a calm reset every visit."
        />
<link rel="canonical" href="https://bookstarshine.com/" />
        {/* Open Graph */}
        <meta property="og:title" content="Starshine Cleaning | Calm, Reliable Home Cleaning" />
        <meta
          property="og:description"
          content="Starshine Cleaning provides calm, reliable home cleaning services with clear pricing and consistent results."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bookstarshine.com/" />
        <meta property="og:image" content="https://bookstarshine.com/images/kitchen.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Starshine Cleaning | Calm, Reliable Home Cleaning" />
        <meta
          name="twitter:description"
          content="Starshine Cleaning provides calm, reliable home cleaning services with clear pricing and consistent results."
        />
        <meta name="twitter:image" content="https://bookstarshine.com/images/kitchen.webp" />
      </Head>

      <div className={styles.page}>
        <main className={styles.container}>
          {/* TOP IMAGE (LCP) */}
          <section className={styles.topImageSection}>
            <div className={styles.topImageWrap}>
              <Image
                src="/images/kitchen.webp"
                alt="Gleaming kitchen with cleaning spray bottle and citrus by a sunlit window"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 900px) calc(100vw - 2.5rem), 1100px"
                className={styles.topImage}
              />
            </div>
          </section>

          {/* HERO */}
          <section className={styles.hero}>
            <div>
              <div className={styles.kicker}>House Cleaning in Park City, Utah</div>
              <h1 className={styles.h1}>
                A clean home,
                <br />
                made effortless.
              </h1>

              <p className={styles.subhead}>
                Thoughtful home cleaning, designed to restore calm — serving Park City and nearby
                Summit County homes with clear pricing and consistent results.
              </p>

              <div className={styles.ctaRow}>
                <Link href="/book" className={`${styles.primaryBtn} btn btnPrimary`}>
                  Book Now
                </Link>

                <Link href="/faq" className={`${styles.secondaryBtn} btn btnSecondary`}>
                  FAQ
                </Link>
              </div>
            </div>

            <div className={`${styles.card} ${styles.heroCard}`}>
              <div className={styles.heroCardTitle}>What our clients value most</div>
              <ul className={styles.heroCardList}>
                <li>Locally-Owned</li>
                <li>Consistent Results</li>
                <li>Attention to Detail</li>
                <li>Satisfaction Guaranteed</li>
                <li>Trusted &amp; Vetted Professionals</li>
              </ul>

              <div className={styles.heroCardFooter}>
                <Link href="/about" className={styles.commercialLink}>
                  Learn more about us
                </Link>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What to expect</h2>

            <div className={aboutStyles.grid}>
              <div className={aboutStyles.card}>
                <div className={aboutStyles.cardHeader}>
                  <h3 className={aboutStyles.cardTitle}>What we’re about</h3>
                  <div className={aboutStyles.cardSubtitle}>Calm</div>
                </div>

                <p className={aboutStyles.cardText}>
                  We don't cut corners. We want to offer the best service — dependable,
                  detail-aware, and easy to work with. The goal is repeatable results you can
                  trust.
                </p>
              </div>

              <div className={aboutStyles.card}>
                <div className={aboutStyles.cardHeader}>
                  <h3 className={aboutStyles.cardTitle}>How it works</h3>
                  <div className={aboutStyles.cardSubtitle}>Simple</div>
                </div>

                <ol className={aboutStyles.list}>
                  <li>You book your preferred service</li>
                  <li>Confirm the details and payment</li>
                  <li>Experience a Starshine Clean</li>
                </ol>
              </div>

              <div className={aboutStyles.card}>
                <div className={aboutStyles.cardHeader}>
                  <h3 className={aboutStyles.cardTitle}>The standard</h3>
                  <div className={aboutStyles.cardSubtitle}>Excellent</div>
                </div>

                <ul className={aboutStyles.list}>
                  <li>Respect the space</li>
                  <li>Communicate clearly</li>
                  <li>Don’t rush the important parts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Services</h2>

            <div className={styles.grid3}>
              <Link href="/book" className={`${styles.card} ${styles.serviceCard}`}>
                <div className={styles.cardTop}>
                  <div className={styles.serviceTitle}>Deep Clean</div>
                  <div className={styles.priceValue}>$349</div>
                </div>
                <p className={styles.serviceText}>
                  The perfect option for rental-resets, move-ins, or move-outs. We go above and
                  beyond to provide a comprehensive and detail-focused cleaning, focusing on buildup
                  areas and neglected corners, leaving your home looking its best.
                </p>
                <ul className={styles.serviceDetails}>
                  <li>Baseboards + detail edges</li>
                  <li>Buildup focus in kitchen/bath</li>
                  <li>Carpets, surfaces, furniture</li>
                </ul>
              </Link>

              <Link href="/book" className={`${styles.card} ${styles.serviceCard}`}>
                <div className={styles.cardTop}>
                  <div className={styles.serviceTitle}>Standard Clean</div>
                  <div className={styles.priceValue}>$249</div>
                </div>
                <p className={styles.serviceText}>
                  A thorough clean and tidy reset — ideal before guests, after travel, or when life
                  gets busy. We focus on the most important areas of your home.
                </p>
                <ul className={styles.serviceDetails}>
                  <li>Kitchen + bathrooms + surfaces</li>
                  <li>Dusting, organizing</li>
                  <li>Vacuuming and mopping</li>
                </ul>
              </Link>

              <Link
                href="/book"
                className={`${styles.card} ${styles.serviceCard} ${styles.featuredCard}`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.serviceTitle}>Recurring Service</div>
                  <div className={styles.priceValue}>$199</div>
                </div>

                <div className={styles.featuredTag}>Most popular</div>

                <p className={styles.serviceText}>
                  Weekly, biweekly, or monthly visits with consistent standards and priority
                  scheduling. This maintains the cleanliness of your home, preventing the build-up
                  of dirt, grime, and chaos.
                </p>
                <ul className={styles.serviceDetails}>
                  <li>Discounted Standard Clean</li>
                  <li>Priority scheduling</li>
                  <li>Consistency &gt; intensity</li>
                </ul>
              </Link>
            </div>

          <div className={styles.addonsRow}>
  <Link
    href="/book"
    className={`${styles.card} ${styles.addonCard} ${styles.serviceCard}`}
  >
    <div className={styles.cardTop}>
      <div className={styles.serviceTitle}>Carpet Extraction</div>
      <div className={styles.addonPriceValue}>$100</div>
    </div>
    <p className={styles.addonDetails}>
       Hot water extraction to lift dirt, salt, and buildup from
                  high-traffic areas.
    </p>
  </Link>

  <Link
    href="/book"
    className={`${styles.card} ${styles.addonCard} ${styles.serviceCard}`}
  >
    <div className={styles.cardTop}>
      <div className={styles.serviceTitle}>Laundry</div>
      <div className={styles.addonPriceValue}>$30</div>
    </div>
    <p className={styles.addonDetails}>Wash, dry, and fold if machines are present.</p>
  </Link>

  <Link
    href="/book"
    className={`${styles.card} ${styles.addonCard} ${styles.serviceCard}`}
  >
    <div className={styles.cardTop}>
      <div className={styles.serviceTitle}>Plant Care</div>
      <div className={styles.addonPriceValue}>$20</div>
    </div>
    <p className={styles.addonDetails}>
     Watering, light dusting, and gentle plant care.
    </p>
  </Link>
</div>
          </section>

          <div className={styles.commercialNote}>
            We also have commercial offerings.{" "}
            <Link href="/services" className={styles.commercialLink}>
              See all our Park City cleaning services
            </Link>
          </div>
{/* REVIEWS */}
<section className={styles.reviewsSection} aria-label="Client reviews">
  <div className={styles.reviewsOverlay} />

  <div className={styles.reviewsInner}>
    <h2 className={styles.reviewsTitle}>See why clients love Starshine Cleaning</h2>

    <div className={styles.reviewsSubhead}>
      <div className={styles.starsBig} aria-label="Five star reviews">
        ★★★★★
      </div>
      <div className={styles.reviewsCount}>5.0 average • 20+ client reviews</div>
    </div>

    <div className={styles.reviewsTrack}>
      {[
   {
  initial: "K",
  name: "Kentaro Y.",
  area: "Tokyo, Japan",
  text:
    "I come to Park City each winter to ski. Daniel is always pleasant and very reliable, and the vacation home feels completely reset after every visit. After long days on the mountain, it is a comfort to return to tidy gear areas, spotless floors, and a space ready for the next day.",
},
{
  initial: "J",
  name: "Fernando J.",
  area: "Los Angeles, CA",
  text:
    "We run a busy household, with homes in LA and Park City. Daniel’s team keeps everything running smoothly. They notice the small details and the home simply feels calmer and more organized after each visit.",
},
{
  initial: "C",
  name: "Christopher A.",
  area: "Park City, UT",
  text:
    "We have worked with several cleaning services over the years. Starshine is the first that has been consistently excellent. I feel completely at ease knowing the home is in good hands when they are scheduled.",
},
       
      ].map((r, i) => (
        <article key={i} className={styles.reviewCard}>
          <div className={styles.avatar}>{r.initial}</div>

          <div className={styles.starsSmall} aria-hidden="true">
            ★★★★★
          </div>

          <p className={styles.reviewQuote}>
            &ldquo;{r.text}&rdquo;
          </p>

        

          <div className={styles.reviewFooter}>
            <div className={styles.reviewerLine}>
              <span className={styles.reviewerName}>{r.name}</span>
              <span className={styles.reviewerDash}> — </span>
              <span className={styles.reviewerArea}>{r.area}</span>
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className={styles.dots} aria-hidden="true">
      <span className={styles.dot} />
      <span className={`${styles.dot} ${styles.dotActive}`} />
      <span className={styles.dot} />
    </div>
  </div>
</section>
          <CTA
            title="Ready to book?"
            text="Choose your service, reserve your spot, and we’ll confirm the details with you."
            primaryHref="/book"
            primaryLabel="Book Now"
            secondaryHref="/faq"
            secondaryLabel="FAQ"
          />
        </main>
      </div>
    </>
  );
}