import { Button, Input } from '@chakra-ui/react'
import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom' ;
import { Appcontext } from '../Context/Appcontext';

const Login = () => {
    const [data, setData] = useContext(Appcontext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

    const navigate= useNavigate() ;

    const handleRegister=()=>{
        if(data.name=="" || data.email=="" || data.mobile.length<10){
            alert("Please provide correct credential")
        }
        else{
            navigate("/otp")
        }
       
    };

  return (
    <div>
        Login <br />
        <Link to="/">Back to Home </Link>
        <div>
            <img src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" alt="" />
        </div>
        <div>
            <h3 style={{fontSize:"20px" , fontWeight:"bold"}}>Enter Details to login/sign Up</h3>
            <div style={{display:"flex" , gap:"1rem" , textAlign:"center" ,  alignItems:"center" , marginTop:"10px"}}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" width="35px" height="10px" alt="" />
                <h1>+91|</h1>
                <Input placeholder='Enter Mobile Number'
                 name="mobile"
                 onChange={handleChange}
                 isInvalid
                />
            </div>
            <div>
                <br />
                <Input placeholder='Enter Email ID'
                   name="email"
                   onChange={handleChange}
                />
                <Input placeholder='Enter Full Name'
                 name="name"
                 onChange={handleChange}
                />
                <Button onClick={handleRegister} variant="solid" bgColor="green.300">Submit</Button>
                </div>
            <div style={{marginTop:"15px" ,padding:"15px" , borderTop:"1px solid gray" , borderBottom:"1px solid gray" , textAlign:"left" , }}>
                <h1 style={{color:"green" , fontWeight:"bold"}}>Continue with Email ID</h1>
            </div>
        </div>
        <div>
        <div style={{display:"flex" , gap:"1rem", marginTop:"20px"}}>
                <h1 style={{color:"green" , fontWeight:"bold" ,marginLeft:"15px"}}>Continue via social</h1>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" width="30px" alt="" />
                <img src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="" width="30px" />
            </div>
        </div>
    </div>
  )
}

export default Login
