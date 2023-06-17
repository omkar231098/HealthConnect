import React, { useEffect } from 'react'
import { BarChart } from './BarChart'
import { PieChartData } from './PieChartData'
import { Sidebar } from './sidebar'
import { Box,Heading,Text,Center} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctor, getPatient } from '../../redux/AdminReducer/action'
import { StackbarCh } from './StackbarCh'

export const AllData = () => {
  const data = useSelector((store)=>store.adminReducer.doctor)
  console.log(data)

  const p = useSelector((store)=>store.adminReducer.patient)
  console.log(p)

  const approve = p.filter((e)=>e.status===true)
  const waiting = p.filter((e)=>e.status===false)
  console.log(approve.length)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPatient())
  },[])
  return (
    <>  
        <Box  display={"flex"} justifyContent={"space-between"} w={"98%"} m={"auto"}>
            <Sidebar/>
            <Box w={"78%"}  boxShadow={"2xl"} p={"20px"}>
            <Heading>Welcome Admin !</Heading>
            <Text color="grey" as="b">Dashboard</Text>
              <Box display={"flex"} justifyContent={"space-between"}>
                <BarChart/>
                <StackbarCh/>
              </Box>
                <Box width={"98%"} display={"flex"} justifyContent={"space-between"} >
              
                  <Box width={"50%"}  m={"10px"} boxShadow={"xl"} p={"20px"}>
                    <Center>
                    <Box
                      w={"200px"}
                      p={4}
                      m={4}
                      color='white'
                      fontWeight='bold'
                      borderRadius='md'
                      bgGradient='linear(to-r, teal.500, green.500)'
                      _hover={{
                        bgGradient: 'linear(to-r, red.500, yellow.500)',
                        width : "500px",
                        fontSize : "20px"
                      }}
                    >
                      <Center>Total Patients {p.length}</Center>
                    </Box >
                    </Center>

                    <Center>
                    <Box
                      w={"200px"}
                      p={4}
                      m={4}
                      color='white'
                      fontWeight='bold'
                      borderRadius='md'
                      bgGradient='linear(to-r, teal.500, green.500)'
                      _hover={{
                        bgGradient: 'linear(to-r, red.500, yellow.500)',
                        width : "500px",
                        fontSize : "20px"
                      }}
                    >
                      <Center>{`Approved appointments ${approve.length}`}</Center>
                    </Box>
                    </Center>

                    <Center>
                    <Box
                      w={"200px"}
                      p={4}
                      m={4}
                      color='white'
                      fontWeight='bold'
                      borderRadius='md'
                      bgGradient='linear(to-r, teal.500, green.500)'
                      _hover={{
                        bgGradient: 'linear(to-r, red.500, yellow.500)',
                        width : "500px",
                        fontSize : "20px"
                      }}
                    >
                      <Center>{`Patients on waiting : ${waiting.length}`}</Center>
                    </Box>
                    </Center>
                  </Box>

                  <PieChartData/>
                </Box>
            </Box>
        </Box>
    </>
  )
}
