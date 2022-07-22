import { Button, Heading, Input, PinInput, PinInputField } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom' ;
import {ArrowBackIcon} from '@chakra-ui/icons'
import { useContext } from 'react';
import { Appcontext } from '../Context/Appcontext';

const Checkout = () => {
    const [date,setDate]=useState("") ;
    const [cvv,setCvv]= useState("") ;
    const [card,setCard]= useState("") ;
    const navigate= useNavigate() ;
    const [data] = useContext(Appcontext);
    const location = useLocation();
    console.log(date,cvv,card) ;
    const handleSubmit=()=>{
        if(date.length<6 || cvv.length<3 || card.length<14 || card.length>16){
            alert("Please fill all field carefully")
        }
        else if(data.name.length<1){
            alert("Please Login/Register First")
        }
        else{
            navigate("/success")
        }
    }
  return (
    <div style={{display:"flex" , gap:"1rem" , border:"1px solid gray" , height:"500px", width:"500px"}}>
        <Link to="/findcars"><ArrowBackIcon/></Link>
        <div>
            <h1>Checkout Sammary</h1>
            <h1>Fare price :{location.state.price}</h1>
            <br />
            <Input placeholder='Enter card number' type="number" value={card} onChange={(e)=>setCard(e.target.value)}/>
            <br />
            <h1>Please enter Expiary MM/YYYY </h1>
            <PinInput value={date} onChange={(value)=>setDate(value)}>
                <PinInputField />
                <PinInputField/>
                <PinInputField/>
                <PinInputField/>
                <PinInputField/>
                <PinInputField/>
                </PinInput>
                <h1>Enter Your Card CVV</h1>
                <PinInput value={cvv} onChange={(value)=>setCvv(value)}>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                </PinInput>
                <br />
                <Button mt="20px" variant="outline" _hover={{ bg: 'green', color:'white' }} onClick={handleSubmit}>Make Payment</Button>
        </div>
        <div>
            <h1>Booking Details</h1>
           
            <img src={location.state.imgurl} alt={location.state.carname} width="200px"/>
            <Heading size="md">{location.state.carname}</Heading>
            <ul style={{display:"flex" , gap:"2rem" , marginLeft:"30px"}}>
                <li>{location.state.seat} Seats</li>
                <li>{location.state.system}</li>
            </ul>
            
        </div>
    </div>
  )
}

export default Checkout
