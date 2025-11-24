import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/navbar.css";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [language, setLanguage] = useState("English");
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLangChange = (e) => {
        setLanguage(e.target.value);
    };

    const links = [
        { to: "/", label: "Home" },
        { to: "/login-signup", label: "Login / Signup" },
        { to: "/dashboard", label: "Dashboard" },
        { to: "/buy-sell", label: "Buy & Sell" },
        { to: "/rent", label: "Rent" },
        { to: "/weather-mandi", label: "Weather & Mandi" },
        { to: "/chatbot", label: "AI Chatbot" },
        { to: "/DiseaseDetect", label: "DiseaseDetect" },
    ];

    const languages = ["English", "हिंदी", "मराठी", "ગુજરાતી", "தமிழ்"];

    return (
        <>
            <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
                <div className="nav-inner">
                    {/* Logo */}
                    <NavLink to="/" className="brand" aria-label="FarmOne Home">
                        <span className="brand-mark">🌾</span> FarmOne
                    </NavLink>

                    {/* Desktop links */}
                    <nav className="nav-links">
                        {links.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right section */}
                    <div className="nav-right">
                        <select
                            className="lang-select"
                            value={language}
                            onChange={handleLangChange}
                            aria-label="Select Language"
                        >
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>

                        <NavLink to="/buy-sell" className="pill cta">
                            🌿 Post Listing
                        </NavLink>
                    </div>

                    {/* Hamburger */}
                    <button
                        className={`hamb ${open ? "is-open" : ""}`}
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle Menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* Overlay + Drawer */}
            <div
                className={`drawer-overlay ${open ? "show" : ""}`}
                onClick={() => setOpen(false)}
            />
            <aside className={`drawer ${open ? "open" : ""}`}>
                <div className="drawer-head">
                    <div className="drawer-brand">
                        <span className="brand-mark">🌾</span> FarmOne
                    </div>
                    <button className="close" onClick={() => setOpen(false)}>
                        ✕
                    </button>
                </div>

                <nav className="drawer-links">
                    {links.map((l) => (
                        <NavLink key={l.to} to={l.to} className="drawer-link">
                            {l.label}
                        </NavLink>
                    ))}

                    <div className="drawer-lang">
                        <label htmlFor="lang">🌐 Language:</label>
                        <select
                            id="lang"
                            value={language}
                            onChange={handleLangChange}
                            className="lang-select"
                        >
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>

                    <NavLink to="/buy-sell" className="drawer-cta">
                        🌿 Post Listing
                    </NavLink>
                </nav>

                <div className="drawer-footer">
                    <small>© {new Date().getFullYear()} FarmOne • Made for Farmers</small>
                </div>
            </aside>
        </>
    );
}
