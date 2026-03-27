import React, { useEffect } from "react";
import heroVideo from "./hero-video.mp4";
import "./partner.css";
import { useSelector, useDispatch } from "react-redux";
import { getpartner } from "../JS/partnerSlice";

function Partner() {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partner.partnerlist);

  useEffect(() => {
    dispatch(getpartner());
  }, [dispatch]);

  return (
    <div className="pt-page">

      {/* HERO SECTION */}
      <div className="pt-hero-section">
        <video className="pt-background-video" src={heroVideo} autoPlay loop muted />
        <img className="pt-hero-img" src="/together.png" alt="Find Partner" />
        <div className="pt-hero-content">
          <h1>Find Your Fitness Partner</h1>
          <p>Train Together • Stay Motivated</p>
          <p className="pt-hero-rules">
            Rules: Respect each other • Arrive on time • Communicate your goals • Have fun!
          </p>
        </div>
      </div>

      {/* PARTNER CARDS */}
      <div className="pt-cards-container">
        {partners.length > 0 ? (
          partners.map((partner) => (
            <div className="pt-coach-card" key={partner._id}>
              <div
                className="pt-card-bg"
                style={{ backgroundImage: `url(${partner.image || "/placeholder.png"})` }}
              ></div>
              <div className="pt-card-content">
                <h3>{partner.name} {partner.lastname}</h3>
                <p className="pt-short">{partner.activities} • {partner.gender}</p>
                <p className="pt-details">
                  Age: {partner.age} <br />
                  Location: {partner.location} <br />
                  Availability: {partner.availability}
                </p>
              </div>
            </div>
          ))
        ) : (
          <h2 style={{ color: "white", textAlign: "center" }}>No partners found</h2>
        )}
      </div>

    </div>
  );
}

export default Partner;