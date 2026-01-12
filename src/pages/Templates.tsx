import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye, Copy, Heart, RefreshCw, Pen, Trash2 } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const Templates = () => {
    const templates = [
        { name: "ASP Pain (follow-up)", type: "System template", personality: "Physician", docType: "Note", related: "NA" },
        { name: "ASP Pain (follow-up)", type: "System template", personality: "Physician", docType: "Letter", related: "ASP Pain (follow-up)" },
        { name: "ASP Pain (new)", type: "System template", personality: "Physician", docType: "Letter", related: "ASP Pain (new)" },
        { name: "ASP Pain (new)", type: "System template", personality: "Physician", docType: "Note", related: "NA" },
        { name: "Cardiology", type: "System template", personality: "Physician", docType: "Note", related: "NA" },
        { name: "Cardiology", type: "System template", personality: "Physician", docType: "Letter", related: "Cardiology" },
        { name: "Gastroenterology", type: "System template", personality: "Physician", docType: "Note", related: "NA" },
        { name: "Gastroenterology", type: "System template", personality: "Physician", docType: "Letter", related: "Gastroenterology" },
        { name: "General Medicine", type: "System template", personality: "Physician", docType: "Note", related: "NA" },
        { name: "General Medicine", type: "System template", personality: "Physician", docType: "Letter", related: "General Medicine" },
        { name: "General Practice", type: "System template", personality: "General practice", docType: "Letter", related: "General Practice" },
        { name: "General Practice", type: "System template", personality: "General practice", docType: "Note", related: "NA" },
        { name: "General Practice Management Plan", type: "System template", personality: "General practice", docType: "Note", related: "NA" },
        { name: "General Practice Mental Healthcare Plan", type: "System template", personality: "General practice", docType: "Note", related: "NA" },
        { name: "Generic Referral", type: "System template", personality: "Psychology", docType: "Letter", related: "Generic Referral" },
    ];

    return (
        <AppLayout>
            <div className="space-y-6 animate-fade-in">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground/90">Templates</h1>
                        <p className="text-muted-foreground mt-2 text-lg font-light">Customize your medical documentation.</p>
                    </div>
                </div>

                <div className="bg-primary/10 text-primary p-4 rounded-lg flex items-start gap-3 border border-primary/20 text-sm">
                    <InfoIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>You can copy an existing template to edit it. Coming soon: the ability to create new letter and note templates.</p>
                </div>

                {/* Search Filter Bar */}
                <div className="bg-card p-4 rounded-lg border border-border flex flex-col md:flex-row items-center gap-4 shadow-sm">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Search query" className="pl-9 border-none bg-transparent shadow-none focus-visible:ring-0" />
                    </div>
                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                        <Select>
                            <SelectTrigger className="w-full md:w-[150px] border-none shadow-none focus:ring-0 bg-background/50">
                                <SelectValue placeholder="Select Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="note">Note</SelectItem>
                                <SelectItem value="letter">Letter</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-full md:w-[180px] border-none shadow-none focus:ring-0 bg-background/50">
                                <SelectValue placeholder="Select Personality" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="physician">Physician</SelectItem>
                                <SelectItem value="gp">General Practice</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button variant="ghost" className="gap-2 text-muted-foreground ml-auto md:ml-0">
                            <RefreshCw className="w-4 h-4" />
                            <span className="md:hidden">Reset</span>
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 gap-2 w-full md:w-auto">
                            <Search className="w-4 h-4" />
                            Search
                        </Button>
                    </div>
                </div>


                {/* Templates Table */}
                <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
                    <div className="hidden md:flex p-4 border-b border-border/50 justify-between items-center bg-primary/5 text-sm font-semibold text-muted-foreground">
                        <div className="grid grid-cols-12 gap-4 w-full">
                            <div className="col-span-5">Name</div>
                            <div className="col-span-2">Personality</div>
                            <div className="col-span-1">Type</div>
                            <div className="col-span-2">Related note</div>
                            <div className="col-span-2 text-right"></div>
                        </div>
                    </div>
                    <div className="divide-y divide-border/50">
                        {templates.map((template, index) => (
                            <div key={index} className="p-4 hover:bg-muted/30 transition-colors group cursor-pointer" onClick={() => toast.info(`Previewing template: ${template.name}`)}>
                                <div className="flex flex-col gap-3 md:grid md:grid-cols-12 md:items-center text-sm">
                                    <div className="md:col-span-5 flex items-center gap-2">
                                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{template.name}</span>
                                        <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/20 hover:bg-accent/30 font-normal ml-auto md:ml-0">
                                            {template.type}
                                        </Badge>
                                    </div>

                                    <div className="flex justify-between md:hidden">
                                        <span className="text-muted-foreground">Personality:</span>
                                        <span className="text-foreground">{template.personality}</span>
                                    </div>
                                    <div className="md:col-span-2 text-muted-foreground hidden md:block">
                                        {template.personality}
                                    </div>

                                    <div className="flex justify-between md:hidden">
                                        <span className="text-muted-foreground">Type:</span>
                                        <span className="text-foreground">{template.docType}</span>
                                    </div>
                                    <div className="md:col-span-1 text-muted-foreground hidden md:block">
                                        {template.docType}
                                    </div>

                                    <div className="flex justify-between md:hidden">
                                        <span className="text-muted-foreground">Related:</span>
                                        <span className="text-foreground">{template.related}</span>
                                    </div>
                                    <div className="md:col-span-2 text-muted-foreground hidden md:block">
                                        {template.related}
                                    </div>

                                    <div className="md:col-span-2 flex justify-end gap-1 border-t md:border-t-0 border-border/50 pt-3 md:pt-0 mt-2 md:mt-0">
                                        <Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground hidden md:flex">
                                            ReadOnly
                                        </Button>
                                        <div className="flex w-full md:w-auto justify-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toast.success("Template opened for viewing");
                                                }}
                                            >
                                                <Eye className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toast.success("Template copied to clipboard");
                                                }}
                                            >
                                                <Copy className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toast.error("Cannot delete system template");
                                                }}
                                            >
                                                <Heart className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

function InfoIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    )
}

export default Templates;
