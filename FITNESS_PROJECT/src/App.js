import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbarr from "./components/Navbarr";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lifecoach from "./components/Lifecoach";
import Contact from "./components/Contact"; 
import Salledesport from "./components/salledesport"; 
import Partner from "./components/partner"; 
import Dashbord from "./components/Dashbord";
import GYMS from "./components/GYMS"
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
  });
  return (
    <div className="App">
<Navbarr/>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       <Route path="/profil" element={<Profil />} />
<Route path="/Lifecoach" element={<Lifecoach />} /> 
       <Route path="/Contact" element={<Contact />} /> 
       <Route path="/Salledesport" element={<Salledesport />} />
       <Route path="/partner" element={<Partner />} /> 
           <Route path="/dashbord" element={<Dashbord />} /> 
           <Route path="/gyms/:id" element={<GYMS />} /> 
       
       
       
      </Routes>
    </div>
  );
}

export default App;
