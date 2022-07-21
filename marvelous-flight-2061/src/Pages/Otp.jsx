import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Otp = () => {
    const [time,setTime] = useState(30) ;
    const[otp,setOtp]= useState("") ;
    const navigate= useNavigate() ;
    useEffect(()=>{
        const timer =setTimeout(()=>{
            setTime(time-1)
        },1000)
        if(time==0){
         clearTimeout(timer)
        }
    },[time]) ;
    const handleSubmit=()=>{
        if(otp.length<6){
            alert("wrong otp")
        }
        else{
                navigate("/")
        }
    }
    console.log(otp)
  return (
    <div>
        <h1>
        Enter 6-digit OTP
        OTP was sent to +919635289745
        </h1>
        <Input placeholder='OTP'
        value={otp}
        onChange={(e)=>setOtp(e.target.value)}
        />
        <br />
        OTP expires in 0.{time} seconds
        <br />
        <Button onClick={handleSubmit}>Submit</Button> 
    </div>
  )
}

export default Otp
