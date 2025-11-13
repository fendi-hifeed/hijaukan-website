import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "../i18n/LocaleProvider";
import { headers, cookies } from "next/headers";
import Script from "next/script";

// Prefer domain from env for canonical/OG URLs
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hijaukan.co";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const saved = cookieStore.get("locale")?.value as "en" | "id" | undefined;
  const h = await headers();
  const country = (h.get("x-vercel-ip-country") || h.get("x-country") || "").toUpperCase();
  const initialLocale: "en" | "id" = saved ?? (country === "ID" ? "id" : "en");

  const enDesc =
    "Support KitaHIJAUkan's land restoration campaign. Help restore degraded land, plant trees with care, and build a greener, climate-resilient Indonesia.";
  const idDesc =
    "Dukung kampanye restorasi lahan KitaHIJAUkan. Bantu pulihkan lahan terdegradasi, tanam pohon dengan perawatan, dan wujudkan Indonesia yang lebih hijau dan tangguh iklim.";
  const description = initialLocale === "id" ? idDesc : enDesc;
  const ogLocale = initialLocale === "id" ? "id_ID" : "en_US";

  return {
  title: "KitaHIJAUkan - Restorasi Lahan Berkelanjutan",
    description,
    themeColor: "#00AB7E",
  metadataBase: new URL(siteUrl),
  applicationName: "KitaHIJAUkan",
    keywords: [
      "HIJAUkan",
      "restorasi lahan",
      "reforestasi",
      "tanam pohon",
      "kampanye donasi",
      "lingkungan berkelanjutan",
      "restoration",
      "reforestation",
      "tree planting",
      "Indonesia hijau",
    ],
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      url: "/",
  siteName: "KitaHIJAUkan",
  title: "KitaHIJAUkan - Restorasi Lahan Berkelanjutan",
      description,
      locale: ogLocale,
      images: [
        {
          url: "/hijaukan-cattle.jpg",
          width: 1200,
          height: 630,
          alt: "KitaHIJAUkan - Land Restoration Campaign",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
  site: "@hijaukan",
  title: "KitaHIJAUkan - Restorasi Lahan Berkelanjutan",
      description,
      images: [
        {
          url: "/hijaukan-cattle.jpg",
          alt: "KitaHIJAUkan - Land Restoration Campaign",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    manifest: "/manifest.webmanifest",
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Baca preferensi dari cookie (jika ada) atau deteksi negara dari header Vercel.
  const cookieStore = await cookies();
  const saved = cookieStore.get("locale")?.value as "en" | "id" | undefined;
  const h = await headers();
  const country = (h.get("x-vercel-ip-country") || h.get("x-country") || "").toUpperCase();
  const initialLocale: "en" | "id" = saved ?? (country === "ID" ? "id" : "en");

  return (
    <html lang={initialLocale} className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  {/* Canonical + hreflang for search engines */}
  <link rel="canonical" href={siteUrl} />
  <link rel="alternate" hrefLang="id" href={`${siteUrl}/?hl=id`} />
  <link rel="alternate" hrefLang="en" href={`${siteUrl}/?hl=en`} />
  <link rel="alternate" hrefLang="x-default" href={siteUrl} />

  {/* JSON-LD Structured Data */}
    <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "KitaHIJAUkan - Yayasan Langkah Restorasi Bumi",
            url: siteUrl,
            logo: `${siteUrl}/hijaukan_logo.png`,
          sameAs: ["https://instagram.com/kitahijaukan"],
        })}</Script>
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "KitaHIJAUkan",
          url: siteUrl,
          inLanguage: initialLocale,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}</Script>
      </head>
      <body className="bg-white text-gray-800 font-sans overflow-x-hidden">
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">{`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?"&l="+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PBF5GK7K');
        `}</Script>
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FLJH7FKJ1D" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', 'G-FLJH7FKJ1D');
        `}</Script>
        {/* End Google tag (gtag.js) */}

        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBF5GK7K" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        <LocaleProvider initialLocale={initialLocale}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
