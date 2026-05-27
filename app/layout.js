import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

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
    "key holding Costa Blanca", "villa management Moraira",
    "property inspection Costa Blanca photo report",
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
  verification: {
    google: "JAe2JdAs-QoKG1Ec9Jnq8Cg7ayvD_ggN56menf4owiE",
  },
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
  openGraph: {
    title: "Marama | Property Care & Key Holding — Jávea, Moraira & Dénia",
    description:
      "Trusted property care for absentee villa owners and Airbnb hosts in Jávea, Moraira & Dénia. Monthly inspections, anti-okupa video evidence, check-in & check-out — in English, Czech and Spanish.",
    url: "https://maramapropertycare.es",
    siteName: "Marama Property Care",
    locale: "en_GB",
    alternateLocale: ["es_ES", "cs_CZ", "nl_NL", "de_DE"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
