import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye, Copy, Heart, FileText, Mail, Plus, StickyNote, Star, Layout } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useState } from "react";

const Templates = () => {
    const templates = [
        { id: 1, name: "ASP Pain (follow-up)", type: "System", category: "Clinical Note", personality: "Physician", description: "Standard follow-up assessment for pain management patients." },
        { id: 2, name: "Cardiology Referral", type: "System", category: "Referral Letter", personality: "Physician", description: "Detailed referral letter for cardiac specialist consultation." },
        { id: 3, name: "Gastroenterology", type: "System", category: "Clinical Note", personality: "Physician", description: "Initial assessment template for GI complaints." },
        { id: 4, name: "General Practice Plan", type: "System", category: "Care Plan", personality: "GP", description: "Comprehensive management plan for chronic conditions." },
        { id: 5, name: "Mental Health Plan", type: "System", category: "Care Plan", personality: "GP", description: "Structured mental healthcare treatment plan." },
        { id: 6, name: "Generic Letter", type: "System", category: "Letter", personality: "General", description: "Blank structure for general correspondence." },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("all");

    const filteredTemplates = templates.filter(t =>
        (filter === "all" || t.category.includes(filter)) &&
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AppLayout>
            <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">Templates</h1>
                        <p className="text-muted-foreground mt-2 text-lg font-light">Streamline your documentation with smart templates.</p>
                    </div>
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 px-6 h-12 gap-2">
                        <Plus className="w-5 h-5" /> Create Template
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-sm flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-muted/50 text-foreground/70">
                            <Layout className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Total</p>
                            <h3 className="text-2xl font-bold text-foreground">84</h3>
                        </div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-sm flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-muted/50 text-foreground/70">
                            <StickyNote className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Custom</p>
                            <h3 className="text-2xl font-bold text-foreground">12</h3>
                        </div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-sm flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-muted/50 text-foreground/70">
                            <Star className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Favorites</p>
                            <h3 className="text-2xl font-bold text-foreground">5</h3>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    {/* Controls */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setFilter}>
                            <TabsList className="bg-muted/30 p-1 rounded-lg h-auto flex-wrap md:flex-nowrap justify-start w-full md:w-auto overflow-x-auto no-scrollbar">
                                <TabsTrigger value="all" className="rounded-md px-4 py-2 text-sm flex-1 md:flex-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">All</TabsTrigger>
                                <TabsTrigger value="Note" className="rounded-md px-4 py-2 text-sm flex-1 md:flex-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">Clinical Notes</TabsTrigger>
                                <TabsTrigger value="Letter" className="rounded-md px-4 py-2 text-sm flex-1 md:flex-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">Referrals</TabsTrigger>
                                <TabsTrigger value="Care Plan" className="rounded-md px-4 py-2 text-sm flex-1 md:flex-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">Care Plans</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div className="w-full md:w-[300px] relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search templates..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 h-10 rounded-lg bg-white dark:bg-zinc-900 border-border/50 focus-visible:ring-primary/20 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Template Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredTemplates.map((template) => (
                            <div key={template.id} className="bg-card rounded-xl border border-border/40 p-5 hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2.5 rounded-xl bg-primary/5 text-primary border border-primary/10">
                                        {template.category.includes("Letter") ? <Mail className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-amber-500 -mr-2">
                                        <Heart className="w-4 h-4" />
                                    </Button>
                                </div>

                                <div className="mb-4 flex-1">
                                    <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{template.name}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">{template.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    <Badge variant="secondary" className="bg-muted/50 text-muted-foreground font-normal border-border/50">
                                        {template.category}
                                    </Badge>
                                    <Badge variant="secondary" className="bg-muted/50 text-muted-foreground font-normal border-border/50">
                                        {template.personality}
                                    </Badge>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mt-auto">
                                    <Button variant="outline" className="w-full h-10 border-border/50 hover:bg-card hover:text-foreground" onClick={() => toast.success("Preview mode")}>
                                        <Eye className="w-4 h-4 mr-2" /> Preview
                                    </Button>
                                    <Button className="w-full h-10 bg-primary/5 text-primary border border-primary/10 hover:bg-primary hover:text-primary-foreground shadow-none" onClick={() => toast.success("Using template")}>
                                        Use Now
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </AppLayout>
    );
};

export default Templates;
