import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Globe, Smartphone, Cloud, Palette, FileCode, Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { SectionDivider } from '../SectionDivider';

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites tailored for performance and scalability",
    technologies: ["React", "Angular", "Svelte", "Node.js"],
    details: "Optimized for SEO, AEO, and GEO with cutting-edge frameworks and best practices."
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native Android and iOS apps, plus cross-platform solutions",
    technologies: ["Java", "Kotlin", "Swift", "Objective-C", "Flutter", "React Native"],
    details: "Seamless user experiences across all devices with native performance."
  },
  {
    icon: Cloud,
    title: "Backend & Cloud Solutions",
    description: "Robust APIs and scalable cloud architectures",
    technologies: ["REST", "GraphQL", "WebSockets", "FastAPI", "Spring Boot", "ExpressJS"],
    details: "Secure integrations for payments, notifications, and both SQL & NoSQL databases. Cloud-native deployment with containerization."
  },
  {
    icon: Palette,
    title: "Design & Brand Identity",
    description: "Intuitive UI/UX for web and mobile applications",
    technologies: ["Figma", "Adobe Creative Suite", "Brand Systems"],
    details: "Complete brand systems including logos, typography, color palettes, and marketing assets like brochures, flyers, and posters."
  },
  {
    icon: FileCode,
    title: "Content Management Systems",
    description: "Flexible CMS solutions for businesses of all sizes",
    technologies: ["WordPress", "Drupal"],
    details: "Easy-to-manage platforms that empower you to control your content without technical expertise."
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI prototypes and intelligent solutions",
    technologies: ["RAG", "LLM", "Computer Vision", "ML Frameworks"],
    details: "Retrieval-Augmented Generation, machine vision for image classification and segmentation. On-premise and cloud deployments for enterprise needs."
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-foreground mb-6">
            Our Services
          </h2>
          
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
            Value-driven solutions backed by cutting-edge technology
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedCard === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-border/50 bg-card">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, isExpanded ? undefined : 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {!isExpanded && service.technologies.length > 3 && (
                          <span className="px-2 py-1 text-muted-foreground text-xs">
                            +{service.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Expandable Details */}
                      {isExpanded && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-foreground/70"
                        >
                          {service.details}
                        </motion.p>
                      )}

                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => setExpandedCard(isExpanded ? null : index)}
                        className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            Show less <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Learn more <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
            >
              Discuss Your Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <SectionDivider />
    </section>
  );
}
