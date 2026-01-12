import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Tablet, Smartphone, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const devices = [
  {
    icon: Monitor,
    name: "Desktop",
    description: "Full-featured experience with multi-panel layout for efficient documentation.",
    features: ["Split-screen view", "Keyboard shortcuts", "Multi-window support", "Large display optimization"],
  },
  {
    icon: Tablet,
    name: "Tablet",
    description: "Perfect for bedside documentation with touch-optimized interface.",
    features: ["Touch-friendly controls", "Portrait & landscape modes", "Quick access toolbar", "Stylus support"],
  },
  {
    icon: Smartphone,
    name: "Mobile",
    description: "Document on-the-go with a streamlined mobile experience.",
    features: ["One-handed operation", "Voice-first design", "Offline capability", "Quick notes mode"],
  },
];

const Devices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="medical-section bg-background">
        <div className="container-medical text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-light border border-primary/20 mb-6 opacity-0 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cross-Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Works Seamlessly on{" "}
            <span className="gradient-text bg-gradient-to-r from-primary to-emerald-dark">All Devices</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Whether you're at your desk, at the bedside, or on-the-go, 
            MedScribe provides a consistent and optimized experience.
          </p>
        </div>
      </section>

      {/* Device Showcase */}
      <section className="medical-section bg-card pt-0">
        <div className="container-medical">
          {/* Visual Device Display */}
          <div className="flex justify-center items-end gap-4 md:gap-8 mb-20 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Desktop */}
            <div className="relative group">
              <div className="w-48 md:w-80 h-32 md:h-48 bg-foreground rounded-t-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <div className="w-44 md:w-72 h-28 md:h-40 bg-gradient-to-br from-primary/10 to-emerald-light rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto mb-2" />
                    <p className="text-xs md:text-sm text-muted-foreground font-medium">Desktop</p>
                  </div>
                </div>
              </div>
              <div className="w-56 md:w-96 h-3 md:h-4 bg-foreground mx-auto rounded-b-sm"></div>
              <div className="w-32 md:w-48 h-2 md:h-3 bg-muted mx-auto rounded-b"></div>
            </div>

            {/* Tablet */}
            <div className="relative group">
              <div className="w-24 md:w-40 h-32 md:h-52 bg-foreground rounded-2xl flex items-center justify-center p-1.5 md:p-2.5 transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-emerald-light rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Tablet className="w-6 h-6 md:w-10 md:h-10 text-primary mx-auto mb-1 md:mb-2" />
                    <p className="text-xs text-muted-foreground font-medium">Tablet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="relative group">
              <div className="w-14 md:w-20 h-28 md:h-40 bg-foreground rounded-xl flex items-center justify-center p-1 transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-emerald-light rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-4 h-4 md:w-6 md:h-6 text-primary mx-auto mb-1" />
                    <p className="text-[8px] md:text-xs text-muted-foreground font-medium">Mobile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Device Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {devices.map((device, index) => (
              <div
                key={device.name}
                className="medical-card text-center group opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15 + 0.4}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-emerald-light rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  <device.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{device.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{device.description}</p>
                <ul className="space-y-3 text-left">
                  {device.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="medical-section bg-background">
        <div className="container-medical text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Try It On Your Device
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Experience the responsive design yourself. Our demo works on any device you use.
          </p>
          <Link to="/transcription">
            <Button variant="premium" size="xl" className="group">
              Launch Demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Devices;
