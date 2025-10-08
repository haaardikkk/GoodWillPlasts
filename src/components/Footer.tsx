import { Phone, Mail, MapPin } from "lucide-react";
import logoImage from "@/assets/logo(1).png";
import gmailLogo from "@/assets/gmail-logo.png";
import indiamartLogo from "@/assets/indiamart logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-darker border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logoImage} alt="GoodWill Plast" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">GoodWill Plast</h3>
                <p className="text-xs text-muted-foreground">HDPE Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Leading manufacturer of premium HDPE drums, containers, and jars for B2B applications worldwide.
            </p>
            <div className="flex space-x-4">
                <a href="https://www.indiamart.com/goodwill-plast/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <img src={indiamartLogo} alt="IndiaMART" className="w-14 h-14" />
                </a>
                <a href="#contact" aria-label="Go to contact form" className="text-muted-foreground hover:text-primary transition-colors">
                  <img src={gmailLogo} alt="Contact Form" className="w-16 h-16" />
                </a>
              </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#product-categories" className="hover:text-primary transition-colors">HDPE Drums</a></li>
              <li><a href="#product-categories" className="hover:text-primary transition-colors">Storage Containers</a></li>
              <li><a href="#product-categories" className="hover:text-primary transition-colors">Specialty Jars</a></li>
              <li><a href="#product-categories" className="hover:text-primary transition-colors">Custom Solutions</a></li>
              <li><a href="#product-categories" className="hover:text-primary transition-colors">Food Grade Products</a></li>
            </ul>
          </div>

         

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <div>+91 9811347037</div>
                  <div>+91 7217679595</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">goodwillplast2015@gmail.com</span>
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
                    647,Phase-2, Barhi industrial area<br />
                    Sonepat,Haryana 131101
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 GoodWill Plast. All rights reserved.
          </p>
          {/* Policy links removed as requested */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;