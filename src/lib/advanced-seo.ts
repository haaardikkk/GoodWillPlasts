// Static SEO (meta, Open Graph, JSON-LD) lives in index.html so crawlers see it without
// running JS. This only injects Google Tag Manager when VITE_GTM_ID is configured.
export function injectGTM() {
  if (typeof document === "undefined") return;
  const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined;
  const isValid = GTM_ID && /^GTM-[A-Z0-9]+$/.test(GTM_ID);
  if (!isValid || document.getElementById("gtm-script")) return;

  const s = document.createElement("script");
  s.id = "gtm-script";
  s.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');`;
  document.head.appendChild(s);
}
