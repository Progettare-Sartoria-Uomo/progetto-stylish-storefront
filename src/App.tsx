
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WinterPage from "./pages/WinterPage";
import SummerPage from "./pages/SummerPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShirtsPage from "./pages/ShirtsPage";
import PantsPage from "./pages/PantsPage";
import DressPantsPage from "./pages/DressPantsPage";
import JeansPage from "./pages/JeansPage";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="pt-16 flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/invierno" element={<WinterPage />} />
                <Route path="/verano" element={<SummerPage />} />
                <Route path="/camisas" element={<ShirtsPage />} />
                <Route path="/pantalones" element={<PantsPage />} />
                <Route path="/pantalones/vestir" element={<DressPantsPage />} />
                <Route path="/pantalones/jeans" element={<JeansPage />} />
                <Route path="/producto/:id" element={<ProductDetailPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
