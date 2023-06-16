
import { Routes, Route } from "react-router-dom";
import './App.css';
import Register from './Components/Register';
import Login from "./Components/Login";
import PersonalDetails from "./pages/PaitentDash";
import DoctorDashboard from "./pages/DoctorDash";


function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/paitentDash" element ={<PersonalDetails />} />
            <Route path="/doctorDash" element ={<DoctorDashboard />} />
          </Routes>
    </div>
  );
}

export default App;
