import React from "react";
import Button1 from "../ui/Button1";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { useLogoutMutation } from "../../../../redux/api/usersApiSlice"; 
import { logout } from "../../../../redux/features/auth/authSlice"; 

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("userInfo") !== null;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation(); 

  const handleLogout = async () => {
    try {
     
      await logoutApiCall().unwrap();

    
      dispatch(logout());

      
      localStorage.removeItem("userInfo");

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
  
    }
  };

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
            { name: "Home", path: "/home" },
            { name: "Store", path: "/shop" },
            { name: "Favorite", path: "/favorite" },
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
                  fontWeight:"700",
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
          {isLoggedIn ? (
            <Button1 text="Logout" onClick={handleLogout} />
          ) : (
            <>
              <Link to="/register">
                <Button1 text="Sign Up" />
              </Link>
              <Link to="/login">
                <Button1 text="Login" />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
