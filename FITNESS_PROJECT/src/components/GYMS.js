import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import heroVideo from "./hero-video.mp4";
import "./GYMS.css";
import { useDispatch, useSelector } from "react-redux";
import { addreservation } from "../JS/reservationslice";

function GYMS({ping,setping}) {
  const user = useSelector((state) => state.user.user);
    const gyms=useSelector((state)=>state.salledesport.salledesportlist);
  const params=useParams();
  const gym=gyms.filter((el)=>el._id===params.id)[0];
  const [newreservation, setnewreservation] = useState({
  
  gymName:gym?.spacename,
  bookedBy: "",
  userName:user?.name+" "+user?.lastname,
  sport: gym.activities, 
  bookingType:"",
  bookingTime:"" ,
  createdAt: new Date()
})
const navigate=useNavigate();
const dispatch=useDispatch();
  if (!gym) return <p style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  return (
    <div className="gyms-page">

      {/* Video background */}
      <video className="gyms-video-bg" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gym name */}
      <div className="gyms-hero">
        <h1>{gym.spacename}</h1>
      </div>

      {/* Gym info */}
      <div className="gyms-content">
        <img src={gym.img} alt={gym.spacename} className="gym-image" />
        <p><strong>Time:</strong> {gym.time}</p>
        <p><strong>Activities:</strong> {gym.activities}</p>
        <p><strong>Location:</strong> {gym.location}</p>
        <p><strong>Phone:</strong> {gym.phone}</p>
        <p><strong>Description:</strong> {gym.full_description}</p>
      </div>

      {/* Booking Section */}
      <div className="booking-section">
        <h3>Make a Reservation</h3>
        <form>
          <label>Booking Type:</label>
          <select onChange={(e)=>setnewreservation({...newreservation,bookingType:e.target.value})}>
            <option value="day">Per Day: {gym.price_day}</option>
            <option value="week">Per Week: {gym.price_week}</option>
            <option value="month">Per Month: {gym.price_month}</option>
            <option value="year">Per Year: {gym.price_year}</option>
          </select>

          <label>Sport (only for per day):</label>
          <select>
            {gym.activities.split(",").map((act, idx) => (
              <option key={idx} value={act.trim()}>{act.trim()}</option>
            ))}
          </select>

          <label>Time:</label>
          <input type="time" onChange={(e)=>setnewreservation({...newreservation,bookingTime:e.target.value})}/>

          <label>Booked For (Name):</label>
          <input type="text" placeholder="Name" onChange={(e)=>setnewreservation({...newreservation,bookedBy:e.target.value})}/>

          <button onClick={()=>{dispatch(addreservation(newreservation));setping(!ping);alert("votre enregistrement est validée");navigate("/")}}>Reserve</button>
        </form>
      </div>

    </div>
  );
}

export default GYMS;