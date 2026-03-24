import React, { useEffect, useState } from "react";
import Navbarr from "./Navbarr";
import "./salledesport.css";

function Salledesport() {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    // Fetch gyms from your backend
    fetch("http://localhost:5000/salledesport")
      .then((res) => res.json())
      .then((data) => setGyms(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="salledesport-page">
      <Navbarr />

      {/* Hero Section */}
      <div className="hero-section">
        <img
          className="hero-img"
          src="https://in2english.net/wp-content/uploads/2025/03/playing-sports.jpg"
          alt="Find a Gym"
        />
        <div className="hero-content">
          <h1>Find Your Gym</h1>
          <p>Train hard • Stay motivated • Achieve your goals</p>
        </div>
      </div>

      {/* Gym Cards */}
      <div className="gyms-container">
        {gyms.map((gym) => (
          <div className="gym-card" key={gym._id}>
            <div
              className="gym-img"
              style={{ backgroundImage: `url(${gym.img})` }}
            ></div>
            <div className="gym-info">
              <h2>{gym.spacename}</h2>
              <p><strong>Time:</strong> {gym.time}</p>
              <p><strong>Activities:</strong> {gym.activities}</p>
              <p><strong>Location:</strong> {gym.location}</p>
              <p><strong>Phone:</strong> {gym.phone}</p>
              <p><strong>Prices:</strong> {gym.price_day} / day, {gym.price_week} / week, {gym.price_month} / month</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Salledesport;