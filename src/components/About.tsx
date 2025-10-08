import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Factory, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "State-of-the-Art Manufacturing",
      description: "Advanced production facilities with latest technology and quality control systems"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Team",
      description: "10+ years of industry experience with dedicated engineers and quality specialists"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Local Excellence",
      description: "Serving B2B clients  with reliable supply chain and prompt delivery"
    }
  ];

  const achievements = [
    "ISO 9001:2015 Certified Manufacturing",
    "UN Certified Packaging Solutions",
    "Food Grade Material Compliance",
    "Environmental Safety Standards",
    "24/7 Quality Assurance Testing",
    "Custom Design Capabilities"
  ];

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center space-x-2 text-primary mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div 
                  className="w-8 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "2rem" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <span className="text-sm font-medium">ABOUT US</span>
              </motion.div>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Leading 
                <motion.span 
                  className="bg-gradient-primary bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                > HDPE</motion.span>
                <br />Manufacturer
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                GoodWill Plast has been at the forefront of HDPE container manufacturing for over 10+ years, 
                providing premium quality drums, containers, and jars to businesses across various industries.
              </motion.p>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                  whileHover={{ scale: 1.02, x: 3 }}
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                    whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 0.5 } }}
                  >
                    <CheckCircle className="text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="font-medium">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { number: "10+", label: "Years" },
                { number: "100+", label: "Clients" },
                { number: "Lowest", label: "Price Guaranteed" },
                { number: "100%", label: "Quality Assurance" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-primary mb-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Features Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-surface-dark border-border hover:border-primary transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="flex-shrink-0 w-16 h-16 bg-gradient-surface rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 30px hsl(195 100% 50% / 0.3)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-lg font-bold mb-2 group-hover:text-primary transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {feature.title}
                        </motion.h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;