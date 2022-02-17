import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStore } from "react-redux";

function LandingPage() {
  const store = useStore();
  let isUserIn =
    store.getState().user.loginSuccess != null
      ? store.getState().user.loginSuccess.loginSuccess
      : false;
  const navigate = useNavigate();
  let button;
  const onLogout = () => {
    axios.get("/api/logout").then((res) => {
      if (res.data.success) navigate("/login");
      else alert("Failed to log out!");
    });
  };

  if (isUserIn)
    button = (
      <button style={{ width: "100%" }} onClick={onLogout}>
        Log Out
      </button>
    );
  else
    button = (
      <button style={{ width: "100%" }} onClick={() => navigate("/login")}>
        Sign In
      </button>
    );

  return (
    <div style={{ width: "500px", margin: "400px auto" }}>
      <h1 style={{ textAlign: "center" }}>Landing Page</h1>
      {button}
    </div>
  );
}

export default LandingPage;
