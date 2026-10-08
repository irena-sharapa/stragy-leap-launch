import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import { SECTION_SLUGS } from "./lib/sections";
import NotFound from "./pages/NotFound";
import PrivacyPage from "./pages/PrivacyPage";
import OfferPage from "./pages/OfferPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {Object.values(SECTION_SLUGS.en).map((section) => (
            <Route key={section} path={`/${section}`} element={<Index />} />
          ))}
          <Route path="/ru" element={<Index />} />
          <Route path="/ru/:section" element={<Index />} />
          <Route path="/eng" element={<Navigate to="/" replace />} />
          <Route path="/eng/:section" element={<Navigate to="/" replace />} />
          <Route path="/es" element={<Index />} />
          <Route path="/es/:section" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/offer" element={<OfferPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
