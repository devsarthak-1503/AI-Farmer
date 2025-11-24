import React from "react";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <small>© {new Date().getFullYear()} Farmer one stop solution with AI integration</small>
            </div>
        </footer>
    );
}
