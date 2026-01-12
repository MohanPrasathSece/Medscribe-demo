import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Building,
  Building2,
  Video,
  ArrowRight,
  CheckCircle,
  Sparkles,
  UserRound,
  Heart,
  Brain,
  Bone,
  Baby
} from "lucide-react";

const useCases = [
  {
    icon: Stethoscope,
    title: "General Practitioners",
    description: "Streamline your daily consultations with AI that understands primary care workflows and common presentations.",
    benefits: [
      "Quick consultation notes in minutes",
      "Patient education summaries",
      "Referral letter generation",
      "Prescription tracking",
    ],
    color: "from-primary to-emerald-dark",
  },
  {
    icon: Heart,
    title: "Specialists",
    description: "From cardiology to gastroenterology, Composer AI adapts to specialty-specific terminology and documentation needs.",
    benefits: [
      "Specialty-specific templates",
      "Detailed investigation planning",
      "Follow-up letter automation",
      "Case conference support",
    ],
    color: "from-gold to-amber-600",
  },
  {
    icon: Bone,
    title: "Surgeons",
    description: "Pre-operative assessments, surgical notes, and post-operative documentation made fast and accurate.",
    benefits: [
      "Pre-op assessment notes",
      "Surgical procedure documentation",
      "Post-operative summaries",
      "Discharge planning",
    ],
    color: "from-primary to-emerald-dark",
  },
  {
    icon: Brain,
    title: "Allied Health",
    description: "Psychologists, physiotherapists, and allied health professionals can document sessions efficiently.",
    benefits: [
      "Session notes & progress tracking",
      "Treatment plan documentation",
      "BIRP/DAP format support",
      "Multi-session continuity",
    ],
    color: "from-gold to-amber-600",
  },
];

const settings = [
  {
    icon: UserRound,
    title: "Solo Practice",
    description: "Individual practitioners can dramatically reduce documentation time while maintaining high-quality patient records.",
  },
  {
    icon: Building,
    title: "Clinics",
    description: "Small to medium clinics can standardize their documentation process and improve overall efficiency with shared templates.",
  },
  {
    icon: Building2,
    title: "Hospitals",
    description: "Large hospital systems benefit from scalable infrastructure, enterprise-grade security, and comprehensive analytics.",
  },
  {
    icon: Video,
    title: "Telemedicine",
    description: "Virtual consultations are fully supported with real-time transcription during video calls and automatic documentation.",
  },
];

const UseCases = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="medical-section bg-background">
        <div className="container-medical text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-light border border-primary/20 mb-6 opacity-0 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Use Cases</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Built for Every{" "}
            <span className="gradient-text bg-gradient-to-r from-primary to-emerald-dark">Healthcare Professional</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Composer AI helps physicians, surgeons, general practitioners, nurses and allied health professionals focus on what matters most — patient care.
          </p>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="medical-section bg-card pt-16 md:pt-24">
        <div className="container-medical">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center opacity-0 animate-fade-in">
            By Specialty
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="medical-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 pl-2">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Settings Section */}
      <section className="medical-section bg-background">
        <div className="container-medical">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center opacity-0 animate-fade-in">
            By Practice Setting
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {settings.map((setting, index) => (
              <div
                key={setting.title}
                className="medical-card text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-dark rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-glow">
                  <setting.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{setting.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{setting.description}</p>
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
            Find the Right Solution for You
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-10 text-lg">
            Whether you're an individual practitioner or running a hospital network,
            we have a plan that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/transcription">
              <Button variant="gold" size="xl" className="group">
                Try Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="xl"
                className="bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/20"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UseCases;
