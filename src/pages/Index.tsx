import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Hero />
        <ProductCategories />
        <About />
        <ContactForm />
        <Footer />
      </main>
      <MobileCTA />
    </div>
  );
};

export default Index;
