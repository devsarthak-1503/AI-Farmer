import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/dashboardStrip.css";

export default function DashboardQuickStrip() {
    const items = [
        { to: "/buy-sell", label: "Buy & Sell", emoji: "🛒" },
        { to: "/rent", label: "Rent Tools", emoji: "🚜" },
        { to: "/weather-mandi", label: "Weather & Mandi", emoji: "🌦️" },
        { to: "/chatbot", label: "AI Chatbot", emoji: "🤖" },
    ];
    return (
        <div className="quick-strip">
            {items.map((i) => (
                <NavLink key={i.to} to={i.to} className="q-pill">
                    <span className="q-emoji">{i.emoji}</span>
                    {i.label}
                </NavLink>
            ))}
        </div>
    );
}
