import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import headLogo from "@/assets/head_logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-0 w-full z-[100] backdrop-blur-md border-b border-border"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        backgroundColor: isScrolled ? "hsl(220 27% 8% / 0.95)" : "hsl(220 27% 8% / 0.9)",
        boxShadow: isScrolled ? "0 4px 20px hsl(195 100% 50% / 0.1)" : "none"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={headLogo} alt="GoodWill Plast" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-xl font-bold text-foreground">GoodWill Plast</h1>
              <p className="text-xs text-muted-foreground">HDPE Solutions</p>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            className="hidden md:flex items-center justify-center space-x-12 flex-1 mx-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { href: "#home", label: "Home" },
              { href: "#product-categories", label: "Products" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => (
              <motion.a 
                key={item.href}
                href={item.href} 
                className="text-lg font-medium text-foreground hover:text-primary transition-all duration-300 relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  initial={{ backgroundSize: "0% 2px" }}
                  whileHover={{ 
                    backgroundSize: "100% 2px",
                    color: "hsl(195, 100%, 50%)",
                    textShadow: "0 0 8px rgba(2, 132, 199, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundImage: "linear-gradient(to right, hsl(195, 100%, 50%), hsl(195, 100%, 50%))",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left bottom"
                  }}
                >
                  {item.label}
                </motion.span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                  whileHover={{ width: "100%", height: "2px" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
          </motion.nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="absolute top-16 left-0 w-full bg-background border-b border-border py-4 px-6 shadow-lg z-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  { href: "#home", label: "Home" },
                  { href: "#products", label: "Products" },
                  { href: "#about", label: "About" },
                  { href: "#contact", label: "Contact" }
                ].map((item, index) => (
                  <motion.a 
                    key={item.href}
                    href={item.href} 
                    className="text-lg font-medium text-foreground hover:text-primary transition-all duration-300 block py-3"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    whileHover={{ x: 8, color: "hsl(195, 100%, 50%)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      initial={{ backgroundSize: "0% 2px" }}
                      whileHover={{ 
                        backgroundSize: "100% 2px",
                        textShadow: "0 0 8px rgba(2, 132, 199, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        backgroundImage: "linear-gradient(to right, hsl(195, 100%, 50%), hsl(195, 100%, 50%))",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left bottom"
                      }}
                    >
                      {item.label}
                    </motion.span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <motion.button
              className="flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </motion.button>
          </motion.div>

          {/* CTA (Desktop) */}
          <motion.div 
            className="hidden md:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="default" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <a href="tel:+919811347037">Get Quote</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile CTA moved to global layout */}


        </div>
      </div>
    </motion.header>
  );
};

export default Header;