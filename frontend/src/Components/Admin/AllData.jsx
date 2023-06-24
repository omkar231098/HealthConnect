import React, { useState, useEffect, useContext } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import Sidebar from './Sidebar';
import { authContext } from '../../Context/AuthContext';

export default function AllData() {
  const { token, email, refToken } = useContext(authContext);
  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);

  useEffect(() => {
    // Fetch doctor count
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
      .then((data) => setDoctorCount(data.Msg.length))
      .catch((err) => {
        console.log(err);
      });

    // Fetch patient count
    fetch(`${process.env.REACT_APP_HOST_URL}user/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
        refresh: `Bearer ${refToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPatientCount(data.Msg.length))
      .catch((err) => {
        console.log(err);
      });
  }, [token, refToken]);

  const pieChartData = {
    labels: ['Doctors', 'Patients'],
    datasets: [
      {
        data: [doctorCount, patientCount],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <Flex>
      <Sidebar />

      <Box w="100%" p={8}>
        <Heading>Welcome Admin!</Heading>
        <Text color="gray.600" fontWeight="bold" mt={4}>
          Dashboard
        </Text>

        <Flex justifyContent="space-between" mt={8}>
          {/* BarChart component */}
          {/* StackbarCh component */}
        </Flex>

        <Flex justifyContent="space-between" mt={8}>
          <Box flex="1" mr={4} p={4} boxShadow="md" bg="white">
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Total Doctors
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="120px"
              bgGradient="linear(to-r, teal.500, green.500)"
              color="white"
              borderRadius="md"
              cursor="pointer"
              transition="all 0.3s"
              _hover={{
                transform: 'scale(1.05)',
              }}
            >
              <Text fontSize="4xl">{doctorCount}</Text>
            </Box>
          </Box>

          <Box flex="1" mr={4} p={4} boxShadow="md" bg="white">
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Total Patients
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="120px"
              bgGradient="linear(to-r, teal.500, green.500)"
              color="white"
              borderRadius="md"
              cursor="pointer"
              transition="all 0.3s"
              _hover={{
                transform: 'scale(1.05)',
              }}
            >
              <Text fontSize="4xl">{patientCount}</Text>
            </Box>
          </Box>

          <Box flex="1" p={4} boxShadow="md" bg="white">
            <Text fontSize="lg" fontWeight="bold" mb={2}>
            Total Appointments
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="120px"
              bgGradient="linear(to-r, teal.500, green.500)"
              color="white"
              borderRadius="md"
              cursor="pointer"
              transition="all 0.3s"
              _hover={{
                transform: 'scale(1.05)',
              }}
            >
              <Text fontSize="4xl">16</Text>
            </Box>
          </Box>
        </Flex>

        <Box mt={8}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Doctor and Patient Distribution
          </Text>
          <Box bg="white" p={4} boxShadow="md">
            <Pie data={pieChartData} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
