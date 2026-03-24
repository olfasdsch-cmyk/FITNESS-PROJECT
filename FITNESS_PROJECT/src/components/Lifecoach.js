import React, { useState } from "react";
import Navbarr from "./Navbarr";
import "./Lifecoach.css";
import heroVideo from "./hero-video.mp4"; // import your video

function Lifecoach() {
  const [activeCard, setActiveCard] = useState(null);

  const fitnessImg = "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg";
  const nutritionImg = "https://images.pexels.com/photos/593835/pexels-photo-593835.jpeg";
  const mindsetImg = "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg";

 const cardData = {
  consistency: {
    img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    title: "Consistency",
    subtitle: "Train regularly",
    description: "Small daily efforts bring big long-term results."
  },
  hydration: {
    img: "https://images.pexels.com/photos/1438675/pexels-photo-1438675.jpeg",
    title: "Hydration",
    subtitle: "Drink water",
    description: "Hydration boosts energy and recovery."
  },
  sleep: {
    img: "https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg",
    title: "Sleep",
    subtitle: "Rest well",
    description: "7–8 hours of sleep improves performance."
  },
  balanced: {
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    title: "Balanced Diet",
    subtitle: "Eat smart",
    description: "Combine proteins, carbs, and healthy fats."
  },
  stress: {
    img: "https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg",
    title: "Stress Control",
    subtitle: "Stay calm",
    description: "Manage stress with breathing and rest."
  },
  active: {
    img: "https://images.pexels.com/photos/1954525/pexels-photo-1954525.jpeg",
    title: "Active Routine",
    subtitle: "Move daily",
    description: "Stay active even outside workouts."
  },
};
  return (
    <div className="lifecoach-page">

      {/* Background Video */}
      <video
        className="background-video"
        src={heroVideo}
        autoPlay
        loop
        muted
      />

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          className="hero-img"
          src="https://static.vecteezy.com/system/resources/thumbnails/039/652/727/small/ai-generated-person-running-on-a-track-water-drops-in-motion-energetic-vitality-ai-generated-photo.jpg"
          alt="Become the best version"
        />
        <h1>Become the Best Version of Yourself</h1>
        <p>Fitness • Nutrition • Mindset</p>
      </div>

      {/* CONTENT */}
      <div className="lifecoach-container">

        {/* MAIN CARDS */}
        <div className="main-cards-container">
          <div
            className={`main-card ${activeCard === 1 ? "active" : ""}`}
            onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
            style={{ backgroundImage: `url(${fitnessImg})` }}
          >
            <h2>Fitness Training</h2>
            <p className="card-short">Build strength and stay active</p>
            <div className="card-details">
              <p>Train 3–4 times per week with structured workouts.</p>
              <ul>
                <li>Warm up properly</li>
                <li>Mix cardio & strength</li>
                <li>Recovery is essential</li>
              </ul>
            </div>
          </div>

          <div
            className={`main-card ${activeCard === 2 ? "active" : ""}`}
            onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
            style={{ backgroundImage: `url(${nutritionImg})` }}
          >
            <h2>Healthy Nutrition</h2>
            <p className="card-short">Fuel your body correctly</p>
            <div className="card-details">
              <p>Nutrition supports performance and recovery.</p>
              <ul>
                <li>Drink 2L water daily</li>
                <li>Eat balanced meals</li>
                <li>Avoid processed food</li>
              </ul>
            </div>
          </div>

          <div
            className={`main-card ${activeCard === 3 ? "active" : ""}`}
            onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
            style={{ backgroundImage: `url(${mindsetImg})` }}
          >
            <h2>Strong Mindset</h2>
            <p className="card-short">Stay disciplined and focused</p>
            <div className="card-details">
              <p>Your mindset defines your success.</p>
              <ul>
                <li>Set clear goals</li>
                <li>Stay consistent</li>
                <li>Track progress</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BEST PRACTICES */}
        <h2 className="section-title" >Best Practices</h2>
        <div className="cards-container">
          {Object.entries(cardData).map(([key, card]) => (
    <div
      className="coach-card"
      key={key}
      style={{ backgroundImage: `url(${card.img})` }}
    >
      <h3>{card.title}</h3>
      <p className="short">{card.subtitle}</p>
      <p className="details">{card.description}</p>
    </div>
  ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>FITNESS PROJECT</h3>
            <p>Train smarter and achieve your goals.</p>
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
            <p>Find your ideal workout partner and stay motivated.</p>
          </div>
        </div>
        <div className="footer-bottom">© 2026 FITNESS PROJECT</div>
      </footer>
    </div>
  );
}

export default Lifecoach;