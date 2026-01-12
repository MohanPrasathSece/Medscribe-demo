import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import {
  Users, Activity, File, FolderOpen, AlertTriangle, ArrowRight,
  Sparkles, TrendingUp, Calendar, Zap, MessageSquare, Clock,
  Search, Plus, Stethoscope, ChevronRight, MoreHorizontal
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const quickStats = [
    { label: "Total Patients", value: "1,284", change: "+12%", icon: Users, color: "text-emerald-500" },
    { label: "Consults Today", value: "12", change: "+4", icon: Activity, color: "text-blue-500" },
    { label: "Pending Reviews", value: "3", change: "-2", icon: File, color: "text-amber-500" },
  ];

  const recentConsults = [
    { id: "1", patient: "Sarah Johnson", type: "General Checkup", status: "Completed", time: "10:30 AM", duration: "15 min" },
    { id: "2", patient: "Michael Chen", type: "Cardiology Follow-up", status: "Processing", time: "11:45 AM", duration: "25 min" },
    { id: "3", patient: "Emma Davies", type: "Vaccination", status: "Draft", time: "2:15 PM", duration: "10 min" },
  ];

  const upcomingSchedule = [
    { time: "03:30 PM", title: "Dr. Smith Review", type: "Meeting" },
    { time: "04:15 PM", title: "James Wilson", type: "New Patient" },
    { time: "05:00 PM", title: "Daily Wrap-up", type: "Admin" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:border-emerald-500/20";
      case "Processing": return "bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-500/20 animate-pulse";
      case "Draft": return "bg-amber-500/10 text-amber-600 border-amber-200 dark:border-amber-500/20";
      default: return "bg-zinc-100 text-zinc-600";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in pb-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground/90">Dashboard</h1>
            <p className="text-muted-foreground mt-2 text-lg font-light">Overview of your practice performance.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary backdrop-blur-sm bg-white/50 dark:bg-black/20" onClick={() => navigate('/consults')}>
              <Calendar className="w-4 h-4 mr-2" /> Schedule
            </Button>
            <Button
              onClick={() => setOpen(true)}
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 group transition-all duration-300"
            >
              <Zap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Quick Action
              <span className="ml-2 text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white/90">⌘J</span>
            </Button>
          </div>
        </div>

        {/* Command Palette */}
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Quick Actions">
              <CommandItem onSelect={() => { setOpen(false); navigate('/consult/new'); }}>
                <Plus className="mr-2 h-4 w-4" /> New Consult
              </CommandItem>
              <CommandItem onSelect={() => { setOpen(false); navigate('/consults'); }}>
                <Search className="mr-2 h-4 w-4" /> Search Patient
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => { setOpen(false); navigate('/templates'); }}>
                <File className="mr-2 h-4 w-4" /> Templates
              </CommandItem>
              <CommandItem onSelect={() => { setOpen(false); navigate('/settings'); }}>
                <Users className="mr-2 h-4 w-4" /> Settings
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>

        {/* Main Bento Grid */}
        <div className="bento-grid">

          {/* Hero Card - Welcome & Upgrade */}
          <div className="md:col-span-2 md:row-span-2 medical-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full -mr-10 -mt-10 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm text-yellow-600 dark:text-yellow-400 mb-6">
                  <AlertTriangle className="mr-2 h-3.5 w-3.5" />
                  <span>Trial Plan Active</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground leading-tight mb-2">
                  Good Morning, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Dr. Prasath</span>
                </h3>
                <p className="text-muted-foreground max-w-sm mt-3">
                  You have <span className="font-bold text-foreground">55/60</span> consults remaining this month.
                </p>
              </div>

              <div className="pt-8">
                <Button onClick={() => navigate('/settings')} className="rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-none shadow-lg shadow-orange-500/20 w-fit px-8 h-12 text-base transition-all hover:scale-105 active:scale-95">
                  Upgrade Plan <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats Column */}
          <div className="md:col-span-1 md:row-span-2 grid grid-cols-1 sm:grid-cols-3 md:flex md:flex-col gap-4">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="medical-card p-5 flex-1 flex flex-col justify-center relative overflow-hidden group cursor-pointer hover:bg-white/80 dark:hover:bg-white/5 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div className={cn("p-2.5 rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors", stat.color.replace('text-', 'text-'))}>
                    <stat.icon className={cn("w-5 h-5", stat.color)} />
                  </div>
                  <div className="text-xs font-medium text-emerald-500 flex items-center bg-emerald-500/10 px-2 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 mr-1" /> {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mt-1 tracking-tight">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Upcoming Schedule (Replaces AI Persona) */}
          <div className="md:col-span-1 md:row-span-2 medical-card relative overflow-hidden flex flex-col bg-gradient-to-br from-white/40 to-white/10 dark:from-white/5 dark:to-transparent">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <div className="p-1.5 bg-indigo-500/10 rounded-lg">
                  <Clock className="w-4 h-4 text-indigo-500" />
                </div>
                Schedule
              </h3>
            </div>

            <div className="relative space-y-6 pl-4 flex-1">
              {/* Vertical Line */}
              <div className="absolute left-[5px] top-2 bottom-4 w-[2px] bg-border/50 rounded-full"></div>

              {upcomingSchedule.map((event, i) => (
                <div key={i} className="relative z-10 flex gap-4 items-start group">
                  <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-background mt-1.5 group-hover:scale-125 transition-transform" />
                  <div>
                    <p className="text-sm font-bold text-foreground group-hover:text-indigo-500 transition-colors">{event.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-xs font-medium text-muted-foreground bg-muted px-1.5 rounded">{event.time}</p>
                      <span className="text-[10px] text-muted-foreground/70 uppercase tracking-wide">{event.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="ghost" className="w-full mt-4 text-xs h-8 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
              View Calendar
            </Button>
          </div>

          {/* Recent Consults Table (Spans 3 cols) */}
          <div className="md:col-span-3 medical-card p-0 overflow-hidden flex flex-col">
            <div className="p-5 border-b border-border/40 flex items-center justify-between bg-muted/20">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Recent Consults</h3>
                  <p className="text-xs text-muted-foreground">Latest patient interactions</p>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary" onClick={() => navigate('/consults')}>
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="flex-1 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-border/40">
                    <TableHead className="min-w-[150px]">Patient</TableHead>
                    <TableHead className="hidden md:table-cell">Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Time</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentConsults.map((consult) => (
                    <TableRow key={consult.id} className="hover:bg-muted/30 border-border/40 cursor-pointer group" onClick={() => navigate(`/consult/${consult.id}`)}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary/20 to-emerald-200/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                            {consult.patient.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="group-hover:text-primary transition-colors truncate">{consult.patient}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs hidden md:table-cell">{consult.type}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={cn("font-medium border-none", getStatusColor(consult.status))}>
                          {consult.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs font-mono hidden md:table-cell">{consult.time}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Quick Links / Actions (Col 4) */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="medical-card p-4 flex items-center gap-4 cursor-pointer hover:border-blue-500/30 group transition-all" onClick={() => navigate('/templates')}>
              <div className="p-3 bg-blue-500/10 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                <File className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Templates</h4>
                <p className="text-[10px] text-muted-foreground">Manage letters</p>
              </div>
            </div>

            <div className="medical-card p-4 flex items-center gap-4 cursor-pointer hover:border-purple-500/30 group transition-all" onClick={() => navigate('/copy-and-learn')}>
              <div className="p-3 bg-purple-500/10 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">AI Training</h4>
                <p className="text-[10px] text-muted-foreground">Personalize AI</p>
              </div>
            </div>

            <div className="medical-card p-4 flex items-center gap-4 cursor-pointer hover:border-rose-500/30 group transition-all" onClick={() => navigate('/contact')}>
              <div className="p-3 bg-rose-500/10 text-rose-600 rounded-xl group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Support</h4>
                <p className="text-[10px] text-muted-foreground">Contact us</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
