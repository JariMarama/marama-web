import MaramaPage from "../MaramaPage";

export const metadata = {
  title: "Marama | Gestión de propiedades y custodia de llaves — Jávea, Moraira y Dénia",
  description:
    "Cuidado profesional de propiedades para no residentes y anfitriones de Airbnb en Jávea, Moraira y Dénia. Inspecciones mensuales, protección anti-okupa y servicio de check-in — en español, inglés y checo.",
  keywords: [
    "gestión de propiedades Jávea", "custodia de llaves Moraira",
    "inspección de villas Dénia", "cuidado de propiedades Costa Blanca",
    "protección anti-okupa España", "check-in Airbnb Dénia",
    "gestión de alquiler vacacional Dénia", "propietarios no residentes Costa Blanca",
    "vigilancia de viviendas Jávea", "servicio de llaves Moraira",
    "administración de fincas Dénia", "gestión de villas Costa Blanca",
    "control de propiedades Jávea tormenta", "gestor de apartamentos turísticos Dénia",
    "contacto de emergencia vivienda Jávea", "vigilante de casa Moraira",
    "mantenimiento villa Jávea", "administración propiedad vacacional Moraira",
  ],
  alternates: {
    canonical: "https://maramapropertycare.es/es",
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
    title: "Marama | Gestión de propiedades y custodia de llaves — Jávea, Moraira y Dénia",
    description:
      "Cuidado profesional de propiedades para no residentes y anfitriones de Airbnb en Jávea, Moraira y Dénia. Inspecciones mensuales, protección anti-okupa y servicio de check-in.",
    url: "https://maramapropertycare.es/es",
    siteName: "Marama Property Care",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://maramapropertycare.es/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marama Property Care — Jávea, Moraira y Dénia",
      },
    ],
  },
};

export default function HomeES() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marama Property Care",
    "description":
      "Cuidado profesional de propiedades para no residentes y anfitriones de Airbnb en Jávea, Moraira y Dénia. Inspecciones mensuales, protección anti-okupa y servicio de check-in.",
    "url": "https://maramapropertycare.es/es",
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
      { "@type": "Place", "name": "Costa Blanca, España" }
    ],
    "serviceType": [
      "Gestión de propiedades", "Cuidado de propiedades en ausencia",
      "Custodia de llaves", "Inspección de propiedades",
      "Escudo administrativo", "Documentación anti-okupa en vídeo",
      "Servicio de check-in para alquiler vacacional",
      "Check-in Airbnb Dénia", "Servicio de check-out",
      "Respuesta ante tormentas", "Coordinación de contratistas"
    ],
    "availableLanguage": [
      { "@type": "Language", "name": "Spanish" },
      { "@type": "Language", "name": "English" },
      { "@type": "Language", "name": "Czech" }
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
      <MaramaPage defaultLang="ES" />
    </>
  );
}
