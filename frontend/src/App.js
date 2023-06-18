import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import PersonalDetails from "./pages/PaitentDash";
import DoctorDashboard from "./pages/DoctorDash";
import AdminLogin from "./Components/Admin/AdminLogin";
import AllData from "./Components/Admin/AllData";
import Slot from "./pages/Slots"
import AdminPage from "./pages/AdminPage";
import PersonalDetailsDocter from "./pages/PersonalDetails";
import Home from "./Components/Home/Home/Home";
import SearchDoctor from "./pages/SearchDoctor";
import Appointments from "./pages/Appointments";
import CreateAppointment from "./pages/CreateAppointment";
import TodaysSchedule from "./Components/TodaysSchedule";
import DocAppointments from "./pages/PaymentHistory";
import AddDoctor from "./Components/Admin/AddDoct"

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
        <Route path="/patient/searchdoctor" element={<SearchDoctor />} />
        <Route path="/patient/appointments" element={<Appointments />} />
        <Route
          path="/patient/createappointment/:doctor"
          element={<CreateAppointment />}
        />
        <Route path="/doctor" element={<TodaysSchedule />} />
        <Route path="/doctor/payment-history" element={<DocAppointments />} />
        {/* <Route path="/adminLogin" element={<AdminLogin />} /> */}
        <Route path="/allAdminData" element={<AllData />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/doctorAdmin" element={<AddDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
