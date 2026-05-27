import MaramaPage from "../MaramaPage";

export const metadata = {
  title: "Marama | Správa nemovitostí a úschova klíčů — Jávea, Moraira a Dénia",
  description:
    "Péče o nemovitosti pro majitele vil a Airbnb hostitele v Jávea, Moraira a Dénia. Měsíční inspekce, ochrana před squattery, služba check-in — česky, anglicky a španělsky.",
  keywords: [
    "správa nemovitostí Jávea", "úschova klíčů Moraira",
    "inspekce vily Dénia", "péče o nemovitosti Costa Blanca",
    "ochrana před okupas Španělsko", "check-in Airbnb Dénia",
    "správa dovolenkového pronájmu Dénia", "majitelé nemovitostí v zahraničí Costa Blanca",
    "kontrola vily Jávea po bouřce", "správa vily Jávea pro majitele v ČR",
    "anti okupa služby Costa Blanca", "správa nemovitostí moraira okupas",
    "zabezpečení domu proti squatterům Španělsko",
    "kontrola domu Dénia po bouři", "správa prázdné vily Jávea",
    "správa domu Moraira bez přirážek za řemeslníky",
    "kontrola nemovitosti Dénia z Česka", "ochrana před okupas Costa Blanca",
    "správa vily Španělsko česky", "klíčový správce Jávea",
  ],
  alternates: {
    canonical: "https://maramapropertycare.es/cz",
    languages: {
      "en":        "https://maramapropertycare.es",
      "es":        "https://maramapropertycare.es/es",
      "cs":        "https://maramapropertycare.es/cz",
      "nl":        "https://maramapropertycare.es",
      "de":        "https://maramapropertycare.es",
      "x-default": "https://maramapropertycare.es",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Marama | Správa nemovitostí a úschova klíčů — Jávea, Moraira a Dénia",
    description:
      "Péče o nemovitosti pro majitele vil a Airbnb hostitele v Jávea, Moraira a Dénia. Měsíční inspekce, ochrana před squattery, služba check-in — česky, anglicky a španělsky.",
    url: "https://maramapropertycare.es/cz",
    siteName: "Marama Property Care",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "https://maramapropertycare.es/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marama Property Care — Jávea, Moraira a Dénia",
      },
    ],
  },
};

export default function HomeCZ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marama Property Care",
    "description":
      "Péče o nemovitosti pro majitele vil a Airbnb hostitele v Jávea, Moraira a Dénia. Měsíční inspekce, ochrana před squattery, služba check-in — česky, anglicky a španělsky.",
    "url": "https://maramapropertycare.es/cz",
    "email": "hola@maramapropertycare.es",
    "telephone": "+34643627516",
    "image": "https://maramapropertycare.es/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dénia",
      "postalCode": "03700",
      "addressRegion": "Alicante",
      "addressCountry": "ES"
    },
    "areaServed": [
      { "@type": "City", "name": "Jávea" },
      { "@type": "City", "name": "Moraira" },
      { "@type": "City", "name": "Dénia" },
      { "@type": "Place", "name": "Costa Blanca, Španělsko" }
    ],
    "serviceType": [
      "Správa nemovitostí", "Péče o nemovitosti v době nepřítomnosti",
      "Úschova klíčů", "Inspekce nemovitostí",
      "Administrativní asistence", "Videodokumentace proti squatterům",
      "Služba check-in pro dovolenkové pronájmy",
      "Check-in Airbnb Dénia", "Služba check-out",
      "Reakce na bouřkové škody", "Koordinace řemeslníků"
    ],
    "availableLanguage": [
      { "@type": "Language", "name": "Czech" },
      { "@type": "Language", "name": "English" },
      { "@type": "Language", "name": "Spanish" }
    ],
    "priceRange": "€€",
    "sameAs": []
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <MaramaPage defaultLang="CZ" />
    </>
  );
}
