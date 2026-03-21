import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://bookstarshine.com/#localbusiness",

    name: "Starshine Cleaning",
    url: "https://bookstarshine.com/",
    logo: "https://bookstarshine.com/images/logo.webp",
    image: "https://bookstarshine.com/images/kitchen.webp",

    description:
      "Starshine Cleaning provides residential and commercial cleaning services in Park City, Utah including deep cleaning, recurring service, vacation rental turnovers, and post-construction cleaning.",

    telephone: "+1-435-709-5071",
    email: "bookstarshine@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Park City",
      addressRegion: "UT",
      postalCode: "84060",
      addressCountry: "US",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Park City",
      },
      {
        "@type": "AdministrativeArea",
        name: "Summit County",
      },
      {
        "@type": "State",
        name: "Utah",
      },
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vacation Rental Turnovers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Post-Construction Cleaning",
          },
        },
      ],
    },

    sameAs: [
      "https://linkedin.com/company/starshine-cleaning",
      "https://www.instagram.com/book.starshine/",
      "https://www.facebook.com/profile.php?id=61587684502741",
    ]
    
  };

  return (
    <div className="site">
      {/* FAVICONS / PWA */}
     <Head>
  {/* Primary favicon */}
  <link rel="icon" href="/favicon.ico" sizes="any" />

  {/* PNG favicons (important for Google + modern browsers) */}
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />

  {/* Apple iOS */}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

  {/* PWA manifest */}
  <link rel="manifest" href="/site.webmanifest" />

  {/* Theme color */}
  <meta name="theme-color" content="#0f3d3e" />
</Head>

      {/* GLOBAL LOCAL BUSINESS SCHEMA */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <Header />

      <main className="content">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}