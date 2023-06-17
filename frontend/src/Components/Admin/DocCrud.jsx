import { Button,Center,Text,Td,} from '@chakra-ui/react'
import React from 'react'
import {Icon,DeleteIcon } from '@chakra-ui/icons'



export const DocCrud = ({id,name,profile,status,handleEdit,handleApprove}) => {

  const handleE = () => {
    handleEdit(id)
  }

  const handleApp = (id,status) => {
    handleApprove(id,status)
  }

  return (
    <>
      <Td isNumeric><Center>{id}</Center></Td>
      <Td>{name}</Td>
      <Td>{profile}</Td>
      <Td>{status?<Text color={"green"} as={'b'}>Available</Text> : <Text color={"orange"} as={'b'}>Busy</Text>}</Td>
      <Td><Button onClick={()=>handleApp(id,status)}>edit</Button></Td>
      <Td><Button onClick={()=>handleE(id)} bg={"none"}><Icon as={DeleteIcon} color={"red"}/></Button></Td>           
    </>
  )
}
