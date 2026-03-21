import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/AboutPage.module.css";
import CTA from "@/components/CTA";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Starshine Cleaning</title>

        <meta
          name="description"
          content="Learn about Starshine Cleaning — a locally-owned cleaning company serving Park City, Utah with thoughtful, detail-focused service built on trust."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Starshine Cleaning | Park City, Utah"
        />
        <meta
          property="og:description"
          content="Locally-owned residential and commercial cleaning serving Park City, Utah. Built on trust, consistency, and pride in our work."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bookstarshine.com/about" />
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
          content="About Starshine Cleaning | Park City, Utah"
        />
        <meta
          name="twitter:description"
          content="Learn about Starshine Cleaning — a locally-owned cleaning company serving Park City, Utah with thoughtful, detail-focused service."
        />
        <meta
          name="twitter:image"
          content="https://bookstarshine.com/images/kitchen.webp"
        />
      </Head>

      <div className={styles.page}>
        <main className={styles.container}>
          {/* HERO */}
          <section className={styles.hero}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/about.webp"
                alt="Starshine Cleaning team in a bright kitchen"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 900px) 100vw, 520px"
                className={styles.heroImage}
              />
            </div>

            <div className={styles.heroText}>
              <h1>About Starshine Cleaning</h1>
              
              <p>
                Starshine Cleaning is a locally-owned cleaning company based in
                Park City, Utah, built on trust, consistency, and pride in our
                work. We believe a clean home isn’t just aesthetic — it restores
                calm, clarity, and breathing room in everyday life. 
              </p>

              <div className={styles.heroBadges}>
                <span className={styles.badge}>Detail-focused</span>
                <span className={styles.badge}>Consistent &amp; Reliable</span>
              
                <span className={styles.badge}>Attentive to Quality</span>
                <span className={styles.badge}>Environmentally Conscious</span>
              <span className={styles.badge}>Locally-Owned</span>
              <span className={styles.badge}>Vetted &amp; Trusted</span>
               <span className={styles.badge}>Respectful in Every Home</span>
              </div>
            </div>
          </section>

          {/* STORY GRID */}
          <section className={styles.gridSection}>
            <div className={styles.card}>
              <h2>Serving our local communities</h2>
              <p>
                We proudly serve homes and businesses in Park City, Utah. As a locally owned cleaning company, Starshine Cleaning focuses on long-term relationships with homeowners, property managers, and local businesses. Our goal isn’t one-time cleaning — it’s dependable care
                you can rely on week after week. 
                
              </p>
            </div>

            <div className={styles.card}>
              <h2>Our philosophy</h2>
              <p>
                We approach cleaning with intention. Every visit is done with
                the same attention to detail we would expect in our own space.
                Cleaning is personal. You’re trusting someone with your
                environment, and we take that responsibility seriously. Respect,
                communication, and consistency are part of the service — not
                extras.
              </p>
            </div>

            <div className={styles.card}>
              <h2>Why we do this</h2>
              <p>
                A clean home changes how a space feels. It reduces stress,
                improves focus, and gives families time back. We’re passionate
                about creating that reset moment — the feeling of walking into a
                calm, orderly space after a busy day.
              </p>
            </div>

            <div className={styles.card}>
              <h2>Our methods</h2>
              <p>
                We believe cleaning should reward quality, not time spent.
                That’s why we use flat-rate pricing instead of hourly billing.
                Our focus is efficiency, effectiveness, and consistent
                standards — not stretching the clock.
              </p>
              <p>
                You’re paying for results. Every visit is structured to deliver
                the same high-quality outcome, no matter how long it takes
                behind the scenes.
              </p>
            </div>
          </section>

          {/* SUSTAINABILITY */}
          <section className={styles.sustain}>
            <div className={styles.sustainInner}>
              <div className={styles.sustainMedia}>
                <div className={styles.sustainImageWrap}>
                  <Image
                    src="/images/environment.webp"
                    alt="Environmental sustainability"
                    fill
                    sizes="(max-width: 900px) 100vw, 420px"
                    className={styles.sustainImage}
                  />
                </div>
              </div>

              <div className={styles.sustainText}>
                <h2>Environmental Sustainability</h2>
                <p>
                  We prioritize low-toxicity, biodegradable products and reusable
                  materials to reduce chemical waste and environmental impact.
                  Clean homes shouldn’t come at the cost of a dirty planet.
                </p>

                <ul className={styles.bullets}>
                  <li>Reusable microfiber system to reduce disposable waste</li>
                  <li>Thoughtful product selection for homes, pets, and kids</li>
                  <li>Concentrates when possible to cut packaging and transport</li>
                </ul>

            </div>
            </div>
          </section>

          

          <CTA
            title="Ready when you are."
            text="Reserve your spot now — we’ll confirm scope, add-ons, and access details after booking."
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

