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

// Marketing pages (to be created)
import Marketing1KV from "./pages/Marketing/Marketing1KV";
import Marketing2KV from "./pages/Marketing/Marketing2KV";
import Marketing3KV from "./pages/Marketing/Marketing3KV";

// Sales pages (to be created)
import SalesPanelSolar from "./pages/Sales/SalesPanelSolar";
import SalesInverter from "./pages/Sales/SalesInverter";
import SalesChargeController from "./pages/Sales/SalesChargeController";

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
            <Route path="/marketing/1kv" element={<Marketing1KV />} />
            <Route path="/marketing/2kv" element={<Marketing2KV />} />
            <Route path="/marketing/3kv" element={<Marketing3KV />} />
            
            {/* Sales Routes */}
            <Route path="/sales/panel-solar" element={<SalesPanelSolar />} />
            <Route path="/sales/inverter" element={<SalesInverter />} />
            <Route path="/sales/charge-controller" element={<SalesChargeController />} />
            
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