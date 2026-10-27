import { Phone, Mail, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";
import logoImage from "@/assets/logo-footer.webp";
import gmailLogo from "@/assets/gmail-logo.webp";
import indiamartLogo from "@/assets/indiamart-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-surface-darker border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logoImage} alt="GoodWill Plast company logo" className="w-full h-full object-contain" loading="lazy" decoding="async" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">GoodWill Plast</h3>
                <p className="text-xs text-muted-foreground">HDPE Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Leading manufacturer of premium HDPE drums, containers, and jars for B2B customers across India.
            </p>
            <div className="flex flex-wrap gap-4">
                <a href="https://www.indiamart.com/goodwill-plast/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <img src={indiamartLogo} alt="IndiaMART profile link" className="w-12 h-12 sm:w-14 sm:h-14" loading="lazy" decoding="async" />
                </a>
                <a href="/#contact" aria-label="Go to contact form" className="text-muted-foreground hover:text-primary transition-colors">
                  <img src={gmailLogo} alt="Contact form link" className="w-14 h-14 sm:w-16 sm:h-16" loading="lazy" decoding="async" />
                </a>
              </div>
          </div>

          {/* Products section removed per request */}

         

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col text-sm text-muted-foreground">
                  <a href="tel:+919811347037" className="hover:text-primary transition-colors">+91 98113 47037</a>
                  <a href="tel:+917217679595" className="hover:text-primary transition-colors">+91 72176 79595</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:goodwillplast2015@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">goodwillplast2015@gmail.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <a
                  href="https://maps.app.goo.gl/6rbGfZPBKwKkZbjbA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 hover:text-primary transition-colors"
                  aria-label="Open address in Google Maps"
                >
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    647, Phase-2, Barhi Industrial Area<br />
                    Sonepat, Haryana 131101
                  </span>
                </a>
              </div>
              <div className="flex items-start space-x-3 pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary mt-0.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <div className="text-sm text-muted-foreground">
                  <div>Mon - Sat: 9:00 AM - 6:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
          {/* Social section removed per request */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GoodWill Plast. All rights reserved.
          </p>
          <a href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">Resources</a>
          {/* Policy links removed as requested */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;