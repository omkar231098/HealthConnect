import React, { useState, useEffect, useContext } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { authContext } from '../../Context/AuthContext';
import Sidebar from '../../Components/Admin/Sidebar';

function Doctor() {
  const { token, email, refToken } = useContext(authContext);
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  function getdata() {
    fetch(`${process.env.REACT_APP_HOST_URL}doctor/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
        refresh: `Bearer ${refToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isError) {
          alert('Something went wrong. Please try again');
        } else {
          console.log(res);
          setDoctor(res.Msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleReject = (appointmentId) => {
    console.log(appointmentId);
    console.log('insidedelete');
    fetch(`${process.env.REACT_APP_HOST_URL}doctor/${appointmentId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
        refresh: `Bearer ${refToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (!res.isError) {
          getdata();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var doctorDetails = '';
  doctorDetails = doctor.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.role}</td>
        <td>{item.specialization}</td>
        <td>{item.degree}</td>
        <td>{item.yearOfExperience}</td>
        <td>
          <button
            className="btn btn-danger delete"
            onClick={() => handleReject(item.id)}
            type="button"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <Box display="flex">
      <Sidebar />
      <Box flex="1" p="4">
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Doctors List
        </Text>
        <Box overflowX="auto">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Specialization</th>
                <th>Degree</th>
                <th>Experience</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{doctorDetails}</tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
}

export default Doctor;
