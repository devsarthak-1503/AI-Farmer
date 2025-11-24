import React, { useState, useEffect } from "react";
import "../styles/weathermandi.css";
import { WiDaySunny, WiRain, WiHumidity, WiStrongWind } from "react-icons/wi";
import { FaRupeeSign, FaLeaf, FaSearch } from "react-icons/fa";

export default function WeatherMandiLive() {
    const [city, setCity] = useState("Nashik");
    const [searchCity, setSearchCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cropSearch, setCropSearch] = useState("");

    const API_KEY = "YOUR_API_KEY_HERE"; // ⚠️ Replace this with your OpenWeatherMap API key

    // 🧩 Mock mandi data (you can link real API later)
    const mandiData = {
        Nashik: [
            { crop: "Onion", price: 1800, change: "+100" },
            { crop: "Tomato", price: 2200, change: "-50" },
            { crop: "Wheat", price: 2600, change: "+150" },
        ],
        Pune: [
            { crop: "Sugarcane", price: 3100, change: "+200" },
            { crop: "Soybean", price: 4200, change: "-80" },
            { crop: "Rice", price: 2800, change: "+120" },
        ],
        Nagpur: [
            { crop: "Cotton", price: 5500, change: "+300" },
            { crop: "Maize", price: 2400, change: "-60" },
            { crop: "Wheat", price: 2500, change: "+70" },
        ],
    };

    const [currentMandi, setCurrentMandi] = useState(mandiData[city]);

    // 🌤 Fetch weather data
    useEffect(() => {
        const fetchWeather = async () => {
            if (!city) return;
            try {
                setLoading(true);
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );
                const data = await res.json();
                if (data.cod === 200) {
                    setWeather({
                        temp: data.main.temp,
                        condition: data.weather[0].main,
                        humidity: data.main.humidity,
                        wind: data.wind.speed,
                    });
                    setCurrentMandi(mandiData[city] || []);
                } else {
                    setWeather(null);
                }
            } catch (err) {
                console.error("Weather fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();
    }, [city]);

    // Filter mandi crops by search
    const filteredCrops = currentMandi
        ? currentMandi.filter((item) =>
            item.crop.toLowerCase().includes(cropSearch.toLowerCase())
        )
        : [];

    return (
        <main className="wm-live-page">
            <h1 className="wm-live-title">🌦️ Live Weather & 🏬 Mandi Prices</h1>
            <p className="wm-live-sub">
                Get real-time weather updates and live mandi prices 📈
            </p>

            {/* CITY SEARCH BAR */}
            <div className="search-section">
                <div className="search-box">
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Search City (e.g. Pune, Nashik)"
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                    />
                    <button onClick={() => setCity(searchCity)}>Search</button>
                </div>
            </div>

            {/* WEATHER SECTION */}
            <section className="weather-section">
                {loading ? (
                    <p className="loading">Loading weather...</p>
                ) : weather ? (
                    <div className="weather-card">
                        <WiDaySunny className="w-icon" />
                        <h2>{city}</h2>
                        <p className="temp">{weather.temp.toFixed(1)}°C</p>
                        <p className="cond">{weather.condition}</p>
                        <div className="w-info">
                            <span>
                                <WiHumidity /> {weather.humidity}%
                            </span>
                            <span>
                                <WiStrongWind /> {weather.wind} km/h
                            </span>
                        </div>
                    </div>
                ) : (
                    <p className="no-data">City not found 😔</p>
                )}
            </section>

            {/* FORECAST MOCK */}
            <div className="forecast-cards">
                <div className="forecast-card">
                    <WiRain /> <p>Tomorrow</p> <span>27°C</span>
                </div>
                <div className="forecast-card">
                    <WiDaySunny /> <p>Day +2</p> <span>30°C</span>
                </div>
                <div className="forecast-card">
                    <WiRain /> <p>Day +3</p> <span>25°C</span>
                </div>
            </div>

            {/* MANDI SECTION */}
            <section className="mandi-section">
                <div className="mandi-header">
                    <h2>🏬 Mandi Prices — {city}</h2>
                    <div className="crop-search">
                        <FaSearch />
                        <input
                            type="text"
                            placeholder="Search Crop (e.g. Wheat, Onion)"
                            value={cropSearch}
                            onChange={(e) => setCropSearch(e.target.value)}
                        />
                    </div>
                </div>

                <table className="mandi-table">
                    <thead>
                        <tr>
                            <th>Crop</th>
                            <th>Price (₹/quintal)</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCrops.length > 0 ? (
                            filteredCrops.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <FaLeaf className="crop-icon" /> {item.crop}
                                    </td>
                                    <td>
                                        <FaRupeeSign /> {item.price}
                                    </td>
                                    <td
                                        className={item.change.startsWith("+") ? "pos" : "neg"}
                                    >
                                        {item.change}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="no-data">
                                    No crops found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>

            <p className="last-update">⏱️ Auto-updated every few minutes</p>
        </main>
    );
}
