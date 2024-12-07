import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: "0",
        zIndex: "10",
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        <span
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#1a1a1a",
          }}
        >
          NexCar.
        </span>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            margin: "0",
            padding: "0",
          }}
        >
          {[
            { name: "Home", path: "/home1" },
            { name: "Store", path: "/shop" },
            { name: "Profile", path: "/profile" },
            { name: "Contact", path: "#" }, 
          ].map(({ name, path }) => (
            <li key={name} style={{ position: "relative" }}>
              <Link
                to={path}
                style={{
                  position: "relative",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "18px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ff004f";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#ffffff";
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              color: "#fff",
              background: "linear-gradient(135deg, #6a0dad, #9d50bb)",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 4px 15px rgba(154, 50, 205, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Login
          </button>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              color: "#fff",
              background: "linear-gradient(135deg, #9d50bb, #ff004f)",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 4px 15px rgba(255, 0, 79, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
