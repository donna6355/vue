import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const onLogout = () => {
    axios.get("/api/logout").then((res) => {
      if (res.data.success) navigate("/login");
      else alert("Failed to log out!");
    });
  };
  return (
    <div style={{ width: "500px", margin: "400px auto" }}>
      <h1 style={{ textAlign: "center" }}>Landing Page</h1>
      <button style={{ width: "100%" }} onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
}

export default LandingPage;
