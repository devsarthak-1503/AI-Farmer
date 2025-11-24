import React from "react";
import "../styles/diseaseDetect.css";
import { GiPlantRoots } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DiseaseDetect() {
    const nav = useNavigate();

    return (
        <main className="disease-page">
            <div className="disease-container">
                {/* Icon Animation Section */}
                <div className="icon-circle">
                    <GiPlantRoots className="plant-icon" />
                    <FaRobot className="bot-icon" />
                </div>

                {/* Text Section */}
                <h1 className="title">🌾 Disease Detection</h1>
                <h2 className="subtitle">AI Crop Health Analysis — Coming Soon!</h2>
                <p className="desc">
                    We’re building an <strong>AI-powered crop disease detection</strong> feature that will help
                    farmers identify problems early and protect their yield.
                    <br />
                    Stay tuned, kisan bhaiyo — ye feature bahut jald live hone wala hai! 🚜
                </p>

                {/* Buttons */}
                <div className="btn-area">
                    <button className="notify-btn">🔔 Notify Me When Live</button>
                    <button className="home-btn" onClick={() => nav("/dashboard")}>
                        ⬅ Back to Dashboard
                    </button>
                </div>

                {/* Animated Banner */}
                <div className="coming-banner">
                    <span>🌱 AI Farming Revolution Loading...</span>
                </div>
            </div>
        </main>
    );
}
