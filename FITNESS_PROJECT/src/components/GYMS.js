import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import heroVideo from "./hero-video.mp4";
import "./GYMS.css";

function GYMS() {
  const { id } = useParams();
  const [gym, setGym] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/salledesport/${id}`)
      .then((res) => res.json())
      .then((data) => setGym(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!gym) return <p style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  return (
    <div className="gyms-page">

      {/* Video background */}
      <video className="gyms-video-bg" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gym name */}
      <div className="gyms-hero">
        <h1>{gym.spacename}</h1>
      </div>

      {/* Gym info */}
      <div className="gyms-content">
        <img src={gym.img} alt={gym.spacename} className="gym-image" />
        <p><strong>Time:</strong> {gym.time}</p>
        <p><strong>Activities:</strong> {gym.activities}</p>
        <p><strong>Location:</strong> {gym.location}</p>
        <p><strong>Phone:</strong> {gym.phone}</p>
        <p><strong>Description:</strong> {gym.full_description}</p>
      </div>

      {/* Booking Section */}
      <div className="booking-section">
        <h3>Make a Reservation</h3>
        <form>
          <label>Booking Type:</label>
          <select>
            <option value="day">Per Day</option>
            <option value="week">Per Week</option>
            <option value="month">Per Month</option>
            <option value="year">Per Year</option>
          </select>

          <label>Sport (only for per day):</label>
          <select>
            {gym.activities.split(",").map((act, idx) => (
              <option key={idx} value={act.trim()}>{act.trim()}</option>
            ))}
          </select>

          <label>Time:</label>
          <input type="time" />

          <label>Booked For (Name):</label>
          <input type="text" placeholder="Name" />

          <button type="submit">Reserve</button>
        </form>
      </div>

    </div>
  );
}

export default GYMS;