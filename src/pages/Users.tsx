import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, FileText, Filter } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Users = () => {
    return (
        <AppLayout>
            <div className="space-y-6 animate-fade-in">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground/90">Users</h1>
                        <p className="text-muted-foreground mt-2 text-lg font-light">Manage access and roles for your clinic.</p>
                    </div>
                </div>

                {/* Search & Filter Bar */}
                <div className="bg-card p-4 rounded-lg border border-border flex flex-col md:flex-row items-center gap-4 shadow-sm">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Search query" className="pl-9 border-none bg-transparent shadow-none focus-visible:ring-0" />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <Button variant="ghost" className="gap-2 text-muted-foreground ml-auto md:ml-0">
                            <span className="md:hidden">Reset</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 gap-2 w-full md:w-auto">
                            <Search className="w-4 h-4" />
                            Search
                        </Button>
                    </div>
                </div>

                {/* Users List Card */}
                <div className="medical-card p-0 overflow-hidden">
                    <div className="hidden md:flex p-4 border-b border-border/50 justify-between items-center bg-primary/5 text-sm font-semibold text-muted-foreground">
                        <div className="grid grid-cols-12 gap-4 w-full items-center">
                            <div className="col-span-5">Name</div>
                            <div className="col-span-2">Status</div>
                            <div className="col-span-3">Role</div>
                            <div className="col-span-2 text-right flex gap-2 justify-end">
                                <Button size="sm" className="bg-primary hover:bg-primary/90 h-8" onClick={() => toast.success("Invite User modal open")}>
                                    <Plus className="w-3 h-3 mr-1" /> Invite User
                                </Button>
                                <Button size="sm" variant="outline" className="h-8 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20" onClick={() => toast.success("Redirecting to invite list...")}>
                                    <FileText className="w-3 h-3 mr-1" /> Invite List
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Create Button */}
                    <div className="md:hidden p-4 border-b border-border flex gap-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 flex-1" onClick={() => toast.success("Invite User modal open")}>
                            <Plus className="w-4 h-4 mr-1" /> Invite User
                        </Button>
                        <Button size="sm" variant="outline" className="bg-primary/10 text-primary border-primary/20 flex-1" onClick={() => toast.success("Redirecting to invite list...")}>
                            <FileText className="w-4 h-4 mr-1" /> Lists
                        </Button>
                    </div>

                    <div className="divide-y divide-border/50">
                        {/* User Row */}
                        <div
                            className="p-4 hover:bg-muted/30 transition-colors cursor-pointer group"
                            onClick={() => toast.success("User profile: Mohan Prasath")}
                        >
                            <div className="flex flex-col gap-3 md:grid md:grid-cols-12 md:items-center">
                                <div className="md:col-span-5 flex items-center gap-3">
                                    <Avatar className="w-10 h-10 border border-border">
                                        <AvatarImage src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" />
                                        <AvatarFallback>MP</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Mohan Prasath</div>
                                        <div className="text-sm text-muted-foreground">mohanprasath563@gmail.com</div>
                                    </div>
                                    <div className="md:hidden ml-auto">
                                        <Badge variant="outline" className="text-emerald hover:text-emerald-dark bg-emerald/10 border-emerald/20 font-normal">Active</Badge>
                                    </div>
                                </div>

                                <div className="hidden md:block md:col-span-2">
                                    <Badge variant="outline" className="text-emerald hover:text-emerald-dark bg-emerald/10 border-emerald/20 font-normal">Active</Badge>
                                </div>

                                <div className="flex items-center justify-between md:hidden">
                                    <span className="text-sm text-muted-foreground">Roles:</span>
                                    <div className="flex gap-2">
                                        <Badge variant="secondary" className="bg-emerald/10 text-emerald-dark hover:bg-emerald/20 font-normal">Admin</Badge>
                                        <Badge variant="secondary" className="bg-emerald/10 text-emerald-dark hover:bg-emerald/20 font-normal">Practitioner</Badge>
                                    </div>
                                </div>

                                <div className="hidden md:flex md:col-span-3 gap-2">
                                    <Badge variant="secondary" className="bg-emerald/10 text-emerald-dark hover:bg-emerald/20 font-normal">Admin</Badge>
                                    <Badge variant="secondary" className="bg-emerald/10 text-emerald-dark hover:bg-emerald/20 font-normal">Practitioner</Badge>
                                </div>

                                <div className="md:col-span-2 flex justify-end md:opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="outline" size="sm" className="w-full md:w-auto" onClick={(e) => { e.stopPropagation(); toast.info("Edit user clicked"); }}>Edit</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Role Descriptions */}
                    <div className="p-6 bg-muted/30 border-t border-border grid md:grid-cols-2 gap-8 text-sm">
                        <div className="flex gap-3">
                            <Badge variant="secondary" className="bg-emerald/10 text-emerald-dark h-fit hover:bg-emerald/20 font-normal self-start">Admin</Badge>
                            <span className="text-muted-foreground">- Manages billing, licenses, user roles, and has access to all dashboards.</span>
                        </div>
                        <div className="flex gap-3">
                            <Badge variant="secondary" className="bg-emerald/10 text-emerald-dark h-fit hover:bg-emerald/20 font-normal self-start">Practitioner</Badge>
                            <span className="text-muted-foreground">- Allows full management (creating, editing, deleting) of consults and templates within their clinic or organization.</span>
                        </div>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
};

export default Users;
