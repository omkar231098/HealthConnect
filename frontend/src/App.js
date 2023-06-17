import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import PersonalDetails from "./pages/PaitentDash";
import DoctorDashboard from "./pages/DoctorDash";
import PersonalDetailsDocter from "./pages/PersonalDetails";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/paitentDash" element={<PersonalDetails />} />
        <Route path="/doctorDash" element={<DoctorDashboard />} />
        <Route
          path="/doctor/perosnaldetails"
          element={<PersonalDetailsDocter />}
        />
      </Routes>
    </div>
  );
}

export default App;
