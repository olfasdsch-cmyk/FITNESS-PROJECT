import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import heroVideo from "./hero-video.mp4";

function Dashboard() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reservation")
      .then((res) => res.json())
      .then((data) => setReservations(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="db-page">
      {/* Video background */}
      <video className="db-background-video" src={heroVideo} autoPlay loop muted />

      <div className="db-container">
        <h1>Admin Dashboard - Reservations</h1>

        {reservations.length === 0 ? (
          <p>No reservations yet</p>
        ) : (
          <table className="db-table">
            <thead>
              <tr>
                <th>Gym</th>
                <th>Booking Type</th>
                <th>Sport</th>
                <th>Booked By</th>
                <th>User Name</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r) => (
                <tr key={r._id}>
                  <td>{r.gymName}</td>
                  <td>{r.bookingType}</td>
                  <td>{r.sport || "-"}</td>
                  <td>{r.bookedBy}</td>
                  <td>{r.userName}</td>
                  <td>{r.bookingTime || "-"}</td>
                  <td>{new Date(r.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;