import React, { useEffect } from 'react'
import {Box,Center,Heading,Text} from "@chakra-ui/react"
import { Dashboard } from './Dashboard'
import { Sidebar } from '../Admin/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
// import { BarChart, Chart } from './BarChart'
// import { PieChartData } from './PieChartData'

export const Admin = () => {
  const data=useSelector((store)=>{
    return store.adminReducer.doctor
  })
  const patient = useSelector((store)=>{
    return store.patientReducer.patients
  })
  console.log(patient)

  const dispatch = useDispatch();

  useEffect(()=>{
    
  },[])

  return (
    <Box  m={"10px"} w={"78%"}  boxShadow={"2xl"} p={"20px"}>
      <Heading>Welcome Admin !</Heading>
      <Text color="grey" as="b">Dashboard</Text>
      <br />  
      <Dashboard/>        
        
    </Box>
  )
}
