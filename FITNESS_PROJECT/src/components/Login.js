import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../JS/userSlice/userSlice";

import heroVideo from "./hero-video.mp4"; // video background
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  return (
    <div className="login-page">

      {/* Video background */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="login-wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
          />
          
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
          />

          <label className="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
          </label>

          <button
            className="btn-login"
            onClick={() => {
              setTimeout(() => {
                dispatch(userlogin(login));
                navigate("/profil");
              }, 1000);
            }}
          >
            Login
          </button>

          <h5 style={{ marginTop: "20px", textAlign: "center" }}>
            Don't have an account? <Link to="/register">Register now</Link>
          </h5>
        </form>
      </div>

      {/* Footer stays the same */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>FITNESS PROJECT</h3>
            <p>Train smarter, connect faster, and achieve your goals with our all-in-one fitness platform.</p>
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