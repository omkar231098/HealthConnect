import React, { useState } from "react";
import "../Components/Styles/Register.css";
import LeftsidePaitent from "../Dashbord/LeftsidePaitent";
import { Button } from "reactstrap";
import {Link} from "react-router-dom"
import Calendar from "react-calendar";
import Slot from "./Slots";

export default function CreateAppointment(props) {
  const [date, setDate] = useState(new Date());
  const [showSlot, setShowSlot] = useState(false);
  const [info,setInfo] = useState({
    email:"",
    bookDate:date,
    status:false,
    doctorEmail:props.location.doctor.doctor,
    phoneNumber:0,
    patientName:"",
    symptoms:""
  })
  const onChangeEventUser = (e)=>{
    const value = e.target.value;
    const name = e.target.name;
    setInfo((prv)=>{
      if(name === "email"){
        return {
          email:value,
          bookDate:prv.bookDate,
          status:prv.status,
          doctorEmail:prv.doctorEmail,
          phoneNumber:prv.phoneNumber,
          patientName:prv.patientName,
          symptoms:prv.symptoms
        }
      }else if(name === "patientName"){
        return {
          email:prv.email,
          bookDate:prv.bookDate,
          status:prv.status,
          doctorEmail:prv.doctorEmail,
          phoneNumber:prv.phoneNumber,
          patientName:value,
          symptoms:prv.symptoms
        };
      }else if(name === "symptoms"){
        return {
          email:prv.email,
          bookDate:prv.bookDate,
          status:prv.status,
          doctorEmail:prv.doctorEmail,
          phoneNumber:prv.phoneNumber,
          patientName:prv.patientName,
          symptoms:value
        };
      }else if(name === "phoneNumber"){
        return {
          email:prv.email,
          bookDate:prv.bookDate,
          status:prv.status,
          doctorEmail:prv.doctorEmail,
          phoneNumber:value,
          patientName:prv.patientName,
          symptoms:prv.symptoms
        };
      }
    })
  };
  const onChange = (date) => {
    setDate(date);
    setShowSlot(true);
  };
  var pervious = new Date();
  pervious.setDate(pervious.getDate() - 1);

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <h2>Navbar</h2>
      <div>
        <div className="row m-5" style={{ maxWidth: "100%" }}>
          <div className="col-3 col-md-3 p-4 bg-white ">
            <LeftsidePaitent />
          </div>
          <div className="Register-container">
            <div
              className="col-9 col-md-9 p-4"
              style={{
                border: "15px solid yellow ",
                height: "80vh",
                backgroundColor: "#6c757d",
              }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Enter Your email"
                  name="email"
                  className="register-input"
                  onChange={onChangeEventUser}
                />
                <input
                  type="number"
                  placeholder="Enter Your Number"
                  name="phoneNumber"
                  className="register-input"
                  onChange={onChangeEventUser}
                />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="patientName"
                  className="register-input"
                  onChange={onChangeEventUser}
                />
                <input
                  type="text"
                  placeholder="Enter Your symptoms"
                  name="symptoms"
                  className="register-input"
                  onChange={onChangeEventUser}
                />
              </div>
            </div>
          </div>
          <div
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
            }}
          >
            <div className="d-flex justify-content-center">
              {/* <ReactCalendar /> */}
              <div>
                <Calendar
                  tileDisabled={({ date }) =>
                    date.getDay() === 0 || date < pervious
                  }
                  onChange={onChange}
                  value={date}
                />
                {console.log(date)}
                <p class="text-center">
                  {date.getFullYear().toString() +
                    "-" +
                    (date.getMonth() + 1).toString() +
                    "-" +
                    date.getDate().toString()}
                </p>
              </div>
            </div>
            {/* <Row className="w-100">
            <Col> */}
            <div className="row justify-content-center mt-5 ml-5">
              <div className="col-2">
                <Link to="/patient/searchdoctor">
                  <Button color="danger">GO BACK</Button>
                </Link>
              </div>
              {/* </Col>
            <Col> */}
              <div className="col-4">
                <Button color="primary">Confirm And Go to Next Step</Button>
              </div>
              {/* </Col>
          </Row> */}
            </div>
          </div>
          <div>{showSlot ? <Slot info= {info}  /> : null}</div>
        </div>
      </div>
    </div>
  );
}

// {cars
//   .map((car) => (
//     <div key={car.id}>
//       <img src={car.image} alt={car.brand} />
//       <h2>{car.brand}</h2>
//       <p>{car.model}</p>
//       <p>Year: {car.year}</p>
//       <button>Book Now</button>
//     </div>
//   ))}

// email:{type:String,required:true},
//     bookDate:{type:String,required:true},
//     bookTimeSlot:{type:Number,Enum:[1,2,3,4,5],required:true},
//     status:{type:Boolean,default:false,required:true},
//     doctorEmail:{type:String,required:true},
//     phoneNumber:{type:Number,required:true},
//     patientName:{type:String,required:true},
//     symptoms:{type:String,required:true}