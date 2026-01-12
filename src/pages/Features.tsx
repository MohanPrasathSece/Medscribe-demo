import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FileText,
  Zap,
  Shield,
  Building2,
  Clock,
  Brain,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Mic,
  FileCheck,
  Users,
  Pill,
  Edit3,
  Download,
  RefreshCw
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Clinical Decision Support",
    description: "Composer AI doesn't just transcribe — it interprets symptoms, suggests impressions and differentials, and generates structured, evidence-based notes.",
    highlights: ["Symptom Interpretation", "Differential Diagnosis", "Evidence-Based Notes"],
  },
  {
    icon: Mic,
    title: "Real-Time Transcription",
    description: "Record your consultation or upload audio. Composer securely captures and summarizes clinical details from patient conversations.",
    highlights: ["Live Recording", "Audio Upload", "Multi-Speaker Support"],
  },
  {
    icon: FileText,
    title: "Smart Medical Formatting",
    description: "Automatically generates SOAP, DAP, BIRP, or custom medical notes using accurate terminology by interpreting symptoms and findings.",
    highlights: ["SOAP Notes", "DAP Notes", "Custom Templates"],
  },
  {
    icon: Pill,
    title: "Medication Reconciliation",
    description: "High-fidelity tracking of medication history ensures safer care and minimizes the risk of omissions or errors.",
    highlights: ["Medication Tracking", "Drug Interactions", "Prescription History"],
  },
  {
    icon: Edit3,
    title: "Personalized Writing Style",
    description: "Click 'Save & Learn' to teach Composer your preferred style, or upload external letters to replicate your clinical voice.",
    highlights: ["Style Learning", "Tone Matching", "Voice Replication"],
  },
  {
    icon: FileCheck,
    title: "Letters & Referrals",
    description: "Instantly generate letters, referrals, and discharge summaries. Export to your EMR or share securely in just one click.",
    highlights: ["Referral Letters", "Discharge Summaries", "EMR Export"],
  },
  {
    icon: Shield,
    title: "Privacy & Compliance",
    description: "Full compliance to APPs, NZ IPPs, and HIPAA. Every consultation is encrypted, securely stored, and handled to the highest standards.",
    highlights: ["HIPAA Compliant", "APPs Compliant", "End-to-End Encryption"],
  },
  {
    icon: Users,
    title: "Multi-Speaker & Case Conferences",
    description: "Built for real clinical environments including case conferences with multiple speakers and complex discussions.",
    highlights: ["Multi-Speaker Detection", "Case Conferences", "Team Meetings"],
  },
  {
    icon: RefreshCw,
    title: "Fast Review Workflow",
    description: "Quickly review, edit, and approve transcriptions. Smart suggestions help catch and correct errors before finalizing.",
    highlights: ["Quick Edit Mode", "Smart Suggestions", "One-Click Approve"],
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="medical-section bg-background">
        <div className="container-medical text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-light border border-primary/20 mb-6 opacity-0 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Everything You Need for{" "}
            <span className="gradient-text bg-gradient-to-r from-primary to-emerald-dark">Modern Clinical Documentation</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Composer AI is more than a transcription tool. It's your intelligent clinical partner —
            designed to enhance documentation and support safer, evidence-based care.
          </p>
          <Link to="/transcription" className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="premium" size="xl" className="group">
              Try It Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="medical-section bg-card pt-16 md:pt-24">
        <div className="container-medical">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="medical-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-dark rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CDSS Highlight Section */}
      <section className="medical-section bg-background">
        <div className="container-medical">
          <div className="glass-card p-10 md:p-16 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald-dark rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Brain className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Built as a Clinical Decision Support System
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mb-8">
              Unlike other AI scribes that simply transcribe conversations, <strong className="text-foreground">Composer AI</strong> is built from the ground up as a Clinical Decision Support System (CDSS).
              It doesn't just record what was said — it interprets, structures, and reasons with the information, giving clinicians a deeper, safer, and more useful record.
            </p>
            <Link to="/signup">
              <Button variant="premium" size="lg">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="medical-section bg-gradient-to-br from-primary to-emerald-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container-medical text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-10 text-lg">
            Experience the future of medical documentation. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="gold" size="xl">
                Get Started Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="xl"
                className="bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/20"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
