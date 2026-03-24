import React, { useState } from "react";
import "./Contact.css";
import heroVideo from "./hero-video.mp4"; // your background video

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Video Background */}
      <video
        className="background-video"
        src={heroVideo}
        autoPlay
        loop
        muted
      />

      {/* Contact Form Container */}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to us!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
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

export default Contact;