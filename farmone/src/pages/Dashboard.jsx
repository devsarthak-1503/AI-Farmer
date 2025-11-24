import React from "react";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";
import { GiPlantSeed, GiFarmTractor } from "react-icons/gi";
import { WiDaySunny } from "react-icons/wi";
import { FaRobot, FaRegHospital } from "react-icons/fa";

export default function Dashboard() {
    const nav = useNavigate();

    return (
        <main className="dashboard-page">
            <h1 className="dash-title">Farmer Dashboard 🌾</h1>
            <p className="dash-sub">
                Empowering Indian farmers through AI-driven technology & innovation
            </p>

            {/* ===== MAIN FEATURES ===== */}
            <section className="dash-cards">
                {/* BUY / SELL */}
                <div
                    className="dash-card"
                    onClick={() => nav("/buy-sell")}
                    title="Buy and Sell Crops"
                >
                    <div className="icon"><GiPlantSeed /></div>
                    <h3>Buy / Sell</h3>
                    <p>Connect directly with buyers and sellers for fair trading.</p>
                </div>

                {/* RENT EQUIPMENT */}
                <div
                    className="dash-card"
                    onClick={() => nav("/rent")}
                    title="Rent Tools & Equipments"
                >
                    <div className="icon"><GiFarmTractor /></div>
                    <h3>Rent Equipment</h3>
                    <p>Find or rent tractors, harvesters, and modern farming tools easily.</p>
                </div>

                {/* WEATHER & MANDI */}
                <div
                    className="dash-card"
                    onClick={() => nav("/weather")}
                    title="Weather & Mandi"
                >
                    <div className="icon"><WiDaySunny /></div>
                    <h3>Weather & Mandi</h3>
                    <p>Check real-time weather, mandi rates, and rainfall predictions.</p>
                </div>

                {/* AI CHATBOT */}
                <div
                    className="dash-card"
                    onClick={() => nav("/ai-chatbot")}
                    title="AI Chatbot Assistant"
                >
                    <div className="icon"><FaRobot /></div>
                    <h3>AI Chatbot</h3>
                    <p>Get instant help on farming queries from your AI-powered assistant.</p>
                </div>

                {/* DISEASE DETECTION */}
                <div
                    className="dash-card"
                    onClick={() => nav("/DiseaseDetect")}
                    title="Disease Detection Feature"
                >
                    <div className="icon"><FaRegHospital /></div>
                    <h3>Disease Detection</h3>
                    <p>Upload crop images and detect diseases using smart AI.</p>
                </div>
            </section>

            {/* ===== INSIGHTS SECTION ===== */}
            <section className="dash-insight">
                <h2>AI Insights & Farm Analytics</h2>
                <p>
                    Coming Soon — Smart insights on crop yield, soil health, and weather forecasting powered by AI.
                </p>
                <div className="insight-box">
                    <div className="placeholder">📊 AI Data Dashboard Coming Soon</div>
                </div>
            </section>

            {/* ===== UPDATES SECTION ===== */}
            <section className="dash-updates">
                <h2>Latest Farming Updates 📰</h2>
                <ul>
                    <li>🌾 PM-Kisan Yojana 2025 launched with increased benefits for small farmers.</li>
                    <li>☁️ Light rainfall expected across central India this weekend.</li>
                    <li>💰 Tomato and Onion mandi prices increased by ₹150/quintal.</li>
                    <li>🧠 AI Chatbot upgraded with regional language support.</li>
                </ul>
            </section>

            {/* ===== SMART TIPS ===== */}
            <section className="dash-tips">
                <h2>Smart Tips 🌱</h2>
                <ul>
                    <li>💧 Water your crops early in the morning to reduce evaporation.</li>
                    <li>🌿 Use organic compost to maintain soil fertility.</li>
                    <li>🚜 Rotate crops regularly to prevent pest infestation.</li>
                    <li>🧠 Keep track of weather before pesticide spraying.</li>
                </ul>
            </section>
        </main>
    );
}
