import React from 'react'
import  Admin  from '../Components/Admin/AdminDash'
// import { AddDoct } from '../components/Admin/AddDoct'
import { Button,Box } from '@chakra-ui/react'
import  Sidebar  from '../Components/Admin/Sidebar'


export default function AdminPage(){
  
  return (
    < >
      <Box display={"flex"} justifyContent={"space-between"} width={"98%"} m={"auto"}>
      <Sidebar/>
      <Admin/>
      </Box>
    </>
  )
}
