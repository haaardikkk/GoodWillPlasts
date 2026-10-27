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
      title: "HDPE Drums, Jerry Cans & PET Jars Manufacturer in India | GoodWill Plast",
      description:
        "GoodWill Plast manufactures HDPE drums, jerry cans, edible oil cans and PET jars in Sonepat, Haryana. 5L to 50L, multiple colours, bulk B2B supply across India.",
      canonicalUrl: "https://www.goodwillplast.in/",
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
