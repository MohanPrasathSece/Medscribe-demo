import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mic, Tag, Upload, ArrowUpFromLine } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NewConsult = () => {
    return (
        <AppLayout>
            <div className="space-y-4 h-full flex flex-col">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground/90">New Consultation</h1>
                        <p className="text-muted-foreground mt-1 text-base">Thursday, 10 Jan 2026 • 11:36 am</p>
                    </div>
                    <div className="bg-muted/50 px-3 py-1 rounded-full text-xs font-medium text-muted-foreground border border-border">
                        Dr. Mohan Prasath
                    </div>
                </div>

                {/* Main Editor Area */}
                <div className="flex-1 bg-card rounded-lg border border-border flex flex-col overflow-hidden">

                    {/* Toolbar */}
                    <div className="border-b border-border p-2 flex items-center justify-between bg-muted/30">
                        <Tabs defaultValue="transcribe" className="flex-1">
                            <TabsList className="bg-transparent p-0 gap-6">
                                <TabsTrigger value="context" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-10 px-2 text-muted-foreground font-normal">Context</TabsTrigger>
                                <TabsTrigger value="transcribe" className="bg-primary/10 text-primary data-[state=active]:bg-primary/15 data-[state=active]:text-primary h-8 rounded-md px-3 font-medium text-xs">Transcribe</TabsTrigger>
                                <TabsTrigger value="notes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-10 px-2 text-muted-foreground font-normal">Notes</TabsTrigger>
                                <TabsTrigger value="letter" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-10 px-2 text-muted-foreground font-normal">Letter</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div className="flex items-center gap-4 pr-2">
                            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground h-8">
                                <Tag className="w-4 h-4" />
                                Tag
                            </Button>
                            <div className="h-6 w-px bg-border" />
                            <span className="text-sm font-medium text-muted-foreground font-mono">00:00</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:text-primary/80">
                                <Mic className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                <Upload className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                <ArrowUpFromLine className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 relative">
                        <p className="text-muted-foreground/50 text-lg">Transcribed audio...</p>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
};

export default NewConsult;
