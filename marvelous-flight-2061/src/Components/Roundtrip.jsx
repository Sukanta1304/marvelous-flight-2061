import { Button } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/Img-1.jpg'
import { Appcontext } from '../Context/Appcontext';

const Roundtrip = () => {
  const [data]= useContext(Appcontext) ;
  return (
    <div>
        <img src={Image} alt="Roundtrip"  />
        <Button width="500px" height="50px" bg="white" borderColor="gray.400" mt="-370px"><Link to="/startpoint">{data.startpoint? data.startpoint : "Pickup City,Airport,Address or Hotel"}</Link></Button>
        <div>
          <Button width="500px" height="50px" bg="gray.200" mt="-300px"><Link to="/findcars">FIND CARS</Link></Button>
        </div>
        
    </div>
  )
}

export default Roundtrip
