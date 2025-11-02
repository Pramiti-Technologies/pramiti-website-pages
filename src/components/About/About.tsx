import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

import { SectionDivider } from '../SectionDivider';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-foreground mb-6">
            About Us
          </h2>
          
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://en.fa-software.com/Public/Admin/202010238071.jpg"
                alt="Software development team collaboration"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-5"
            >
              <p className="text-foreground/90 leading-relaxed">
                Pramiti is a software services company rooted in the quiet brilliance of rural and suburban India — where culture and talent grow organically.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                Guided by global experts and powered by local ingenuity, we blend traditional values with modern technology.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                Our mission is to build <span className="text-primary font-medium">sustainable code</span>: clean, maintainable, and extensible. We believe great software should last, adapt, and serve with integrity.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                Every line we write is crafted with care, designed to endure, and built to earn trust.
              </p>
              
              <p className="text-primary font-medium text-lg">
                At Pramiti, we architect systems that are lean, luminous, and deeply human.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <SectionDivider />
    </section>
  );
}
