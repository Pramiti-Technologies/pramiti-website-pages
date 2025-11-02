import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Mandala } from '../Mandala';
import styles from './Hero.module.css';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">


      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Symbol */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <Mandala className="w-24 h-24 sm:w-32 sm:h-32 text-primary" animate={false} />
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
          >
            Pramiti
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-10 max-w-3xl mx-auto"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Clean, sustainable, and extensible code architecture.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 mt-3">
              Trusted by customers. Powered by cutting-edge technology and lean operations.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('services')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 min-w-[200px]"
            >
              Explore Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('careers')}
              className="border-primary text-primary hover:bg-primary/10 px-8 min-w-[200px]"
            >
              Join Our Team
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary/60 hover:text-primary transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
