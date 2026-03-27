import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, updateUser } from "../JS/userSlice/userSlice";
import { deletereservation } from "../JS/reservationslice";
import videoBg from "./hero-video.mp4"; // Make sure this file exists
import "./Profil.css"; // CSS file

function Profil({ ping, setPing }) {
  const user = useSelector((state) => state.user.user);
  const reservations = useSelector((state) => state.reservation.reservationlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [aboutMe, setAboutMe] = useState(user?.About_me || "");
  const fullnameuser = user?.name + " " + user?.lastname;

  // Save About_me update
  const handleUpdateAboutMe = () => {
    dispatch(updateUser({ id: user._id, About_me: aboutMe }));
  };

  return (
    <div className="profile-page">
      {/* Video background */}
      <video autoPlay loop muted className="background-video">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="profile-wrapper">
        <h1>Hello {user?.name}</h1>

        <button
          className="logout-btn"
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
        >
          Logout
        </button>

        {/* About Me Section */}
        <div className="about-me-container">
          <h3>About Me</h3>
          <textarea
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            placeholder="Write something about yourself..."
          />
          <button className="update-about-btn" onClick={handleUpdateAboutMe}>
            Update About Me
          </button>
        </div>

        {/* Reservations Table */}
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Gym</th>
              <th>Booked By</th>
              <th>Sport</th>
              <th>Type</th>
              <th>Time</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reservations
              ?.filter((el) => el.userName === fullnameuser)
              .map((el) => (
                <tr key={el._id}>
                  <td>{el.gymName}</td>
                  <td>{el.bookedBy}</td>
                  <td>{el.sport}</td>
                  <td>{el.bookingType}</td>
                  <td>{el.bookingTime}</td>
                  <td>Not confirmed</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        dispatch(deletereservation({ id: el._id }));
                        setPing(!ping); // re-render after deletion
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profil;