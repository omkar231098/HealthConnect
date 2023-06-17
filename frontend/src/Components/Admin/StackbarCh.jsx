import React, { useEffect } from 'react'
import Chart from "react-apexcharts"
import { useDispatch, useSelector } from 'react-redux'
import { getDoctor } from '../../redux/AdminReducer/action'

export const StackbarCh = () => {
  const data = useSelector((store)=>store.adminReducer.doctor)
  console.log(data)

  const dispatch = useDispatch()

  const cdT = data.filter((e)=>e.profile==="cardiologist" && e.status===true)
  const cdF = data.filter((e)=>e.profile==="cardiologist" && e.status!==true)
  console.log(cdT,cdF)

  const bdT = data.filter((e)=>e.profile==="neurologist" && e.status===true)
  const bdF = data.filter((e)=>e.profile==="neurologist" && e.status!==true)
  console.log(bdT,bdF)

  const ddT = data.filter((e)=>e.profile==="dentist" && e.status===true)
  const ddF = data.filter((e)=>e.profile==="dentist" && e.status!==true)
  console.log(ddT,ddF)

  const gdT = data.filter((e)=>e.profile==="gynaecologist" && e.status===true)
  const gdF = data.filter((e)=>e.profile==="gynaecologist" && e.status!==true)
  console.log(gdT,gdF)

  const ndT = data.filter((e)=>e.profile==="orthopedist" && e.status===true)
  const ndF = data.filter((e)=>e.profile==="orthopedist" && e.status!==true)
  console.log(ndT,ndF)


  useEffect(()=>{
    dispatch(getDoctor())
  },[])

  return (
    <div style={
      {width:"55%",
      margin:"10px",
      padding:"20px",
      boxShadow: ("rgba(0, 0, 0, 0.24) 0px 3px 8px")}
      }>
      <Chart
        type='bar'
        width={550}
        height={500}
        series={[
          {
            name:"Available",
            data:[cdT.length,bdT.length,ddT.length,gdT.length,ndT.length],
            color:'#F50057'
          },
          {
            name:"Busy",
            data:[cdF.length,bdF.length,ddF.length,gdF.length,ndF.length],
            color:'#FFA000'
          }
        ]}
        
        options={{
          title:{
            text:"Doctor's Availablity Status",
            style:{fontSize:20}
          },
          chart:{
            stacked:true,
          },
          plotOptions:{
            bar:{
              horizontal:true,
              columnWidth:"10%"
            }
          },
          xaxis:{
            title:{
              text:"Available status",
              
            },
            categories:["Cardiologist","neurologist","dentist","gynaecologist","orthopedist"]
          },
          yaxis:{
            title:{
              text:"Doctor's Profile"
            }
          },
          grid:{
            show:false
          }
        }}>

      </Chart>
    </div>
  )
}
