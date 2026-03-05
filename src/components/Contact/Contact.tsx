import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Mail, Send, Linkedin, Github, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Card, CardContent } from '../ui/card';

export function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'customer' // customer or hire
  });

  // Handle click outside to close form
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showForm && formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm]);

  const handleCardClick = (type: 'customer' | 'hire') => {
    setFormData({ ...formData, type });
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '', type: 'customer' });
    setShowForm(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-foreground mb-6">
            Get In Touch
          </h2>
          
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>

          <div className="max-w-5xl mx-auto">
            {/* Dual Prompts */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className={`border-primary/30 hover:border-primary/50 transition-all cursor-pointer h-full ${showForm && formData.type === 'customer' ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => handleCardClick('customer')}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl mb-2 text-primary">For Customers</h3>
                    <p className="text-foreground/70">Let's build together</p>
                    <p className="text-sm text-foreground/60 mt-2">
                      Discuss your project and explore how we can help
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className={`border-accent/30 hover:border-accent/50 transition-all cursor-pointer h-full ${showForm && formData.type === 'hire' ? 'ring-2 ring-accent' : ''}`}
                  onClick={() => handleCardClick('hire')}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl mb-2 text-accent">For Talent</h3>
                    <p className="text-foreground/70">Let's grow together</p>
                    <p className="text-sm text-foreground/60 mt-2">
                      Join our team and be part of something meaningful
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form - Only show when card is clicked */}
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 30, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -30, height: 0 }}
                transition={{ duration: 0.5 }}
                ref={formRef}
              >
                <Card className="max-w-2xl mx-auto border-border/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-center">
                      <p className="text-sm text-foreground/60">
                        {formData.type === 'customer' ? '📧 Tell us about your project' : '🚀 Tell us about yourself'}
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          required
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={formData.type === 'customer' ? "Tell us about your project..." : "Tell us about yourself and your interests..."}
                          rows={5}
                          required
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Button
                          type="submit"
                          size="lg"
                          className={`w-full ${formData.type === 'customer' ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90'}`}
                        >
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <p className="text-foreground/70 mb-4">
                Email: <a href="mailto:contact@pramiti.co.in" className="text-primary hover:underline">contact@pramiti.co.in</a>
              </p>
              
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
