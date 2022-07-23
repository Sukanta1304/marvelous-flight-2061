import { Button, Heading, Input } from '@chakra-ui/react';
import React from 'react' ;
import { useRef } from 'react';
import Image1 from './zms1.jpg' ;
import Image2 from './zms2.jpg' ;
import Image3 from './zms3.jpg' ;
import Image4 from './zms4.jpg' ;
import {ArrowBackIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


const ZMS = () => {
  const connectref= useRef(null) ;
  const handleClick=()=>{
    connectref.current.focus();
  };
  const handleSubmit=()=>{
    alert("Requirement Submitted")
  }
  return (
    <div>
      <Link to="/"><ArrowBackIcon/> Back to Home</Link>
      <div>
        <img src={Image1} alt="zms1" />
        <Button variant="ghost" bgColor="white" mt="-1080px" ml="600px" onClick={handleClick}>Request a Demo</Button>
        <br />
        <Button onClick={handleClick} variant="solid" bgColor="green.400" mt="-380px" w="300px">Request a Demo</Button>
        <br />
        <img src={Image2} alt="zms2" />
        <br />
        <img src={Image3} alt="zms3" />
        <br />
        <img src={Image4} alt="zms4" />
      </div>
      <div style={{width:"60%", margin:"auto"}}>
      <Heading size="lg">Connect With Us</Heading>
      <h1>Leave details for us to help your business become future ready</h1>
      <div style={{display:"flex" , gap:"1rem" , marginTop:"20px"}}>
      <Input placeholder="Name" ref={connectref}/> 
      <Input placeholder="Company Name"/>
      </div>
      <br />
      <Input placeholder='Email'/>
      <div style={{display:"flex" , gap:"1rem" , marginTop:"20px"}}>
      <Input placeholder="Phone No."/> 
      <Input placeholder="Country"/>
      </div>
      <br />
      <Input placeholder="Mention Requirements"/>
      <br />
      <Button onClick={handleSubmit} variant="solid" bgColor="green.400" mt="18px">Submit</Button>
      </div>
    </div>
  )
}

export default ZMS
