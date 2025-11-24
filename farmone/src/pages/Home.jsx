import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
    const nav = useNavigate();
    const [index, setIndex] = useState(0);

    // ✅ Real farming background images
    const slides = [
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        "https://plus.unsplash.com/premium_photo-1661811677567-6f14477aa1fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=876",
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
        "https://images.unsplash.com/photo-1533062618053-d51e617307ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZhcm1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZhcm1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
        "https://images.unsplash.com/photo-1627920769842-6887c6df05ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEZhcm1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
        "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEZhcm1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800"
    ];

    // ✅ Smooth slideshow rotation
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds each
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="home-hero">

            {/* ✅ Smooth crossfade slideshow */}
            <div className="slideshow-container">
                {slides.map((img, i) => (
                    <div
                        key={i}
                        className={`fade-slide ${i === index ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>

            {/* ✅ Overlay layers */}
            <div className="hero-overlay"></div>
            <div className="hero-glow"></div>

            {/* ✅ Hero content */}
            <section className="hero-content">
                <h1 className="hero-title">Smart Farming, Smart India 🇮🇳</h1>
                <p className="hero-sub">
                    Empowering every farmer with AI-driven technology 🌿 <br />
                    किसान की तरक्की, भारत की उन्नति।
                </p>

                <div className="hero-btns">
                    <button className="btn-primary" onClick={() => nav("/dashboard")}>
                        Go to Dashboard
                    </button>
                    <button className="btn-secondary" onClick={() => nav("/buy-sell")}>
                        Buy / Sell
                    </button>
                </div>

                {/* ✅ Scroll indicator */}
                <div className="scroll-down">
                    <span></span>
                    <p>Scroll Down</p>
                </div>
            </section>
        </main>
    );
}
