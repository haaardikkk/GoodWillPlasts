import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <motion.div
          className="mx-auto mb-4 h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin"
          aria-hidden="true"
        />
        <p className="text-sm text-muted-foreground">Goodwill Plast is loading…</p>
      </motion.div>
    </div>
  );
};

export default Preloader;