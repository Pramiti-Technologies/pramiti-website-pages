import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, TrendingUp, Award, Heart, Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { SectionDivider } from '../SectionDivider';

const values = [
  { icon: TrendingUp, title: "Growth-Focused", description: "Continuous learning and development" },
  { icon: Award, title: "Ownership-Driven", description: "Take initiative and make an impact" },
  { icon: Users, title: "Customer-Obsessed", description: "Build with purpose and empathy" },
  { icon: Heart, title: "Win & Help Others Win", description: "Collaborative success mindset" }
];

const roles = [
  "Full-Stack Developers",
  "Mobile App Developers",
  "UI/UX Designers",
  "AI/ML Engineers",
  "Content Writers & Storytellers",
  "Interns (All Domains)"
];

const testimonials = [
  {
    text: "Working at Pramiti has been transformative. The culture of ownership and the exposure to cutting-edge projects helped me grow exponentially.",
    author: "Kiruthika M.",
    role: "Intern"
  },
  {
    text: "The blend of traditional values with modern technology creates a unique work environment. I'm proud to be part of a team that values both innovation and integrity.",
    author: "Jayandhan K.",
    role: "Backend Developer"
  }
];

export function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="careers" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-foreground mb-6">
            Careers
          </h2>
          
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
            Join a team where culture and talent grow organically
          </p>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full border-border/50">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="mb-2">{value.title}</h3>
                      <p className="text-sm text-foreground/70">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Open Roles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h3 className="text-2xl text-center mb-8 text-foreground">Open Roles</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-3 bg-muted/50 rounded-lg text-center text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {role}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <h3 className="text-2xl text-center mb-8 text-foreground">What Our Team Says</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border/50 bg-card">
                  <CardContent className="pt-6">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-foreground/80 italic mb-4">{testimonial.text}</p>
                    <div className="border-t border-border pt-4">
                      <p className="text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-lg text-foreground mb-6">Ready to grow with us?</p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Let's Grow Together
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <SectionDivider />
    </section>
  );
}
