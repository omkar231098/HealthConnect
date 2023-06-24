import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { getDoctor } from '../../redux/AdminReducer/action';
import { useNavigate, Link } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Box width="20%" boxShadow="xl" p="10px" display="block">
      <Box mt={5} boxShadow="xl">
        <Button
          w="100%"
          mb={4}
          bg="blue.500"
          color="white"
          _hover={{ bg: 'blue.600' }}
          fontSize={20}
          onClick={() => {
            navigate('/allAdminData');
          }}
        >
          Dashboard
        </Button>
        <Button
          w="100%"
          mb={4}
          bg="blue.500"
          color="white"
          _hover={{ bg: 'blue.600' }}
          fontSize={20}
          onClick={() => {
            navigate('/doctorList');
          }}
        >
          Doctors
        </Button>
        <Button
          w="100%"
          mb={4}
          bg="blue.500"
          color="white"
          _hover={{ bg: 'blue.600' }}
          fontSize={20}
          onClick={() => {
            navigate('/userList');
          }}
        >
          Users
        </Button>
      </Box>
    </Box>
  );
}
