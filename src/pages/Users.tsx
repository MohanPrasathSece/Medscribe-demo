import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Mail, Shield, User, MoreHorizontal, UserPlus, Users as UsersIcon, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Users = () => {
    // Mock data
    const users = [
        { id: 1, name: "Mohan Prasath", email: "mohan@example.com", role: "Admin", status: "Active", lastActive: "Now" },
        { id: 2, name: "Sarah Wilson", email: "sarah.w@clinic.com", role: "Practitioner", status: "Active", lastActive: "2h ago" },
        { id: 3, name: "David Chen", email: "david.c@clinic.com", role: "Practitioner", status: "Offline", lastActive: "1d ago" },
        { id: 4, name: "Emma Thompson", email: "emma.t@clinic.com", role: "Assistant", status: "Pending", lastActive: "Invited" },
    ];

    const [searchQuery, setSearchQuery] = useState("");

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "bg-emerald-500";
            case "Offline": return "bg-zinc-300";
            case "Pending": return "bg-amber-500";
            default: return "bg-zinc-300";
        }
    };

    return (
        <AppLayout>
            <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">Team Members</h1>
                        <p className="text-muted-foreground mt-2 text-lg font-light">Manage access, roles, and permissions.</p>
                    </div>
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 px-6 h-12 gap-2" onClick={() => toast.success("Invite modal open")}>
                        <UserPlus className="w-5 h-5" /> Invite Member
                    </Button>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-sm flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-muted/50 text-foreground/70">
                            <UsersIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Total Members</p>
                            <h3 className="text-2xl font-bold text-foreground">12</h3>
                        </div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-sm flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-muted/50 text-foreground/70">
                            <Shield className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Admins</p>
                            <h3 className="text-2xl font-bold text-foreground">3</h3>
                        </div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-sm flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-muted/50 text-foreground/70">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Pending</p>
                            <h3 className="text-2xl font-bold text-foreground">1</h3>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="space-y-6">
                    {/* Controls Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="w-full md:w-auto relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search by name or email..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 h-11 rounded-lg bg-white dark:bg-zinc-900 border-border/50 focus-visible:ring-primary/20 shadow-sm w-full"
                            />
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <Button variant="outline" className="h-11 px-4 gap-2 rounded-lg border-border/50 bg-white dark:bg-zinc-900 shadow-sm w-full md:w-auto">
                                <Filter className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-normal">Filters</span>
                            </Button>
                        </div>
                    </div>

                    {/* Users List - Cards */}
                    <div className="grid gap-3">
                        {filteredUsers.map((user) => (
                            <div
                                key={user.id}
                                className="group relative bg-card rounded-xl p-4 shadow-sm border border-border/40 hover:border-primary/20 transition-all duration-200 flex flex-col md:flex-row md:items-center gap-4"
                            >
                                {/* Avatar & Info */}
                                <div className="flex items-center gap-4 md:w-[350px]">
                                    <div className="h-12 w-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                                        {user.name.charAt(0)}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold text-base text-foreground truncate">{user.name}</h3>
                                            <div className={`w-2 h-2 rounded-full ${getStatusColor(user.status)}`} title={user.status} />
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground truncate">
                                            <Mail className="w-3.5 h-3.5" /> {user.email}
                                        </div>
                                    </div>
                                </div>

                                {/* Role Badge */}
                                <div className="flex-1">
                                    <Badge
                                        variant="outline"
                                        className={`px-3 py-1 text-xs font-medium border rounded-lg ${user.role === 'Admin'
                                                ? 'bg-primary/5 text-primary border-primary/20'
                                                : 'bg-muted/50 text-muted-foreground border-border'
                                            }`}
                                    >
                                        {user.role}
                                    </Badge>
                                </div>

                                {/* Last Active */}
                                <div className="text-sm text-muted-foreground md:text-right md:w-[150px]">
                                    <span className="md:hidden font-medium mr-2">Last active:</span>
                                    {user.lastActive}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-end gap-2 md:pl-4 md:border-l border-border/30">
                                    <Button variant="ghost" size="sm" className="h-9 px-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg">
                                        Edit
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground rounded-lg">
                                        <MoreHorizontal className="w-4 h-4" />
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

export default Users;
