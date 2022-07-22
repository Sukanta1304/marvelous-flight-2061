import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Success = () => {
  return (
    <div>
        <img src="https://cdn.dribbble.com/users/13543/screenshots/1523277/success.gif" alt="" />
        <br />
        <Button variant="solid" bgColor="green.400"><Link to="/">Continut with us</Link></Button>
    </div>
  )
}

export default Success
