import React, { useState } from 'react'
import {Box,FormControl,FormLabel,Input,Select, useToast,Center,Button, Checkbox,Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { addDoct } from '../../redux/AdminReducer/action'

const initial = {
    name:"",
    image:"",
    profile:"",
    description:"",
    location:"",
    email:"",
    password:"",
    waiting_time:"",
    fees:"",
    category:"",
    gender:"",
    rating:"",
    status:""
  }



export const AddDoct = () => {

    const toast = useToast()
    const dispatch = useDispatch();
    const [input, setInput] = useState(initial)

  const handleInputChange = (e) => {
    console.log(e.target.checked)
    setInput((prev) => {
      return { ...prev,[e.target.name]:e.target.name==="status"?(e.target.checked ): (e.target.value) }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    dispatch(addDoct(input))
    setInput(initial)
  }

  return (
    <Box bg={"one"} m={"10px"}>
        <Breadcrumb>
            <BreadcrumbItem  p={"10px"} boxShadow={"2xl"} m={"10px"}>
            <BreadcrumbLink href='/admin'>Admin</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Center  >
            <Box  boxShadow={"md"} m={"10px"} p={"20px"} color='white'>
            <Center>
            <Text color={"black"} as={"b"} m={"10px"}>Doctor Application</Text>
            </Center>
            
        <form  onSubmit={handleSubmit}  >
          <FormControl isRequired>
          
            <FormLabel color={"two"}>Doctor Name</FormLabel>
            <Input color={"two"}
              type='text' name="name"
              value={input.name} placeholder='patient name'
              onChange={handleInputChange}
            />

            <FormLabel color={"two"}>image</FormLabel>
            <Input color={"two"}
              type='text' name="image"
              placeholder='image'
              value={input.image}
              onChange={handleInputChange}
            />

            <FormLabel color={"two"}>location</FormLabel>
            <Input color={"two"}
              type='text'
              placeholder='location'
              value={input.location} name='location'
              onChange={handleInputChange}
            /> 
            
            <FormLabel color={"two"}>description</FormLabel>
            <Input color={"two"}
              type='text'
              placeholder='description'
              value={input.description} name='description'
              onChange={handleInputChange}
            />
                
            <FormLabel color={"two"}>Email Id</FormLabel>
            <Input color={"two"}
              type='email' name="email"
              placeholder='Email Id'
              value={input.email} onChange={handleInputChange}
            />

            <FormLabel color={"two"}>Fees</FormLabel>
            <Input color={"two"}
              type='text'placeholder='fees' name="fees"
              value={input.fees} onChange={handleInputChange}
            />

            <FormLabel color={"two"}>waiting_time</FormLabel>
            <Input color={"two"}
              type='text'placeholder='waiting_time' name="waiting_time"
              value={input.waiting_time} onChange={handleInputChange}
            />

            <FormLabel color={"two"}>password</FormLabel>
            <Input
              type='password' color={"two"}
              placeholder='password' name="password"
              value={input.password}
              onChange={handleInputChange}
            />

            <FormLabel color={"two"}>Select Gender</FormLabel>
            <Select placeholder='Select Gender' color={"two"}
              name="gender" value={input.gender}
              onChange={handleInputChange}>
            <option value="male" color={"two"}>Male</option>
            <option value="female" color={"two"}>Female</option>
            </Select>

            <FormLabel color={"two"}>Select category</FormLabel>
            <Select placeholder='Select category' color={"two"}
              name="category" value={input.category}
              onChange={handleInputChange}>
            <option value="heart" color={"two"}>heart</option>
            <option value="brain" color={"two"}>brain</option>
            <option value="dentist" color={"two"}>dentist</option>
            <option value="female disorder" color={"two"}>female disorder</option>
            <option value="bones" color={"two"}>bones</option>
            </Select>

            <FormLabel color={"two"}>Select profile</FormLabel>
            <Select placeholder='Select profile' color={"two"}
              name="profile" value={input.profile}
              onChange={handleInputChange}>
            <option value="cardiologist" color={"two"}>cardiologist</option>
            <option value="neurologist" color={"two"}>neurologist</option>
            <option value="gynaecologist" color={"two"}>gynaecologist</option>
            <option value="dentist" color={"two"}>dentist</option>
            <option value="orthopedist" color={"two"}>orthopedist</option>
            </Select>
            
            <FormLabel color={"two"}>Rating</FormLabel>
            <Input
              type='text' color={"two"}
              placeholder='rating' name="rating"
              value={input.rating}
              onChange={handleInputChange}
            />

            <FormLabel color={"two"}>Available status</FormLabel>
            <Checkbox
              type='check' color={"two"}
              placeholder='status' name="status"
              value={input.status}
              onChange={handleInputChange}
            />

            <Center>
            <Button m={"10px"} w={"350px"} bgColor="three" color="white" type='submit'
              onClick={() =>
                toast({
                title: 'Application submitted!',
                description: "Your application has been received. We will review your application and respond within the next 48 hours.",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position:"top",
                })
              }
            >
              Submit
            </Button>

            </Center>
            </FormControl>
        </form>
        </Box>
        </Center>
    </Box>
  )
}