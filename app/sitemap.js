export default function sitemap() {
  return [
    {
      url: "https://maramapropertycare.es",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: "https://maramapropertycare.es",
          es: "https://maramapropertycare.es/es",
          cs: "https://maramapropertycare.es/cz",
        },
      },
    },
    {
      url: "https://maramapropertycare.es/es",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://maramapropertycare.es/cz",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://maramapropertycare.es/report.html",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://maramapropertycare.es/legal.html",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
