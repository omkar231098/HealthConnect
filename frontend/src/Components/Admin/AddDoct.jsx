// import React, { useState } from 'react'
// import {Box,FormControl,FormLabel,Input,Select, useToast,Center,Button, Checkbox,Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react"
// import { useDispatch } from 'react-redux'
// import { addDoct } from '../../redux/AdminReducer/action'
// import { useNavigate } from 'react-router-dom';



// const initial = {
//     name:"",
//     image:"",
//     email:"",
//     password:"",
//     degree:"",
//     specialization:"",
//     yearOfExperience: ""
//   }



// export default function AddDoct () {

//     const toast = useToast()
//     const dispatch = useDispatch();

//     const navigate = useNavigate();


//     const [input, setInput] = useState(initial)

//   const handleInputChange = (e) => {
//     console.log(e.target.checked)
//     // setInput((prev) => {
//     //   return { ...prev,[e.target.name]:e.target.name==="status"?(e.target.checked ): (e.target.value) }
//     // })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addDoct(input));
//     setInput(initial);
//     navigate('/dashboard');
//   };
  
  

//   return (
//     <Box bg={"one"} m={"10px"}>
//         <Breadcrumb>
//             <BreadcrumbItem  p={"10px"} boxShadow={"2xl"} m={"10px"}>
//             <BreadcrumbLink href='/admin'>Admin</BreadcrumbLink>
//             </BreadcrumbItem>
//         </Breadcrumb>
//         <Center  >
//             <Box  boxShadow={"md"} m={"10px"} p={"20px"} color='white'>
//             <Center>
//             <Text color={"black"} as={"b"} m={"10px"}>Doctor Application</Text>
//             </Center>
            
//         <form  onSubmit={handleSubmit}  >
//           <FormControl isRequired>
          
//             <FormLabel color={"two"}>Doctor Name</FormLabel>
//             <Input color={"two"}
//               type='text' name="name"
//               value={input.name} placeholder='Doctor Name'
//               onChange={handleInputChange}
//             />

//             <FormLabel color={"two"}>image</FormLabel>
//             <Input color={"two"}
//               type='text' name="image"
//               placeholder='Image'
//               value={input.image}
//               onChange={handleInputChange}
//             />

//             <FormLabel color={"two"}>Specialization</FormLabel>
//             <Input color={"two"}
//               type='text'
//               placeholder='Specialization'
//               value={input.specialization} name='specialization'
//               onChange={handleInputChange}
//             />
                
//             <FormLabel color={"two"}>Email Id</FormLabel>
//             <Input color={"two"}
//               type='email' name="email"
//               placeholder='Email Id'
//               value={input.email} onChange={handleInputChange}
//             />

//             <FormLabel color={"two"}>Password</FormLabel>
//             <Input
//               type='password' color={"two"}
//               placeholder='Password' name="password"
//               value={input.password}
//               onChange={handleInputChange}
//             />
            
//             <FormLabel color={"two"}>Degree</FormLabel>
//             <Input
//               type='text' color={"two"}
//               placeholder='degree' name="degree"
//               value={input.degree}
//               onChange={handleInputChange}
//             />
//         <FormLabel color={"two"}>Experience</FormLabel>
//             <Input
//               type='text' color={"two"}
//               placeholder='Year Of Experience' name="yearOfExperience"
//               value={input.yearOfExperience}
//               onChange={handleInputChange}
//             />
        

//             <Center>
//             <Button m={"10px"} w={"350px"} bgColor="blue" color="white" type='submit'
//               onClick={() =>
//                 toast({
//                 title: 'Application submitted!',
//                 description: "Your application has been received. We will review your application and respond within the next 48 hours.",
//                 status: 'success',
//                 duration: 5000,
//                 isClosable: true,
//                 position:"top",
//                 })
//               }
//             >
//               Submit
//             </Button>

//             </Center>
//             </FormControl>
//         </form>
//         </Box>
//         </Center>
//     </Box>
//   )
// }