import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

interface AppLayoutProps {
    children: ReactNode;
}

const ModernLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] text-foreground font-sans selection:bg-primary/20 overflow-x-hidden relative">
            {/* Abstract Futuristic Background Blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 flex h-screen overflow-hidden">
                {/* Floating Sidebar Container */}
                <div className="hidden md:flex flex-col justify-center h-full p-4 z-50">
                    <AppSidebar isFloating={true} />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col h-full relative overflow-hidden">
                    <AppHeader isFloating={true} />

                    <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 lg:p-8 pt-4">
                        <div className="max-w-[1600px] mx-auto h-full animate-fade-in pb-20">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ModernLayout;
