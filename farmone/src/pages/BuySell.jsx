import React, { useState } from "react";
import "../styles/buysell.css";
import { GiFarmTractor, GiWateringCan } from "react-icons/gi";
import { FaPlus, FaSprayCan, FaChevronLeft, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function BuySell() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const equipments = [
        {
            id: 1,
            name: "Tractor",
            price: "₹4,50,000",
            img: "https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
            icon: <GiFarmTractor />,
            desc: "Powerful 60 HP tractor ideal for plowing, sowing, and carrying loads.",
            seller: "Rajesh Patil",
            location: "Nashik, Maharashtra",
            contact: "9876543210",
        },
        {
            id: 2,
            name: "Water Pump",
            price: "₹18,000",
            img: "https://images.unsplash.com/photo-1700318092011-6e4666e94ab5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBwdW1wfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
            icon: <GiWateringCan />,
            desc: "High-efficiency diesel water pump perfect for irrigation.",
            seller: "Suresh Yadav",
            location: "Ahmednagar, Maharashtra",
            contact: "9823456789",
        },
        {
            id: 3,
            name: "Sprayer Machine",
            price: "₹3,35,000",
            img: "https://plus.unsplash.com/premium_photo-1661833381528-8ab4bfaf71cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
            icon: <FaSprayCan />,
            desc: "Portable sprayer machine with long hose and durable tank.",
            seller: "Vikas Shinde",
            location: "Kolhapur, Maharashtra",
            contact: "9812345678",
        },
        {
            id: 4,
            name: "Cultivator",
            price: "₹22,000",
            img: "https://www.vishvakarma.co.in/wp-content/uploads/2023/02/yug_15F-30F_full.jpg",
            icon: <GiFarmTractor />,
            desc: "6-tine cultivator for soil preparation and weed control", seller: " Rohit Kumar",
            location: "Kolhapur, Maharashtra",
            contact: "9322755678",
        },
    ];

    const pesticides = [
        {
            id: 5,
            name: "Neem Oil",
            price: "₹550 / Litre",
            img: "https://organicbazar.net/cdn/shop/products/Neem-Oil-for-Pests-Contro.jpg?v=1694167803",
            icon: <FaSprayCan />,
            desc: "100% organic neem oil to protect plants from common pests.",
            seller: "Anil Jadhav",
            location: "Sangli, Maharashtra",
            contact: "9898989898",
        },
        {
            id: 6,
            name: "Urea Fertilizer",
            price: "₹320 / 50kg Bag",
            img: "https://m.media-amazon.com/images/I/61s38zF8kAL.jpg",
            icon: <FaSprayCan />,
            desc: "High-nitrogen fertilizer ideal for crop yield and soil enrichment.",
            seller: "Ganesh More",
            location: "Pune, Maharashtra",
            contact: "9812312312",
        },
        {
            id: 7,
            name: "Insecticide Spray",
            price: "₹750 / Bottle",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFA0bkZtkkHTfMnPbX6h8sgF-BUHNZASAkA&s",
            icon: <FaSprayCan />,
            desc: "Powerful chemical spray to eliminate crop-harming insects",
            seller: "Ganesh More",
            location: "Pune, Maharashtra",
            contact: "9812312312",
        }, {
            id: 8,
            name: "Organic Manure",
            price: "₹250 / Bag",
            img: "https://img.freepik.com/free-photo/closeup-picture-gardener-s-hands-planting-plant_1150-26607.jpg",
            icon: <FaSprayCan />,
            desc: "Eco-friendly compost manure for boosting soil fertility",
            seller: "Ganesh More",
            location: "Pune, Maharashtra",
            contact: "9812312312",
        },
    ];

    // Combine all products (for simpler handling)
    const allProducts = [...equipments, ...pesticides];

    return (
        <main className="buy-page">
            <h1 className="buy-title">Buy & Sell Marketplace 🛒</h1>
            <p className="buy-sub">
                Buy the best farming Equipments and Pesticides directly from farmers and dealers.
            </p>

            {/* Add New Listing */}
            {!selectedProduct && (
                <>
                    <div className="add-section">
                        <button className="add-btn">
                            <FaPlus /> Add New Listing
                        </button>
                    </div>

                    {/* EQUIPMENTS SECTION */}
                    <section>
                        <h2 className="section-heading">🚜 Equipments</h2>
                        <div className="item-grid">
                            {equipments.map((item) => (
                                <div
                                    key={item.id}
                                    className="item-card"
                                    onClick={() => setSelectedProduct(item)}
                                >
                                    <div
                                        className="item-img"
                                        style={{ backgroundImage: `url(${item.img})` }}
                                    ></div>
                                    <div className="item-body">
                                        <div className="item-header">
                                            <div className="item-icon">{item.icon}</div>
                                            <h3>{item.name}</h3>
                                        </div>
                                        <p className="item-desc">{item.desc}</p>
                                        <div className="item-footer">
                                            <span className="price">{item.price}</span>
                                            <button className="buy-btn">View</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PESTICIDES SECTION */}
                    <section>
                        <h2 className="section-heading">💧 Pesticides</h2>
                        <div className="item-grid">
                            {pesticides.map((item) => (
                                <div
                                    key={item.id}
                                    className="item-card"
                                    onClick={() => setSelectedProduct(item)}
                                >
                                    <div
                                        className="item-img"
                                        style={{ backgroundImage: `url(${item.img})` }}
                                    ></div>
                                    <div className="item-body">
                                        <div className="item-header">
                                            <div className="item-icon">{item.icon}</div>
                                            <h3>{item.name}</h3>
                                        </div>
                                        <p className="item-desc">{item.desc}</p>
                                        <div className="item-footer">
                                            <span className="price">{item.price}</span>
                                            <button className="buy-btn">View</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* PRODUCT DETAIL VIEW */}
            {selectedProduct && (
                <div className="detail-view">
                    <button className="back-btn" onClick={() => setSelectedProduct(null)}>
                        <FaChevronLeft /> Back to Listings
                    </button>

                    <div className="detail-container">
                        <img src={selectedProduct.img} alt={selectedProduct.name} className="detail-img" />
                        <div className="detail-info">
                            <h2>{selectedProduct.name}</h2>
                            <p className="detail-desc">{selectedProduct.desc}</p>
                            <div className="detail-price">{selectedProduct.price}</div>

                            <div className="seller-box">
                                <h3>Seller Information</h3>
                                <p><strong>Name:</strong> {selectedProduct.seller}</p>
                                <p><strong>Location:</strong> {selectedProduct.location}</p>
                                <p><strong>Contact:</strong> {selectedProduct.contact}</p>
                            </div>

                            <div className="action-buttons">
                                <a href={`tel:${selectedProduct.contact}`} className="action-btn call">
                                    <FaPhoneAlt /> Call Seller
                                </a>
                                <a
                                    href={`https://wa.me/${selectedProduct.contact}`}
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
