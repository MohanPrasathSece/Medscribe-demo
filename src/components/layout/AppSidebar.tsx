import { useNavigate, useLocation, Link } from "react-router-dom";
import {
    LayoutDashboard,
    FileText,
    Copy,
    Users,
    Settings as SettingsIcon,
    BookOpen,
    MessageSquare,
    FolderOpen,
    Menu
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: FolderOpen, label: "Consults", path: "/consults" },
    { icon: FileText, label: "Templates", path: "/templates" },
    { icon: Copy, label: "Copy & Learn", path: "/copy-and-learn" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: MessageSquare, label: "ContactUs", path: "/contact" },
    { icon: BookOpen, label: "Documentation", path: "/documentation" },
];

export const SidebarContent = ({ isFloating = false }: { isFloating?: boolean }) => {
    const location = useLocation();

    return (
        <div className={cn(
            "flex flex-col h-full transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1)",
            isFloating
                ? "bg-white/90 dark:bg-zinc-900/95 backdrop-blur-3xl border border-zinc-200/50 dark:border-white/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-4 mx-2"
                : "bg-background/60 backdrop-blur-xl"
        )}>
            {/* Logo area for floating sidebar */}
            {isFloating && (
                <div className="flex items-center justify-center py-6 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-emerald-500/10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-3 flex-1 px-1">
                {sidebarItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-semibold transition-all duration-500 ease-in-out group relative overflow-hidden",
                                isActive
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-[1.02]"
                                    : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-[1.02]"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5 flex-shrink-0 transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
                            <span className={cn(
                                "whitespace-nowrap transition-all duration-500 origin-left",
                                isFloating ? "hidden xl:block opacity-100" : "block"
                            )}>{item.label}</span>

                            {/* Active Indicator Dot for collapsed state */}
                            {isActive && isFloating && (
                                <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-primary-foreground/80 xl:hidden animate-pulse" />
                            )}

                            {/* Tooltip for collapsed floating state */}
                            {isFloating && (
                                <div className="absolute left-full ml-6 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-foreground text-xs font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl whitespace-nowrap xl:hidden z-50 translate-x-[-10px] group-hover:translate-x-0">
                                    {item.label}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </div>

            <div className="mt-auto pt-6 pb-2 px-1">
                <Link
                    to="/settings"
                    className={cn(
                        "flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 group",
                        location.pathname === "/settings"
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    )}
                >
                    <SettingsIcon className={cn("w-5 h-5 flex-shrink-0 transition-transform duration-500", location.pathname === "/settings" ? "rotate-90" : "group-hover:rotate-90")} />
                    <span className={cn(isFloating ? "hidden xl:block" : "block")}>Settings</span>
                </Link>
            </div>
        </div>
    );
}

export const MobileSidebarContent = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col h-full bg-background/95 backdrop-blur-3xl">
            {/* Mobile User Header */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-emerald-500/10 border-b border-border/50">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white/20 shadow-lg overflow-hidden">
                        <img src="https://github.com/shadcn.png" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-foreground">Dr. Mohan</h3>
                        <p className="text-xs text-muted-foreground font-medium">Practice Clinic • Admin</p>
                    </div>
                </div>

                <div className="mt-6 flex gap-2">
                    <Link to="/consult/new" className="flex-1">
                        <div className="bg-primary text-primary-foreground rounded-xl py-2.5 text-center text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                            + New Consult
                        </div>
                    </Link>
                </div>
            </div>

            {/* Nav Items */}
            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Menu</div>
                {sidebarItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                            )}
                        >
                            <item.icon className={cn("w-6 h-6", isActive ? "text-primary" : "text-muted-foreground")} />
                            {item.label}
                        </Link>
                    );
                })}
            </div>

            {/* Bottom Section */}
            <div className="p-4 border-t border-border/50 bg-secondary/30">
                <Link
                    to="/settings"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-background transition-colors"
                >
                    <SettingsIcon className="w-5 h-5" />
                    Settings
                </Link>
            </div>
        </div>
    );
};

const Sidebar = ({ isFloating = false }: { isFloating?: boolean }) => {
    if (isFloating) {
        return (
            <aside className="w-[85px] xl:w-72 h-full transition-[width] duration-500 cubic-bezier(0.32, 0.72, 0, 1) hidden md:block">
                <SidebarContent isFloating={true} />
            </aside>
        );
    }

    return (
        <aside className="w-64 border-r border-border/50 min-h-screen hidden md:flex flex-col fixed left-0 top-0 z-40 pt-16 h-full shadow-[2px_0_20px_rgba(0,0,0,0.02)] transition-all duration-300">
            <SidebarContent />
        </aside>
    );
};

export default Sidebar;
