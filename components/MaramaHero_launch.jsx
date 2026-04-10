"use client";

import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// SEO — injected directly into this file, no separate helmet or folder needed
// ─────────────────────────────────────────────────────────────────────────────
function MaramaSEO({ lang }) {
  useEffect(() => {
    // Title & description per language
    const meta = {
      EN: {
        title: "Marama | Boutique Property Care on the Costa Blanca",
        desc:  "Marama provides professional absentee property care for villa owners on the Costa Blanca. Monthly inspections, administrative shield, okupa protection — in English, Czech and Spanish.",
        lang:  "en",
      },
      ES: {
        title: "Marama | Gestión boutique de propiedades en la Costa Blanca",
        desc:  "Marama ofrece cuidado profesional de propiedades para propietarios no residentes en la Costa Blanca. Inspecciones mensuales, gestión administrativa y protección anti-okupa.",
        lang:  "es",
      },
      CZ: {
        title: "Marama | Prémiová správa nemovitostí na Costa Blanca",
        desc:  "Marama poskytuje profesionální péči o nemovitosti pro majitele vil na Costa Blanca. Měsíční inspekce, administrativní asistence a ochrana před neoprávněným obsazením.",
        lang:  "cs",
      },
    };
    const m = meta[lang] || meta.EN;

    document.title = m.title;
    document.documentElement.lang = m.lang;

    const setMeta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("description", m.desc);
    setMeta("robots", "index, follow");
    setMeta("og:title", m.title, true);
    setMeta("og:description", m.desc, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://maramapropertycare.es", true);
    setMeta("og:image", "https://maramapropertycare.es/og-image.jpg", true);
    setMeta("og:locale", m.lang === "en" ? "en_GB" : m.lang === "es" ? "es_ES" : "cs_CZ", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", m.title);
    setMeta("twitter:description", m.desc);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://maramapropertycare.es";

    // JSON-LD Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Marama Property Care",
      "description": meta.EN.desc,
      "url": "https://maramapropertycare.es",
      "email": "hola@maramapropertycare.es",
      "telephone": "+34643627516",
      "image": "https://maramapropertycare.es/og-image.jpg",
      "areaServed": {
        "@type": "Place",
        "name": "Costa Blanca, Spain"
      },
      "serviceType": [
        "Property Management",
        "Absentee Property Care",
        "Key Holding",
        "Property Inspection",
        "Administrative Concierge"
      ],
      "availableLanguage": ["English", "Czech", "Spanish"],
      "priceRange": "€€",
      "sameAs": ["https://maramapropertycare.com"]
    };

    let ldScript = document.querySelector('script[data-marama-ld]');
    if (!ldScript) {
      ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      ldScript.setAttribute("data-marama-ld", "true");
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(schema);
  }, [lang]);

  return null;
}

const FONT_URL = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap";

const C = {
  forest: "#1C2B2A", slate: "#3D5C4F", sage: "#C8D8C0",
  linen:  "#F5F2EC", linMid: "#EAE7E0", linDk: "#E0DDD6",
  gold:   "#C9A96E", goldDk: "#8a6c2c",
  muted:  "#5a6b63", night:  "#2E4057",
};
const serif = "'Cormorant Garamond',Georgia,serif";
const sans  = "'DM Sans',sans-serif";

const LANGS = [
  { key:"EN", label:"English", flag:null },
  { key:"ES", label:"Español", flag:"🇪🇸" },
  { key:"CZ", label:"Čeština", flag:"🇨🇿" },
];

const WP_NUMBER = "+34643627516";
const WP_LINK   = `https://wa.me/${WP_NUMBER}`;
const EMAIL     = "hola@maramapropertycare.es";

// ─────────────────────────────────────────────────────────────────────────────
// COPY — all geography: Costa Blanca only. No Norte. No Marina Alta.
// ─────────────────────────────────────────────────────────────────────────────
const COPY = {
  EN: {
    eyebrow:"Costa Blanca · Property Care",
    h1:"Your home in Spain deserves", h2:"better than a spare key and a prayer.",
    sub:"Marama is a boutique property care service for absentee villa owners on the Costa Blanca. We visit, we document, we handle everything — so every month you know exactly what is happening at your property, whether you asked or not.",
    cta:"Talk to us on WhatsApp", ctaLink:"See a sample report",
    trust:[
      {n:"English · Czech",l:"Native languages"},
      {n:"Monthly",l:"Written photo report"},
      {n:"Costa Blanca",l:"Full coverage"},
    ],
    nav:[{t:"Services",h:"#services"},{t:"Pricing",h:"#pricing"},{t:"The Report",h:"#report"},{t:"About",h:"#about"},{t:"FAQ",h:"#faq"}],
    navCta:"WhatsApp",

    s_sub:"What we do", s_h:"One retainer.\nEverything covered.",
    s_body:"A single monthly arrangement gives you a dedicated professional on the Costa Blanca — present, attentive, and fluent in your language — so your property is never without someone who genuinely cares for it.",
    svcs:[
      {t:"Key Holding",d:"Your keys held securely, your property accessed only when needed. We coordinate every contractor visit, inspection, and emergency — so you never need to be present to make things happen.",i:"key"},
      {t:"Property Inspections",d:"A thorough monthly walk-through of your entire property, covering exterior, interior, pool and all systems. Followed by a structured photographic report, delivered promptly and clearly. No assumptions. Only evidence.",i:"clip"},
      {t:"Administrative Shield",d:"Official correspondence received at your Spanish address and forwarded promptly with a clear, plain-language explanation. Tax deadlines tracked. Gestor introductions arranged. Nothing important slips through the cracks, even from 1,500 km away.",i:"admin"},
      {t:"Arrival & Departure",d:"Arriving next week? Your home is aired, checked, and ready before you land. Leaving? We take care of the shutdown: secured, unplugged, water mains off. The kind of care that turns a house into a home.",i:"home"},
    ],
    s_lang_h:"English · Español · Čeština",
    s_lang_body:"Every conversation, every report, every urgent call is handled in your language. Not translated. Written naturally. This is not a feature. It is the foundation.",

    p_sub:"Pricing", p_h:"One retainer.\nThree levels of care.",
    p_intro:"Marama works on a fixed monthly retainer. Choose the level that fits your property and your peace of mind. No hidden fees, no call-out charges for routine matters.",
    p_tiers:[
      {name:"Essential",price:"€150",period:"/month",annual:"€1,800 / year",tag:null,
       items:["Monthly visit with written photo report","Key holding and emergency access","WhatsApp line in your language","Spanish address for official correspondence","Tax deadline tracking and gestor liaison","Monthly video record — okupa protection"]},
      {name:"Comfort",price:"€200",period:"/month",annual:"€2,400 / year",tag:"Most popular",
       items:["Everything in Essential","Storm response — pre and post Calima / Gota Fría","Smart home reboot — cameras, router, thermostats","Contractor coordination and supervision","Utility and community fee monitoring","Quarterly deep inspection report"]},
      {name:"Prestige",price:"€275",period:"/month",annual:"€3,300 / year",tag:null,
       items:["Everything in Comfort","Arrival preparation — aired, checked, stocked","Departure shutdown — secured, unplugged","Grocery welcome pack on request","Priority WhatsApp response","Annual full property condition report"]},
    ],
    p_addons_h:"Need something specific?",
    p_addons:[{t:"Storm deployment",p:"€85 / event"},{t:"Arrival preparation",p:"€65 / visit"},{t:"Contractor supervision",p:"€45 / hour"},{t:"AC deep clean",p:"From €99 / unit"}],
    p_cta:"Talk to us about your property",

    r_sub:"The Marama Report", r_h:"Not a promise.\nA record.",
    r_body:"Every visit ends with a structured photographic report, sent directly to you in your language, shortly after each visit. You see exactly what we saw: every room documented, every system checked, every concern flagged before it becomes a problem.",
    r_lang:"Available in English, Español, and Čeština.",
    r_luxury:"Property care with a paper trail. Every month, whether anything happened or not. Because knowing that everything is fine is also worth something.",
    r_feats:["Full exterior and interior photo record","Systems check covering water, electrics and AC","Condition flags with priority rating","Contractor actions logged and receipted","Delivered via WhatsApp and email"],
    r_cta:"Request a sample report",
    p_status:"Property Status", p_secure:"Secure",
    p_title:"Monthly Inspection Report", p_date:"June 2025 · Jávea, Costa Blanca",
    p_items:[
      {l:"Water Leak Check",ok:true},{l:"Alarms Tested",ok:true},{l:"Ventilation",ok:true},
      {l:"Pool — visual check",ok:true},{l:"Exterior Perimeter",ok:true},{l:"Post-storm Roof",flag:true},
    ],
    p_flag:"1 item flagged — contractor engaged",
    p_photos:"Recent Photos", p_photo_sub:"18 images captured · 14 June 2025",
    p_lbs:["Terrace","Pool","Entrance"],

    about_sub:"Who we are",
    about_h:"A small operation.\nA serious standard.",
    about_p1:"Marama was built for owners who want genuine care, not a management contract signed by someone who has never unlocked their front door. We work with a small number of properties. We know each one well.",
    about_p2:"We are the bridge between you and your other home. Between the life you live every day and the place that is always somewhere in the back of your mind. Professional enough to trust. Personal enough to call.",
    about_p3:"Every report we write, every contractor we brief, every key we hold — it is done with the knowledge that your property is not an investment vehicle. It is a place that matters.",
    about_q:'"We work across the Costa Blanca. We answer in your language. And every month, whether anything happened or not, you receive a report."',
    about_attr:"— Marama",
    about_tag1:"Costa Blanca", about_tag2:"Founded 2025", about_tag3:"Czech · English · Spanish",

    faq_sub:"Questions",
    faq_h:"Everything you need to know.",
    faq_body:"If your question isn't here, send it to us directly — by WhatsApp or email. We answer in English, Spanish, and Czech — usually within the day.",
    faqs:[
      {q:"How often are reports sent?",a:"Every calendar month, within 24 hours of the inspection visit. The report arrives by WhatsApp and email, with photographs, a condition summary, and any flagged items. You never have to ask — it simply arrives."},
      {q:"Do you handle emergency repairs?",a:"Yes. A burst pipe, a triggered alarm, a broken shutter — we attend, coordinate, and report. We maintain relationships with trusted local contractors across plumbing, electrics, glazing, and general maintenance. You are notified at every stage."},
      {q:"What is the administrative shield?",a:"We act as your physical Spanish address for official correspondence. Letters from the Agencia Tributaria, Ayuntamiento, and community of owners are received, photographed, and forwarded to you promptly with a clear, plain-language explanation. We track your Modelo 210 deadlines and maintain a trusted gestor relationship when professional handling is needed."},
      {q:"What languages do you work in?",a:"English, Spanish, and Czech natively. All reports, correspondence, and WhatsApp communication are written in whichever language you prefer. If you prefer to switch mid-conversation, so do we."},
      {q:"Does Marama handle holiday rentals?",a:"Not at this stage. Tourist rental management requires a specific licence under Valencian Community regulations, and we have chosen not to operate in that space yet. Our focus is on absentee care — the period when your property needs protecting, not generating income."},
      {q:"How do I get started?",a:"Send us a message on WhatsApp or by email. We will respond within one working day to arrange a brief call — in your language — to understand your property and what you need. No obligation and no hard sell."},
    ],

    footer_tagline:"Your home in good hands.",
    footer_desc:"Boutique property care for absentee villa owners on the Costa Blanca. Professional, documented, and available in English, Spanish, and Czech.",
    footer_contact:"Get in touch",
    footer_email:EMAIL,
    footer_wp:"WhatsApp",
    footer_wp_num:"+34 643 627 516",
    footer_links:[{t:"Services",h:"#services"},{t:"Pricing",h:"#pricing"},{t:"The Report",h:"#report"},{t:"About",h:"#about"},{t:"FAQ",h:"#faq"}],
    footer_legal:"Marama Property Care · Autónomo registered in Spain · Costa Blanca",
    footer_copy:"© 2025 Marama. All rights reserved.",
    footer_cta:"WhatsApp",
  },

  ES: {
    eyebrow:"Costa Blanca · Gestión de Propiedades",
    h1:"Su vivienda en España merece", h2:"algo más que una llave y cruzar los dedos.",
    sub:"Marama es un servicio boutique de cuidado de viviendas para propietarios que no residen habitualmente en la Costa Blanca. Visitamos, documentamos y nos encargamos de todo, para que cada mes sepa con total claridad qué ocurre en su propiedad, lo haya solicitado o no.",
    cta:"Escríbanos por WhatsApp", ctaLink:"Ver un informe de ejemplo",
    trust:[
      {n:"Español · English · Čeština",l:"Idiomas nativos"},
      {n:"Mensual",l:"Informe fotográfico"},
      {n:"Costa Blanca",l:"Cobertura completa"},
    ],
    nav:[{t:"Servicios",h:"#services"},{t:"Tarifas",h:"#pricing"},{t:"El Informe",h:"#report"},{t:"Quiénes somos",h:"#about"},{t:"Preguntas",h:"#faq"}],
    navCta:"WhatsApp",

    s_sub:"Lo que hacemos", s_h:"Una cuota mensual.\nTodo incluido.",
    s_body:"Una cuota mensual le proporciona un profesional dedicado en la Costa Blanca, presente, atento y en su idioma, para que su vivienda esté siempre atendida y en buenas manos.",
    svcs:[
      {t:"Custodia de Llaves",d:"Sus llaves siempre seguras y su vivienda accesible solo cuando es necesario. Coordinamos cada visita de profesionales, inspección o emergencia, sin necesidad de que usted esté presente.",i:"key"},
      {t:"Inspecciones de Propiedad",d:"Realizamos una revisión mensual completa de toda la vivienda, incluyendo exterior, interior, piscina y sistemas, con un informe fotográfico detallado entregado a la mayor brevedad. Sin suposiciones. Solo evidencias.",i:"clip"},
      {t:"Escudo Administrativo",d:"Recibimos su correspondencia oficial en España y se la reenviamos a la mayor brevedad con una explicación clara. Hacemos seguimiento de los plazos fiscales y le ponemos en contacto con un gestor cuando sea necesario. Para que ningún plazo se le pase, esté donde esté.",i:"admin"},
      {t:"Llegada y Salida",d:"¿Llega la próxima semana? Su vivienda estará ventilada, revisada y con todo preparado antes de su llegada. ¿Se va? Nos encargamos del cierre completo: todo asegurado, desconectado y listo hasta su regreso. El tipo de cuidado que convierte una casa en un hogar.",i:"home"},
    ],
    s_lang_h:"English · Español · Čeština",
    s_lang_body:"Cada conversación, cada informe y cada llamada de emergencia se gestionan en su idioma. Sin traducciones. Redactado de forma natural. No es un añadido. Es la base de todo.",

    p_sub:"Tarifas", p_h:"Un acuerdo mensual.\nTres niveles de atención.",
    p_intro:"Marama trabaja con una cuota mensual fija. Elija el nivel que mejor se adapte a su propiedad y a su tranquilidad. Sin costes ocultos ni cargos adicionales por gestiones habituales.",
    p_tiers:[
      {name:"Essential",price:"€150",period:"/mes",annual:"€1.800 / año",tag:null,
       items:["Visita mensual con informe fotográfico","Custodia de llaves y acceso en caso de emergencia","Línea de WhatsApp en su idioma","Domicilio en España para correspondencia oficial","Seguimiento de plazos fiscales y coordinación con su gestor","Registro mensual en vídeo como medida de protección frente a okupas"]},
      {name:"Comfort",price:"€200",period:"/mes",annual:"€2.400 / año",tag:"Más popular",
       items:["Todo lo incluido en Essential","Actuación ante Calima y Gota fría, antes y después","Revisión y reinicio de sistemas domóticos: cámaras, router y termostatos","Coordinación y supervisión de trabajos"]},
      {name:"Prestige",price:"€275",period:"/mes",annual:"€3.300 / año",tag:null,
       items:["Todo lo incluido en Comfort","Preparación antes de su llegada: ventilada, revisada y abastecida","Compra de bienvenida bajo petición","Atención prioritaria por WhatsApp"]},
    ],
    p_addons_h:"¿Necesita algo específico?",
    p_addons:[{t:"Intervención por temporal",p:"€85 / evento"},{t:"Preparación de llegada",p:"€65 / visita"},{t:"Supervisión de obras",p:"€45 / hora"},{t:"Limpieza de AC",p:"Desde €99 / unidad"}],
    p_cta:"Cuéntenos sobre su propiedad",

    r_sub:"El Informe Marama", r_h:"No es una promesa.\nEs un registro.",
    r_body:"Cada visita finaliza con un informe fotográfico estructurado, enviado directamente a usted en su idioma a la mayor brevedad. Verá exactamente lo que vemos: cada estancia documentada, cada sistema revisado y cualquier incidencia detectada antes de que se convierta en un problema.",
    r_lang:"Disponible en Español, English y Čeština.",
    r_luxury:"Cuidado de su propiedad con respaldo en cada gestión. Cada mes, haya incidencias o no, porque saber que todo está bien también tiene valor.",
    r_feats:["Registro fotográfico completo de exterior e interior","Revisión de sistemas: agua, electricidad y AC","Incidencias con valoración de prioridad","Registro y seguimiento de trabajos realizados por contratistas","Envío por WhatsApp y correo electrónico"],
    r_cta:"Solicitar informe de ejemplo",
    p_status:"Estado de la Propiedad", p_secure:"Segura",
    p_title:"Informe Mensual de Inspección", p_date:"Junio 2025 · Jávea, Costa Blanca",
    p_items:[
      {l:"Revisión de fugas de agua",ok:true},{l:"Alarmas probadas",ok:true},{l:"Ventilación",ok:true},
      {l:"Piscina: revisión visual",ok:true},{l:"Perímetro exterior",ok:true},{l:"Tejado post-tormenta",flag:true},
    ],
    p_flag:"1 incidencia — contratista en curso",
    p_photos:"Fotos Recientes", p_photo_sub:"18 imágenes · 14 junio 2025",
    p_lbs:["Terraza","Piscina","Entrada"],

    about_sub:"Quiénes somos",
    about_h:"Una estructura pequeña.\nUn estándar serio.",
    about_p1:"Marama nace para propietarios que buscan un cuidado real, no un contrato en manos de quien ni siquiera conoce su propiedad. Trabajamos con un número reducido de propiedades. Las conocemos bien.",
    about_p2:"Somos el puente entre su hogar y su otro hogar. Entre la vida que vive cada día y ese lugar que siempre está en algún rincón de su mente. Lo bastante profesionales para generar confianza. Lo bastante cercanos para que pueda llamarnos.",
    about_p3:"Cada informe que redactamos, cada contratista que coordinamos y cada llave que custodiamos se gestiona con la certeza de que su propiedad no es solo una inversión. Es un lugar que importa.",
    about_q:'"Trabajamos en toda la Costa Blanca. Respondemos en su idioma. Y cada mes recibe un informe, haya pasado algo o no. Porque saber que todo está bien también tiene valor."',
    about_attr:"— Marama",
    about_tag1:"Costa Blanca", about_tag2:"Fundada en 2025", about_tag3:"Checo · Inglés · Español",

    faq_sub:"Preguntas",
    faq_h:"Todo lo que necesita saber.",
    faq_body:"Si su pregunta no está aquí, escríbanos directamente por WhatsApp o correo electrónico. Respondemos en español, inglés y checo, normalmente en el mismo día.",
    faqs:[
      {q:"¿Con qué frecuencia se envían los informes?",a:"Cada mes, a la mayor brevedad tras la visita de inspección. El informe llega por WhatsApp y correo electrónico, con fotografías, un resumen del estado y cualquier incidencia detectada. No tiene que solicitarlo. Simplemente llega."},
      {q:"¿Gestionan reparaciones de emergencia?",a:"Sí. Una tubería rota, una alarma activada o una persiana averiada: acudimos, coordinamos y le mantenemos informado en todo momento. Trabajamos con profesionales de confianza en fontanería, electricidad, cristalería y mantenimiento general."},
      {q:"¿Qué es el escudo administrativo?",a:"Actuamos como su domicilio físico en España para la correspondencia oficial. Las cartas de la Agencia Tributaria, el Ayuntamiento y la comunidad de propietarios se reciben, se fotografían y se le envían a la mayor brevedad, acompañadas de una explicación clara y sencilla. Hacemos seguimiento de sus plazos del Modelo 210 y colaboramos con su gestor cuando se requiere gestión profesional."},
      {q:"¿En qué idiomas trabajan?",a:"Español, inglés y checo de forma nativa. Todos los informes, la correspondencia y la comunicación por WhatsApp se redactan en el idioma que prefiera."},
      {q:"¿Gestiona Marama alquileres vacacionales?",a:"Por el momento, no. La gestión de alquileres turísticos requiere una licencia específica bajo la normativa de la Comunitat Valenciana, y por ahora hemos decidido no operar en ese ámbito. Nuestro enfoque está en el cuidado de propiedades en ausencia, en ese periodo en el que su vivienda necesita protección, no generar ingresos."},
      {q:"¿Cómo empiezo?",a:"Envíenos un mensaje por WhatsApp o correo electrónico. Le responderemos en un plazo de un día laborable para concertar una breve llamada en su idioma y conocer mejor su propiedad y sus necesidades. Sin compromiso y sin presión."},
    ],

    footer_tagline:"Su vivienda en buenas manos.",
    footer_desc:"Cuidado boutique de viviendas para propietarios en la Costa Blanca. Profesional, documentado y disponible en español, inglés y checo.",
    footer_contact:"Contacto",
    footer_email:EMAIL,
    footer_wp:"WhatsApp",
    footer_wp_num:"+34 643 627 516",
    footer_links:[{t:"Servicios",h:"#services"},{t:"Tarifas",h:"#pricing"},{t:"El Informe",h:"#report"},{t:"Quiénes somos",h:"#about"},{t:"Preguntas",h:"#faq"}],
    footer_legal:"Marama Property Care · Autónomo registrado en España · Costa Blanca",
    footer_copy:"© 2025 Marama. Todos los derechos reservados.",
    footer_cta:"WhatsApp",
  },

  CZ: {
    eyebrow:"Costa Blanca · Správa nemovitostí",
    h1:"Váš dům ve Španělsku si zaslouží", h2:"víc než klíč u souseda a víru, že bude všechno v pořádku.",
    sub:"Jediný měsíční poplatek vám zajistí profesionální péči o váš dům na Costa Blanca. Vždy s někým, kdo je na místě, dává pozor a opravdu se o něj stará.",
    cta:"Napište nám na WhatsApp", ctaLink:"Zobrazit vzorovou zprávu",
    trust:[
      {n:"Čeština · English",l:"Rodné jazyky"},
      {n:"Měsíčně",l:"Fotografická zpráva"},
      {n:"Costa Blanca",l:"Celé pobřeží"},
    ],
    nav:[{t:"Služby",h:"#services"},{t:"Ceník",h:"#pricing"},{t:"Zpráva",h:"#report"},{t:"O nás",h:"#about"},{t:"Otázky",h:"#faq"}],
    navCta:"WhatsApp",

    s_sub:"Co děláme", s_h:"Jeden poplatek.\nVšechno zařízeno.",
    s_body:"Jediný měsíční poplatek vám zajistí profesionální péči o váš dům na Costa Blanca, vždy s někým, kdo je na místě, dává pozor a opravdu se o něj stará.",
    svcs:[
      {t:"Úschova klíčů",d:"Vaše klíče v bezpečí. Koordinujeme každou návštěvu řemeslníků, inspekci i naléhavou situaci — aniž byste museli být přítomni.",i:"key"},
      {t:"Inspekce domu",d:"Měsíční kompletní prohlídka — exteriér, interiér, bazén, systémy — s fotografickou zprávou zaslanou co nejdříve. Žádné dohady. Pouze fakta.",i:"clip"},
      {t:"Administrativní asistence",d:"Úřední korespondence přijata na vaší španělské adrese, předána vám co nejdříve s jasným vysvětlením. Hlídáme daňové termíny. Zajistíme kontakt na gestora. Žádný termín nezapadne 1 500 km od vás.",i:"admin"},
      {t:"Příjezd a odjezd",d:"Přijíždíte příští týden? Dům bude vyvětraný, zkontrolovaný a zásobený ještě před přistáním. Odjíždíte? Postaráme se o bezpečné uzavření.",i:"home"},
    ],
    s_lang_h:"English · Español · Čeština",
    s_lang_body:"Každý rozhovor, každá zpráva, každý naléhavý hovor ve vašem jazyce. Ne jako překlad. Jako originál. Napsáno rodilým mluvčím. To není služba. To je samozřejmost.",

    p_sub:"Ceník", p_h:"Jeden poplatek.\nTři úrovně péče o váš domov.",
    p_intro:"Marama funguje na měsíčním paušálu. Zvolte úroveň, která odpovídá vašemu domu a vaší představě o klidu. Žádné skryté poplatky, žádné příplatky za běžné úkony.",
    p_tiers:[
      {name:"Essential",price:"€150",period:"/měsíc",annual:"€1 800 / rok",tag:null,
       items:["Měsíční návštěva s fotografickou zprávou","Úschova klíčů a nouzový přístup","WhatsApp linka ve vašem jazyce","Španělská adresa pro úřední korespondenci","Sledování daňových termínů a spolupráce s gestorem","Měsíční videozáznam — ochrana před obsazením"]},
      {name:"Comfort",price:"€200",period:"/měsíc",annual:"€2 400 / rok",tag:"Nejoblíbenější",
       items:["Vše z Essential","Zásah při bouřce — před Calimou a Gota Fría i po ní","Restart chytrého domu — kamery, router, termostaty","Koordinace a dohled nad řemeslníky","Sledování plateb energií a poplatků SVJ","Čtvrtletní hloubková inspekce"]},
      {name:"Prestige",price:"€275",period:"/měsíc",annual:"€3 300 / rok",tag:null,
       items:["Vše z Comfort","Příprava domu před příjezdem — vyvětraný, zkontrolovaný, zásobený","Uzavření domu při odjezdu","Nákup na přivítání na přání","Prioritní odezva na WhatsApp","Roční komplexní zpráva o stavu nemovitosti"]},
    ],
    p_addons_h:"Potřebujete něco konkrétního?",
    p_addons:[{t:"Zásah při bouřce",p:"€85 / událost"},{t:"Příprava před příjezdem",p:"€65 / návštěva"},{t:"Dohled nad řemeslníky",p:"€45 / hod"},{t:"Čištění klimatizace",p:"Od €99 / jednotka"}],
    p_cta:"Napište nám o svém domě",

    r_sub:"Zpráva Marama", r_h:"Nejde o slib.\nJde o důkaz.",
    r_body:"Každá návštěva končí strukturovanou fotografickou zprávou, kterou obdržíte co nejdříve ve vašem jazyce. Vidíte přesně to, co jsme viděli my: každou místnost zdokumentovanou, každý systém zkontrolovaný.",
    r_lang:"Dostupné v češtině, English a Español.",
    r_luxury:"Péče o dům s důkazy. Každý měsíc, ať se děje cokoli. Protože i jistota, že je vše v pořádku, má svou hodnotu.",
    r_feats:["Kompletní fotografický záznam exteriéru i interiéru","Kontrola systémů: voda, elektřina a klimatizace","Závady s určením priority","Práce řemeslníků zdokumentované a potvrzené","Doručeno přes WhatsApp a e-mail"],
    r_cta:"Požádat o vzorovou zprávu",
    p_status:"Stav nemovitosti", p_secure:"Zabezpečena",
    p_title:"Měsíční inspekční zpráva", p_date:"Červen 2025 · Jávea, Costa Blanca",
    p_items:[
      {l:"Kontrola úniku vody",ok:true},{l:"Test poplachového systému",ok:true},{l:"Ventilace",ok:true},
      {l:"Bazén — vizuální kontrola",ok:true},{l:"Vnější obvod",ok:true},{l:"Střecha po bouřce",flag:true},
    ],
    p_flag:"1 závada — řemeslník v řízení",
    p_photos:"Nedávné fotografie", p_photo_sub:"18 snímků · 14. června 2025",
    p_lbs:["Terasa","Bazén","Vstup"],

    about_sub:"Kdo jsme",
    about_h:"Malý tým.\nVysoký standard.",
    about_p1:"Marama vznikla pro ty, kteří očekávají skutečnou péči. Ne anonymní službu. Staráme se o omezený počet domů. Každý známe.",
    about_p2:"Jsme mostem mezi vámi a vaším druhým domovem. Mezi každodenním životem a místem, které zůstává ve vaší mysli. Profesionální natolik, abyste nám důvěřovali. Osobní natolik, abyste nám zavolali.",
    about_p3:"Každá zpráva, kterou napíšeme, každý řemeslník, kterého koordinujeme, každý klíč, který převezmeme. Vše děláme s vědomím, že váš dům není investice. Je to místo, na kterém záleží.",
    about_q:'"Působíme po celé Costa Blanca. Odpovídáme ve vašem jazyce. A každý měsíc dostanete zprávu, ať se dělo něco nebo nic."',
    about_attr:"— Marama",
    about_tag1:"Costa Blanca", about_tag2:"Založeno 2025", about_tag3:"Čeština · English · Español",

    faq_sub:"Otázky",
    faq_h:"Vše, co potřebujete vědět.",
    faq_body:"Pokud tu nenajdete odpověď, napište nám přímo přes WhatsApp nebo e-mail. Odpovídáme česky, anglicky i španělsky, obvykle ještě tentýž den.",
    faqs:[
      {q:"Jak často jsou zprávy zasílány?",a:"Každý kalendářní měsíc, do 24 hodin od inspekční návštěvy. Zpráva přichází přes WhatsApp a email s fotografiemi, souhrnem stavu a všemi zaznamenanými závadami. Nemusíte se ptát — prostě přijde."},
      {q:"Zajišťujete nouzové opravy?",a:"Ano. Prasklé potrubí, spuštěný alarm, poškozená okenice — přijedeme, zkoordinujeme a nahlásíme. Spolupracujeme s prověřenými řemeslníky v oblasti instalatérství, elektřiny, zasklení a obecné údržby."},
      {q:"Co je administrativní asistence?",a:"Fungujeme jako vaše fyzická adresa ve Španělsku pro úřední korespondenci. Dopisy od Agencia Tributaria, Ayuntamiento a společenství vlastníků přijímáme, fotografujeme a předáváme vám co nejdříve s jasným vysvětlením. Sledujeme termíny Modelo 210 a udržujeme kontakt s gestorem pro případ, kdy je potřeba profesionální pomoc."},
      {q:"V jakých jazycích pracujete?",a:"Česky, anglicky a španělsky — rodilí mluvčí. Všechny zprávy, korespondence i komunikace přes WhatsApp jsou vedeny v jazyce, který preferujete."},
      {q:"Zajišťuje Marama dovolenkové pronájmy?",a:"Zatím ne. Správa turistických pronájmů vyžaduje specifickou licenci dle předpisů Valencijského společenství a v tomto prostoru jsme se zatím rozhodli nepůsobit. Naším zaměřením je péče v době nepřítomnosti."},
      {q:"Jak začít?",a:"Pošlete nám zprávu přes WhatsApp nebo email. Ozveme se do jednoho pracovního dne a domluvíme krátký hovor — ve vašem jazyce — abychom poznali váš dům a vaše potřeby. Bez závazků."},
    ],

    footer_tagline:"Váš dům v dobrých rukou.",
    footer_desc:"Prémiová péče o domy pro majitele vil na Costa Blanca. Profesionální, dokumentovaná a dostupná v češtině, angličtině a španělštině.",
    footer_contact:"Kontakt",
    footer_email:EMAIL,
    footer_wp:"WhatsApp",
    footer_wp_num:"+34 643 627 516",
    footer_links:[{t:"Služby",h:"#services"},{t:"Ceník",h:"#pricing"},{t:"Zpráva",h:"#report"},{t:"O nás",h:"#about"},{t:"Otázky",h:"#faq"}],
    footer_legal:"Marama Property Care · Autónomo registrováno ve Španělsku · Costa Blanca",
    footer_copy:"© 2025 Marama. Všechna práva vyhrazena.",
    footer_cta:"WhatsApp",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS & UTILS
// ─────────────────────────────────────────────────────────────────────────────
function useReveal(t=0.1) {
  const ref=useRef(null); const [vis,setVis]=useState(false);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVis(true);obs.disconnect();}},{threshold:t});
    obs.observe(el); return()=>obs.disconnect();
  },[t]);
  return [ref,vis];
}

