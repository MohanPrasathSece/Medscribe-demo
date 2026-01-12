import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-medical py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <img src={logoImage} alt="Composer AI Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                Composer <span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-4">
              Automated Clinical Notes — Fast, Accurate, Evidence-Based. 
              Built for clinicians, designed for patient care.
            </p>
            <p className="text-sm text-muted-foreground">
              Trusted by 500+ doctors across Australia, New Zealand, and beyond.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/transcription" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Try Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-300">
                  Documentation
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-300">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Composer AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm text-muted-foreground">APPs Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm text-muted-foreground">NZ IPPs Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm text-muted-foreground">HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
