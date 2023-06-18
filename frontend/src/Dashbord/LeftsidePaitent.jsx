
import React from "react";
import Option from "./Option";
import "./dash.css";
import { Link } from "react-router-dom";

const Leftside = () => {
    return (
        <div>
          <ul>
            <li>
              <Link to="/paitentDash">
                <Option Value="Personal Details" />
              </Link>
            </li>
            <li>
              <Link to="/patient/searchdoctor">
                <Option Value="Search Doctor" />
              </Link>
            </li>
            <li>
              <Link to="/patient/createappointment">
                <Option Value="Create Appointment" />
              </Link>
            </li>
    
            <li>
              <Link to="/patient/appointments">
                <Option Value="Appointments" />
              </Link>
            </li>
    
           
          </ul>
        </div>
      );
};

export default Leftside;
