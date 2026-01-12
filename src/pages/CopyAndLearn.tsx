import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Sparkles, Brain, History, CheckCircle2, AlertCircle, FileText, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { useState } from "react";

const CopyAndLearn = () => {
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
        if (!content.trim()) {
            toast.error("Please enter some content first");
            return;
        }
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setContent("");
            toast.success("Sample learned successfully!");
        }, 1500);
    };

    return (
        <AppLayout>
            <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">

                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">Personalization</h1>
                    <p className="text-muted-foreground text-lg font-light">Train the AI to replicate your unique writing style.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Input Form */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-card rounded-xl border border-border/40 p-6 md:p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    <Brain className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">New Training Sample</h2>
                                    <p className="text-sm text-muted-foreground">Add a past letter to style your future consults.</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Document Type</Label>
                                    <Select>
                                        <SelectTrigger className="h-11 bg-muted/20 border-border/50 focus:ring-primary/20">
                                            <SelectValue placeholder="Select type (e.g. Referral Letter)" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="referral">Referral Letter</SelectItem>
                                            <SelectItem value="discharge">Discharge Summary</SelectItem>
                                            <SelectItem value="report">Specialist Report</SelectItem>
                                            <SelectItem value="note">Clinical Note</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Sample Content</Label>
                                    <div className="relative">
                                        <Textarea
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            placeholder="Paste a well-written example here. The AI will analyze your tone, structure, and phrasing..."
                                            className="min-h-[300px] resize-y bg-muted/20 border-border/50 focus-visible:ring-primary/20 p-4 text-base leading-relaxed"
                                        />
                                        <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded-md backdrop-blur-sm border border-border/50">
                                            {content.length} characters
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2">
                                        <AlertCircle className="w-3.5 h-3.5" />
                                        <span>Ensure no patient identifiable information (PII) is included in training samples.</span>
                                    </p>
                                </div>

                                <div className="pt-4 flex flex-col-reverse sm:flex-row gap-3 justify-end">
                                    <Button
                                        variant="ghost"
                                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/5"
                                        onClick={() => setContent("")}
                                    >
                                        Clear
                                    </Button>
                                    <Button
                                        className="h-11 px-8 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 rounded-lg w-full sm:w-auto"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>Analyzing...</>
                                        ) : (
                                            <>
                                                <Sparkles className="w-4 h-4" /> Train AI Model
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-1 space-y-6">

                        {/* Progress Card */}
                        <div className="bg-card rounded-xl border border-border/40 p-6 shadow-sm">
                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-amber-500" /> Style Strength
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-muted-foreground">Analysis Confidence</span>
                                        <span className="font-medium text-emerald-500">60%</span>
                                    </div>
                                    <Progress value={60} className="h-2 bg-muted [&>div]:bg-emerald-500" />
                                    <p className="text-xs text-muted-foreground mt-2">Add 2 more samples to reach optimal accuracy.</p>
                                </div>
                            </div>
                        </div>

                        {/* Recent History */}
                        <div className="bg-card rounded-xl border border-border/40 p-6 shadow-sm">
                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                <History className="w-4 h-4 text-purple-500" /> Recent Samples
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { title: "Cardiology Referral", date: "2 mins ago", type: "Letter" },
                                    { title: "Shoulder Evaluation", date: "1 day ago", type: "Note" },
                                    { title: "Discharge Summary", date: "3 days ago", type: "Summary" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50 cursor-pointer group">
                                        <div className="mt-0.5 p-1.5 rounded bg-primary/10 text-primary">
                                            <FileText className="w-3.5 h-3.5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium truncate group-hover:text-primary transition-colors">{item.title}</h4>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                                                <span>{item.type}</span>
                                                <span>•</span>
                                                <span>{item.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="link" className="w-full text-xs text-muted-foreground mt-2 h-auto p-0 hover:text-primary">
                                View all history <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                        </div>

                        {/* Tips */}
                        <div className="bg-blue-500/5 rounded-xl border border-blue-500/10 p-5">
                            <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4" /> Pro Tips
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-blue-500">•</span>
                                    Use samples that represent your typical sentence structure.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-500">•</span>
                                    Ensure specific formatting (lists, headers) is consistent.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default CopyAndLearn;
