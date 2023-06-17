import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPatient } from '../../redux/AdminReducer/action'
import Chart from "react-apexcharts";


export const PieChartData = () => {
    const patients = useSelector((store)=>{
        return store.adminReducer.patient
    })
    console.log(patients)
    const dispatch = useDispatch();

    const heartD = patients.filter((e)=>e.profile==="cardiologist")
    console.log(heartD)

    const brainD = patients.filter((e)=>e.profile==="neurologist")
    console.log(brainD)

    const dentalD = patients.filter((e)=>e.profile==="dentist")
    console.log(dentalD)

    const boneD = patients.filter((e)=>e.profile==="orthopedist")
    console.log(boneD)

    const fD = patients.filter((e)=>e.profile==="gynaecologist")
    console.log(fD)

    useEffect(()=>{
        dispatch(getPatient())
    },[])

  return (
    <div style={{width:"50%",margin:"10px",padding:"20px",boxShadow: ("rgba(0, 0, 0, 0.24) 0px 3px 8px")}}>
        <Chart
            type='donut'
            width={500}
            height={300}

            series={[heartD.length,brainD.length,dentalD.length,boneD.length,fD.length]}

            options={{
                title:{
                    text : "Patient piechart",
                },
                labels:["heart","brain","dental","bone","female disorder"]
            }}
        >
        </Chart>
    </div>
  )
}
