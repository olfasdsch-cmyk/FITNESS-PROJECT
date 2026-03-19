import React from 'react';
import Button from 'react-bootstrap/Button';
import './Home.css';
import background from './home-background.jpeg';

function Home() {
  return (
    <div className="home-page">
      
      <section 
        className="hero-section" 
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-content">
          <h1>Welcome to FITNESS PROJECT</h1>
          <p>Find gyms, partners, and life coaches to reach your goals</p>
        
        </div>
      </section>

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

export default Home;