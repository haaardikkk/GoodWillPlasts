import { lazy, Suspense, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileCTA from "@/components/MobileCTA";
import Preloader from "@/components/Preloader";
import { applySEO } from "@/lib/seo";
const ProductCategories = lazy(() => import("@/components/ProductCategories"));
const About = lazy(() => import("@/components/About"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  useEffect(() => {
    applySEO({
      title: "GoodWill Plast | Premium HDPE Containers & Drums",
      description:
        "Wholesale plastic containers and industrial packaging solutions in India. Premium HDPE drums, jars, and storage solutions for B2B.",
      keywords: [
        "plastic container",
        "plastic drum",
        "packaging solution",
        "industrial packaging",
        "plastic storage solutions",
        "wholesale plastic containers India",
      ],
      canonicalUrl: "https://goodwillplast.com/",
      ogImage: "/src/assets/logo(1).png",
      ogUrl: "https://goodwillplast.com/",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Hero />
        <Suspense fallback={<Preloader />}>
          <ProductCategories />
        </Suspense>
        <Suspense fallback={<Preloader />}>
          <About />
        </Suspense>
        <Suspense fallback={<Preloader />}>
          <ContactForm />
        </Suspense>
        <Suspense fallback={<Preloader />}>
          <Footer />
        </Suspense>
      </main>
      <MobileCTA />
    </div>
  );
};

export default Index;
