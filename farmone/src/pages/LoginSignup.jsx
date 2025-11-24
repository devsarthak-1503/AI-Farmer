import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function LoginSignup() {
    const [isSignup, setIsSignup] = useState(false);
    const [authMode, setAuthMode] = useState("email");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const getUsers = () => JSON.parse(localStorage.getItem("farm_users") || "[]");
    const setUsers = (arr) => localStorage.setItem("farm_users", JSON.stringify(arr));
    const setAuth = (data) => localStorage.setItem("farm_auth", JSON.stringify(data));

    const validate = () => {
        if (authMode === "email" && !/\S+@\S+\.\S+/.test(email)) return "Enter a valid email!";
        if (authMode === "mobile" && !/^[6-9]\d{9}$/.test(mobile))
            return "Enter a valid 10-digit mobile number!";
        if (!password) return "Password required!";
        if (isSignup && password.length < 6) return "Password must be at least 6 chars!";
        if (isSignup && password !== confirm) return "Passwords do not match!";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validate();
        if (err) return setError(err);

        const users = getUsers();
        const key = authMode === "email" ? email : mobile;
        const existingUser = users.find((u) => u.key === key);

        if (isSignup) {
            if (existingUser) return setError("User already exists!");
            users.push({ key, password, mode: authMode });
            setUsers(users);
            alert("Signup successful! Please login.");
            setIsSignup(false);
            setEmail("");
            setMobile("");
            setPassword("");
            setConfirm("");
        } else {
            if (!existingUser || existingUser.password !== password)
                return setError("Invalid credentials!");
            setAuth({ key, loggedIn: true });
            navigate("/dashboard");
        }
    };

    return (
        <div className="login-page">
            <div className="login-bg"></div>
            <div className="auth-box">
                <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
                <p className="auth-sub">
                    {isSignup ? "Join FarmOne today!" : "Login to continue your farming tools"}
                </p>

                {/* Toggle */}
                <div className="mode-switch">
                    <button
                        className={authMode === "email" ? "active" : ""}
                        onClick={() => setAuthMode("email")}
                    >
                        Email
                    </button>
                    <button
                        className={authMode === "mobile" ? "active" : ""}
                        onClick={() => setAuthMode("mobile")}
                    >
                        Mobile
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {authMode === "email" ? (
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    ) : (
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            maxLength="10"
                        />
                    )}

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {isSignup && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                        />
                    )}

                    {error && <p className="error">{error}</p>}

                    <button className="btn-auth" type="submit">
                        {isSignup ? "Sign Up" : "Login"}
                    </button>
                </form>

                <p className="switch">
                    {isSignup ? "Already have an account?" : "New user?"}{" "}
                    <button
                        className="link-btn"
                        onClick={() => {
                            setIsSignup((v) => !v);
                            setError("");
                        }}
                    >
                        {isSignup ? "Login" : "Sign Up"}
                    </button>
                </p>
            </div>
        </div>
    );
}
