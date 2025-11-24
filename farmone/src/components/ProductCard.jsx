import React from "react";

export default function ProductCard({ item, onContact }) {
    return (
        <div className="product-card">
            <img className="product-image" src={item.img} alt={item.name} />
            <div className="product-body">
                <div className="product-title">{item.name}</div>
                <div className="product-meta">{item.qty} • {item.location}</div>
                <div className="product-row" style={{ marginTop: 8 }}>
                    <div style={{ fontWeight: 700, color: "var(--green-dark)" }}>₹{item.price}</div>
                    <div style={{ display: "flex", gap: 8 }}>
                        <button className="btn secondary" onClick={() => onContact(item)}>Contact</button>
                        <button className="btn" onClick={() => alert('Place order flow - demo')}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
