import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import AUTH from "./hoc/auth";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={AUTH(<LandingPage />, null)} />
          <Route exact path="/login" element={AUTH(<LoginPage />, false)} />
          <Route
            exact
            path="/register"
            element={AUTH(<RegisterPage />, false)}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
