import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Navbarr from "./Navbarr";
import "./Register.css";

function Register() {
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    image: "",
    gender: "",
    About_me: "",
    favoriteSports: [],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Example sports list
  const sportsList = [
    "Yoga",
    "Pilates",
    "Crossfit",
    "Boxing",
    "Swimming",
    "Running",
    "Cycling",
    "Fitness",
    "Zumba",
  ];

  const handleSportChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setregister({ ...register, favoriteSports: [...register.favoriteSports, value] });
    } else {
      setregister({
        ...register,
        favoriteSports: register.favoriteSports.filter((sport) => sport !== value),
      });
    }
  };

  return (
    <div className="register-page">
      <div className="register-wrapper">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form-register"
        >
          <h2 className="form-register-heading">Please Register</h2>

          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            required
            onChange={(e) =>
              setregister({ ...register, name: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Last Name"
            required
            onChange={(e) =>
              setregister({ ...register, lastname: e.target.value })
            }
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            required
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />

          <input
            type="text"
            className="form-control"
            name="image"
            placeholder="Image URL"
            required
            onChange={(e) =>
              setregister({ ...register, image: e.target.value })
            }
          />

          <select
            className="form-control"
            required
            onChange={(e) =>
              setregister({ ...register, gender: e.target.value })
            }
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <textarea
            className="form-control"
            placeholder="About Me"
            required
            onChange={(e) =>
              setregister({ ...register, About_me: e.target.value })
            }
          />

          {/* Favorite sports selection */}
          <div style={{marginTop: "10px", marginBottom: "10px"}}>
            <label><strong>Favorite Sports:</strong></label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {sportsList.map((sport) => (
                <label key={sport}>
                  <input
                    type="checkbox"
                    value={sport}
                    checked={register.favoriteSports.includes(sport)}
                    onChange={handleSportChange}
                  />
                  {sport}
                </label>
              ))}
            </div>
          </div>

          <button
            className="btn-register"
            onClick={async () => {
              await dispatch(userRegister(register));
              navigate("/profil");
            }}
          >
            Register
          </button>

          <h5 style={{ marginTop: "20px", textAlign: "center" }}>
            Already have an account? <Link to="/login">Login now</Link>
          </h5>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>FITNESS PROJECT</h3>
            <p>
              Train smarter, connect faster, and achieve your goals with our
              all-in-one fitness platform.
            </p>
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
              FITPARTNER helps you find the perfect workout partner based on
              your goals, level, and availability.
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

export default Register;