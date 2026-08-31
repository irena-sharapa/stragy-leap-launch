import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LanguageRedirect from "./pages/LanguageRedirect";
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
          <Route path="/" element={<LanguageRedirect />} />
          <Route path="/ru" element={<Index />} />
          <Route path="/ru/:section" element={<Index />} />
          <Route path="/eng" element={<Index />} />
          <Route path="/eng/:section" element={<Index />} />
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
