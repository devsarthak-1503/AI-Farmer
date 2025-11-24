import React, { useState } from "react";
import "../styles/rent.css";
import { GiFarmTractor, GiWateringCan } from "react-icons/gi";
import { FaPhoneAlt, FaWhatsapp, FaPlus } from "react-icons/fa";

export default function Rent() {
    const [selected, setSelected] = useState(null);

    const equipments = [
        {
            id: 1,
            name: "Tractor (60 HP)",
            price: "₹2000 / Day",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DzqFJ-uX4N9Hm1AO-o88YUgG40sl6WPJTg&s",
            owner: "Rajesh Patil",
            contact: "9876543210",
            location: "Nashik, Maharashtra",
            icon: <GiFarmTractor />,
        },
        {
            id: 2,
            name: "Water Pump (Diesel)",
            price: "₹350 / Day",
            img: "https://images.unsplash.com/photo-1700318092011-6e4666e94ab5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBwdW1wfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
            desc: "High-efficiency diesel water pump for irrigation use.",
            owner: "Suresh Yadav",
            contact: "9823456789",
            location: "Ahmednagar, Maharashtra",
            icon: <GiWateringCan />,
        },
        {
            id: 3,
            name: "Sprayer Machine",
            price: "₹2500 / Day",
            img: "https://plus.unsplash.com/premium_photo-1661833381528-8ab4bfaf71cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
            desc: "Durable sprayer machine available for short-term farm use.",
            owner: "Vikas Shinde",
            contact: "9812345678",
            location: "Kolhapur, Maharashtra",
            icon: <GiWateringCan />,
        },
        {
            "id": 4,
            "name": "Power Weeder",
            "price": "₹700 / Day",
            "img": "https://media.istockphoto.com/id/456741347/photo/small-hand-tractor.jpg?s=612x612&w=0&k=20&c=hOdw51Vh8O3g52fimut0M5xn-knayr3RYK6Ut8c6kQM=",
            "owner": "Ganesh Jadhav",
            "contact": "9874561230",
            "location": "Baramati, Maharashtra"
        },
        {
            "id": 5,
            "name": "Rotavator Machine",
            "price": "₹1,200 / Day",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5LCkdhmbRlrtQmIHBxj945EQM3UaL4VHng&s",
            "owner": "Mahesh Pawar",
            "contact": "9890123456",
            "location": "Satara, Maharashtra"
        },

    ];

    return (
        <main className="rent-page">
            <h1 className="rent-title">🚜 Rent Farm Equipments</h1>
            <p className="rent-sub">
                Find and rent high-quality farming tools & machines easily.
            </p>

            {!selected && (
                <>
                    <div className="add-section">
                        <button className="add-btn">
                            <FaPlus /> Add New Rent Listing
                        </button>
                    </div>

                    <div className="rent-grid">
                        {equipments.map((item) => (
                            <div
                                key={item.id}
                                className="rent-card"
                                onClick={() => setSelected(item)}
                            >
                                <div
                                    className="rent-img"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                ></div>
                                <div className="rent-body">
                                    <div className="rent-header">
                                        <div className="rent-icon">{item.icon}</div>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <p className="rent-desc">{item.desc}</p>
                                    <div className="rent-footer">
                                        <span className="rent-price">{item.price}</span>
                                        <button className="view-btn">View</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {selected && (
                <div className="rent-detail">
                    <button className="back-btn" onClick={() => setSelected(null)}>
                        ← Back to Listings
                    </button>

                    <div className="detail-container">
                        <img src={selected.img} alt={selected.name} className="detail-img" />
                        <div className="detail-info">
                            <h2>{selected.name}</h2>
                            <p className="detail-desc">{selected.desc}</p>
                            <div className="detail-price">{selected.price}</div>

                            <div className="owner-box">
                                <h3>Owner Information</h3>
                                <p><strong>Name:</strong> {selected.owner}</p>
                                <p><strong>Location:</strong> {selected.location}</p>
                                <p><strong>Contact:</strong> {selected.contact}</p>
                            </div>

                            <div className="action-buttons">
                                <a href={`tel:${selected.contact}`} className="action-btn call">
                                    <FaPhoneAlt /> Call Owner
                                </a>
                                <a
                                    href={`https://wa.me/${selected.contact}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="action-btn whatsapp"
                                >
                                    <FaWhatsapp /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
