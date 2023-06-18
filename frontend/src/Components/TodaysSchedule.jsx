import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../Context/AuthContext";

const TodaysSchedule = () => {
  const [appointments, setAppointments] = useState([]);
  const { token, email, refToken } = useContext(authContext);

  useEffect(() => {
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
  }, []);

  const handleAccept = (appointmentId) => {
    fetch(`${process.env.REACT_APP_HOST_URL}appoint/accept/${appointmentId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
        'refresh': `Bearer ${refToken}`
      },
      body: JSON.stringify({ status: "Accpeted" })
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.isError) {
          setAppointments((prevAppointments) =>
            prevAppointments.map((appointment) => {
              if (appointment._id === appointmentId) {
                return {
                  ...appointment,
                  status: "Accpeted"
                };
              }
              return appointment;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReject = (appointmentId) => {
    fetch(`${process.env.REACT_APP_HOST_URL}appoint/accept/${appointmentId}`, {
      method: 'PATCH',
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
        if (!res.isError) {
          setAppointments((prevAppointments) =>
            prevAppointments.map((appointment) => {
              if (appointment._id === appointmentId) {
                return {
                  ...appointment,
                  status: "rejected"
                };
              }
              return appointment;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    
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
        {appointments .filter((appointment) => appointment.status === "Accpeted" ||appointment.status === "notAccpeted"  ).map((appointment) => (
          <tr key={appointment._id}>
            <th scope="row">{appointment.bookDate}</th>
            <th scope="row">{appointment.bookTimeSlot}</th>
            <th scope="row">{appointment.patientName}</th>
            <th scope="row">{appointment.phoneNumber}</th>
            <th scope="row">{appointment.symptoms}</th>
            <th scope="row">
              <span
                style={{
                  color: appointment.status  ==="Accpeted" ? '#a4de02' : 'red'
                }}
              >
                {appointment.status ==="Accpeted" ? 'Approved' : 'Pending'}
              </span>
            </th>
            <th scope="row">
              {appointment.status !== "Accpeted"  && (
                <>
                  <button
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
                  </button>
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
                    Reject
                  </button>
                </>
              )}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodaysSchedule;


