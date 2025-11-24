import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import BuySell from "../pages/BuySell";
import Rent from "../pages/Rent";
import WeatherMandi from "../pages/WeatherMandi";
import Chatbot from "../pages/Chatbot";
import DiseaseDetect from "../pages/DiseaseDetect";
import LoginSignup from "../pages/LoginSignup"; // ✅ new

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/buy-sell" element={<BuySell />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/weather-mandi" element={<WeatherMandi />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/DiseaseDetect" element={<DiseaseDetect />} />
            <Route path="/login-signup" element={<LoginSignup />} /> {/* ✅ new route */}
        </Routes>
    );
}
