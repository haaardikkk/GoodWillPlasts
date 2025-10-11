import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { applyAdvancedSEO } from './lib/advanced-seo'

// One-time advanced SEO injection: hidden meta, JSON-LD, OG/Twitter, map, GTM
applyAdvancedSEO({
  title: 'GoodWill Plast | Premium HDPE Containers & Drums',
  description:
    'Wholesale plastic containers and industrial packaging solutions in India. Premium HDPE drums, jars, and plastic storage solutions for B2B.',
  keywords: [
    'plastic container',
    'plastic drum',
    'packaging solution',
    'industrial packaging',
    'plastic storage solutions',
    'wholesale plastic containers India',
    'HDPE drums',
    'B2B packaging',
    'chemical storage',
    'food grade containers',
  ],
  canonicalUrl: 'https://goodwillplast.com/',
  author: 'GP - GoodWill Plast',
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  googlebot: 'index,follow',
  sitemapHref: 'https://goodwillplast.com/sitemap.xml',
  geoPlacename: 'India',
  geoRegion: 'IN',
  geoPosition: '20.5937;78.9629',
  og: {
    url: 'https://goodwillplast.com/',
    image: '/favicon.png',
    imageAlt: 'GoodWill Plast logo',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@goodwillplast',
    image: '/favicon.png',
    imageAlt: 'GoodWill Plast logo',
  },
  localBusiness: {
    name: 'GoodWill Plast',
    url: 'https://goodwillplast.com/',
    telephone: '+91-0000000000',
    image: '/favicon.png',
    address: {
      addressLocality: 'India',
      addressCountry: 'IN',
    },
    openingHours: ['Mo-Sa 09:00-18:00'],
    priceRange: '$$',
    geo: { latitude: 20.5937, longitude: 78.9629 },
    sameAs: [
      'https://goodwillplast.com/',
    ],
  },
  mapEmbedUrl: 'https://www.google.com/maps?q=GoodWill+Plast&output=embed',
  googleSiteVerification: 'mbQ-b_S9bwT_rfsrRnBnuqJclKJGZWi27UtP_GVLA2M',
});

createRoot(document.getElementById("root")!).render(<App />);
