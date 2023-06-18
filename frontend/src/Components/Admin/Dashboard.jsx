import { Box, Heading,Text, Thead,Table,Center,Button,Icon,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delData, editDoc, getDoctor } from '../../redux/AdminReducer/action'
import { DocCrud } from './DocCrud'
import { Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Chart } from './BarChart'


export const Dashboard = () => {
  const [update, setupdate] = useState(false)
  const navigate = useNavigate();
    const data=useSelector((store)=>{
        return store.adminReducer.doctor
    })
    console.log(data)
    const dispatch = useDispatch()

    

    
    const handleEdit = (id) => {
      dispatch(editDoc(id)).then(()=>{
        setupdate(p=>!p)
      })
    }
    
    const handleApprove = (id,status) => {
      dispatch(delData(id,status)).then((res)=>{
        setupdate(p=>!p)
      })
    }
    useEffect(()=>{
      dispatch(getDoctor())
    },[update])
    
  return (
    
    <Box w={"100%"} boxShadow={"2xl"} p={"20px"} m={"10px"}>
      
      <br />  
        <Center><Button bg="#6439ff" color={"white"} onClick={()=>navigate("/doctorAdmin")}>Add Doctor</Button></Center>

        <TableContainer>
          <Center>
          <Table  w={"80%"} m={"20px"} boxShadow={"md"} >
            <Thead>
              <Tr h="10">
                <Th><Center fontSize={"15px"}>Sr.No</Center></Th>
                <Th fontSize={"15px"}>Name</Th>
                <Th fontSize={"15px"}>profile</Th>
                <Th fontSize={"15px"}>Edit</Th>
                <Th fontSize={"15px"}>Delete</Th>
              </Tr>
            </Thead>
              
            <Tbody >
            {data?.length > 0 && data?.map((e)=>{
              return(
              <Tr key={e.id} >
                <DocCrud {...e} handleEdit={handleEdit} handleApprove={handleApprove}/>
              </Tr>)
              })}
            </Tbody>
            
          </Table>
          </Center>
        </TableContainer >
        
    </Box>
  
  )
}


