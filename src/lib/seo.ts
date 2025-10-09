type SEOParams = {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogUrl?: string;
};

export function applySEO({ title, description, keywords, canonicalUrl, ogImage, ogUrl }: SEOParams) {
  if (typeof document === "undefined") return;

  document.title = title;

  const ensureMeta = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  ensureMeta("description", description);
  ensureMeta("keywords", keywords.join(", "));

  const canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (canonical) {
    canonical.href = canonicalUrl;
  } else {
    const link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.href = canonicalUrl;
    document.head.appendChild(link);
  }

  const setProperty = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  if (ogImage) setProperty("og:image", ogImage);
  if (ogUrl) setProperty("og:url", ogUrl);
  setProperty("og:title", title);
  setProperty("og:description", description);
}