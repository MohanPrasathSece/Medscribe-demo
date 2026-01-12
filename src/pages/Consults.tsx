import "react-day-picker/dist/style.css";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Calendar as CalendarIcon, MoreHorizontal, Pen, Trash2, FileText, ChevronDown, Check, Clock, User, Zap, Activity } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Consults = () => {
    // Mock data
    const allConsults = [
        { id: "1", name: "John Doe", user: "Mohan Prasath", type: "Standard Review", status: "Completed", lastUpdated: "2 mins ago", duration: "15m" },
        { id: "2", name: "Jane Smith", user: "Mohan Prasath", type: "Initial Consult", status: "Draft", lastUpdated: "5 mins ago", duration: "45m" },
        { id: "3", name: "Robert Johnson", user: "Mohan Prasath", type: "Follow-up", status: "Completed", lastUpdated: "1 hour ago", duration: "20m" },
        { id: "4", name: "Emily Davis", user: "Mohan Prasath", type: "Vaccination", status: "Completed", lastUpdated: "3 hours ago", duration: "10m" },
        { id: "5", name: "Michael Wilson", user: "Mohan Prasath", type: "Telehealth", status: "Processing", lastUpdated: "5 hours ago", duration: "30m" },
    ];

    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [date, setDate] = useState<Date>();

    const filteredConsults = allConsults.filter(consult => {
        const matchesSearch = consult.name.toLowerCase().includes(searchQuery.toLowerCase()) || consult.type.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filter === "all" ? true : consult.status.toLowerCase() === filter;
        return matchesSearch && matchesFilter;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Completed": return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30";
            case "Processing": return "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/30 animate-pulse";
            case "Draft": return "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/30";
            default: return "bg-zinc-100 text-zinc-600";
        }
    };

    const handleDelete = (name: string) => {
        toast.success(`${name} deleted successfully`);
    };

    return (
        <AppLayout>
            <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">Consults</h1>
                        <p className="text-muted-foreground mt-2 text-lg font-light">Manage your patient history and clinical notes.</p>
                    </div>
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 px-6 h-12">
                        + New Consult
                    </Button>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-sm flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-muted/50 text-foreground/70">
                            <Activity className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Total Consults</p>
                            <h3 className="text-2xl font-bold text-foreground">1,284</h3>
                        </div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-sm flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-muted/50 text-foreground/70">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Pending</p>
                            <h3 className="text-2xl font-bold text-foreground">12</h3>
                        </div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-sm flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-muted/50 text-foreground/70">
                            <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Time Saved</p>
                            <h3 className="text-2xl font-bold text-foreground">142h</h3>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="space-y-6">
                    {/* Controls Row */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setFilter}>
                            <TabsList className="bg-muted/30 p-1 rounded-lg h-auto flex-wrap md:flex-nowrap justify-start w-full md:w-auto overflow-x-auto no-scrollbar">
                                <TabsTrigger value="all" className="rounded-md px-4 py-2 text-sm flex-1 md:flex-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">All</TabsTrigger>
                                <TabsTrigger value="completed" className="rounded-md px-4 py-2 text-sm flex-1 md:flex-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">Completed</TabsTrigger>
                                <TabsTrigger value="draft" className="rounded-md px-4 py-2 text-sm flex-1 md:flex-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">Drafts</TabsTrigger>
                                <TabsTrigger value="processing" className="rounded-md px-4 py-2 text-sm flex-1 md:flex-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">Processing</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <div className="relative flex-1 md:w-[250px]">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-9 h-10 rounded-lg bg-white dark:bg-zinc-900 border-border/50 focus-visible:ring-primary/20 shadow-sm"
                                />
                            </div>
                            <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 rounded-lg border-border/50 bg-white dark:bg-zinc-900 shadow-sm">
                                <Filter className="w-4 h-4 text-muted-foreground" />
                            </Button>
                        </div>
                    </div>

                    {/* Usage List - Cards */}
                    <div className="grid gap-3">
                        {filteredConsults.length > 0 ? (
                            filteredConsults.map((consult) => (
                                <div
                                    key={consult.id}
                                    className="group relative bg-card rounded-xl p-4 shadow-sm border border-border/40 hover:border-primary/20 transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center gap-4"
                                    onClick={() => toast.info(`Opened ${consult.name}`)}
                                >
                                    {/* Patient Avatar & Name */}
                                    <div className="flex items-center gap-4 md:w-[280px]">
                                        <div className="h-10 w-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                                            {consult.name.charAt(0)}
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-semibold text-base text-foreground truncate">{consult.name}</h3>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground truncate">
                                                <User className="w-3 h-3" /> {consult.user}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Type Tag */}
                                    <div className="flex-1">
                                        <div className="inline-flex items-center px-3 py-1 rounded-lg bg-muted text-sm font-medium text-muted-foreground border border-border/50">
                                            {consult.type}
                                        </div>
                                    </div>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap md:flex-nowrap items-center gap-y-2 gap-x-6 md:w-auto shrink-0 justify-end text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2 min-w-[60px]">
                                            <Clock className="w-4 h-4" /> {consult.duration}
                                        </div>
                                        <div className="flex items-center gap-2 min-w-[100px]">
                                            <CalendarIcon className="w-4 h-4" /> {consult.lastUpdated}
                                        </div>
                                        <div className="min-w-[100px] flex justify-end">
                                            <Badge variant="outline" className={cn("px-3 py-1 rounded-full border border-current font-medium", getStatusColor(consult.status))}>
                                                {consult.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center justify-end gap-2 md:pl-4 md:border-l border-border/30">
                                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full">
                                            <Pen className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full" onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(consult.name);
                                        }}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-dashed border-2 border-border/50 rounded-3xl p-12 text-center text-muted-foreground">
                                <FileText className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <h3 className="text-lg font-bold mb-1">No consults found</h3>
                                <p>Try adjusting your filters or search query.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Consults;
