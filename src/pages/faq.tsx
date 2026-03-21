import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/FAQ.module.css";
import CTA from "@/components/CTA";

const FAQS = [
  // ✅ NEW (internal linking): booking question with UI link
  {
    q: "How do I book a cleaning?",
    a: "You can book online in under a minute. After you submit your request, we’ll confirm scope, access details, and any add-ons.",
    // UI-only version with internal link (schema stays plain text)
    aNode: (
      <>
        You can book online in under a minute on our{" "}
        <Link href="/book">booking page</Link>. After you submit your request,
        we’ll confirm scope, access details, and any add-ons.
      </>
    ),
  },

  // ✅ NEW (internal linking): services page
  {
    q: "Where can I view all your services?",
    a: "You can view residential, commercial, vacation rental, and post-construction options on our Services page.",
    aNode: (
      <>
        You can view residential, commercial, vacation rental, and
        post-construction options on our{" "}
        <Link href="/services">Services page</Link>.
      </>
    ),
  },

  // ✅ NEW (internal linking): about page
  {
    q: "What is your philosophy or standard of care?",
    a: "We’re locally owned and focused on consistent results, respectful care, and clear communication. Learn more on our About page.",
    aNode: (
      <>
        We’re locally owned and focused on consistent results, respectful care,
        and clear communication. Learn more on our{" "}
        <Link href="/about">About page</Link>.
      </>
    ),
  },

  // --- your original FAQs below (UNCHANGED) ---
  {
    q: "Do I need to be home during the clean?",
    a: "No. Many Park City clients provide entry instructions (lockbox, keypad, or meet-at-door). We confirm access details after booking.",
  },
  {
    q: "What’s included in a Standard Clean vs a Deep Clean?",
    a: "A Standard Clean focuses on the most impactful areas of your home. Deep Clean adds detail time for buildup areas and edges (baseboards, corners, deeper kitchen and bath detail). For a full overview of our Park City cleaning services, see the Scope page.",
  },
  {
    q: "How is pricing determined?",
    a: "Pricing is flat-rate based on service type and expected scope—not hourly—so your total remains clear and predictable.",
  },
  {
    q: "Will the first clean take longer?",
    a: "Often, yes. Initial visits may require additional detail time. Once maintained, recurring house cleaning visits become faster and more consistent.",
  },
  {
    q: "Do you bring supplies and equipment?",
    a: "Yes. For our Park City house cleaning services, we bring professional supplies and equipment unless you request specific products.",
  },
  {
    q: "Are your products safe for kids and pets?",
    a: "We prioritize low-toxicity, home-friendly products. Let us know about sensitivities and we’ll adjust accordingly.",
  },
  {
    q: "How do you handle keys and access?",
    a: "Access details are confirmed after booking and handled carefully. Only the assigned cleaner receives necessary information.",
  },
  {
    q: "How long will the cleaning take?",
    a: "Timing depends on home size, condition, and add-ons. We confirm expectations after booking.",
  },
  {
    q: "Can I add laundry and plant care?",
    a: "Yes—if machines are present for laundry and scheduling allows.",
  },
  {
    q: "Will I get the same cleaner each visit?",
    a: "We aim for consistency whenever possible so cleaners learn your home and preferences.",
  },
  {
    q: "What if something was missed?",
    a: "Tell us within 24 hours and we’ll make it right.",
  },
  {
    q: "Do you also clean offices, rentals, or post-construction spaces?",
    a: "Yes. We offer commercial cleaning, vacation rental turnovers, and post-construction cleaning in Park City.",
  },
  {
    q: "What if I want something unusual?",
    a: "Custom requests may be possible depending on timing and scope.",
  },
  {
    q: "What’s your cancellation / reschedule policy?",
    a: "Rescheduling with reasonable notice is easy. Same-day cancellations may incur a partial fee.",
  },
  {
    q: "Pets?",
    a: "Pets are fine. Please secure anxious animals and share anything important beforehand.",
  },
  {
    q: "Do you do recurring service?",
    a: "Yes. Recurring clients receive priority scheduling and the best long-term results.",
  },
  {
    q: "What areas do you service?",
    a: "Our primary focus is Park City, Utah, with select Summit County locations depending on availability.",
  },
];

export default function FAQPage() {
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
        name: "FAQ",
        item: "https://bookstarshine.com/faq",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://bookstarshine.com/faq#webpage",
    name: "FAQ | Starshine Cleaning (Park City, UT)",
    url: "https://bookstarshine.com/faq",
    description:
      "FAQ for Starshine Cleaning in Park City, Utah — answers about house cleaning services, deep cleans, scheduling, supplies, add-ons, pets, pricing, and more.",
    isPartOf: {
      "@type": "WebSite",
      name: "Starshine Cleaning",
      url: "https://bookstarshine.com/",
    },
    about: { "@id": "https://bookstarshine.com/#localbusiness" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://bookstarshine.com/faq#faqpage",
    url: "https://bookstarshine.com/faq",
    name: "FAQ | Starshine Cleaning (Park City, UT)",
    about: { "@id": "https://bookstarshine.com/#localbusiness" },

    // IMPORTANT: schema answers must be plain text, not JSX/HTML
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>FAQ | Starshine Cleaning (Park City, UT)</title>

        <meta
          name="description"
          content="FAQ for Starshine Cleaning in Park City, Utah — answers about house cleaning services, deep cleans, scheduling, supplies, add-ons, pets, pricing, and more."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="FAQ | Starshine Cleaning (Park City, UT)"
        />
        <meta
          property="og:description"
          content="Answers to common questions about Starshine Cleaning in Park City, Utah."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bookstarshine.com/faq" />
        <meta
          property="og:image"
          content="https://bookstarshine.com/images/kitchen.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FAQ | Starshine Cleaning (Park City, UT)"
        />
        <meta
          name="twitter:description"
          content="Answers to common questions about Starshine Cleaning services in Park City, Utah."
        />
        <meta
          name="twitter:image"
          content="https://bookstarshine.com/images/kitchen.webp"
        />

        {/* JSON-LD Structured Data (in Head; no next/script) */}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className={styles.page}>
        <main className={styles.container}>
          <header className={styles.hero}>
            <div className={styles.kicker}>Frequently Asked Questions</div>

            <h1 className={styles.h1}>We have the answers!</h1>

            <p className={styles.subhead}>
              Starshine Cleaning provides residential and commercial cleaning
              services in Park City, Utah, including deep cleans, recurring
              service, vacation rental turnovers, and post-construction
              cleaning.
            </p>
            <p className={styles.subhead}>
              Questions about our Park City cleaning service? If you don’t see
              your question here, book and leave a note — we’ll follow up
              promptly.
            </p>
          </header>

          <section className={styles.section}>
            <div className={styles.faqList}>
              {FAQS.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary className={styles.question}>
                    <span className={styles.qText}>{item.q}</span>
                    <span className={styles.chev} aria-hidden="true">
                      ›
                    </span>
                  </summary>

                  <div className={styles.answer}>
                    {"aNode" in item && item.aNode ? item.aNode : item.a}
                  </div>
                </details>
              ))}
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