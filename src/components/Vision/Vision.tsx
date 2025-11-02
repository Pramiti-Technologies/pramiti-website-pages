import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Compass, Heart, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { SectionDivider } from '../SectionDivider';

const highlights = [
  {
    icon: Target,
    title: "Globally Respected",
    description: "Building a technology organization recognized worldwide"
  },
  {
    icon: Heart,
    title: "Empowering Rural India",
    description: "Fostering innovation and bridging academia-industry gaps"
  },
  {
    icon: Lightbulb,
    title: "Sustainable Products",
    description: "Creating solutions that last and adapt"
  },
  {
    icon: Compass,
    title: "Compassionate Capitalism",
    description: "Benefits society while avoiding concentrated urbanization"
  }
];

export function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-foreground mb-6">
            Vision & Mission
          </h2>
          
          <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>

          <div className="max-w-5xl mx-auto">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl text-center text-primary mb-8">Our Vision</h3>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/20">
                <p className="text-lg text-foreground/90 leading-relaxed text-center">
                  To build a globally respected technology organization that empowers rural India, fosters innovation, and bridges the gap between academia and industry. We aim to create sustainable products, nurture exceptional talent, and lead with a compassionate, capitalist approach that benefits society and avoids concentrated urbanization.
                </p>
              </div>
            </motion.div>

            {/* Vision Highlights */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="text-center h-full border-border/50 hover:border-primary/30 transition-colors">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <h4 className="mb-2 text-sm">{highlight.title}</h4>
                        <p className="text-xs text-foreground/70">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl text-center text-accent mb-8">Our Mission</h3>
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-lg border border-accent/20">
                <div className="space-y-4 text-foreground/90">
                  <p className="leading-relaxed">
                    <span className="text-accent">▸</span> Deliver elegant full-stack solutions that combine technical excellence with thoughtful design
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-accent">▸</span> Explore AI/ML mindfully, ensuring technology serves human needs responsibly
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-accent">▸</span> Uplift communities through design, creating opportunities for talent in rural and suburban India
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-accent">▸</span> Build with integrity, crafting code that is clean, maintainable, and built to last
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <SectionDivider />
    </section>
  );
}
