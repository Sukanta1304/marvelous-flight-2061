import React, { useContext } from 'react'
import { Appcontext } from '../Context/Appcontext';
import { PhoneIcon , ArrowForwardIcon } from '@chakra-ui/icons' ;
import {Link} from 'react-router-dom'

const Profile = () => {
    const [data,setData] = useContext(Appcontext);

    const handleLogout=()=>{
        setData(
            {
                name: "",
                email: "",
                mobile:"",
                city:"Kolkata"
              }
        )
    }

  return (
    <div>
        <div style={{backgroundColor:"gray" , padding:"2rem"}}>
        <h1>{data.name}</h1>
        <h3>{data.email}</h3>
        <h3>{data.mobile}</h3>
        </div>
        <br />
        <div style={{display:"flex" , gap:"1rem"}}>
            <button><Link to="/changecity">Change City</Link></button>
            <h3 style={{color:"green"}}>{data.city}</h3>
        </div>
        <br />
        <div style={{display:"flex" , gap:"1rem"}}>
        <PhoneIcon/> <h3><a href="https://www.zoomcar.com/faq"> Help and Support </a></h3>
        </div>
        <div style={{display:"flex" , gap:"1rem"}}>
        <ArrowForwardIcon/> <button onClick={handleLogout}>Logout</button>
        </div>
        
    </div>
  )
}

export default Profile
