import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/common/StructuredData";
import { BRAND_NAME, SITE_URL, SOCIAL_LINKS } from "@/utils/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} - Leading IT/Software Solutions`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: `${BRAND_NAME} delivers cutting-edge IT and software solutions including AI, machine learning, cloud computing, NLP, and comprehensive technology services.`,
  keywords: "IT solutions, software development, AI, machine learning, cloud computing, NLP, web development, mobile apps, cybersecurity, enterprise solutions",
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "en": SITE_URL,
      "x-default": SITE_URL,
    },
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en"],
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} - Leading IT/Software Solutions`,
    description: `${BRAND_NAME} delivers cutting-edge IT and software solutions including AI, machine learning, cloud computing, NLP, and comprehensive technology services.`,
    images: [
      {
        url: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} Logo`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} - Leading IT/Software Solutions`,
    description: `${BRAND_NAME} delivers cutting-edge IT and software solutions including AI, machine learning, cloud computing, NLP, and comprehensive technology services.`,
    images: [`${SITE_URL}/assets/logos/OutseekLogo-01.png`],
    creator: "@outseek",
    site: "@outseek",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && {
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
      bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
    }),
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logos/favicon (1).ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#4F3F7C",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  category: "technology",
  classification: "Business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/WebSite">
      <head>
        <link rel="alternate" type="application/rss+xml" title={`${BRAND_NAME} Blog RSS Feed`} href={`${SITE_URL}/feed.xml`} />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="en-US" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="slurp" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="application-name" content={BRAND_NAME} />
        <meta name="apple-mobile-web-app-title" content={BRAND_NAME} />
        <meta name="msapplication-TileColor" content="#4F3F7C" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="generator" content="Next.js" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <link rel="preload" href="/assets/logos/OutseekLogo-01.png" as="image" type="image/png" />
        <link rel="preconnect" href={SITE_URL} />
        <link rel="prefetch" href={`${SITE_URL}/sitemap.xml`} />
        <link rel="prefetch" href={`${SITE_URL}/robots.txt`} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <OrganizationSchema
          socialProfiles={{
            twitter: SOCIAL_LINKS.twitter,
            facebook: SOCIAL_LINKS.facebook,
            instagram: SOCIAL_LINKS.instagram,
          }}
        />
        <WebSiteSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#4F3F7C] focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
