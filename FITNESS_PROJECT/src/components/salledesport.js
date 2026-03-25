import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbarr from "./Navbarr";
import heroVideo from "./hero-video.mp4";
import "./salledesport.css";

function Salledesport() {
  const [gyms, setGyms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/salledesport")
      .then((res) => res.json())
      .then((data) => setGyms(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="sd-page">

    

      {/* Video background */}
      <video className="sd-background-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Hero Section */}
      <div className="sd-hero-section">
        <img
          className="sd-hero-img"
          src="/salle de sport.jpeg"
          alt="Find a Gym"
        />
        <div className="sd-hero-content">
          <h1>Find Your Gym</h1>
          <p>Train hard • Stay motivated • Achieve your goals</p>
        </div>
      </div>

      {/* Gym Cards */}
      <div className="sd-gyms-container">
        {gyms.map((gym) => (
          <div
            className="sd-gym-card"
            key={gym._id}
            onClick={() => navigate(`/gyms/${gym._id}`)}
          >
            <div
              className="sd-gym-img"
              style={{ backgroundImage: `url(${gym.img})` }}
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
        ))}
      </div>

      {/* Footer */}
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

        <div className="sd-footer-bottom">
          © 2026 FITNESS PROJECT
        </div>
      </footer>
    </div>
  );
}

export default Salledesport;