import React, { useEffect, useState } from "react";
import Navbarr from "./Navbarr";
import "./partner.css";
import heroVideo from "./hero-video.mp4"; // background video

function Partner() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/partner")
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="partner-page">
      <Navbarr />

      {/* Hero Section */}
      <div className="hero-section">
        <video className="background-video" src={heroVideo} autoPlay loop muted />
        <img
          className="hero-img"
          src="/together.png"
          alt="Find Partner"
        />
        <h1>Find Your Fitness Partner</h1>
        <p>Train Together • Stay Motivated</p>
        <p className="hero-rules">
          Rules: Respect each other • Arrive on time • Communicate your goals • Have fun!
        </p>
      </div>

      {/* Partner Cards */}
      <div className="cards-container">
        {partners.map((partner) => (
          <div
            className="coach-card"
            key={partner._id}
            style={{ backgroundImage: `url(${partner.image})` }}
          >
            <h3>{partner.name} {partner.lastname}</h3>
            <p className="short">{partner.activities} • {partner.gender}</p>
            <p className="details">
              Age: {partner.age} <br />
              Location: {partner.location} <br />
              Availability: {partner.availability}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner;