import { useEffect,useState,useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {authContext} from "../Context/AuthContext";

function Slot({info,date}){
  const navigate = useNavigate();
    const {token,refToken} = useContext(authContext)
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    
    console.log(info);
    const [slot,setSlot] = useState([]);
    var availableSlots = [{slotTime:"11:00",bookTimeSlot:1},{slotTime:"12:00",bookTimeSlot:2},{slotTime:"14:00",bookTimeSlot:3},{slotTime:"15:00",bookTimeSlot:4},{slotTime:"16:00",bookTimeSlot:5}]
    function Filter(){
      for(let i = 0; i < slot.length; i++) {
        for(let j = 0; j < availableSlots.length; j++){
          if(slot[i].bookTimeSlot != availableSlots[j].bookTimeSlot){
            availableSlots.splice(j,1)
          }
        }
      }
    }
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST_URL}appoint/getSlots`,{
            method :"POST",
            headers :{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'authorization':`Bearer ${token}`,
              'refresh':`Bearer ${refToken}`
            },
            body : JSON.stringify({doctorEmail:info.doctorEmail,bookDate:info.bookDate})
          }).then((res)=> res.json()).then((res)=>{
            console.log(res)
            if(!res.isError){
              console.log(res.Msg);
              setSlot(res.Msg)
              Filter()
            }else{
              console.log(res.Msg);
              toast.error("Something went wrong please try again.", toastOptions);
            }
          }).catch((err)=>{
            console.log(err);
            toast.error("Something went wrong please try again.", toastOptions);
          })
    },[]);


    function submitBook(s){
        info.bookTimeSlot = s
        info.bookDate = date
        console.log(info);

        fetch(`${process.env.REACT_APP_HOST_URL}appoint/create`,{
            method :"POST",
            headers :{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'authorization':`Bearer ${token}`,
              'refresh':`Bearer ${refToken}`
            },
            body : JSON.stringify(info)
          }).then((res)=> res.json()).then((res)=>{
            console.log(res)
            if(!res.isError){
              console.log(res.Msg);
              navigate("/patient/appointments")
            }else{
              console.log(res.Msg);
              toast.error("Something went wrong please try again.", toastOptions);
            }
          }).catch((err)=>{
            console.log(err);
            toast.error("Something went wrong please try again.", toastOptions);
          })
    }
    return (
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Slot</th>
                  <th scope="col">Booking Status</th>
                </tr>
              </thead>
              <tbody style={{color:"white"}}>
                {availableSlots.map((slot,i) => (
                  <tr key={i}>
                    <th scope="row">{slot.bookTimeSlot}</th>
                      <td>
                        <button onClick={()=>{
                            submitBook(slot.bookTimeSlot)
                        }}>Book</button>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
    )
}

export default Slot;