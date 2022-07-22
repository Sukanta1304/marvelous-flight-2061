
import React, { useContext } from 'react'
import Drawercomponent from './Chakracomponent/Drawer'
import BrandIcon from './Icons/BrandIcon';
import { Link } from "react-router-dom";
import { Appcontext } from '../Context/Appcontext';


const Navbar = () => {
  const [data] = useContext(Appcontext);
  console.log(data.name)
  return (
    <div style={{display:"flex", width:"1362px" , backgroundColor:"black" , color:"white",marginLeft:"-80px"}}>
      <div style={{marginTop:"20px" , marginLeft:"30px"}}><Drawercomponent/></div>
      <BrandIcon/>
      <div style={{marginLeft:"600px"}}>
        <ul style={{display:"flex" , gap:"5rem" , listStyleType:"none", justifyContent:"space-between" , fontFamily:"sans-serif" , fontWeight:"900" , marginTop:"30px"}}>
          <li><Link to="/becomeahost">Become a host</Link></li>
          <li><Link to="/zms">ZMS</Link></li>
          <li><Link to={data.name.length<1?"/login":"/profile"}>{data.name.length<1?"Login/Signup": data.name}</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
