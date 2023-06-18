import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../Context/AuthContext";
import Scrollbar from "react-scrollbars-custom";

import "../Dashbord/dash.css";
// import StarPicker from 'react-star-picker';

import { Link } from "react-router-dom";


import Navbar from "../Components/Basic/Navbar";
import Leftside from "../Dashbord/LeftsideDoctor";
import Footer from "../Components/Basic/Footer";
const DocAppointments = () => {

  const [appointments, setAppointments] = useState([]);
  const { token, email, refToken } = useContext(authContext);

  useEffect(() => {
    getdata()
  }, []);

  function getdata(){
    console.log("insidegetdata")
    fetch(`${process.env.REACT_APP_HOST_URL}appoint/doc`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
        'refresh': `Bearer ${refToken}`
      },
      body: JSON.stringify({ doctorEmail: email })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (!res.isError) {
          setAppointments(res.Msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }



  const handleReject = (appointmentId) => {
    console.log("insidedelete")
    fetch(`${process.env.REACT_APP_HOST_URL}appoint/delete/${appointmentId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
        'refresh': `Bearer ${refToken}`
      },
      body: JSON.stringify({ status: "rejected" })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (!res.isError) {
          getdata()
         
          
        }
      })
      .catch((err) => {
        console.log(err);
      });

  };



  

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
            className="col-9 col-md-9 p-3"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
            }}
          >
            <Scrollbar
              noScrollX
              style={{ position: "", height: "73vh", width: "150vh" }}
              className="col-12 col-md-12"
            >
           <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Slot</th>
          <th scope="col">Patient Name</th>
          <th scope="col">PhoneNumber</th>
          <th scope="col">Symptoms</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {appointments .map((appointment) => (
          <tr key={appointment._id}>
            <th scope="row">{appointment.bookDate}</th>
            <th scope="row">{appointment.bookTimeSlot}</th>
            <th scope="row">{appointment.patientName}</th>
            <th scope="row">{appointment.phoneNumber}</th>
            <th scope="row">{appointment.symptoms}</th>
            <th scope="row">
              <span
               style={{
  color:
    appointment.status === "Accpeted"
      ? "#a4de02" // Green color for Accepted status
      : appointment.status === "notAccpeted"
      ? "#FFFF00" // Red color for notAccepted status
      : appointment.status === "rejected"
      ? "red" // Purple color for rejected status
      : "inherit" // Inherit color for other cases
}}
              >
                {appointment.status === "Accpeted"
    ? "Approved"
    : appointment.status === "notAccpeted"
    ? "Pending"
    : appointment.status === "rejected"
    ? "Rejected"
    : ""}
              </span>
            </th>
            <th scope="row">
              {(
                <>
                  {/* <button
                    onClick={() => handleAccept(appointment._id)}
                    style={{
                      marginRight: '5px',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Accept
                  </button> */}
                  <button
                    onClick={() => handleReject(appointment._id)}
                    style={{
                      marginRight: '5px',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                Delete
                  </button>
                </>
              )}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
            </Scrollbar>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocAppointments;







  //   console.log(decoded);

//   const [Appointments, setAppointments] = useState([]);

//   const fetchAppointments = async () => {

//     var token = localStorage.getItem("token");
//     var decoded = jwt_decode(token);
//     const { data } = await Axios.post(
//       `${process.env.REACT_APP_SERVER_URL}/doctors/previous-appointments/`,
//       {
//         doctorId: decoded._id,
//       }
//     );
//     console.log(data);
//     setAppointments(data);
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []);