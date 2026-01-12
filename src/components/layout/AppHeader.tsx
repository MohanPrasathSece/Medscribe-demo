import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell, Search, Plus, User, Building2, ChevronDown, Sun, Moon, LogOut, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/contexts/ThemeContext";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { MobileSidebarContent, SidebarContent } from "./AppSidebar";
import { cn } from "@/lib/utils";

const AppHeader = ({ isFloating = false }: { isFloating?: boolean }) => {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleLogout = () => {
        // In a real app, clear auth tokens here
        navigate("/login");
    };

    return (
        <header className={cn(
            "flex items-center justify-between transition-all duration-300 z-40 relative",
            isFloating
                ? "static bg-transparent p-4 md:p-6 pb-0"
                : "h-16 bg-background/80 backdrop-blur-md border-b border-border fixed top-0 left-0 right-0 z-50 px-4 md:px-6"
        )}>
            {/* Mobile: Left Burger Menu */}
            <div className="flex items-center gap-3 w-auto md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="-ml-2 text-foreground active:scale-95 transition-transform">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-[300px] border-none shadow-2xl">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <SheetDescription className="sr-only">Main navigation sidebar</SheetDescription>
                        <MobileSidebarContent />
                    </SheetContent>
                </Sheet>
            </div>




            {/* Desktop: Logo & Breadcrumbs */}
            <div className="hidden md:flex items-center gap-3 w-auto">

                {/* Show logo ONLY if NOT floating */}
                {!isFloating && (
                    <Link to="/dashboard" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-dark">Composer AI</span>
                    </Link>
                )}

                {/* Breadcrumb / Title placeholder for Desktop when floating */}
                {isFloating && (
                    <div className="hidden md:flex flex-col">
                        <h2 className="text-xl font-bold tracking-tight">Dashboard</h2>
                        <span className="text-xs text-muted-foreground">Welcome back, Dr. Prasath</span>
                    </div>
                )}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
                {/* Search Bar - only visible on larger modern dashboards */}
                <div className="hidden lg:flex items-center bg-white/50 dark:bg-black/20 border border-border rounded-full px-3 py-1.5 w-64 mr-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                    <Search className="w-4 h-4 text-muted-foreground mr-2" />
                    <input className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground" placeholder="Search anything..." />
                    <div className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground border border-border">⌘K</div>
                </div>

                {/* Theme Toggle - Mobile: Small, Desktop: Normal */}
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 w-8 h-8 md:w-10 md:h-10">
                    {theme === "dark" ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
                </Button>

                {/* New Consult Button - Icon only on mobile, Full on Desktop */}
                <Link to="/consult/new">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 flex items-center justify-center w-8 h-8 md:w-auto md:h-10 md:px-4 p-0">
                        <Plus className="w-5 h-5 md:w-4 md:h-4 md:mr-2" />
                        <span className="hidden md:inline">New consult</span>
                    </Button>
                </Link>

                <div className="flex items-center gap-3 pl-2 sm:border-l border-border/50 ml-1 sm:ml-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2 px-1 hover:bg-transparent group h-auto p-0 md:px-1 md:py-2">
                                <Avatar className="w-8 h-8 md:w-9 md:h-9 cursor-pointer ring-2 ring-transparent transition-all group-hover:ring-primary/20 shadow-sm border border-border/50">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>MP</AvatarFallback>
                                </Avatar>
                                <div className="text-sm flex flex-col items-start hidden lg:flex leading-tight">
                                    <span className="font-semibold text-foreground">Mohan</span>
                                    <span className="text-[10px] text-muted-foreground">Admin</span>
                                </div>
                                <ChevronDown className="w-3 h-3 text-muted-foreground group-hover:text-foreground hidden lg:block" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 rounded-xl shadow-xl border-border/50 bg-background/80 backdrop-blur-xl">
                            <DropdownMenuItem className="cursor-pointer">
                                <User className="mr-2 h-4 w-4" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/settings")}>
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950/20" onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
