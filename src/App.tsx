
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Licitacoes from "./pages/Licitacoes";
import Ecommerce from "./pages/Ecommerce";
import AutomacaoVendas from "./pages/AutomacaoVendas";
import Sobre from "./pages/Sobre";
import TermosUso from "./pages/TermosUso";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import NotFound from "./pages/NotFound";
import BlogHome from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogTags from "./pages/BlogTags";
import BlogCategories from "./pages/BlogCategories";
import BlogAdmin from "./pages/BlogAdmin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/licitacoes" element={<Licitacoes />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/automacao-vendas" element={<AutomacaoVendas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/tags/:tag" element={<BlogTags />} />
          <Route path="/blog/categories/:category" element={<BlogCategories />} />
          <Route path="/blog/admin" element={<BlogAdmin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
