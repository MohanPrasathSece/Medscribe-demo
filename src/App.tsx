import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Transcription from "./pages/Transcription";
import Features from "./pages/Features";
import UseCases from "./pages/UseCases";
import Devices from "./pages/Devices";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CopyAndLearn from "./pages/CopyAndLearn";
import Templates from "./pages/Templates";
import Users from "./pages/Users";
import NewConsult from "./pages/NewConsult";
import Settings from "./pages/Settings";
import Consults from "./pages/Consults";
import Documentation from "./pages/Documentation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/transcription" element={<Transcription />} />
            <Route path="/features" element={<Features />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/copy-and-learn" element={<CopyAndLearn />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/users" element={<Users />} />
            <Route path="/consult/new" element={<NewConsult />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/consults" element={<Consults />} />
            <Route path="/documentation" element={<Documentation />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
