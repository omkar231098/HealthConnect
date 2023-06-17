import { Box, Button, FormControl, FormLabel, Input,Heading,Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminLogin(){

    const [name,setname] = useState("")
    const [password,setpassword] = useState("")
    const navigate = useNavigate()
    const handle = (e) => {
        
        setname(e.target.value)
        console.log(name)
    }
    const handelK = (e) => {
        
        setpassword(e.target.name)
        console.log(password)
    }
    const handleClick  = () => {
        let obj = {
            name,
            password
        }
        if(obj.name==="admin@healthconnect" && obj.password === "12345"){
            navigate("/allAdminData")
        }
        console.log(obj)
    }

  return (
    <Box bg={"one"} h={"80vh"} pt={"50px"} mt={"10px"}  >
      <Heading><Center color={"three"}>Admin Login</Center></Heading>
      <Box w="30%" m={"auto "}  p={"20px"} h={"40vh"} boxShadow={"xl"}>
        <FormControl isRequired>
          <FormLabel color="two">Email</FormLabel>
          <Input mt={"10px"}
            type="email"
            borderColor="two"
            value={name}
            onChange={(e)=>handle(e)}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="two">Password</FormLabel>
          <Input
            type="Password"
            borderColor="two"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <FormLabel></FormLabel>
          <Button bgColor="two" color="white" mt={"10px"} w="100%" onClick={handleClick}>
            Login
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}
