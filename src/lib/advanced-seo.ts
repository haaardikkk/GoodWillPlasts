type LocalBusinessAddress = {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
};

type LocalBusinessData = {
  name: string;
  url: string;
  telephone?: string;
  image?: string;
  priceRange?: string;
  sameAs?: string[];
  openingHours?: string[];
  address?: LocalBusinessAddress;
  geo?: { latitude: number; longitude: number };
};

export type AdvancedSEOOptions = {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  author?: string;
  robots?: string;
  googlebot?: string;
  geoPlacename?: string;
  geoRegion?: string;
  geoPosition?: string; // "lat;long"
  sitemapHref?: string;
  og?: {
    url?: string;
    image?: string;
    imageAlt?: string;
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    site?: string;
    image?: string;
    imageAlt?: string;
  };
  localBusiness?: LocalBusinessData;
  mapEmbedUrl?: string;
  googleSiteVerification?: string;
};

function ensureMetaName(name: string, content: string) {
  let tag = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function ensureMetaProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function ensureLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.href = href;
}

function ensureJSONLDScript(id: string, data: unknown) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  const json = JSON.stringify(data);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = json;
    document.head.appendChild(script);
  } else {
    script.textContent = json;
  }
}

function injectHiddenKeywordsDiv(keywords: string[]) {
  const id = "seo-hidden-keywords";
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    el.setAttribute("aria-hidden", "true");
    el.style.display = "none";
    el.textContent = keywords.join(", ");
    document.body.appendChild(el);
  } else {
    el.textContent = keywords.join(", ");
  }
}

function injectHiddenMapIframe(mapEmbedUrl?: string) {
  if (!mapEmbedUrl) return;
  const id = "seo-hidden-map";
  let iframe = document.getElementById(id) as HTMLIFrameElement | null;
  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.id = id;
    iframe.src = mapEmbedUrl;
    iframe.loading = "lazy";
    iframe.width = "0";
    iframe.height = "0";
    iframe.style.display = "none";
    iframe.referrerPolicy = "no-referrer";
    document.body.appendChild(iframe);
  } else {
    iframe.src = mapEmbedUrl;
  }
}

function injectGTM() {
  const GTM_ID = (import.meta as any).env?.VITE_GTM_ID as string | undefined;
  const isValid = GTM_ID && GTM_ID !== "%VITE_GTM_ID%" && /GTM-[A-Z0-9]+/.test(GTM_ID);
  if (!isValid) return;

  // Avoid duplicates
  if (document.getElementById("gtm-script")) return;

  const s = document.createElement("script");
  s.id = "gtm-script";
  s.text = `(
    function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  `;
  document.head.appendChild(s);

  // Noscript iframe (hidden to avoid visual impact)
  if (!document.getElementById("gtm-noscript")) {
    const ns = document.createElement("noscript");
    ns.id = "gtm-noscript";
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    ns.appendChild(iframe);
    document.body.appendChild(ns);
  }
}

export function applyAdvancedSEO(options: AdvancedSEOOptions) {
  if (typeof document === "undefined") return;

  const {
    title,
    description,
    keywords,
    canonicalUrl,
    author,
    robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    googlebot = "index,follow",
    geoPlacename,
    geoRegion,
    geoPosition,
    sitemapHref,
    og,
    twitter,
    localBusiness,
    mapEmbedUrl,
    googleSiteVerification,
  } = options;

  // Title & basic meta
  document.title = title;
  ensureMetaName("description", description);
  ensureMetaName("keywords", keywords.join(", "));
  if (author) ensureMetaName("author", author);
  ensureMetaName("robots", robots);
  ensureMetaName("googlebot", googlebot);
  if (googleSiteVerification) ensureMetaName("google-site-verification", googleSiteVerification);

  // Canonical & sitemap
  ensureLink("canonical", canonicalUrl);
  if (sitemapHref) ensureLink("sitemap", sitemapHref);

  // Geo tags
  if (geoPlacename) ensureMetaName("geo.placename", geoPlacename);
  if (geoRegion) ensureMetaName("geo.region", geoRegion);
  if (geoPosition) ensureMetaName("geo.position", geoPosition);

  // Open Graph
  ensureMetaProperty("og:title", title);
  ensureMetaProperty("og:description", description);
  ensureMetaProperty("og:type", og?.type || "website");
  if (og?.url) ensureMetaProperty("og:url", og.url);
  if (og?.image) ensureMetaProperty("og:image", og.image);
  if (og?.imageAlt) ensureMetaProperty("og:image:alt", og.imageAlt);
  if (og?.locale) ensureMetaProperty("og:locale", og.locale);

  // Twitter
  ensureMetaName("twitter:card", twitter?.card || "summary_large_image");
  ensureMetaName("twitter:title", title);
  ensureMetaName("twitter:description", description);
  if (twitter?.image) ensureMetaName("twitter:image", twitter.image);
  if (twitter?.imageAlt) ensureMetaName("twitter:image:alt", twitter.imageAlt);
  if (twitter?.site) ensureMetaName("twitter:site", twitter.site);

  // Structured data: LocalBusiness
  if (localBusiness) {
    const lb: any = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: localBusiness.name,
      url: localBusiness.url,
      telephone: localBusiness.telephone,
      image: localBusiness.image,
      priceRange: localBusiness.priceRange,
      sameAs: localBusiness.sameAs,
      openingHours: localBusiness.openingHours,
    };
    if (localBusiness.address) {
      lb.address = {
        "@type": "PostalAddress",
        streetAddress: localBusiness.address.streetAddress,
        addressLocality: localBusiness.address.addressLocality,
        addressRegion: localBusiness.address.addressRegion,
        postalCode: localBusiness.address.postalCode,
        addressCountry: localBusiness.address.addressCountry,
      };
    }
    if (localBusiness.geo) {
      lb.geo = {
        "@type": "GeoCoordinates",
        latitude: localBusiness.geo.latitude,
        longitude: localBusiness.geo.longitude,
      };
    }
    ensureJSONLDScript("jsonld-localbusiness", lb);
  }

  // Hidden content for crawlers (non-visual)
  injectHiddenKeywordsDiv(keywords);
  injectHiddenMapIframe(mapEmbedUrl);

  // Tag Manager (conditional)
  injectGTM();
}
