import React from 'react'
import Chart from "react-apexcharts"
import { useSelector } from 'react-redux'


export const BarChart = () => {
    const data=useSelector((store)=>{
        return store.adminReducer.doctor
    })
    console.log(data)

    const heartD = data.filter((e)=>e.category==="heart")
    console.log(heartD)

    const brainD = data.filter((e)=>e.category==="brain")
    console.log(brainD)

    const dentalD = data.filter((e)=>e.category==="dentist")
    console.log(dentalD)

    const boneD = data.filter((e)=>e.category==="bone")
    console.log(boneD)

    const fD = data.filter((e)=>e.category==="female disorder")
    console.log(fD)

    const avail = data.filter((e)=>e.status===true)
    console.log(avail)
  return (
    <div style={{width:"50%",margin:"10px",padding:"10px",boxShadow: ("rgba(0, 0, 0, 0.24) 0px 3px 8px")}}>
        <Chart
        type='bar'
        width={450} 
        height={550}
        
        series={[
            {
                name : "Doctor's Profile",
                data : [heartD.length,brainD.length,dentalD.length,boneD.length,fD.length]
            }
        ]}

        options={{
            title:{
                text :"Doctor's data according to profile",
                style:{fontSize:20}
            },
                xaxis:{
                    categories:["Cardiologist","Neurologist","Dentist","Orthopedist","Gynaecologist"],
                    title:{text:"Our Health Professionals",
                    style:{color:"black",fontSize:25}
                },
                },
            yaxis:{

            }
        }}
        >
        
        </Chart>
    </div>
  )
}
