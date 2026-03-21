import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ServicesPage.module.css";
import CTA from "@/components/CTA";

export default function Services() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bookstarshine.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://bookstarshine.com/services",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Services | Starshine Cleaning (Park City, Utah)",
    url: "https://bookstarshine.com/services",
    description:
      "Explore Starshine Cleaning services in Park City, Utah: residential cleaning, commercial cleaning, vacation rental turnovers, and post-construction cleaning.",
    isPartOf: {
      "@type": "WebSite",
      name: "Starshine Cleaning",
      url: "https://bookstarshine.com/",
    },
  };

  /**
   * Services list schema.
   * Provider points to your global LocalBusiness @id (defined in _app.tsx).
   * Make sure your _app.tsx schema includes:
   *   "@id": "https://bookstarshine.com/#localbusiness"
   */
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Starshine Cleaning Services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Residential Cleaning",
          serviceType: "House Cleaning",
          areaServed: {
            "@type": "City",
            name: "Park City",
            address: {
              "@type": "PostalAddress",
              addressRegion: "UT",
              addressCountry: "US",
            },
          },
          provider: { "@id": "https://bookstarshine.com/#localbusiness" },
          url: "https://bookstarshine.com/services#residential",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Deep Cleaning",
          serviceType: "Deep Clean",
          areaServed: {
            "@type": "City",
            name: "Park City",
            address: {
              "@type": "PostalAddress",
              addressRegion: "UT",
              addressCountry: "US",
            },
          },
          provider: { "@id": "https://bookstarshine.com/#localbusiness" },
          url: "https://bookstarshine.com/services#residential",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Recurring House Cleaning",
          serviceType: "Recurring Cleaning",
          areaServed: {
            "@type": "City",
            name: "Park City",
            address: {
              "@type": "PostalAddress",
              addressRegion: "UT",
              addressCountry: "US",
            },
          },
          provider: { "@id": "https://bookstarshine.com/#localbusiness" },
          url: "https://bookstarshine.com/services#residential",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Vacation Rental Turnovers",
          serviceType: "Vacation Rental Cleaning",
          areaServed: {
            "@type": "City",
            name: "Park City",
            address: {
              "@type": "PostalAddress",
              addressRegion: "UT",
              addressCountry: "US",
            },
          },
          provider: { "@id": "https://bookstarshine.com/#localbusiness" },
          url: "https://bookstarshine.com/services#commercial",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Commercial Cleaning",
          serviceType: "Commercial Cleaning",
          areaServed: {
            "@type": "City",
            name: "Park City",
            address: {
              "@type": "PostalAddress",
              addressRegion: "UT",
              addressCountry: "US",
            },
          },
          provider: { "@id": "https://bookstarshine.com/#localbusiness" },
          url: "https://bookstarshine.com/services#commercial",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Post-Construction Cleaning",
          serviceType: "Post Construction Cleaning",
          areaServed: {
            "@type": "City",
            name: "Park City",
            address: {
              "@type": "PostalAddress",
              addressRegion: "UT",
              addressCountry: "US",
            },
          },
          provider: { "@id": "https://bookstarshine.com/#localbusiness" },
          url: "https://bookstarshine.com/services#commercial",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Services | Starshine Cleaning (Park City, Utah)</title>

        <meta
          name="description"
          content="Explore Starshine Cleaning services in Park City, Utah: residential cleaning, commercial cleaning, vacation rental turnovers, and post-construction cleaning."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Services | Starshine Cleaning (Park City, Utah)"
        />
        <meta
          property="og:description"
          content="Explore Starshine Cleaning services in Park City, Utah: residential cleaning, commercial cleaning, vacation rental turnovers, and post-construction cleaning."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bookstarshine.com/services" />
        <meta
          property="og:image"
          content="https://bookstarshine.com/images/kitchen.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Services | Starshine Cleaning (Park City, Utah)"
        />
        <meta
          name="twitter:description"
          content="Explore Starshine Cleaning services in Park City, Utah: residential cleaning, commercial cleaning, vacation rental turnovers, and post-construction cleaning."
        />
        <meta
          name="twitter:image"
          content="https://bookstarshine.com/images/kitchen.webp"
        />

        {/* JSON-LD Structured Data (moved into Head to avoid client Script overhead) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </Head>

      <div className={styles.page}>
        <main className={styles.container}>
          {/* HERO */}
          <section className={styles.hero}>
            <div>
              <div className={styles.kicker}>Cleaning in Park City, Utah</div>
              <h1 className={styles.h1}>Services</h1>
              <p className={styles.subhead}>
                Starshine Cleaning provides residential and commercial cleaning
                services in Park City, Utah, including deep cleaning, recurring
                house cleaning, vacation rental turnovers, and post-construction
                cleaning.
              </p>

              <div className={styles.ctaRow}>
                <Link
                  href="/book"
                  className={`${styles.primaryBtn} btn btnPrimary`}
                >
                  Book Now
                </Link>

                <Link
                  href="/faq"
                  className={`${styles.secondaryBtn} btn btnSecondary`}
                >
                  FAQ
                </Link>
              </div>
            </div>

            <div className={`${styles.card} ${styles.heroCard}`}>
              <div className={styles.heroCardTitle}>Our Services</div>
              <ul className={styles.heroCardList}>
                <li>Residential Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>Vacation Rental Turnovers</li>
                <li>Post-Construction Cleaning</li>
              </ul>

              {/* Internal link to About (trust + internal linking) */}
              <div className={styles.heroCardFooter}>
                <Link href="/about" className={styles.scopeLink}>
                  Learn about our standards &amp; philosophy
                </Link>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className={styles.section} id="residential">
            <h2 className={styles.sectionTitle}>
              Residential Cleaning Services in Park City
            </h2>

            <div className={styles.grid3}>
              <Link href="/book" className={`${styles.card} ${styles.serviceCard}`}>
                <div className={styles.cardTop}>
                  <div className={styles.serviceTitle}>Deep Clean</div>
                  <div className={styles.priceValue}>$399</div>
                </div>
                <p className={styles.serviceText}>
                  The perfect option for rental-resets, move-ins, or move-outs.
                  We go above and beyond with detail time for buildup areas and
                  neglected corners.
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
                  A thorough clean and tidy reset — ideal before guests, after
                  travel, or when life gets busy.
                </p>
                <ul className={styles.serviceDetails}>
                  <li>Kitchen + bathrooms + surfaces</li>
                  <li>Dusting, organizing</li>
                  <li>Vacuuming and mopping</li>
                </ul>
              </Link>

              <Link href="/book" className={`${styles.card} ${styles.serviceCard}`}>
                <div className={styles.cardTop}>
                  <div className={styles.serviceTitle}>Recurring Service</div>
                  <div className={styles.priceValue}>$199</div>
                </div>
                <p className={styles.serviceText}>
                  Weekly, biweekly, or monthly visits with consistent standards
                  and priority scheduling.
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
                <p className={styles.addonDetails}>
                  Wash, dry, and fold if machines are present.
                </p>
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
                  Watering, removal of dead leaves, and gentle dusting of leaves.
                </p>
              </Link>

            
            </div>

            <div className={styles.scopeRow}>
              <Link href="/scope" className={styles.scopeLink}>
                View full scope &amp; checklist
              </Link>
            </div>
            <Image
              src="/images/airbnb.webp"
              alt="Post construction home cleaning"
              width={1200}
              height={600}
              className={styles.fullWidthImage}
            />
          </section>

          {/* COMMERCIAL */}
          <section className={styles.section} id="commercial">
            <h2 className={styles.sectionTitle}>
              Commercial Cleaning Services in Park City
            </h2>

            <div className={styles.grid3}>
              <Link href="/book" className={`${styles.card} ${styles.serviceCard}`}>
                <div className={styles.cardTop}>
                  <div className={styles.serviceTitle}>Commercial Cleaning</div>
                  <div className={styles.serviceBadge}>Sustain</div>
                </div>
                <p className={styles.serviceText}>
                  Recurring professional cleaning that keeps offices and
                  workspaces hygienic, presentable, and client-ready.
                </p>
                <ul className={styles.serviceDetails}>
                  <li>Consistent high-touch sanitation</li>
                  <li>Restroom &amp; breakroom upkeep</li>
                  <li>Client-ready presentation</li>
                </ul>
              </Link>

              <Link href="/book" className={`${styles.card} ${styles.serviceCard}`}>
                <div className={styles.cardTop}>
                  <div className={styles.serviceTitle}>
                    Post-Construction Cleaning
                  </div>
                  <div className={styles.serviceBadge}>Restore</div>
                </div>
                <p className={styles.serviceText}>
                  Deep debris and dust removal after construction, turning a
                  worksite into a polished, move-in-ready space.
                </p>
                <ul className={styles.serviceDetails}>
                  <li>Fine dust &amp; debris removal</li>
                  <li>Detail finishing wipe-downs</li>
                  <li>Move-in ready polish</li>
                </ul>
              </Link>

              <Link href="/book" className={`${styles.card} ${styles.serviceCard}`}>
                <div className={styles.cardTop}>
                  <div className={styles.serviceTitle}>
                    Vacation Rental Turnovers
                  </div>
                  <div className={styles.serviceBadge}>Refresh</div>
                </div>
                <p className={styles.serviceText}>
                  Fast, detailed resets between guests to keep rentals spotless,
                  staged, and ready on schedule.
                </p>
                <ul className={styles.serviceDetails}>
                  <li>Fast, scheduled resets</li>
                  <li>Staged &amp; guest-ready spaces</li>
                  <li>Laundry/Linens</li>
                </ul>
              </Link>
            </div>

            <div className={styles.scopeRow}>
              <Link href="/scope" className={styles.scopeLink}>
                View full scope &amp; checklist.
              </Link>
            </div>

            <Image
              src="/images/postconstruction.webp"
              alt="Post construction home cleaning"
              width={1200}
              height={600}
              className={styles.fullWidthImage}
            />
          </section>

          {/* CTA */}
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