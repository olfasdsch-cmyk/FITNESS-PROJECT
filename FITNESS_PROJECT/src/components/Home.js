import React from 'react';
import './Home.css';
import heroVideo from './hero-video.mp4';
import background from './home-background.jpeg'; // import from src

function Home() {
  return (
    <div className="h-home-page">

      {/* VIDEO BACKGROUND */}
      <video className="h-background-video" src={heroVideo} autoPlay loop muted />

      {/* HERO SECTION */}
      <section className="h-hero-section">
        {/* IMPORTED IMAGE */}
        <img
          src={background}
          alt="Hero Background"
          className="h-hero-img"
        />
        <div className="h-hero-content">
          <h1 style={{ fontFamily: "'Permanent Marker', cursive" }}>Train Smarter. Connect Faster.</h1>
          <p>Find gyms, partners, and life coaches to reach your fitness goals.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="h-footer">
        <div className="h-footer-container">
          <div className="h-footer-col">
            <h3>FITNESS PROJECT</h3>
            <p>Your all-in-one fitness platform to stay motivated and achieve goals faster.</p>
          </div>

          <div className="h-footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>GYMS</li>
              <li>Find Partner</li>
              <li>LifeCoach</li>
            </ul>
          </div>

          <div className="h-footer-col">
            <h4>About FITPARTNER</h4>
            <p>We help you find the perfect workout partner based on your goals, level, and availability.</p>
          </div>
        </div>

        <div className="h-footer-bottom">
          © 2026 FITNESS PROJECT. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Home;