function Ico({n,sz=20,col=C.slate}) {
  const s={stroke:col,strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round",fill:"none"};
  if(n==="key")    return <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none"><circle cx="8" cy="12" r="4" {...s}/><path d="M12 12h8M18 12v3" {...s}/></svg>;
  if(n==="clip")   return <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none"><rect x="5" y="4" width="14" height="17" rx="2" {...s}/><path d="M9 4a2 2 0 014 0M9 12h6M9 16h4" {...s}/></svg>;
  if(n==="admin")  return <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" {...s}/><path d="M3 10h18M8 5v5M16 5v5" {...s}/></svg>;
  if(n==="home")   return <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none"><path d="M3 11l9-8 9 8v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9z" {...s}/><path d="M9 21V12h6v9" {...s}/></svg>;
  if(n==="check")  return <svg width={sz} height={sz} viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke={col} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if(n==="warn")   return <svg width={sz} height={sz} viewBox="0 0 10 10" fill="none"><path d="M5 2.5v3M5 7.5v.3" stroke={col} strokeWidth="1.4" strokeLinecap="round"/></svg>;
  if(n==="secure") return <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none"><path d="M12 3L4 7v5c0 5 4 8.5 8 10 4-1.5 8-5 8-10V7L12 3z" stroke={col} strokeWidth="1.6" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke={col} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if(n==="arrow")  return <svg width={14} height={14} viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if(n==="plus")   return <svg width={14} height={14} viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke={col} strokeWidth="1.3" strokeLinecap="round"/></svg>;
  if(n==="minus")  return <svg width={14} height={14} viewBox="0 0 14 14" fill="none"><path d="M2 7h10" stroke={col} strokeWidth="1.3" strokeLinecap="round"/></svg>;
  if(n==="mail")   return <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" {...s}/><path d="M2 8l10 7 10-7" {...s}/></svg>;
  if(n==="wp")     return <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" {...s}/><path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4c-.9 0-1.7-.3-2.4-.7L7 16l.7-2.6C7.3 12.7 8 12 8 12z" {...s}/></svg>;
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGO — Property Care · Costa Blanca (no Norte)
// ─────────────────────────────────────────────────────────────────────────────
function MaramaLogo({ height=42, onDark=true }) {
  const gold = "#C9A96E";
  const text = onDark ? "#F5F2EC" : "#1C2B2A";
  const sub  = onDark ? "rgba(200,216,192,0.55)" : "rgba(61,92,79,0.55)";
  const w = height * (220/44);
  return (
    <svg width={w} height={height} viewBox="0 0 220 44" xmlns="http://www.w3.org/2000/svg"
      aria-label="Marama Property Care" role="img" style={{display:"block",flexShrink:0}}>
      <circle cx="22" cy="22" r="19" fill={gold}/>
      <circle cx="27" cy="18" r="15" fill={onDark ? "#1C2B2A" : "#F5F2EC"}/>
      <text x="19" y="28" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="600"
        fontSize="20" textAnchor="middle" fill={text} style={{userSelect:"none"}}>M</text>
      <text x="50" y="20" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="500"
        fontSize="17" letterSpacing="3.5" fill={text} style={{userSelect:"none"}}>MARAMA</text>
      <line x1="50" y1="24" x2="218" y2="24" stroke={gold} strokeWidth="0.6" opacity="0.5"/>
      <text x="50" y="35" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic"
        fontWeight="400" fontSize="10" letterSpacing="2" fill={sub}
        style={{userSelect:"none"}}>Property Care · Costa Blanca</text>
    </svg>
  );
}

function LangSwitch({lang,setLang}) {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"}}>
      <div style={{display:"flex",gap:"2px",background:"rgba(255,255,255,0.07)",borderRadius:"3px",padding:"3px"}}>
        {LANGS.map(l=>(
          <button key={l.key} onClick={()=>setLang(l.key)} style={{
            fontFamily:sans,fontSize:"11px",fontWeight:500,letterSpacing:"0.05em",
            padding:"5px 11px",borderRadius:"2px",border:"none",cursor:"pointer",
            transition:"background .2s,color .2s",whiteSpace:"nowrap",
            background:lang===l.key?C.sage:"transparent",
            color:lang===l.key?C.forest:"rgba(245,242,236,0.45)",
          }}>{l.label}</button>
        ))}
      </div>
      <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
        {LANGS.map(l=>l.flag
          ? <span key={l.key} onClick={()=>setLang(l.key)} title={l.label} style={{
              fontSize:"15px",cursor:"pointer",lineHeight:1,
              opacity:lang===l.key?1:0.28,transition:"opacity .2s,transform .15s",
              transform:lang===l.key?"scale(1.2)":"scale(1)",display:"inline-block",
            }}>{l.flag}</span>
          : <span key={l.key} onClick={()=>setLang(l.key)} style={{
              fontFamily:sans,fontSize:"10px",letterSpacing:"0.1em",cursor:"pointer",
              color:lang===l.key?C.sage:"rgba(245,242,236,0.2)",transition:"color .2s",
            }}>EN</span>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────────────────────
export default function MaramaPage() {
  const [lang,setLang]         = useState("EN");
  const [scrolled,setScrolled] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);
  const [heroVis,setHeroVis]   = useState(false);
  const [openFaq,setOpenFaq]   = useState(null);

  const [svcRef, svcVis] = useReveal(0.08);
  const [repRef, repVis] = useReveal(0.06);
  const [abtRef, abtVis] = useReveal(0.08);
  const [faqRef, faqVis] = useReveal(0.08);
  const [ftRef,  ftVis]  = useReveal(0.06);

  const c = COPY[lang];

  useEffect(()=>{
    const link=document.createElement("link");
    link.href=FONT_URL; link.rel="stylesheet";
    document.head.appendChild(link);
    const t=setTimeout(()=>setHeroVis(true),80);
    const onScroll=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",onScroll,{passive:true});
    return()=>{clearTimeout(t);window.removeEventListener("scroll",onScroll);};
  },[]);

  const fd=d=>({
    opacity:heroVis?1:0,
    transform:heroVis?"translateY(0)":"translateY(18px)",
    transition:`opacity .85s ease ${d}s,transform .85s ease ${d}s`,
  });

  const rv=(vis,delay=0,axis="Y",dist=28)=>({
    opacity:vis?1:0,
    transform:vis?"translate(0,0)":`translate${axis}(${dist}px)`,
    transition:`opacity .9s ease ${delay}s,transform .9s ease ${delay}s`,
  });

  const Divider = ({dark=false}) => (
    <div style={{width:"100%",height:"1px",background:dark?"rgba(200,216,192,0.12)":"rgba(61,92,79,0.12)"}}/>
  );

  // ── NAV ──────────────────────────────────────────────────────────────────
  const Nav = (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:50,
      transition:"background .4s,border-bottom .4s",
      background:scrolled?"rgba(28,43,42,0.94)":"transparent",
      backdropFilter:scrolled?"blur(14px)":"none",
      borderBottom:scrolled?"1px solid rgba(200,216,192,0.12)":"1px solid transparent",
    }}>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"0 2.5rem",height:"72px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="#" style={{textDecoration:"none",display:"flex",alignItems:"center",lineHeight:1}}>
          <MaramaLogo height={42} onDark={true}/>
        </a>
        <div style={{display:"flex",alignItems:"center",gap:"2rem"}} className="d-nav">
          {c.nav.map(l=>(
            <a key={l.t} href={l.h} style={{fontFamily:sans,fontSize:"13px",color:"rgba(245,242,236,0.78)",textDecoration:"none",letterSpacing:"0.04em",transition:"color .2s"}}
              onMouseEnter={e=>e.target.style.color=C.sage} onMouseLeave={e=>e.target.style.color="rgba(245,242,236,0.78)"}>{l.t}</a>
          ))}
          <LangSwitch lang={lang} setLang={setLang}/>
          <a href={WP_LINK} target="_blank" rel="noopener noreferrer"
            style={{fontFamily:sans,fontSize:"13px",fontWeight:500,color:C.forest,background:C.sage,padding:"10px 24px",borderRadius:"2px",textDecoration:"none",transition:"background .2s",whiteSpace:"nowrap"}}
            onMouseEnter={e=>e.target.style.background=C.linen} onMouseLeave={e=>e.target.style.background=C.sage}>{c.navCta}</a>
        </div>
        <button onClick={()=>setMenuOpen(!menuOpen)} className="hburg" aria-label="menu"
          style={{display:"none",background:"none",border:"none",cursor:"pointer",padding:"8px",flexDirection:"column",gap:"5px"}}>
          {[0,1,2].map(i=>(
            <span key={i} style={{display:"block",width:"22px",height:"1px",background:C.linen,transition:"transform .2s,opacity .2s",
              transform:menuOpen&&i===0?"rotate(45deg) translate(4px,4px)":menuOpen&&i===2?"rotate(-45deg) translate(4px,-4px)":"none",
              opacity:menuOpen&&i===1?0:1}}/>
          ))}
        </button>
      </div>
      {menuOpen&&(
        <div style={{background:"rgba(28,43,42,0.97)",backdropFilter:"blur(14px)",padding:"1.5rem 2.5rem 2.5rem",display:"flex",flexDirection:"column",gap:"1.75rem"}}>
          {c.nav.map(l=>(
            <a key={l.t} href={l.h} onClick={()=>setMenuOpen(false)}
              style={{fontFamily:sans,fontSize:"16px",color:"rgba(245,242,236,0.85)",textDecoration:"none",letterSpacing:"0.02em"}}>{l.t}</a>
          ))}
          <LangSwitch lang={lang} setLang={setLang}/>
          <a href={WP_LINK} target="_blank" rel="noopener noreferrer" onClick={()=>setMenuOpen(false)}
            style={{fontFamily:sans,fontSize:"14px",fontWeight:500,color:C.forest,background:C.sage,padding:"13px 28px",borderRadius:"2px",textDecoration:"none",textAlign:"center"}}>{c.navCta}</a>
        </div>
      )}
      <style>{`@media(max-width:960px){.d-nav{display:none!important}.hburg{display:flex!important}}`}</style>
    </nav>
  );

  // ── HERO ─────────────────────────────────────────────────────────────────
  const Hero = (
    <section style={{position:"relative",minHeight:"100svh",display:"flex",flexDirection:"column",justifyContent:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:`linear-gradient(155deg,#253830 0%,${C.forest} 45%,${C.night} 100%)`,zIndex:0}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 68% 38%,rgba(200,216,192,0.06) 0%,transparent 55%),radial-gradient(ellipse at 18% 78%,rgba(46,64,87,0.45) 0%,transparent 52%)"}}/>
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(200,216,192,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(200,216,192,0.025) 1px,transparent 1px)",backgroundSize:"72px 72px"}}/>
        <div style={{position:"absolute",bottom:"1.75rem",right:"2rem",fontFamily:sans,fontSize:"9px",letterSpacing:"0.14em",color:"rgba(200,216,192,0.16)",textTransform:"uppercase"}}>Replace with villa photograph</div>
      </div>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(28,43,42,0.1) 0%,rgba(28,43,42,0.52) 100%)",zIndex:1}}/>
      <div style={{position:"relative",zIndex:2,maxWidth:"1280px",margin:"0 auto",padding:"144px 2.5rem 110px",width:"100%"}}>
        <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"2.25rem",...fd(0)}}>
          <div style={{width:"36px",height:"1px",background:C.sage}}/>
          <span style={{fontFamily:sans,fontSize:"10.5px",letterSpacing:"0.2em",color:C.sage,textTransform:"uppercase"}}>{c.eyebrow}</span>
        </div>
        <h1 style={{fontFamily:serif,fontSize:"clamp(38px,6.5vw,82px)",fontWeight:300,lineHeight:1.08,color:C.linen,margin:"0 0 1.75rem",maxWidth:"820px",letterSpacing:"-0.015em",...fd(0.12)}}>
          {c.h1}<br/><em style={{fontStyle:"italic",color:C.sage}}>{c.h2}</em>
        </h1>
        <p style={{fontFamily:sans,fontSize:"clamp(16px,2vw,19px)",fontWeight:300,color:"rgba(245,242,236,0.72)",lineHeight:1.75,maxWidth:"500px",margin:"0 0 3rem",...fd(0.24)}}>{c.sub}</p>
        <div style={{display:"flex",alignItems:"center",gap:"1.75rem",flexWrap:"wrap",...fd(0.36)}}>
          <a href={WP_LINK} target="_blank" rel="noopener noreferrer"
            style={{fontFamily:sans,fontSize:"14px",fontWeight:500,color:C.forest,background:C.sage,padding:"15px 36px",borderRadius:"2px",textDecoration:"none",letterSpacing:"0.06em",transition:"background .2s,transform .15s",display:"inline-block"}}
            onMouseEnter={e=>{e.target.style.background=C.linen;e.target.style.transform="translateY(-1px)"}}
            onMouseLeave={e=>{e.target.style.background=C.sage;e.target.style.transform="translateY(0)"}}>{c.cta}</a>
          <a href="#report" style={{fontFamily:sans,fontSize:"14px",color:"rgba(245,242,236,0.72)",textDecoration:"none",display:"flex",alignItems:"center",gap:"8px",transition:"color .2s"}}
            onMouseEnter={e=>e.currentTarget.style.color=C.sage} onMouseLeave={e=>e.currentTarget.style.color="rgba(245,242,236,0.72)"}>
            {c.ctaLink} <Ico n="arrow"/>
          </a>
        </div>
        <div style={{marginTop:"5.5rem",paddingTop:"2.25rem",borderTop:"1px solid rgba(200,216,192,0.13)",display:"flex",gap:"3.5rem",flexWrap:"wrap",opacity:heroVis?1:0,transition:"opacity 1s ease .55s"}}>
          {c.trust.map(item=>(
            <div key={item.l}>
              <p style={{fontFamily:serif,fontSize:"21px",fontWeight:400,color:C.sage,margin:"0 0 5px"}}>{item.n}</p>
              <p style={{fontFamily:sans,fontSize:"12px",color:"rgba(245,242,236,0.45)",margin:0,letterSpacing:"0.05em"}}>{item.l}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{position:"absolute",bottom:"2rem",left:"50%",transform:"translateX(-50%)",zIndex:2,opacity:heroVis?0.38:0,transition:"opacity 1s ease .8s",animation:heroVis?"bobble 2.8s ease-in-out 1s infinite":"none"}}>
        <svg width="18" height="28" viewBox="0 0 18 28" fill="none"><rect x="1" y="1" width="16" height="26" rx="8" stroke={C.sage} strokeWidth="1"/><rect x="8" y="5" width="2" height="6" rx="1" fill={C.sage}/></svg>
        <style>{`@keyframes bobble{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(5px)}}`}</style>
      </div>
    </section>
  );

  // ── SERVICES ─────────────────────────────────────────────────────────────
  const Services = (
    <section id="services" ref={svcRef} style={{background:C.linen,padding:"8rem 2.5rem"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto"}}>
        <div style={{marginBottom:"5rem",...rv(svcVis,0)}}>
          <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"1.5rem"}}>
            <div style={{width:"28px",height:"1px",background:C.slate}}/>
            <span style={{fontFamily:sans,fontSize:"10.5px",letterSpacing:"0.2em",color:C.slate,textTransform:"uppercase"}}>{c.s_sub}</span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",alignItems:"flex-end",gap:"2.5rem",justifyContent:"space-between"}}>
            <h2 style={{fontFamily:serif,fontSize:"clamp(36px,5vw,62px)",fontWeight:300,color:C.forest,margin:0,lineHeight:1.06,whiteSpace:"pre-line"}}>{c.s_h}</h2>
            <p style={{fontFamily:sans,fontSize:"16px",fontWeight:300,color:C.muted,lineHeight:1.8,maxWidth:"380px",margin:0}}>{c.s_body}</p>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"1px",background:"rgba(61,92,79,0.1)"}}>
          {c.svcs.map((svc,i)=>(
            <div key={svc.t} style={{background:C.linen,padding:"3rem 2.5rem",cursor:"default",...rv(svcVis,0.08+i*0.1)}}
              onMouseEnter={e=>e.currentTarget.style.background=C.linMid}
              onMouseLeave={e=>e.currentTarget.style.background=C.linen}>
              <div style={{marginBottom:"1.75rem",display:"inline-flex",alignItems:"center",justifyContent:"center",width:"50px",height:"50px",borderRadius:"50%",border:`1px solid rgba(61,92,79,0.18)`,background:"rgba(61,92,79,0.04)"}}>
                <Ico n={svc.i} sz={20} col={C.slate}/>
              </div>
              <h3 style={{fontFamily:serif,fontSize:"26px",fontWeight:400,color:C.forest,margin:"0 0 1rem",lineHeight:1.1}}>{svc.t}</h3>
              <p style={{fontFamily:sans,fontSize:"14px",fontWeight:300,color:C.muted,lineHeight:1.85,margin:0}}>{svc.d}</p>
            </div>
          ))}
        </div>
        <div style={{marginTop:"4.5rem",padding:"2.25rem 3rem",background:C.forest,borderRadius:"2px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"1.5rem",...rv(svcVis,0.5)}}>
          <div>
            <p style={{fontFamily:serif,fontSize:"24px",fontWeight:300,color:C.sage,margin:"0 0 8px",fontStyle:"italic"}}>{c.s_lang_h}</p>
            <p style={{fontFamily:sans,fontSize:"13px",fontWeight:300,color:"rgba(245,242,236,0.58)",margin:0,lineHeight:1.7,maxWidth:"520px"}}>{c.s_lang_body}</p>
          </div>
          <a href={WP_LINK} target="_blank" rel="noopener noreferrer"
            style={{fontFamily:sans,fontSize:"13px",fontWeight:500,color:C.forest,background:C.sage,padding:"13px 28px",borderRadius:"2px",textDecoration:"none",letterSpacing:"0.06em",whiteSpace:"nowrap",transition:"background .2s"}}
            onMouseEnter={e=>e.target.style.background=C.linen} onMouseLeave={e=>e.target.style.background=C.sage}>{c.navCta}</a>
        </div>
      </div>
    </section>
  );

  // ── PHONE MOCKUP ─────────────────────────────────────────────────────────
  const Phone = (
    <div style={{position:"relative",margin:"0 auto",maxWidth:"300px",filter:"drop-shadow(0 52px 80px rgba(0,0,0,0.5))"}}>
      <div style={{background:"#0d1715",borderRadius:"36px",padding:"14px",outline:"1px solid rgba(200,216,192,0.11)"}}>
        <div style={{height:"30px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"4px"}}>
          <div style={{width:"64px",height:"8px",borderRadius:"4px",background:"#192624"}}/>
        </div>
        <div style={{background:C.linen,borderRadius:"24px",overflow:"hidden"}}>
          <div style={{background:C.forest,padding:"18px 18px 16px"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                <div style={{width:"5px",height:"5px",borderRadius:"50%",background:C.sage}}/>
                <span style={{fontFamily:sans,fontSize:"9px",letterSpacing:"0.14em",color:"rgba(200,216,192,0.6)",textTransform:"uppercase"}}>Marama</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:"5px",background:"rgba(200,216,192,0.13)",border:"1px solid rgba(200,216,192,0.28)",borderRadius:"20px",padding:"3px 10px 3px 7px"}}>
                <Ico n="secure" col={C.sage} sz={11}/>
                <span style={{fontFamily:sans,fontSize:"9px",fontWeight:500,color:C.sage,letterSpacing:"0.06em"}}>{c.p_secure}</span>
              </div>
            </div>
            <p style={{fontFamily:serif,fontSize:"15px",fontWeight:400,color:C.linen,margin:"0 0 4px",lineHeight:1.2}}>{c.p_title}</p>
            <p style={{fontFamily:sans,fontSize:"10px",color:"rgba(245,242,236,0.42)",margin:0}}>{c.p_date}</p>
          </div>
          <div style={{padding:"14px 16px 10px"}}>
            <p style={{fontFamily:sans,fontSize:"9px",letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(28,43,42,0.38)",margin:"0 0 10px"}}>{c.p_status}</p>
            {c.p_items.map(item=>(
              <div key={item.l} style={{display:"flex",alignItems:"center",gap:"9px",padding:"6px 0",borderBottom:"0.5px solid rgba(61,92,79,0.08)"}}>
                {item.flag
                  ? <div style={{width:"18px",height:"18px",borderRadius:"50%",background:"rgba(201,169,110,0.16)",border:"1px solid rgba(201,169,110,0.36)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Ico n="warn" col={C.gold} sz={10}/></div>
                  : <div style={{width:"18px",height:"18px",borderRadius:"50%",background:"rgba(61,92,79,0.09)",border:"1px solid rgba(61,92,79,0.18)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Ico n="check" col={C.slate} sz={10}/></div>
                }
                <span style={{fontFamily:sans,fontSize:"11px",color:item.flag?C.goldDk:"#2a3d35",fontWeight:item.flag?500:400,lineHeight:1.3}}>{item.l}</span>
              </div>
            ))}
            <div style={{margin:"10px 0 0",background:"rgba(201,169,110,0.09)",borderLeft:`2px solid ${C.gold}`,padding:"7px 10px"}}>
              <p style={{fontFamily:sans,fontSize:"9px",color:C.goldDk,margin:0,lineHeight:1.5}}>{c.p_flag}</p>
            </div>
          </div>
          <div style={{margin:"0 16px",height:"1px",background:"rgba(61,92,79,0.09)"}}/>
          <div style={{padding:"12px 16px 16px"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"}}>
              <p style={{fontFamily:sans,fontSize:"9px",letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(28,43,42,0.38)",margin:0}}>{c.p_photos}</p>
              <p style={{fontFamily:sans,fontSize:"9px",color:"rgba(28,43,42,0.28)",margin:0}}>{c.p_photo_sub}</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"6px"}}>
              {[
                {bg:"linear-gradient(135deg,#c8d8c0 0%,#9bbaa0 100%)"},
                {bg:"linear-gradient(135deg,#b8c8d0 0%,#8aabba 100%)"},
                {bg:"linear-gradient(135deg,#d4cfc0 0%,#b0a898 100%)"},
              ].map((ph,i)=>(
                <div key={i} style={{borderRadius:"6px",height:"62px",background:ph.bg,display:"flex",alignItems:"flex-end",padding:"5px 6px"}}>
                  <span style={{fontFamily:sans,fontSize:"8px",color:"rgba(28,43,42,0.45)",letterSpacing:"0.04em"}}>{c.p_lbs[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{height:"22px",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:"44px",height:"4px",borderRadius:"2px",background:"rgba(200,216,192,0.18)"}}/>
        </div>
      </div>
    </div>
  );


  // ── PRICING ──────────────────────────────────────────────────────────────
  const [pricRef, pricVis] = useReveal(0.06);

  const Pricing = (
    <section id="pricing" ref={pricRef} style={{background:C.linen,padding:"9rem 2.5rem"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto"}}>
        <div style={{marginBottom:"4rem",...rv(pricVis,0)}}>
          <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"1.5rem"}}>
            <div style={{width:"28px",height:"1px",background:C.slate}}/>
            <span style={{fontFamily:sans,fontSize:"10.5px",letterSpacing:"0.2em",color:C.slate,textTransform:"uppercase"}}>{c.p_sub}</span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",alignItems:"flex-end",gap:"2rem",justifyContent:"space-between"}}>
            <h2 style={{fontFamily:serif,fontSize:"clamp(36px,5vw,62px)",fontWeight:300,color:C.forest,margin:0,lineHeight:1.06,whiteSpace:"pre-line"}}>{c.p_h}</h2>
            <p style={{fontFamily:sans,fontSize:"15px",fontWeight:300,color:C.muted,lineHeight:1.8,maxWidth:"380px",margin:0}}>{c.p_intro}</p>
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"1px",background:"rgba(61,92,79,0.1)",marginBottom:"3rem"}}>
          {c.p_tiers.map((tier,i)=>(
            <div key={tier.name} style={{background:tier.tag?C.forest:C.linen,padding:"2.5rem 2rem",display:"flex",flexDirection:"column",...rv(pricVis,0.1+i*0.1)}}>
              {tier.tag&&(
                <span style={{fontFamily:sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.1em",color:C.forest,background:C.sage,padding:"4px 12px",borderRadius:"99px",alignSelf:"flex-start",marginBottom:"1.25rem"}}>{tier.tag}</span>
              )}
              {!tier.tag&&<div style={{height:"30px",marginBottom:"1.25rem"}}/>}
              <p style={{fontFamily:serif,fontSize:"20px",fontWeight:400,color:tier.tag?C.sage:C.slate,margin:"0 0 1rem",letterSpacing:"0.02em"}}>{tier.name}</p>
              <div style={{display:"flex",alignItems:"baseline",gap:"4px",margin:"0 0 6px"}}>
                <span style={{fontFamily:serif,fontSize:"42px",fontWeight:300,color:tier.tag?C.linen:C.forest,lineHeight:1}}>{tier.price}</span>
                <span style={{fontFamily:sans,fontSize:"13px",color:tier.tag?"rgba(245,242,236,0.5)":C.muted}}>{tier.period}</span>
              </div>
              <p style={{fontFamily:sans,fontSize:"11px",color:tier.tag?"rgba(245,242,236,0.35)":C.muted,margin:"0 0 1.75rem",letterSpacing:"0.04em"}}>{tier.annual}</p>
              <div style={{height:"1px",background:tier.tag?"rgba(200,216,192,0.15)":"rgba(61,92,79,0.1)",marginBottom:"1.75rem"}}/>
              <ul style={{listStyle:"none",padding:0,margin:"0 0 2rem",display:"flex",flexDirection:"column",gap:"10px",flex:1}}>
                {tier.items.map(item=>(
                  <li key={item} style={{display:"flex",alignItems:"flex-start",gap:"10px"}}>
                    <div style={{marginTop:"4px",width:"16px",height:"16px",borderRadius:"50%",border:`1px solid ${tier.tag?"rgba(200,216,192,0.3)":"rgba(61,92,79,0.18)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <Ico n="check" col={tier.tag?C.sage:C.slate} sz={9}/>
                    </div>
                    <span style={{fontFamily:sans,fontSize:"13px",fontWeight:300,color:tier.tag?"rgba(245,242,236,0.7)":C.muted,lineHeight:1.6}}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={WP_LINK} target="_blank" rel="noopener noreferrer"
                style={{fontFamily:sans,fontSize:"13px",fontWeight:500,textDecoration:"none",padding:"13px 24px",borderRadius:"2px",textAlign:"center",display:"block",transition:"background .2s, color .2s",letterSpacing:"0.06em",
                  background:tier.tag?C.sage:"transparent",
                  color:tier.tag?C.forest:C.slate,
                  border:tier.tag?"none":`1px solid rgba(61,92,79,0.25)`,
                }}
                onMouseEnter={e=>{e.target.style.background=tier.tag?C.linen:"rgba(61,92,79,0.06)";}}
                onMouseLeave={e=>{e.target.style.background=tier.tag?C.sage:"transparent";}}
              >{c.p_cta}</a>
            </div>
          ))}
        </div>

        <div style={{...rv(pricVis,0.45)}}>
          <p style={{fontFamily:serif,fontSize:"18px",fontWeight:300,color:C.muted,margin:"0 0 1.25rem",fontStyle:"italic"}}>{c.p_addons_h}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"1px",background:"rgba(61,92,79,0.08)"}}>
            {c.p_addons.map(a=>(
              <div key={a.t} style={{background:C.linen,padding:"1.25rem 1.5rem"}}>
                <p style={{fontFamily:sans,fontSize:"12px",fontWeight:500,color:C.forest,margin:"0 0 5px"}}>{a.t}</p>
                <p style={{fontFamily:serif,fontSize:"17px",fontWeight:400,color:C.slate,margin:0}}>{a.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ── REPORT ───────────────────────────────────────────────────────────────
  const Report = (
    <section id="report" ref={repRef} style={{background:C.forest,padding:"9rem 2.5rem",overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 82% 18%,rgba(200,216,192,0.04) 0%,transparent 48%),radial-gradient(circle at 8% 82%,rgba(46,64,87,0.38) 0%,transparent 50%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:"1280px",margin:"0 auto",position:"relative"}}>
        <div style={{marginBottom:"5.5rem",...rv(repVis,0)}}>
          <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"1.5rem"}}>
            <div style={{width:"28px",height:"1px",background:C.sage}}/>
            <span style={{fontFamily:sans,fontSize:"10.5px",letterSpacing:"0.2em",color:C.sage,textTransform:"uppercase"}}>{c.r_sub}</span>
          </div>
          <h2 style={{fontFamily:serif,fontSize:"clamp(38px,5.5vw,70px)",fontWeight:300,color:C.linen,margin:0,lineHeight:1.04,whiteSpace:"pre-line"}}>{c.r_h}</h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"7rem",alignItems:"center"}}>
          <div style={{...rv(repVis,0.18,"X",-28)}}>
            <p style={{fontFamily:sans,fontSize:"18px",fontWeight:300,color:"rgba(245,242,236,0.7)",lineHeight:1.82,margin:"0 0 2rem"}}>{c.r_body}</p>
            <div style={{margin:"0 0 2.5rem",padding:"1.25rem 1.75rem",border:"1px solid rgba(200,216,192,0.18)",borderRadius:"2px",background:"rgba(200,216,192,0.04)"}}>
              <p style={{fontFamily:serif,fontSize:"21px",fontWeight:300,color:C.sage,margin:"0 0 7px",fontStyle:"italic"}}>English · Español · Čeština</p>
              <p style={{fontFamily:sans,fontSize:"13px",fontWeight:300,color:"rgba(245,242,236,0.5)",margin:0,lineHeight:1.65}}>{c.r_lang}</p>
            </div>
            <ul style={{listStyle:"none",padding:0,margin:"0 0 2rem",display:"flex",flexDirection:"column",gap:"1.1rem"}}>
              {c.r_feats.map(f=>(
                <li key={f} style={{display:"flex",alignItems:"flex-start",gap:"12px"}}>
                  <div style={{marginTop:"3px",width:"20px",height:"20px",borderRadius:"50%",border:"1px solid rgba(200,216,192,0.28)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <Ico n="check" col={C.sage} sz={10}/>
                  </div>
                  <span style={{fontFamily:sans,fontSize:"14px",fontWeight:300,color:"rgba(245,242,236,0.6)",lineHeight:1.7}}>{f}</span>
                </li>
              ))}
            </ul>
            <p style={{fontFamily:serif,fontSize:"17px",fontWeight:300,color:"rgba(200,216,192,0.65)",lineHeight:1.72,margin:"2rem 0 2.5rem",fontStyle:"italic",borderLeft:"2px solid rgba(200,216,192,0.22)",paddingLeft:"1.25rem"}}>{c.r_luxury}</p>
            <a href={WP_LINK} target="_blank" rel="noopener noreferrer"
              style={{fontFamily:sans,fontSize:"14px",fontWeight:500,color:C.forest,background:C.sage,padding:"14px 34px",borderRadius:"2px",textDecoration:"none",letterSpacing:"0.06em",display:"inline-block",transition:"background .2s,transform .15s"}}
              onMouseEnter={e=>{e.target.style.background=C.linen;e.target.style.transform="translateY(-1px)"}}
              onMouseLeave={e=>{e.target.style.background=C.sage;e.target.style.transform="translateY(0)"}}>{c.r_cta}</a>
          </div>
          <div style={{...rv(repVis,0.32)}}>{Phone}</div>
        </div>
      </div>
    </section>
  );

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  const About = (
    <section id="about" ref={abtRef} style={{background:C.linen,padding:"9rem 2.5rem",overflow:"hidden"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"6rem",alignItems:"start"}}>
          <div style={{...rv(abtVis,0,"X",-32)}}>
            <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"1.5rem"}}>
              <div style={{width:"28px",height:"1px",background:C.slate}}/>
              <span style={{fontFamily:sans,fontSize:"10.5px",letterSpacing:"0.2em",color:C.slate,textTransform:"uppercase"}}>{c.about_sub}</span>
            </div>
            <h2 style={{fontFamily:serif,fontSize:"clamp(36px,5vw,62px)",fontWeight:300,color:C.forest,margin:"0 0 2.5rem",lineHeight:1.06,whiteSpace:"pre-line"}}>{c.about_h}</h2>
            <p style={{fontFamily:sans,fontSize:"16px",fontWeight:300,color:C.muted,lineHeight:1.85,margin:"0 0 1.5rem"}}>{c.about_p1}</p>
            <p style={{fontFamily:sans,fontSize:"16px",fontWeight:300,color:C.muted,lineHeight:1.85,margin:"0 0 1.5rem"}}>{c.about_p2}</p>
            <p style={{fontFamily:sans,fontSize:"16px",fontWeight:300,color:C.muted,lineHeight:1.85,margin:"0 0 2.5rem"}}>{c.about_p3}</p>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
              {[c.about_tag1,c.about_tag2,c.about_tag3].map(tag=>(
                <span key={tag} style={{fontFamily:sans,fontSize:"11px",fontWeight:500,letterSpacing:"0.08em",padding:"6px 14px",borderRadius:"2px",background:"rgba(61,92,79,0.08)",color:C.slate}}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{...rv(abtVis,0.2,"X",32)}}>
            <div style={{marginBottom:"3rem",position:"relative"}}>
              <div style={{position:"absolute",top:"-1rem",left:"-0.5rem",fontFamily:serif,fontSize:"160px",fontWeight:300,color:"rgba(61,92,79,0.06)",lineHeight:1,userSelect:"none",pointerEvents:"none"}}>M</div>
              <div style={{position:"relative",padding:"2.5rem",background:C.forest,borderRadius:"2px"}}>
                <div style={{width:"28px",height:"1px",background:C.sage,marginBottom:"1.5rem"}}/>
                <p style={{fontFamily:serif,fontSize:"clamp(18px,2.5vw,22px)",fontWeight:300,color:C.linen,lineHeight:1.72,margin:"0 0 1.75rem",fontStyle:"italic"}}>{c.about_q}</p>
                <p style={{fontFamily:sans,fontSize:"12px",letterSpacing:"0.1em",color:"rgba(200,216,192,0.5)",margin:0,textTransform:"uppercase"}}>{c.about_attr}</p>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"rgba(61,92,79,0.1)"}}>
              {[
                {n:"Costa Blanca",l:"Zone of operation"},
                {n:"3",l:"Native languages"},
                {n:"Monthly",l:"Every single property"},
                {n:"One call",l:"Everything moves"},
              ].map(item=>(
                <div key={item.l} style={{background:C.linen,padding:"1.75rem 1.5rem"}}>
                  <p style={{fontFamily:serif,fontSize:"26px",fontWeight:400,color:C.slate,margin:"0 0 5px"}}>{item.n}</p>
                  <p style={{fontFamily:sans,fontSize:"12px",color:C.muted,margin:0,letterSpacing:"0.04em"}}>{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ── FAQ ───────────────────────────────────────────────────────────────────
  const FAQ = (
    <section id="faq" ref={faqRef} style={{background:C.forest,padding:"9rem 2.5rem"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"5rem",alignItems:"start"}}>
          <div style={{...rv(faqVis,0,"X",-28)}}>
            <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"1.5rem"}}>
              <div style={{width:"28px",height:"1px",background:C.sage}}/>
              <span style={{fontFamily:sans,fontSize:"10.5px",letterSpacing:"0.2em",color:C.sage,textTransform:"uppercase"}}>{c.faq_sub}</span>
            </div>
            <h2 style={{fontFamily:serif,fontSize:"clamp(34px,4.5vw,58px)",fontWeight:300,color:C.linen,margin:"0 0 1.5rem",lineHeight:1.08}}>{c.faq_h}</h2>
            <p style={{fontFamily:sans,fontSize:"15px",fontWeight:300,color:"rgba(245,242,236,0.55)",lineHeight:1.8,margin:"0 0 2rem"}}>{c.faq_body}</p>
            <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
              <a href={WP_LINK} target="_blank" rel="noopener noreferrer"
                style={{fontFamily:sans,fontSize:"14px",fontWeight:500,color:C.forest,background:C.sage,padding:"14px 32px",borderRadius:"2px",textDecoration:"none",letterSpacing:"0.06em",display:"inline-block",textAlign:"center",transition:"background .2s"}}
                onMouseEnter={e=>e.target.style.background=C.linen} onMouseLeave={e=>e.target.style.background=C.sage}>WhatsApp</a>
              <a href={`mailto:${EMAIL}`}
                style={{fontFamily:sans,fontSize:"14px",fontWeight:300,color:"rgba(245,242,236,0.6)",padding:"14px 32px",borderRadius:"2px",textDecoration:"none",letterSpacing:"0.06em",display:"inline-block",textAlign:"center",border:"1px solid rgba(200,216,192,0.2)",transition:"border-color .2s,color .2s"}}
                onMouseEnter={e=>{e.target.style.borderColor="rgba(200,216,192,0.5)";e.target.style.color=C.linen}}
                onMouseLeave={e=>{e.target.style.borderColor="rgba(200,216,192,0.2)";e.target.style.color="rgba(245,242,236,0.6)"}}>Email</a>
            </div>
          </div>
          <div style={{...rv(faqVis,0.18,"X",28)}}>
            {c.faqs.map((faq,i)=>(
              <div key={i} style={{borderBottom:"1px solid rgba(200,216,192,0.1)"}}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{
                  width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",
                  gap:"1rem",padding:"1.5rem 0",background:"none",border:"none",cursor:"pointer",textAlign:"left",
                }}>
                  <span style={{fontFamily:serif,fontSize:"clamp(17px,2vw,20px)",fontWeight:400,color:openFaq===i?C.sage:C.linen,lineHeight:1.3,transition:"color .2s"}}>{faq.q}</span>
                  <span style={{flexShrink:0,width:"28px",height:"28px",borderRadius:"50%",border:`1px solid rgba(200,216,192,${openFaq===i?0.5:0.2})`,display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color .2s"}}>
                    {openFaq===i ? <Ico n="minus" col={C.sage} sz={12}/> : <Ico n="plus" col="rgba(200,216,192,0.6)" sz={12}/>}
                  </span>
                </button>
                <div style={{overflow:"hidden",maxHeight:openFaq===i?"400px":"0",transition:"max-height .45s cubic-bezier(0.4,0,0.2,1)"}}>
                  <p style={{fontFamily:sans,fontSize:"14px",fontWeight:300,color:"rgba(245,242,236,0.58)",lineHeight:1.85,margin:"0 0 1.75rem",paddingRight:"2.5rem"}}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ── FOOTER ───────────────────────────────────────────────────────────────
  const Footer = (
    <footer id="contact" ref={ftRef} style={{background:"#141f1e",borderTop:"1px solid rgba(200,216,192,0.08)",padding:"6rem 2.5rem 3rem"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"4rem",marginBottom:"5rem",...rv(ftVis,0)}}>
          <div style={{gridColumn:"span 1"}}>
            <a href="#" style={{textDecoration:"none",display:"inline-flex",alignItems:"center",marginBottom:"1rem"}}>
              <MaramaLogo height={38} onDark={true}/>
            </a>
            <p style={{fontFamily:serif,fontSize:"17px",fontWeight:300,color:C.sage,margin:"0 0 1.25rem",fontStyle:"italic"}}>{c.footer_tagline}</p>
            <p style={{fontFamily:sans,fontSize:"13px",fontWeight:300,color:"rgba(245,242,236,0.42)",lineHeight:1.75,margin:0,maxWidth:"280px"}}>{c.footer_desc}</p>
          </div>
          <div>
            <p style={{fontFamily:sans,fontSize:"10.5px",letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(200,216,192,0.45)",margin:"0 0 1.5rem"}}>{c.footer_contact}</p>
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
              <a href={WP_LINK} target="_blank" rel="noopener noreferrer"
                style={{display:"flex",alignItems:"center",gap:"10px",textDecoration:"none",color:C.linen,fontFamily:sans,fontSize:"14px",fontWeight:300,transition:"color .2s"}}
                onMouseEnter={e=>e.currentTarget.style.color=C.sage} onMouseLeave={e=>e.currentTarget.style.color=C.linen}>
                <Ico n="wp" sz={16} col="rgba(200,216,192,0.5)"/>
                {c.footer_wp} — {c.footer_wp_num}
              </a>
              <a href={`mailto:${c.footer_email}`}
                style={{display:"flex",alignItems:"center",gap:"10px",textDecoration:"none",color:C.linen,fontFamily:sans,fontSize:"14px",fontWeight:300,transition:"color .2s"}}
                onMouseEnter={e=>e.currentTarget.style.color=C.sage} onMouseLeave={e=>e.currentTarget.style.color=C.linen}>
                <Ico n="mail" sz={16} col="rgba(200,216,192,0.5)"/>
                {c.footer_email}
              </a>
            </div>
          </div>
          <div>
            <p style={{fontFamily:sans,fontSize:"10.5px",letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(200,216,192,0.45)",margin:"0 0 1.5rem"}}>Navigation</p>
            <div style={{display:"flex",flexDirection:"column",gap:"0.9rem"}}>
              {c.footer_links.map(l=>(
                <a key={l.t} href={l.h} style={{fontFamily:sans,fontSize:"14px",fontWeight:300,color:"rgba(245,242,236,0.55)",textDecoration:"none",transition:"color .2s"}}
                  onMouseEnter={e=>e.target.style.color=C.linen} onMouseLeave={e=>e.target.style.color="rgba(245,242,236,0.55)"}>{l.t}</a>
              ))}
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"2rem"}}>
            <div>
              <p style={{fontFamily:sans,fontSize:"10.5px",letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(200,216,192,0.45)",margin:"0 0 1rem"}}>Language</p>
              <LangSwitch lang={lang} setLang={setLang}/>
            </div>
            <a href={WP_LINK} target="_blank" rel="noopener noreferrer"
              style={{fontFamily:sans,fontSize:"14px",fontWeight:500,color:C.forest,background:C.sage,padding:"14px 28px",borderRadius:"2px",textDecoration:"none",letterSpacing:"0.06em",textAlign:"center",display:"block",transition:"background .2s"}}
              onMouseEnter={e=>e.target.style.background=C.linen} onMouseLeave={e=>e.target.style.background=C.sage}>{c.footer_cta}</a>
          </div>
        </div>
        <div style={{paddingTop:"2rem",borderTop:"1px solid rgba(200,216,192,0.07)",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"1rem"}}>
          <p style={{fontFamily:sans,fontSize:"11px",color:"rgba(245,242,236,0.25)",margin:0,letterSpacing:"0.03em"}}>{c.footer_legal}</p>
          <p style={{fontFamily:sans,fontSize:"11px",color:"rgba(245,242,236,0.22)",margin:0}}>{c.footer_copy}</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div style={{fontFamily:sans,background:C.forest}}>
      <MaramaSEO lang={lang}/>
      {Nav}
      {Hero}
      {Services}
      {Pricing}
      {Report}
      {About}
      {FAQ}
      {Footer}
    </div>
  );
}
