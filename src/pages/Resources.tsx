import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Resources = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Resources & Blog — Industrial Packaging Insights
        </motion.h1>
        <p className="text-muted-foreground mb-10">
          Explore guides on plastic drums, HDPE containers, and industrial packaging for B2B buyers in India. Learn how to choose the right product and optimize storage and transport.
        </p>

        <div className="space-y-10">
          <article className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">How to Choose the Right Plastic Drum for Industrial Use</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Selecting the correct drum depends on capacity, material (HDPE), application (chemicals, food-grade), and compliance. We manufacture open mouth drums, rocket drums, taper drums, and double layered drums suitable for industrial liquids and chemicals.
            </p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground mb-4">
              <li>Capacity options: 35L, 50L, and custom</li>
              <li>HDPE plastic for durability and leak-proof storage</li>
              <li>Available in multiple colors for identification</li>
            </ul>
            <a href="#product-categories" className="text-primary hover:underline">Browse HDPE drums</a>
          </article>

          <article className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">Top Benefits of HDPE Containers for Liquid Storage</h2>
            <p className="text-sm text-muted-foreground mb-4">
              HDPE containers offer chemical resistance, light weight, and longevity. For edible oil, chemicals, and industrial liquids, we supply jars, cans, and narrow mouth solutions with secure lids and spouts.
            </p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground mb-4">
              <li>Food-grade and industrial-grade options</li>
              <li>Varied neck sizes and spout types</li>
              <li>Bulk orders across India</li>
            </ul>
            <a href="#product-categories" className="text-primary hover:underline">Explore plastic containers</a>
          </article>

          <article className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">GoodwillPlast — Trusted Supplier for Industrial Packaging</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We’re a B2B supplier of plastic drums, containers, cans, barrels, and specialized HDPE packaging solutions. Our factory in Sonepat, Haryana serves customers across India with quick delivery and consistent quality.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="text-primary hover:underline">Contact us for bulk orders</a>
              <Link to="/" className="text-primary hover:underline">Back to Home</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Resources;