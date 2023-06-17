
import { Routes, Route } from "react-router-dom";
import './App.css';
import Register from './Components/Register';
import Login from "./Components/Login";
import PersonalDetails from "./pages/PaitentDash";
import DoctorDashboard from "./pages/DoctorDash";
import SearchDoctor from "./pages/SearchDoctor";
import Appointments from "./pages/Appointments";
import CreateAppointment from "./pages/CreateAppointment";



function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/paitentDash" element ={<PersonalDetails />} />
            <Route path="/doctorDash" element ={<DoctorDashboard />} />
            <Route path="/patient/searchdoctor" element ={<SearchDoctor />} />
            <Route path="/patient/appointments" element ={<Appointments />} />
            <Route path="/patient/createappointment" element ={<CreateAppointment />} />
          </Routes>
    </div>
  );
}

export default App;
