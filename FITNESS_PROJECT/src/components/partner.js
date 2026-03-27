import React, { useEffect } from "react";
import heroVideo from "./hero-video.mp4";
import "./partner.css";
import { useSelector, useDispatch } from "react-redux";


function Partner() {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partner.partnerlist) || [];


  return (
    <div className="pt-page">
      <div className="pt-hero-section">
        <video className="pt-background-video" src={heroVideo} autoPlay loop muted />
        <img className="pt-hero-img" src="/together.png" alt="Find Partner" />
        <div className="pt-hero-content">
          <h1>Find Your Fitness Partner</h1>
          <p>Train Together • Stay Motivated</p>
        </div>
      </div>

      <div className="pt-cards-container">
        {partners.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>No partners found</p>
        ) : (
          partners.map((p) => (
            <div className="pt-coach-card" key={p._id}>
              <div
                className="pt-card-bg"
                style={{ backgroundImage: `url(${p.image || "/placeholder.png"})` }}
              ></div>
              <div className="pt-card-content">
                <h3>{p.name} {p.lastname}</h3>
                <p>{p.activities} • {p.gender}</p>
                <p>
                  Age: {p.age} | Location: {p.location} | Availability: {p.availability}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Partner;