import { Button } from '@chakra-ui/react';
import React from 'react';
import Image from '../assets/Img-1.jpg'

const Roundtrip = () => {
  return (
    <div>
        <img src={Image} alt="Roundtrip"  />
        <Button width="500px" height="50px" bg="white" borderColor="gray.400" mt="-370px">Pick up city,Airport, Address  or hotel</Button>
        <div>
          <Button width="500px" height="50px" bg="gray.200" mt="-300px">FIND CARS</Button>
        </div>
        
    </div>
  )
}

export default Roundtrip