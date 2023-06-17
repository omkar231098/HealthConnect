import { Box,Text,Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { getDoctor } from '../../redux/AdminReducer/action';
import {useNavigate} from "react-router-dom"


export default function sidebar() {
    const navigate = useNavigate();
    
return (
    <Box width={"20%"} boxShadow={"xl"} p={"10px"}  display="block" >
        <Box mt={5} boxShadow={'xl'} >
            <Button 
                w={'80%'}
                m={4}
                bg={"two"}
                color={"white"}
                fontSize={20}
                onClick={()=>navigate("/allAdminData")}>Dashboard</Button>
        <br />
            <Button 
                w={'80%'}
                ml={'15px'}
                mb={4}
                bg={"two"}
                color={"white"}
                fontSize={20}
                onClick={()=>navigate("/admin")}>Doctors</Button>
        </Box>
    </Box>
  )
}


