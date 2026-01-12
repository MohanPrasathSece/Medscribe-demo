import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Mic,
  Zap,
  Shield,
  Users,
  ArrowRight,
  FileText,
  Sparkles,
  Upload,
  Brain,
  Clock,
  Stethoscope,
  CheckCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
  Pill,
  FileCheck,
  Lock,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    icon: Brain,
    title: "The AI scribe built as a Clinical Decision Support System",
    description: "Composer AI doesn't just transcribe. It interprets symptoms, suggests impressions and differentials, reconciles medications, and generates structured, evidence-based notes — supporting clinical reasoning at the point of care.",
  },
  {
    icon: Clock,
    title: "Clinical notes done in minutes, not hours",
    description: "Composer AI automates consultation notes, letters, and reports with medical precision — saving clinicians hours of paperwork every week so they can spend more time with patients, not paperwork.",
  },
  {
    icon: Stethoscope,
    title: "By doctors, for doctors — precise, evidence-based documentation",
    description: "Designed by clinicians, Composer AI deeply understands medicine. It uses the right terminology, summarizes patient education, and minimizes errors — ensuring documentation is accurate, compliant, and clinically relevant.",
  },
  {
    icon: Shield,
    title: "APPs, NZ IPPs, and HIPAA compliant — secure by design",
    description: "Composer AI safeguards patient confidentiality with full compliance to the Australian Privacy Principles (APPs), New Zealand Information Privacy Principles (NZ IPPs), and HIPAA. Every consultation is encrypted and securely stored.",
  },
];

const howItWorks = [
  {
    step: "Step 1",
    title: "Capture",
    description: "Record your consultation or upload audio. Composer securely captures and summarizes clinical details from patient conversations—whether recorded live or uploaded as audio.",
  },
  {
    step: "Step 2",
    title: "Interpret & Structure",
    description: "Composer interprets symptoms, findings, and management plans — automatically generates SOAP, DAP, or custom medical notes using accurate terminology.",
  },
  {
    step: "Step 3",
    title: "Output & Share",
    description: "Instantly generate letters, referrals, and discharge summaries. Export to your EMR or share securely in just one click.",
  },
  {
    step: "Step 4",
    title: "Personalize Your Letters",
    description: "Composer AI refines its writing to match your professional tone and structure — click 'Save & Learn' to teach it your preferred style.",
  },
];

const cdssFeatures = [
  {
    icon: Brain,
    title: "Interprets, not just transcribes",
    description: "Composer extracts key clinical findings, interprets symptoms, and presents impressions and differentials — turning raw conversation into actionable medical documentation.",
  },
  {
    icon: Pill,
    title: "Medication reconciliation with accuracy",
    description: "High-fidelity tracking of medication history ensures safer care and minimizes the risk of omissions or errors.",
  },
  {
    icon: FileCheck,
    title: "Evidence-based insights, seamlessly delivered",
    description: "Recommendations for investigations, referrals, and management plans are embedded within the note itself — supporting decision-making without overwhelming clinicians.",
  },
];

const helpFeatures = [
  "Structured notes (SOAP/DAP/BIRP/custom templates)",
  "Accurate medical terminology",
  "Summarizes patient education",
  "Generates letters, referrals, discharge summaries",
  "Built for case conferences (multi-speaker)",
  "Secure, compliant, data stored in Australia",
];

const privacyFeatures = [
  {
    icon: Zap,
    title: "Instant transcription",
    description: "Spoken word is converted to text, no audio stored.",
  },
  {
    icon: Lock,
    title: "Confidentiality first",
    description: "Patient identifiers are optional and limited to the patient's name only.",
  },
  {
    icon: Shield,
    title: "Local & compliant",
    description: "Data is processed and stored in Australia, fully adherent to privacy laws.",
  },
  {
    icon: Lock,
    title: "End-to-end encryption",
    description: "All data is securely encrypted in transit and in storage.",
  },
];

