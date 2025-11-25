import React from "react";
import "./App.css";
import "./styles/green-ai.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhyChooseUs from "./pages/WhyChooseUs";

// Marketing pages
import Marketing3KW from "./pages/Marketing/Marketing3KW";
import Marketing5KW from "./pages/Marketing/Marketing5KW";
import MarketingCommercialIndustrial from "./pages/Marketing/MarketingCommercialIndustrial";

// Sales pages
import SalesPanelSolar from "./pages/Sales/SalesPanelSolar";
import SalesInverter from "./pages/Sales/SalesInverter";
import SalesChargeController from "./pages/Sales/SalesChargeController";
import SalesOthers from "./pages/Sales/SalesOthers";

// Service pages (to be created)
import ServiceInstallation from "./pages/Service/ServiceInstallation";
import ServiceRepair from "./pages/Service/ServiceRepair";
import ServiceAMC from "./pages/Service/ServiceAMC";

// Auth pages (to be created)
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            
            {/* Marketing Routes */}
            <Route path="/marketing/3kw" element={<Marketing3KW />} />
            <Route path="/marketing/5kw" element={<Marketing5KW />} />
            <Route path="/marketing/commercial-industrial" element={<MarketingCommercialIndustrial />} />
            
            {/* Sales Routes */}
            <Route path="/sales/panel-solar" element={<SalesPanelSolar />} />
            <Route path="/sales/inverter" element={<SalesInverter />} />
            <Route path="/sales/charge-controller" element={<SalesChargeController />} />
            <Route path="/sales/others" element={<SalesOthers />} />
            
            {/* Service Routes */}
            <Route path="/service/installation" element={<ServiceInstallation />} />
            <Route path="/service/repair" element={<ServiceRepair />} />
            <Route path="/service/amc" element={<ServiceAMC />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;