// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import SubscriptionCalculator from './Components/SubscriptionCalculator';
import PricingSection from "./Components/PricingSection";
import Parrinage from "./Components/Parrinage";
import ContactUs from "./Components/ContactUs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscription-calculator" element={<SubscriptionCalculator />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/parrinage" element={<Parrinage />} />
        <Route path="/contact" element={<ContactUs />} />


      </Routes>
    </Router>
  );
}

export default App;
