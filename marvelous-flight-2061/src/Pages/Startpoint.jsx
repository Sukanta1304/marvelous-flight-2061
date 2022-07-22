import React, { useContext, useState } from 'react'
import {ArrowBackIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Button, Input } from '@chakra-ui/react';
import { Appcontext } from '../Context/Appcontext';

const Startpoint = () => {
    const [data, setData] = useContext(Appcontext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  return (
    <div>Startpoint
        <Link to="/"><ArrowBackIcon/></Link>
        <div>
            <Input placeholder='Enter a Starting Point'
            name='startpoint'
            onChange={handleChange}
            />
            <Button variant="outline" _hover={{ bg: 'green', color:'white' }}><Link to="/">Submit</Link></Button>
        </div>
    </div>
  )
}

export default Startpoint
