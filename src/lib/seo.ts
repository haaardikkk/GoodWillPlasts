type SEOParams = {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  robots?: string;
};

const DEFAULT_OG_IMAGE = "https://goodwillplast.com/og-image.jpg";

// Per-route overrides for the defaults in index.html.
export function applySEO({
  title,
  description,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  robots = "index, follow, max-image-preview:large",
}: SEOParams) {
  if (typeof document === "undefined") return;

  document.title = title;

  const ensure = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
    let el = document.head.querySelector(selector) as HTMLElement | null;
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };
  const meta = (key: "name" | "property", id: string, content: string) =>
    ensure(`meta[${key}='${id}']`, () => {
      const m = document.createElement("meta");
      m.setAttribute(key, id);
      return m;
    }, "content", content);

  meta("name", "description", description);
  meta("name", "robots", robots);
  meta("property", "og:title", title);
  meta("property", "og:description", description);
  meta("property", "og:url", canonicalUrl);
  meta("property", "og:image", ogImage);
  meta("name", "twitter:title", title);
  meta("name", "twitter:description", description);
  meta("name", "twitter:image", ogImage);
  ensure("link[rel='canonical']", () => {
    const l = document.createElement("link");
    l.setAttribute("rel", "canonical");
    return l;
  }, "href", canonicalUrl);
}
