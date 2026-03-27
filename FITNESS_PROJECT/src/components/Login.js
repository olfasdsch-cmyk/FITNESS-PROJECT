import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../JS/userSlice/userSlice"; // ✅ Correct import
import heroVideo from "./hero-video.mp4";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const action = await dispatch(userLogin(login));
      // ✅ Check if payload exists
      if (action.payload && action.payload.token) {
        localStorage.setItem("token", action.payload.token);
        navigate("/profil"); // Navigate after successful login
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="login-wrapper">
        <form onSubmit={handleSubmit} className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>

          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

          <input
            type="text"
            className="form-control"
            placeholder="Email Address"
            required
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />

          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />

          <label className="checkbox">
            <input type="checkbox" id="rememberMe" /> Remember me
          </label>

          <button className="btn-login" type="submit">
            Login
          </button>

          <h5 style={{ marginTop: "20px", textAlign: "center" }}>
            Don't have an account? <Link to="/register">Register now</Link>
          </h5>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>FITNESS PROJECT</h3>
            <p>
              Train smarter, connect faster, and achieve your goals with our all-in-one fitness platform.
            </p>
          </div>

          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li>Home</li>
              <li>GYMS</li>
              <li>Find Partner</li>
              <li>LifeCoach</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>FITPARTNER</h4>
            <p>
              FITPARTNER helps you find the perfect workout partner based on your goals, level, and availability.
              Stay motivated, build connections, and never train alone again.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 FITNESS PROJECT. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Login;