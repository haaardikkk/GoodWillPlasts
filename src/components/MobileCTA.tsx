import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const MobileCTA = () => {
  return (
    <motion.div
      className="md:hidden fixed bottom-4 right-4 z-[120]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <motion.a
        href="tel:+919811347037"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Get Quote"
      >
        <Button variant="default" className="bg-gradient-primary shadow-glow transition-all duration-300">
          <Phone className="w-4 h-4" />
          <span>Get Quote</span>
        </Button>
      </motion.a>
    </motion.div>
  );
};

export default MobileCTA;