const testimonials = [
  {
    quote: "Composer has completely transformed my patient interactions. I make more eye contact, spend less time typing, and save valuable time during every session!",
    author: "Dr. Valli Manickam",
    title: "Nephrologist, QLD",
  },
  {
    quote: "Slick, fast accurate, Composer helps me get through clinics quickly.",
    author: "Dr. Arun S",
    title: "Cardiothoracic surgeon, KL, Malaysia",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="medical-section bg-background overflow-hidden relative">
        {/* Waveform Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="flex items-center gap-1">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 md:w-2 rounded-full ${i < 20 ? 'bg-blue-400' : i < 40 ? 'bg-primary' : 'bg-pink-400'}`}
                style={{
                  height: `${Math.sin(i * 0.2) * 100 + 120}px`,
                  opacity: 0.5 + Math.sin(i * 0.15) * 0.5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container-medical relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-light border border-primary/20 mb-6 animate-fade-in">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-emerald-950">Trusted by 500+ doctors</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text bg-gradient-to-r from-primary to-emerald-dark">Composer AI</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Automated Clinical Notes — Fast, Accurate, Evidence-Based
            </p>

            {/* Carousel */}
            <div className="glass-card p-8 md:p-10 mb-10 opacity-0 animate-fade-in relative" style={{ animationDelay: "0.3s" }}>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {(() => {
                    const IconComponent = heroSlides[currentSlide].icon;
                    return <IconComponent className="w-8 h-8 text-primary-foreground" />;
                  })()}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{heroSlides[currentSlide].title}</h3>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">{heroSlides[currentSlide].description}</p>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/signup">
                <Button variant="premium" size="xl" className="w-full sm:w-auto group">
                  <Zap className="w-5 h-5" />
                  Get Started Free
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>(No credit card required)</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="medical-section bg-card">
        <div className="container-medical">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How <span className="text-primary">Composer AI</span> works
            </h2>
          </div>

          <div className="space-y-20">
            {howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="max-w-4xl mx-auto opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="medical-section bg-gradient-to-br from-primary to-emerald-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container-medical text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            The problem?
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary-foreground/90 mb-6">
            Doctors spend more time on paperwork than on patients
          </p>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Studies show clinicians spend 2+ hours a day documenting. Composer AI reduces that burden by automating notes, reports, and letters with medical precision.
          </p>
        </div>
      </section>

      {/* Why Composer AI is Different */}
      <section className="medical-section bg-background">
        <div className="container-medical">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why <span className="text-primary">Composer AI</span> is Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <strong>Composer AI: Built as a Clinical Decision Support System from the Ground Up</strong>
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
              Unlike other AI scribes that simply transcribe conversations, Composer AI is built from the ground up as a Clinical Decision Support System (CDSS). It doesn't just record what was said — it interprets, structures, and reasons with the information.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cdssFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="medical-card group opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-emerald-light rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Composer AI is more than a transcription tool. It's your intelligent clinical partner — designed to enhance documentation and support safer, evidence-based care.
            </p>
          </div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="medical-section bg-card">
        <div className="container-medical">
          <div className="max-w-4xl mx-auto">
            <div className="opacity-0 animate-fade-in text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How it helps</h2>
              <p className="text-xl text-primary font-medium mb-8">Focus, organize, streamline, automate</p>
              <p className="text-muted-foreground mb-8">
                <strong>Composer AI</strong> helps physicians, surgeons, general practitioners, nurses and allied health to:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-left">
                {helpFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 justify-center md:justify-start">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="medical-section bg-background">
        <div className="container-medical">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Privacy & security, from the ground up
            </h2>
            <p className="text-xl text-muted-foreground">
              Your data, always protected — APPs, NZ IPPs, and HIPAA compliant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="medical-card text-center group opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-emerald-light rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-muted-foreground">
              <strong className="text-foreground">No data sales:</strong> Your data and your patients' data are never sold to third parties.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="medical-section bg-card">
        <div className="container-medical">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Trusted by healthcare providers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="glass-card p-8 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-lg text-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="medical-section bg-gradient-to-br from-primary to-emerald-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container-medical text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to spend less time on paperwork?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
            Try Composer AI free today — built for clinicians, designed for patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="gold" size="xl" className="group">
                <Zap className="w-5 h-5" />
                Get Started Free
              </Button>
            </Link>
          </div>
          <p className="text-white/70 text-sm mt-4">No credit card required</p>
        </div>
      </section>
    </Layout >
  );
};

export default Index;
