
import { Routes, Route } from "react-router-dom";
import './App.css';
import Register from './Components/Register';
import Login from "./Components/Login";
import PersonalDetails from "./pages/PaitentDash";
import DoctorDashboard from "./pages/DoctorDash";
import Users from "./pages/admin/user";
import Doctors from "./pages/admin/doctor";
import AdminLogin from "./Components/Admin/AdminLogin"
import AllData from "./components/Admin/AllData"
import AdminPage from "./pages/AdminPage"


function App() {
  return (
    <div className="App">
      
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/paitentDash" element ={<PersonalDetails />} />
            <Route path="/doctorDash" element ={<DoctorDashboard />} />
            <Route path="/adminLogin" element={<AdminLogin/>}/>
            <Route path="/allAdminData" element={<AllData/>}/>
            <Route path="/admin" element={<AdminPage />} />
         
          </Routes>
    </div>
  );
}

export default App;
