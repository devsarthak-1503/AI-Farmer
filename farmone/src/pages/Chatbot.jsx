import React, { useState, useRef, useEffect } from "react";
import "../styles/chatbot.css";
import { FaRobot, FaUser, FaGlobe, FaPaperPlane } from "react-icons/fa";

export default function Chatbot() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "👋 Namaste! I’m your Smart Farming Assistant. How can I help you today?" },
    ]);
    const [input, setInput] = useState("");
    const [language, setLanguage] = useState("English");
    const chatEndRef = useRef(null);

    // scroll chat to bottom
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Simulated AI response (replace with backend API later)
    const generateResponse = (query) => {
        const responses = {
            English: [
                "Sure! I’ll help you with that.",
                "For better yield, try organic fertilizer once a month.",
                "Today’s weather looks good for irrigation 🌦️.",
                "Crop rotation improves soil fertility 🌱.",
            ],
            Hindi: [
                "ज़रूर! मैं आपकी मदद कर सकता हूँ।",
                "बेहतर पैदावार के लिए महीने में एक बार जैविक खाद डालें।",
                "आज का मौसम सिंचाई के लिए अच्छा है 🌦️।",
                "फसल चक्रीकरण से मिट्टी की उर्वरता बढ़ती है 🌱।",
            ],
            Marathi: [
                "नक्की! मी तुझी मदत करू शकतो 🌿.",
                "चांगल्या उत्पादनासाठी महिन्यातून एकदा सेंद्रिय खत टाका.",
                "आजचे हवामान पिकांसाठी योग्य आहे 🌤️.",
                "पीक फेरपालट केल्याने जमिनीची सुपिकता वाढते 🌾.",
            ],
            Gujarati: [
                "હા, હું તમારી મદદ કરી શકું છું 🌾.",
                "સારા ઉપજ માટે મહીનામાં એકવાર જૈવિક ખાતર નાખો.",
                "આજનું વાતાવરણ સિંચાઈ માટે સારું છે ☀️.",
                "ફસલ ફેરફારથી જમીનની ઉર્વરતા વધે છે 🌱.",
            ],
            Tamil: [
                "நிச்சயம்! நான் உங்களுக்கு உதவுவேன் 🌾.",
                "சிறந்த விளைச்சலுக்காக மாதத்திற்கு ஒருமுறை உயிர் உரம் இடுங்கள்.",
                "இன்றைய வானிலை பாசனத்திற்கு ஏற்றது 🌦️.",
                "பயிர் மாற்றம் மண்ணின் வளத்தை உயர்த்தும் 🌱.",
            ],
        };

        const set = responses[language] || responses.English;
        return set[Math.floor(Math.random() * set.length)];
    };

    const handleSend = () => {
        if (!input.trim()) return;
        const userMsg = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");

        setTimeout(() => {
            const botMsg = { sender: "bot", text: generateResponse(input) };
            setMessages((prev) => [...prev, botMsg]);
        }, 800);
    };

    return (
        <main className="chatbot-page">
            <div className="chatbot-container">
                {/* HEADER */}
                <div className="chatbot-header">
                    <FaRobot className="bot-icon" />
                    <h2>AI Farming Assistant</h2>
                    <div className="lang-select">
                        <FaGlobe />
                        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Marathi</option>
                            <option>Gujarati</option>
                            <option>Tamil</option>
                        </select>
                    </div>
                </div>

                {/* CHAT BODY */}
                <div className="chat-window">
                    {messages.map((msg, i) => (
                        <div key={i} className={`chat-bubble ${msg.sender}`}>
                            <div className="icon">
                                {msg.sender === "bot" ? <FaRobot /> : <FaUser />}
                            </div>
                            <p>{msg.text}</p>
                        </div>
                    ))}
                    <div ref={chatEndRef}></div>
                </div>

                {/* INPUT */}
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder={`Type message in ${language}...`}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <button onClick={handleSend}>
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </main>
    );
}
