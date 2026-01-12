import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Sparkles,
  User,
  Users,
  Building2,
  Zap,
  ArrowRight,
  Star
} from "lucide-react";

const plans = [
  {
    name: "Practice Solo",
    description: "Perfect for individual practitioners",
    price: "$99",
    period: "/month",
    icon: User,
    popular: false,
    features: [
      "Unlimited consultations",
      "Real-time transcription",
      "SOAP, DAP & custom templates",
      "Letters & referrals generation",
      "Copy & Learn style training",
      "EMR export",
      "APPs, NZ IPPs & HIPAA compliant",
      "Email support",
    ],
    cta: "Start Free Trial",
    ctaVariant: "premium-outline" as const,
  },
  {
    name: "Practice Clinic",
    description: "For clinics and small teams",
    price: "$249",
    period: "/month",
    icon: Users,
    popular: true,
    features: [
      "Everything in Practice Solo",
      "Up to 5 practitioner licenses",
      "Team dashboard & analytics",
      "Shared templates library",
      "Multi-speaker support",
      "Priority support",
      "Admin controls & user management",
      "Custom branding options",
    ],
    cta: "Start Free Trial",
    ctaVariant: "premium" as const,
  },
  {
    name: "Enterprise",
    description: "For hospitals and large organizations",
    price: "Custom",
    period: "",
    icon: Building2,
    popular: false,
    features: [
      "Everything in Practice Clinic",
      "Unlimited practitioner licenses",
      "Dedicated account manager",
      "Custom integrations",
      "SSO & advanced security",
      "On-premise deployment option",
      "SLA guarantee",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    ctaVariant: "premium-outline" as const,
  },
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans come with a 14-day free trial. No credit card required to get started.",
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
  },
  {
    question: "How secure is my data?",
    answer: "We take security seriously. Composer AI is fully compliant with APPs, NZ IPPs, and HIPAA. All data is encrypted end-to-end and stored securely in Australia.",
  },
  {
    question: "What EMR systems do you integrate with?",
    answer: "We support export to most major EMR systems including Best Practice, Medical Director, Genie, and more. Contact us for specific integration requirements.",
  },
  {
    question: "Can I add more users to Practice Clinic?",
    answer: "Yes, additional licenses can be purchased for $49/month per user beyond the included 5 licenses.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="medical-section bg-background">
        <div className="container-medical text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-light border border-primary/20 mb-6 opacity-0 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Choose Your{" "}
            <span className="gradient-text bg-gradient-to-r from-primary to-emerald-dark">Plan</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Start free, upgrade when you're ready. All plans include a 14-day trial with no credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="medical-section bg-card pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="container-medical">
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative medical-card opacity-0 animate-fade-in ${plan.popular ? 'border-2 border-primary shadow-lg' : ''}`}
                style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-emerald-dark text-primary-foreground text-sm font-medium">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 ${plan.popular ? 'bg-gradient-to-br from-primary to-emerald-dark' : 'bg-primary/10'}`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.name === "Enterprise" ? "/contact" : "/signup"} className="block">
                  <Button variant={plan.ctaVariant} size="lg" className="w-full group">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="medical-section bg-background">
        <div className="container-medical">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="glass-card p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="medical-section bg-gradient-to-br from-primary to-emerald-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container-medical text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Still have questions?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">
            Our team is here to help. Get in touch and we'll get back to you within 24 hours.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl" className="group">
              Contact Us
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
