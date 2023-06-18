import React,{useContext} from "react";
import Leftside from "../Dashbord/LeftsideDoctor";
import TodaysSchedule from "../Components/TodaysSchedule";
import "../Dashbord/dash.css";
import { authContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";
import Navbar from "../Components/Basic/Navbar"
import Footer from "../Components/Basic/Footer";
const DoctorDashboard = () => {
  const {role} = useContext(authContext);

  if(role === "user"){
    return < Navigate to={"/"}/>
  }
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
    <Navbar />
      <div>
        <div className="row m-5" style={{ maxWidth: "100%" }}>
          <div
            className="col-3 col-md-3 p-4 bg-white "
            style={{ height: "80vh" }}
          >
            <Leftside />
          </div>
          <div
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
            }}
          >
            <TodaysSchedule />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DoctorDashboard;
