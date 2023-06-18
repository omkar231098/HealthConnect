
import React from "react";
import Option from "./Option";
import "./dash.css";
import { Link } from "react-router-dom";

const Leftside = () => {
  return (
    <div>
      <ul className="mt-5">
        <li>
          <Link to="/doctorDash">
            <Option Value="Today's Schedule" Option="today" />
          </Link>
        </li>
        <li style={{ textDecoration: "none" }}>
          <Link to="/doctor/perosnaldetails">
            <Option Value="Personal Details" />
          </Link>
        </li>

        <li style={{ textDecoration: "none" }}>
          <Link to="/doctor/payment-history">
            <Option Value="Previous Appointments" />
          </Link>
        </li>

        {/* <li style={{ textDecoration: "none" }}>
          <Link to="/doctor/feedback">
            <Option Value="Feedback" />
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Leftside;
