import { useState } from 'react';
import { Mandala } from '../Mandala';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  return (
    <>
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Logo and Tagline */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Mandala className="w-16 h-16 text-primary opacity-80" animate={false} />
              </div>
              <h3 className="font-serif text-2xl mb-2">Pramiti</h3>
              <p className="text-background/70 text-sm">
                Architecting systems that are lean, luminous, and deeply human
              </p>
            </div>

            {/* Decorative Divider */}
            <div className="w-full py-4 flex justify-center">
              <svg
                viewBox="0 0 200 20"
                className="w-full max-w-xs text-primary opacity-50"
                fill="currentColor"
              >
                <circle cx="100" cy="10" r="2" />
                <circle cx="85" cy="10" r="1.5" opacity="0.7" />
                <circle cx="115" cy="10" r="1.5" opacity="0.7" />
                <circle cx="70" cy="10" r="1" opacity="0.5" />
                <circle cx="130" cy="10" r="1" opacity="0.5" />
              </svg>
            </div>

            {/* Links and Legal */}
            <div className="text-center space-y-3 text-sm text-background/70">
              <div className="flex justify-center gap-6">
                <button
                  onClick={() => setPrivacyPolicyOpen(true)}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
              
              <p className="text-xs">
                © {currentYear} Pramiti. All rights reserved.
              </p>
              
              <p className="text-xs italic">
                Rooted in tradition. Built for the future.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyPolicyOpen} onOpenChange={setPrivacyPolicyOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Privacy Policy</DialogTitle>
            <DialogDescription>
              PRAMITI INDIA TECH PRIVATE LIMITED
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[calc(90vh-120px)] pr-4">
            <div className="space-y-6 text-sm">
              <p>
                Welcome to Pramiti Technologies (PRAMITI INDIA TECH PRIVATE LIMITED).
                Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website, products, or services.
              </p>

              <section>
                <h3 className="mb-2">1. Introduction</h3>
                <p>
                  At Pramiti Technologies, we are committed to protecting your personal data and respecting your privacy.
                  This Privacy Policy describes how we handle your information in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and relevant Indian data privacy regulations.
                </p>
                <p className="mt-2">
                  By using our website or services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section>
                <h3 className="mb-2">2. Information We Collect</h3>
                <p className="mb-2">We may collect the following types of information:</p>
                
                <div className="ml-4 space-y-3">
                  <div>
                    <h4>A. Personal Information</h4>
                    <p className="mb-1">When you interact with us (such as registering, contacting us, or subscribing), we may collect:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Phone Number</li>
                      <li>Company/Organization Name</li>
                      <li>Billing or Payment Information (if applicable)</li>
                    </ul>
                  </div>

                  <div>
                    <h4>B. Non-Personal Information</h4>
                    <p className="mb-1">We also collect technical and analytical data automatically, such as:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Browser type and version</li>
                      <li>Device information</li>
                      <li>IP address</li>
                      <li>Referring URLs</li>
                      <li>Pages visited and time spent on the site</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-2">3. How We Use Your Information</h3>
                <p className="mb-2">We use the information we collect for the following purposes:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>To provide, maintain, and improve our products and services</li>
                  <li>To communicate with you (support, updates, newsletters)</li>
                  <li>To process your requests, transactions, or registrations</li>
                  <li>To personalize your user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
                <p className="mt-2">We do not sell or rent your personal data to third parties.</p>
              </section>

              <section>
                <h3 className="mb-2">4. Cookies and Tracking Technologies</h3>
                <p className="mb-2">Our website may use cookies and similar technologies to:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Analyze site traffic and user behavior</li>
                  <li>Remember your preferences and improve your experience</li>
                  <li>Deliver relevant content and advertisements</li>
                </ul>
                <p className="mt-2">You can manage or disable cookies through your browser settings.</p>
              </section>

              <section>
                <h3 className="mb-2">5. Data Storage and Security</h3>
                <p>
                  We implement strict technical and organizational measures to protect your data against unauthorized access, loss, misuse, or alteration.
                </p>
                <p className="mt-2">
                  Your data may be stored on secure servers operated by Pramiti Technologies or trusted third-party providers.
                  We use industry-standard encryption and secure protocols (HTTPS/SSL) for data transmission.
                </p>
              </section>

              <section>
                <h3 className="mb-2">6. Data Sharing and Disclosure</h3>
                <p className="mb-2">We may share your data only in the following cases:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>With trusted service providers who assist us in operating our business (under confidentiality agreements)</li>
                  <li>To comply with legal requirements or respond to lawful requests from public authorities</li>
                  <li>To protect our legal rights or prevent fraud</li>
                </ul>
                <p className="mt-2">We never share your personal data for marketing or commercial gain without your consent.</p>
              </section>

              <section>
                <h3 className="mb-2">7. Your Rights</h3>
                <p className="mb-2">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent at any time</li>
                  <li>Object to processing or request data portability</li>
                </ul>
                <p className="mt-2">
                  To exercise these rights, contact us at:<br />
                  📧 privacy@pramititech.com
                </p>
              </section>

              <section>
                <h3 className="mb-2">8. Data Retention</h3>
                <p className="mb-2">We retain your personal data only as long as necessary to:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Fulfill the purpose for which it was collected</li>
                  <li>Comply with legal, accounting, or reporting obligations</li>
                </ul>
                <p className="mt-2">When data is no longer needed, it is securely deleted or anonymized.</p>
              </section>

              <section>
                <h3 className="mb-2">9. International Data Transfers</h3>
                <p>
                  If we transfer your information outside of India, we ensure that appropriate safeguards (such as contractual protections) are in place to comply with data protection standards.
                </p>
              </section>

              <section>
                <h3 className="mb-2">10. Children's Privacy</h3>
                <p>
                  Our website and services are not directed to individuals under the age of 18.
                  We do not knowingly collect personal information from children.
                  If you believe a child has provided us data, please contact us immediately for removal.
                </p>
              </section>

              <section>
                <h3 className="mb-2">11. Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party sites or services.
                  We are not responsible for the privacy practices or content of these external sites.
                  We encourage you to review their privacy policies before sharing any personal information.
                </p>
              </section>

              <section>
                <h3 className="mb-2">12. Updates to This Policy</h3>
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
                  Updates will be posted on this page with a revised "Last Updated" date.
                </p>
              </section>

              <section>
                <h3 className="mb-2">13. Contact Us</h3>
                <p className="mb-2">If you have questions or concerns about this Privacy Policy or your data, please contact us:</p>
                <div className="space-y-1">
                  <p>📍 Pramiti Technologies (PRAMITI INDIA TECH PRIVATE LIMITED)</p>
                  <p>🌐 www.pramititech.com</p>
                  <p>📧 privacy@pramititech.com</p>
                </div>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
