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
    "property care Jávea", "key holding Moraira", "villa inspection Dénia",
    "absentee property management Costa Blanca", "anti-okupa protection Spain",
    "holiday rental check-in Dénia", "Airbnb check-in Dénia",
    "storm damage response Jávea", "Costa Blanca property management",
    "key holding Costa Blanca", "villa management Moraira",
    "sleutelbeheer javea", "sleutelbeheer moraira", "sleutelbeheer denia",
    "beheer vakantiehuis javea", "woningbeheer moraira",
    "hausverwaltung javea", "hausverwaltung moraira", "hausverwaltung denia",
    "schlüsselverwaltung javea", "hausbetreuung denia",
    "správa nemovitostí Jávea", "úschova klíčů Moraira",
    "ochrana před okupas Costa Blanca", "kontrola vily Jávea",
  ],
  alternates: {
    canonical: "https://maramapropertycare.es",
    languages: {
      "en":        "https://maramapropertycare.es",
      "es":        "https://maramapropertycare.es/es",
      "cs":        "https://maramapropertycare.es/cz",
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
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
