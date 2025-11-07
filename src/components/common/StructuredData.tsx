import { BRAND_NAME, SITE_URL, CONTACT_EMAIL, ESTABLISHED_YEAR } from "@/utils/constants";

interface OrganizationSchemaProps {
  logo?: string;
  socialProfiles?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export function OrganizationSchema({ logo, socialProfiles }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: logo || `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
      width: 1200,
      height: 630,
    },
    image: logo || `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
    email: CONTACT_EMAIL,
    foundingDate: `${ESTABLISHED_YEAR}-01-01`,
    foundingLocation: {
      "@type": "Place",
      name: "Global",
    },
    sameAs: [
      socialProfiles?.twitter,
      socialProfiles?.facebook,
      socialProfiles?.linkedin,
      socialProfiles?.instagram,
    ].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: CONTACT_EMAIL,
        contactType: "Customer Service",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    description: `${BRAND_NAME} delivers cutting-edge IT and software solutions including AI, machine learning, cloud computing, NLP, and comprehensive technology services.`,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50-200",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "Cybersecurity",
      "Data Analytics",
      "Natural Language Processing",
      "IT Consulting",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
    image?: string;
    jobTitle?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
  };
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
}: ArticleSchemaProps) {
  const authorSchema = {
    "@type": "Person",
    name: author.name,
    ...(author.url && { url: author.url }),
    ...(author.image && { image: author.image }),
    ...(author.jobTitle && { jobTitle: author.jobTitle }),
    ...(author.url && {
      sameAs: author.url,
    }),
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? (Array.isArray(image) ? image : [image]) : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    author: authorSchema,
    publisher: publisher
      ? {
          "@type": "Organization",
          name: publisher.name,
          logo: publisher.logo
            ? {
                "@type": "ImageObject",
                url: publisher.logo,
                width: 1200,
                height: 630,
              }
            : undefined,
        }
      : {
          "@type": "Organization",
          name: BRAND_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
            width: 1200,
            height: 630,
          },
        },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog`,
    },
    articleSection: "Technology",
    inLanguage: "en-US",
    wordCount: description?.split(" ").length || 0,
    keywords: title.split(" ").concat(description?.split(" ") || []).slice(0, 10).join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
    </>
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed?: string;
  serviceType?: string;
}

export function ServiceSchema({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider.name,
      url: provider.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
      },
    },
    ...(areaServed && { 
      areaServed: {
        "@type": "Place",
        name: areaServed,
      }
    }),
    ...(serviceType && { serviceType }),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQPageSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ContactPageSchemaProps {
  email: string;
  url: string;
}

export function ContactPageSchema({ email }: ContactPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
      email: email,
      contactPoint: {
        "@type": "ContactPoint",
        email: email,
        contactType: "Customer Service",
        availableLanguage: "English",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface AboutPageSchemaProps {
  description?: string;
  foundingDate?: string;
}

export function AboutPageSchema({ description, foundingDate }: AboutPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
      },
      ...(description && { description }),
      ...(foundingDate && { foundingDate }),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface AggregateRatingSchemaProps {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export function AggregateRatingSchema({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: AggregateRatingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue,
    reviewCount,
    bestRating,
    worstRating,
    itemReviewed: {
      "@type": "Organization",
      name: BRAND_NAME,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ItemListSchemaProps {
  name: string;
  description?: string;
  items: Array<{
    name: string;
    description?: string;
    url?: string;
  }>;
}

export function ItemListSchema({ name, description, items }: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    ...(description && { description }),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.description && { description: item.description }),
      ...(item.url && { item: item.url }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
  };
}

export function SoftwareApplicationSchema({
  name,
  description,
  applicationCategory,
  operatingSystem,
  offers,
}: SoftwareApplicationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: applicationCategory || "BusinessApplication",
    ...(operatingSystem && { operatingSystem }),
    provider: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    },
    ...(offers && {
      offers: {
        "@type": "Offer",
        ...(offers.price && { price: offers.price }),
        ...(offers.priceCurrency && { priceCurrency: offers.priceCurrency }),
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PersonSchemaProps {
  name: string;
  jobTitle?: string;
  image?: string;
  url?: string;
  email?: string;
  sameAs?: string[];
  worksFor?: {
    name: string;
    url?: string;
  };
}

export function PersonSchema({
  name,
  jobTitle,
  image,
  url,
  email,
  sameAs,
  worksFor,
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    ...(jobTitle && { jobTitle }),
    ...(image && { image }),
    ...(url && { url }),
    ...(email && { email }),
    ...(sameAs && sameAs.length > 0 && { sameAs }),
    ...(worksFor && {
      worksFor: {
        "@type": "Organization",
        name: worksFor.name,
        ...(worksFor.url && { url: worksFor.url }),
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  name: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  telephone?: string;
  email?: string;
  url: string;
  priceRange?: string;
  openingHours?: string[];
  image?: string;
  logo?: string;
}

export function LocalBusinessSchema({
  name,
  description,
  address,
  telephone,
  email,
  url,
  priceRange,
  openingHours,
  image,
  logo,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    ...(description && { description }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        ...(address.streetAddress && { streetAddress: address.streetAddress }),
        ...(address.addressLocality && { addressLocality: address.addressLocality }),
        ...(address.addressRegion && { addressRegion: address.addressRegion }),
        ...(address.postalCode && { postalCode: address.postalCode }),
        ...(address.addressCountry && { addressCountry: address.addressCountry }),
      },
    }),
    ...(telephone && { telephone }),
    ...(email && { email }),
    url,
    ...(priceRange && { priceRange }),
    ...(openingHours && openingHours.length > 0 && { openingHours }),
    ...(image && { image }),
    ...(logo && {
      logo: {
        "@type": "ImageObject",
        url: logo,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ReviewSchemaProps {
  itemReviewed: {
    "@type": string;
    name: string;
    url?: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
  author: {
    name: string;
    type?: string;
  };
  reviewBody?: string;
  datePublished?: string;
}

export function ReviewSchema({
  itemReviewed,
  reviewRating,
  author,
  reviewBody,
  datePublished,
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": itemReviewed["@type"],
      name: itemReviewed.name,
      ...(itemReviewed.url && { url: itemReviewed.url }),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating || 5,
      worstRating: reviewRating.worstRating || 1,
    },
    author: {
      "@type": author.type || "Person",
      name: author.name,
    },
    ...(reviewBody && { reviewBody }),
    ...(datePublished && { datePublished }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string;
}

export function VideoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
}: VideoObjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    ...(duration && { duration }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface HowToSchemaProps {
  name: string;
  description: string;
  step: Array<{
    "@type": string;
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
  totalTime?: string;
  tool?: Array<{
    "@type": string;
    name: string;
  }>;
  supply?: Array<{
    "@type": string;
    name: string;
  }>;
}

export function HowToSchema({
  name,
  description,
  step,
  totalTime,
  tool,
  supply,
}: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: step.map((s) => ({
      "@type": s["@type"],
      name: s.name,
      text: s.text,
      ...(s.image && { image: s.image }),
      ...(s.url && { url: s.url }),
    })),
    ...(totalTime && { totalTime }),
    ...(tool && tool.length > 0 && { tool }),
    ...(supply && supply.length > 0 && { supply }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CollectionPageSchemaProps {
  name: string;
  description?: string;
  url: string;
  mainEntity?: {
    "@type": string;
    numberOfItems?: number;
    itemListElement?: Array<{
      "@type": string;
      position: number;
      name: string;
      url: string;
    }>;
  };
}

export function CollectionPageSchema({
  name,
  description,
  url,
  mainEntity,
}: CollectionPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    ...(description && { description }),
    url,
    ...(mainEntity && { mainEntity }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


