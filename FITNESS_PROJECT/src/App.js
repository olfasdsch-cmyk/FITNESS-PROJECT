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

       
       
       
       
      </Routes>
    </div>
  );
}

export default App;
