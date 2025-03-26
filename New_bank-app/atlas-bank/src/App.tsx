import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import RegisterPage from "./pages/RegisterPage";
import ServicesPage from "./pages/ServicesPage";
import TransactionsPage from "./pages/TransactionsPage";
import ProfilePage from "./pages/ProfilePage";
import BankingPage from "./pages/BankingPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/banking" element={<BankingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
