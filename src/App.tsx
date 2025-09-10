import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import Journal from "./pages/Journal";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/telemedicine" element={<div className="text-center py-20"><h2 className="text-2xl font-semibold mb-4">Telemedicina</h2><p className="text-muted-foreground">Funcionalidade em desenvolvimento</p></div>} />
            <Route path="/reports" element={<div className="text-center py-20"><h2 className="text-2xl font-semibold mb-4">Relatórios</h2><p className="text-muted-foreground">Funcionalidade em desenvolvimento</p></div>} />
            <Route path="/profile" element={<div className="text-center py-20"><h2 className="text-2xl font-semibold mb-4">Perfil</h2><p className="text-muted-foreground">Funcionalidade em desenvolvimento</p></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
