# SEO & search console setup

## How it works

- Every public page has its own title, description, canonical URL, Open Graph/Twitter tags and JSON-LD.
  The values live in `src/lib/page-meta.ts` and are used both by the React pages and by
  `scripts/prerender.mjs`, which runs after `vite build` (`npm run build`).
- The prerender step writes a static HTML file per route (`dist/products/rocket-drum.html`, ...), plus
  `404.html`, `sitemap.xml` (with product images) and `robots.txt`. Crawlers that don't run JavaScript
  still get the correct metadata and a plain-HTML version of the content.
- Site-wide structured data (Organization + LocalBusiness, WebSite) is in `index.html`. Pages add
  BreadcrumbList, CollectionPage/ItemList and Product nodes.
- Product nodes intentionally have no price, offer or rating, because prices are quoted per order and
  there are no published reviews. They're valid schema.org, but Google won't show product rich
  results (price/stars) for them unless real offer data is added.
- URLs have no trailing slash (`vercel.json` → `trailingSlash: false`, `cleanUrls: true`). Unknown URLs
  return a real 404 status with the branded 404 page.

## Production domain

Set `VITE_SITE_URL` in the Vercel project's environment variables if the live domain is not
`https://goodwillplast.com` (e.g. `https://www.goodwillplast.com` or a `.in` domain). It controls canonical
URLs, OG URLs, JSON-LD, the sitemap and robots.txt. Redeploy after changing it. Point any other domains
at the primary one with a 301 redirect in Vercel → Domains.

## Google Search Console

1. Go to https://search.google.com/search-console and add a property.
   - **Domain property** (recommended): add the TXT record Google shows you at your DNS provider.
   - **URL-prefix property**: the repo already contains a verification file
     (`public/googledc58b42f17bfa215.html`) and a `google-site-verification` meta tag in `index.html`.
     These were already in the project; they only verify if they belong to the Google account you use.
2. Sitemaps → submit `sitemap.xml`.
3. Pages (Indexing) report: check which URLs are indexed and why others are excluded.
4. URL Inspection: test a product URL, then "Request indexing" for important pages.
5. Performance: review queries, clicks, impressions and CTR per page.
6. Enhancements → Breadcrumbs / Product snippets: review structured data warnings. You can also test
   any URL at https://search.google.com/test/rich-results and https://validator.schema.org.

## Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters and sign in.
2. Easiest: "Import from Google Search Console" once the GSC property is verified. Otherwise verify with
   the XML file, meta tag or DNS CNAME that Bing gives you (add a meta tag to `index.html` or a file to
   `public/`).
3. Sitemaps → submit `https://<your-domain>/sitemap.xml`.
4. Use URL Inspection and Site Explorer for crawl/index issues, and Search Performance for queries.
5. Optional: enable IndexNow in Bing to get changed pages picked up faster.

Nothing has been submitted to either tool yet. That has to be done from the company's own accounts.
