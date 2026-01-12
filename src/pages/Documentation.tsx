import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Clock, BarChart, ChevronRight } from "lucide-react";

const Documentation = () => {
    const guides = [
        { title: "Creating Your First Consult with Composer AI", duration: "3-5 minutes", level: "Beginner", id: 1 },
        { title: "Managing Your Consultations", duration: "3-5 minutes", level: "Beginner", id: 2 },
        { title: "Managing Users and Licenses", duration: "3-5 minutes", level: "Beginner", id: 3 },
        { title: "Inputting Psychometric Test scores", duration: "3-5 minutes", level: "Beginner", id: 4 },
        { title: "Modifying and Customizing Templates", duration: "5-10 minutes", level: "Intermediate", id: 5 },
        { title: "10 Best Practices for Recording a Clinical Consultation", duration: "3-5 minutes", level: "Beginner", id: 6 },
        { title: "10 Best Practices for Providing Effective Context", duration: "3-5 minutes", level: "Beginner", id: 7 },
        { title: "10 Best Practices for Recording Case Conferences", duration: "3-5 minutes", level: "Beginner", id: 8 },
        { title: "Patient Information", duration: "Patient Information", level: "", id: 9 },
        { title: "Consent to Use Composer AI During Your Consultation", duration: "Patient Information", level: "", id: 10 },
        { title: "Composer AI: Patient Information", duration: "Patient Information", level: "", id: 11 },
    ];

    return (
        <AppLayout>
            <div className="space-y-8 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="space-y-4 text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Documentation</h1>
                    <p className="text-muted-foreground text-lg">
                        Learn how to use Composer AI effectively with our comprehensive guides and best practices.
                    </p>
                    <div className="relative max-w-lg mx-auto mt-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search documentation guides..."
                            className="pl-10 h-10 bg-card border-border shadow-sm focus-visible:ring-primary"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Main Content: Guides List */}
                    <div className="lg:col-span-9 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-foreground">11 guides found</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {guides.map((guide) => (
                                <Card key={guide.id} className="bg-card border-border hover:shadow-md transition-shadow group flex flex-col justify-between">
                                    <CardHeader className="space-y-1">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                                                <BookOpen className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                                    {guide.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {guide.level && (
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{guide.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <BarChart className="w-4 h-4" />
                                                    <span>{guide.level}</span>
                                                </div>
                                            </div>
                                        )}
                                        {!guide.level && (
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1.5">
                                                    <FileText className="w-4 h-4" />
                                                    <span>{guide.duration}</span>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                    <CardFooter className="pt-0">
                                        <Button variant="ghost" className="w-full justify-between hover:bg-primary/5 hover:text-primary group-hover:bg-primary/5">
                                            Read Guide
                                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar: Quick Actions */}
                    <div className="lg:col-span-3 space-y-6 sticky top-6">
                        <div className="bg-card border border-border rounded-lg p-5 shadow-sm space-y-4">
                            <h3 className="font-semibold text-foreground mb-2">Quick Actions</h3>
                            <div className="space-y-2">
                                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted/50 font-normal">
                                    Getting Started
                                </Button>
                                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted/50 font-normal">
                                    Best Practices
                                </Button>
                                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted/50 font-normal">
                                    FAQ & Support
                                </Button>
                            </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/10 rounded-lg p-5 shadow-sm space-y-3">
                            <h3 className="font-semibold text-primary">Need Help?</h3>
                            <p className="text-sm text-muted-foreground">Can't find what you're looking for? Contact our support team.</p>
                            <Button className="w-full bg-primary hover:bg-primary/90">Contact Support</Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

import { FileText } from "lucide-react";

export default Documentation;
