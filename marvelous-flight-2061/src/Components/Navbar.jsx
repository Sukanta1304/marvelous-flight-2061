
import React from 'react'
import Drawercomponent from './Chakracomponent/Drawer'
import BrandIcon from './Icons/BrandIcon'


const Navbar = () => {
  return (
    <div style={{display:"flex", width:"1362px" , backgroundColor:"black" , color:"white",marginLeft:"-80px"}}>
      <div style={{marginTop:"20px" , marginLeft:"30px"}}><Drawercomponent/></div>
      <BrandIcon/>
      <div style={{marginLeft:"600px"}}>
        <ul style={{display:"flex" , gap:"5rem" , listStyleType:"none", justifyContent:"space-between" , fontFamily:"sans-serif" , fontWeight:"900" , marginTop:"30px"}}>
          <li>Become a host</li>
          <li>ZMS</li>
          <li>Login/Signup</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar