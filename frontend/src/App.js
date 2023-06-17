import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import PersonalDetails from "./pages/PaitentDash";
import DoctorDashboard from "./pages/DoctorDash";

import AdminLogin from "./Components/Admin/AdminLogin"
import AllData from "./Components/Admin/AllData"
import AdminPage from "./pages/AdminPage"

import PersonalDetailsDocter from "./pages/PersonalDetails";

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/paitentDash" element ={<PersonalDetails />} />
            <Route path="/doctorDash" element ={<DoctorDashboard />} />
            <Route path="/doctor/perosnaldetails" element ={<PersonalDetailsDocter />} />
          </Routes>
    </div>
  );
}

export default App;
