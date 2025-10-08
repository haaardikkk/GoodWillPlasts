import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Truck, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import heroImage from "@/assets/hero-drums.jpg";
import heroVideo from "@/assets/main video.mp4";
import catalogPdf from "@/assets/catalog.pdf";

// Slideshow images


const Hero = () => {
  const handleDownloadCatalogue = () => {
    const link = document.createElement('a');
    link.href = catalogPdf;
    link.download = 'GoodWill-Plast-Catalogue.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExploreProducts = () => {
    const productSection = document.getElementById('product-categories');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToFactory = () => {
    const mapsUrl = 'https://maps.app.goo.gl/6rbGfZPBKwKkZbjbA';
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img 
          src={heroImage} 
          alt="Industrial HDPE containers" 
          className="w-full h-full object-cover opacity-30"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </motion.div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div 
                className="flex items-center space-x-2 text-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div 
                  className="w-8 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "2rem" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
                <span className="text-sm font-medium">B2B HDPE SOLUTIONS</span>
              </motion.div>
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Premium 
                <motion.span 
                  className="bg-gradient-primary bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                > HDPE</motion.span>
                <br />Containers
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Leading manufacturer of high-quality HDPE drums, containers, and jars for industrial and commercial applications. Trusted by businesses worldwide.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {[
                { number: "10+", label: "Years Experience" },
                { number: "100+", label: "B2B Clients" },
                { number: "High", label: "Quality HDPE" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2 + index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-blue-400 hover:from-blue-600 hover:to-primary shadow-lg shadow-primary/20 transition-all duration-300"
                  onClick={handleExploreProducts}
                >
                  <span className="mr-2">Explore Products</span> 
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-2 hover:bg-accent/50 transition-all duration-300"
                  onClick={handleDownloadCatalogue}
                >
                  Download Catalogue
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300"
                  onClick={handleNavigateToFactory}
                >
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                  </motion.div>
                  Navigate to GoodWill Plast
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center space-x-6 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              {[
                { icon: Award, text: "ISO Certified" },
                { icon: Truck, text: "Fast Delivery" },
                { icon: Shield, text: "Quality Assured" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.6 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div 
              className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden"
            >
              {/* Background Gemini-style glow effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 60%)",
                    "radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.4) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(239, 68, 68, 0.4) 0%, transparent 60%)",
                    "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.4) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.4) 0%, transparent 60%)",
                    "radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)",
                    "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 60%)"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Video on top of glow */}
              <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
                <motion.video
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[95%] h-[95%] object-cover rounded-xl shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    filter: [
                      "saturate(1.1) brightness(1.05)",
                      "saturate(1.2) brightness(1.1)",
                      "saturate(1.1) brightness(1.05)"
                    ]
                  }}
                  transition={{
                    y: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    filter: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.02
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;