import React,{ useState, useEffect,useContext } from "react";
import { authContext } from "../Context/AuthContext"
const TodaysSchedule = () => {
  const [appointments, setAppointments] = useState([]);
  const { token,email,refToken } = useContext(authContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}appoint/doc`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization':`Bearer ${token}`,
            'refresh':`Bearer ${refToken}`
        },
        body:JSON.stringify({doctorEmail:email})
    }).then((res)=> res.json()).then((res)=>{
        if(!res.isError){
            setAppointments(res.Msg)
        }
    })
    .catch((err)=>{console.log(err)});
  }, [email,refToken,token]);

  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Slot</th>
          <th scope="col">Patient Name</th>
          <th scope="col">PhoneNumber</th>
          <th scope="col">Symptoms</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointment._id}>
            <th scope="row">{appointment.bookDate}</th>
            <th scope="row">{appointment.bookTimeSlot}</th>
            <th scope="row">{appointment.patientName}</th>
            <th scope="row">{appointment.phoneNumber}</th>
            <th scope="row">{appointment.symptoms}</th>
            <th scope="row">{appointment.status}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodaysSchedule;


// email:{type:String,required:true},
//     bookDate:{type:String,required:true},
//     bookTimeSlot:{type:Number,Enum:[1,2,3,4,5],required:true},
//     status:{type:Boolean,default:false,required:true},
//     doctorEmail:{type:String,required:true},
//     phoneNumber:{type:Number,required:true},
//     symptoms:{type:String,required:true}


//<th scope="row"><a href={appointment.googleMeetLink} target="_blank">Join Meet</a></th>
