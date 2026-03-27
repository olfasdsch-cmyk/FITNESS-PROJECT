import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroVideo from "./hero-video.mp4";
import "./salledesport.css";
import { useSelector, useDispatch } from "react-redux";
import { getsalledesport } from "../JS/salledesportslice"; // corrected path

function Salledesport() {
  const dispatch = useDispatch();
  const gyms = useSelector((state) => state.salledesport.salledesportlist) || [];

  // ✅ Fetch gyms when component mounts
  useEffect(() => {
    dispatch(getsalledesport());
  }, [dispatch]);

  console.log("Gyms from Redux:", gyms); // debug: check if gyms are loaded

  return (
    <div className="sd-page">
      <video className="sd-background-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="sd-hero-section">
        <img className="sd-hero-img" src="/salle de sport.jpeg" alt="Find a Gym" />
        <div className="sd-hero-content">
          <h1>Find Your Gym</h1>
          <p>Train hard • Stay motivated • Achieve your goals</p>
        </div>
      </div>

      <div className="sd-gyms-container">
        {gyms.length === 0 ? (
          <h2 style={{ color: "white", textAlign: "center" }}>No gyms found</h2>
        ) : (
          gyms.map((gym) => (
            <Link
              key={gym._id}
              to={`/gyms/${gym._id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="sd-gym-card">
                <div
                  className="sd-gym-img"
                  style={{ backgroundImage: `url(${gym.img || "/placeholder.png"})` }}
                ></div>
                <div className="sd-gym-info">
                  <h2>{gym.spacename}</h2>
                  <p><strong>Time:</strong> {gym.time}</p>
                  <p><strong>Activities:</strong> {gym.activities}</p>
                  <p><strong>Location:</strong> {gym.location}</p>
                  <p><strong>Phone:</strong> {gym.phone}</p>
                  <p className="sd-view-more">Click to see more →</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <footer className="sd-footer">
        <div className="sd-footer-container">
          <div className="sd-footer-col">
            <h3>FITNESS PROJECT</h3>
            <p>Train smarter and achieve your goals.</p>
          </div>
          <div className="sd-footer-col">
            <h4>Links</h4>
            <ul>
              <li>Home</li>
              <li>GYMS</li>
              <li>Find Partner</li>
              <li>LifeCoach</li>
            </ul>
          </div>
          <div className="sd-footer-col">
            <h4>FITPARTNER</h4>
            <p>Find your ideal workout partner and stay motivated.</p>
          </div>
        </div>
        <div className="sd-footer-bottom">© 2026 FITNESS PROJECT</div>
      </footer>
    </div>
  );
}

export default Salledesport;