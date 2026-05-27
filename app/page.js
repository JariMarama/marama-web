import MaramaPage from "./MaramaPage";

export const metadata = {
  title: "Marama | Property Care & Key Holding — Jávea, Moraira & Dénia",
  description:
    "Trusted property care for absentee villa owners and Airbnb hosts in Jávea, Moraira & Dénia. Monthly inspections, anti-okupa video evidence, check-in & check-out — in English, Czech and Spanish.",
  keywords: [
    // English
    "property care Jávea", "key holding Moraira", "villa inspection Dénia",
    "absentee property management Costa Blanca", "anti-okupa protection Spain",
    "holiday rental check-in Dénia", "Airbnb check-in Dénia",
    "storm damage response Jávea", "Costa Blanca property management",
    "who looks after empty villas in javea",
    "how to protect my spanish home from squatters",
    "trusted villa inspection companies costa blanca",
    "how to check on my house in denia from uk",
    "preventing okupas in my holiday home spain",
    "costa blanca property management with photo reports",
    "emergency property contacts for owners in javea",
    "trusted local eyes for my villa in denia",
    // Dutch
    "sleutelbeheer javea", "sleutelbeheer moraira", "sleutelbeheer denia",
    "beheer vakantiehuis javea", "property management costa blanca nederlands",
    "woningbeheer moraira", "sleutelservice denia",
    "huiscontrole javea na storm", "anti krakers spanje costa blanca",
    "vakantiewoning beheer moraira", "woningtoezicht javea",
    "sleutelbeheerder denia airbnb", "onderhoud villa javea",
    "controle leegstaande woning spanje", "okupa bescherming costa blanca",
    "sleutelbeheer costa blanca noord", "villa beheer moraira",
    "huis oppas javea spanje", "woningbeheerder denia",
    "calamiteiten service javea",
    // German
    "hausverwaltung javea", "hausverwaltung moraira", "hausverwaltung denia",
    "schlüsselverwaltung javea", "schlüsselhalter moraira",
    "hausbetreuung denia", "ferienhaus betreuung javea",
    "villa management costa blanca deutsch", "hauspflege moraira spanien",
    "kontrolle nach unwetter javea", "besetzerschutz spanien immobilien",
    "schlüsselservice denia airbnb", "hauswächter moraira",
    "objektbetreuung javea", "leerstehende finca betreuung denia",
    "anti okupa schutz costa blanca", "immobilienbetreuung moraira",
    "ferienimmobilie verwalter javea", "notfallkontakt haus denia",
    "villa schlüsselverwaltung moraira",
    // Czech & Slovak
    "ochrana před okupas costa blanca", "kontrola vily jávea po bouřce",
    "správa nemovitostí moraira okupas",
    "zabezpečení domu proti squatterům španělsko",
    "kontrola domu denia po bouři", "správa vily jávea pro majitele v čr",
    "anti okupa služby costa blanca",
    "správa domu moraira bez přirážek za řemeslníky",
    "kontrola nemovitosti denia z česka", "správa prázdné vily jávea",
  ],
  alternates: {
    canonical: "https://maramapropertycare.es",
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
    title: "Marama | Property Care & Key Holding — Jávea, Moraira & Dénia",
    description:
      "Trusted property care for absentee villa owners and Airbnb hosts in Jávea, Moraira & Dénia. Monthly inspections, anti-okupa video evidence, check-in & check-out — in English, Czech and Spanish.",
    url: "https://maramapropertycare.es",
    siteName: "Marama Property Care",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maramapropertycare.es/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marama Property Care — Jávea, Moraira & Dénia",
      },
    ],
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marama Property Care",
    "description":
      "Trusted property care for absentee villa owners and Airbnb hosts in Jávea, Moraira & Dénia. Monthly inspections, anti-okupa video evidence, check-in & check-out — in English, Czech and Spanish.",
    "url": "https://maramapropertycare.es",
    "email": "hola@maramapropertycare.es",
    "telephone": "+34643627516",
    "image": "https://maramapropertycare.es/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Sant Francesc 26",
      "addressLocality": "Dénia",
      "postalCode": "03700",
      "addressRegion": "Alicante",
      "addressCountry": "ES"
    },
    "areaServed": [
      { "@type": "City", "name": "Jávea" },
      { "@type": "City", "name": "Moraira" },
      { "@type": "City", "name": "Dénia" },
      { "@type": "Place", "name": "Costa Blanca, Spain" }
    ],
    "serviceType": [
      "Property Management", "Absentee Property Care", "Key Holding",
      "Property Inspection", "Administrative Concierge",
      "Anti-Okupa Video Documentation", "Holiday Rental Check-in Service",
      "Airbnb Check-in Dénia", "Guest Check-out Service",
      "Storm Damage Response", "Contractor Coordination",
      "sleutelbeheer", "woningbeheer", "hausverwaltung", "hausbetreuung",
      "schlüsselverwaltung", "správa nemovitostí", "kontrola vily"
    ],
    "availableLanguage": [
      { "@type": "Language", "name": "English" },
      { "@type": "Language", "name": "Spanish" },
      { "@type": "Language", "name": "Czech" }
    ],
    "keywords": "sleutelbeheer javea, sleutelbeheer moraira, sleutelbeheer denia, beheer vakantiehuis javea, woningbeheer moraira, sleutelservice denia, huiscontrole javea na storm, anti krakers spanje costa blanca, vakantiewoning beheer moraira, woningtoezicht javea, sleutelbeheerder denia airbnb, okupa bescherming costa blanca, villa beheer moraira, huis oppas javea spanje, calamiteiten service javea, hausverwaltung javea, hausverwaltung moraira, hausverwaltung denia, schlüsselverwaltung javea, schlüsselhalter moraira, hausbetreuung denia, ferienhaus betreuung javea, hauspflege moraira spanien, kontrolle nach unwetter javea, besetzerschutz spanien immobilien, schlüsselservice denia airbnb, hauswächter moraing, objektbetreuung javea, anti okupa schutz costa blanca, immobilienbetreuung moraira, ochrana před okupas costa blanca, kontrola vily jávea po bouřce, správa nemovitostí moraira, kontrola domu denia po bouři, správa vily jávea, anti okupa služby costa blanca",
    "priceRange": "€€",
    "sameAs": []
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <MaramaPage />
    </>
  );
}
