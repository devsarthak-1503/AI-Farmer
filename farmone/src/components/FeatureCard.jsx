import React from "react";

export default function FeatureCard({ icon, title, subtitle, onClick }) {
    return (
        <div className="feature-card card" onClick={onClick}>
            <div className="feature-icon">{icon}</div>
            <div>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{title}</div>
                {subtitle && <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }}>{subtitle}</div>}
            </div>
        </div>
    );
}
