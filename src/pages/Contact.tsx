import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Mail,
  Phone,
  FileQuestion,
  LifeBuoy,
  Send,
  User,
  ShieldCheck
} from "lucide-react";

const Contact = () => {
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in pb-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground/90">Support Center</h1>
            <p className="text-muted-foreground mt-2 text-lg font-light">
              We're here to help you get the most out of Composer AI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="medical-card">
              <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xl">Send us a message</h3>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Support Category</label>
                    <select className="medical-input bg-background/50">
                      <option>Technical Issue</option>
                      <option>Billing & Subscription</option>
                      <option>Feature Request</option>
                      <option>Account Assistance</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Priority</label>
                    <select className="medical-input bg-background/50">
                      <option>Normal</option>
                      <option>High</option>
                      <option>Urgent (Patient Safety)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Subject</label>
                  <input type="text" className="medical-input bg-background/50" placeholder="Brief summary of your issue" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Description</label>
                  <textarea className="medical-input min-h-[150px] resize-y bg-background/50" placeholder="Please describe the issue in detail..." />
                </div>

                <div className="pt-2 flex justify-end">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-full shadow-lg shadow-primary/20">
                    Submit Ticket <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Info & Resources */}
          <div className="space-y-6">

            {/* Success Manager Card */}
            <div className="medical-card bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-lg">Your Success Manager</h3>
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full border-2 border-white/50 shadow-sm overflow-hidden">
                  <img src="https://github.com/shadcn.png" alt="Manager" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Sarah Wilson</p>
                  <p className="text-xs text-muted-foreground">Senior Account Specialist</p>
                  <p className="text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full w-fit mt-1">Online Now</p>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start w-full bg-white/50 dark:bg-black/20 border-primary/10 hover:bg-primary/5 hover:text-primary">
                  <Mail className="w-4 h-4 mr-2" /> sarah@composerai.com
                </Button>
                <Button variant="outline" className="w-full justify-start w-full bg-white/50 dark:bg-black/20 border-primary/10 hover:bg-primary/5 hover:text-primary">
                  <Phone className="w-4 h-4 mr-2" /> +1 (555) 000-0000
                </Button>
              </div>
            </div>

            {/* Quick Resources */}
            <div className="medical-card">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <LifeBuoy className="w-5 h-5 text-blue-500" />
                Quick Resources
              </h3>
              <div className="space-y-2">
                <a href="/documentation" className="block p-3 rounded-xl hover:bg-muted/50 transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">Documentation</span>
                    <FileQuestion className="w-4 h-4 text-muted-foreground" />
                  </div>
                </a>
                <a href="#" className="block p-3 rounded-xl hover:bg-muted/50 transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">Video Tutorials</span>
                    <FileQuestion className="w-4 h-4 text-muted-foreground" />
                  </div>
                </a>
                <a href="#" className="block p-3 rounded-xl hover:bg-muted/50 transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">System Status</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </AppLayout>
  );
};

export default Contact;
