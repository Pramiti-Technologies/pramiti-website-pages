import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Linkedin, Github } from 'lucide-react';
import { SectionDivider } from '../SectionDivider';

const team = [
  {
    name: "Manivannan. S",
    role: "Founder",
    quote: "Building sustainable solutions",
    translation: "",
    initials: "M"
  },
  {
    name: "Jayandhan",
    role: "Backend Developer",
    quote: "Crafting robust architectures",
    translation: "",
    initials: "J"
  },
  {
    name: "Krithika",
    role: "Backend Developer",
    quote: "Code with purpose",
    translation: "",
    initials: "K"
  },
  {
    name: "Dishalini",
    role: "Frontend Developer",
    quote: "Designing delightful experiences",
    translation: "",
    initials: "D"
  },
  {
    name: "Naveena",
    role: "Frontend Developer",
    quote: "Building beautiful interfaces",
    translation: "",
    initials: "N"
  }
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-foreground mb-6">
            Our Team
          </h2>
          
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
            A constellation of creators working in harmony
          </p>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Ornate Circular Frame with Temple-inspired Mandala */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  {/* Outermost rotating ring with temple motifs */}
                  <motion.div
                    className="absolute inset-0 text-primary/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 192 192" className="w-full h-full">
                      {/* Outer decorative circle with temple arches */}
                      <circle cx="96" cy="96" r="92" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 4" />
                      
                      {/* Temple-style arches at cardinal points */}
                      {[0, 90, 180, 270].map((angle, i) => (
                        <g key={i} transform={`rotate(${angle} 96 96)`}>
                          <path
                            d="M 96,12 Q 86,20 86,28 L 86,35 L 106,35 L 106,28 Q 106,20 96,12 Z"
                            fill="currentColor"
                            opacity="0.3"
                          />
                        </g>
                      ))}
                    </svg>
                  </motion.div>

                  {/* Second layer - Kolam dots pattern */}
                  <div className="absolute inset-0 text-accent/25">
                    <svg viewBox="0 0 192 192" className="w-full h-full">
                      <circle cx="96" cy="96" r="82" fill="none" stroke="currentColor" strokeWidth="2" />
                      
                      {/* Kolam-style dots in circular pattern */}
                      {[...Array(12)].map((_, i) => {
                        const angle = (i * 30 * Math.PI) / 180;
                        const x = 96 + Math.cos(angle) * 82;
                        const y = 96 + Math.sin(angle) * 82;
                        return (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="3.5"
                            fill="currentColor"
                          />
                        );
                      })}
                      
                      {/* Inner kolam dots */}
                      {[...Array(8)].map((_, i) => {
                        const angle = (i * 45 * Math.PI) / 180;
                        const x = 96 + Math.cos(angle) * 68;
                        const y = 96 + Math.sin(angle) * 68;
                        return (
                          <circle
                            key={`inner-${i}`}
                            cx={x}
                            cy={y}
                            r="2.5"
                            fill="currentColor"
                          />
                        );
                      })}
                    </svg>
                  </div>

                  {/* Third layer - Rotating geometric pattern */}
                  <motion.div
                    className="absolute inset-0 text-secondary/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 192 192" className="w-full h-full">
                      {/* Square frame rotated 45deg */}
                      <rect
                        x="48"
                        y="48"
                        width="96"
                        height="96"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        transform="rotate(45 96 96)"
                      />
                      
                      {/* Inner decorative squares */}
                      {[65, 75].map((size, idx) => (
                        <rect
                          key={idx}
                          x={96 - size / 2}
                          y={96 - size / 2}
                          width={size}
                          height={size}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          opacity="0.4"
                          transform="rotate(45 96 96)"
                        />
                      ))}
                    </svg>
                  </motion.div>

                  {/* Fourth layer - Petal/Lotus pattern */}
                  <div className="absolute inset-0 text-primary/15">
                    <svg viewBox="0 0 192 192" className="w-full h-full">
                      {/* Lotus-like petals */}
                      {[...Array(8)].map((_, i) => {
                        const angle = i * 45;
                        return (
                          <ellipse
                            key={i}
                            cx="96"
                            cy="45"
                            rx="8"
                            ry="18"
                            fill="currentColor"
                            opacity="0.3"
                            transform={`rotate(${angle} 96 96)`}
                          />
                        );
                      })}
                    </svg>
                  </div>

                  {/* Avatar circle with gradient background */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-card to-muted border-2 border-primary/30 flex items-center justify-center text-3xl text-primary shadow-inner">
                      {member.initials}
                    </div>
                  </div>

                  {/* Center decorative dot */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                  </div>
                </div>

                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-sm text-foreground/60 mb-3">{member.role}</p>
                
                {/* Quote */}
                <div className="mt-4 p-4 bg-card rounded-lg border border-border/50 shadow-sm">
                  <p className="text-primary font-serif text-sm mb-1">{member.quote}</p>
                  {member.translation && (
                    <p className="text-xs text-foreground/60 italic">{member.translation}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto text-center bg-card p-8 rounded-lg border border-border/50"
          >
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our team is a blend of experienced professionals and passionate newcomers, united by a common vision: to create technology that matters.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We celebrate diversity, encourage curiosity, and foster an environment where innovation flourishes naturally.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
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
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <SectionDivider />
    </section>
  );
}
