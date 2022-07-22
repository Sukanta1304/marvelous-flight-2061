import { border, Button, Heading } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { useContext } from 'react';
import { Appcontext } from '../Context/Appcontext';

const Findcar = () => {
    const [data] = useContext(Appcontext) ;
    const cardata=[
        {
            "carname":"Hyudai Eon",
            "imgurl":"https://zoomcar-assets.zoomcar.com/photographs/original/6c600fdc587df00ee65b17e3e0a4bce67ec31046.JPG?1638531593",
            "system":"manual" ,
            "seat": 5,
            "price":"₹ 1351",
            "id":1
        },
        {
            "carname":"Maruti Swift",
            "imgurl":"https://zoomcar-assets.zoomcar.com/photographs/original/4f978e418417cef5f069be1c013ee75b34c294ce.png?1613648724",
            "system":"manual" ,
            "seat": 5,
            "price":"₹ 2104",
            "id":2
        },
        {
            "carname":"Maruti Wagon R",
            "imgurl":"https://zoomcar-assets.zoomcar.com/photographs/original/107bae0873e37c0a1633e9ba6ee033ff1a623b73.JPG?1623226040",
            "system":"autometic" ,
            "seat": 6,
            "price":"₹ 1891",
            "id":3
        },
        {
            "carname":"Renault KwId AT",
            "imgurl":"https://zoomcar-assets.zoomcar.com/photographs/original/107bae0873e37c0a1633e9ba6ee033ff1a623b73.JPG?1623226040",
            "system":"autometic" ,
            "seat": 6,
            "price":"₹ 1861",
            "id":4
        },
        {
            "carname":"Maruti Ertiga",
            "imgurl":"https://zoomcar-assets.zoomcar.com/photographs/original/efa1e98bbb81150cf57c98df093de5899dcafcd5.jpg?1640674575",
            "system":"manual" ,
            "seat": 7,
            "price":"₹ 2305",
            "id":5
        }
        
    ];
    const [car,setCar]=useState([]) ;
    const handleseat=(seat)=>{
    const updated=cardata.filter((el)=> el.seat==seat || el.system==seat);
    setCar(updated) ;
    }
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex" , gap:"1rem" }}>
            <div style={{border:"1px solid black"}}>Start From:{data.city}</div>
            <div style={{border:"1px solid black"}}>Destination To: {data.startpoint}</div>
        </div>
        <div style={{display:"flex" , gap:"1rem"}}>
        <Link to="/"><ArrowBackIcon/></Link>
        <div>
            <h1>Seat</h1>
           <button style={{width:"50px" , border:"1px solid blue"}}  onClick={()=>handleseat(5)}>5</button> 
           <button style={{width:"50px" , border:"1px solid blue"}} onClick={()=>handleseat(6)}>6</button>
           <button style={{width:"50px" , border:"1px solid blue"}} onClick={()=>handleseat(7)}>7</button>
        </div>
        <div>
            <span>Transmission</span>
            <button onClick={()=>handleseat("manual")}>Manual</button>
            <button onClick={()=>handleseat("autometic")}>Autometic</button>
        </div>
        </div>
        <br />
        <div>
        {car.map((el)=> <div key={el.id} style={{display:"flex" , gap:"2rem"}}>
            <div><img src={el.imgurl} alt="" width="150px"/></div>
            <div>
            <Heading size="md">{el.carname}</Heading>
            <h1>{el.seat} seats</h1>
            <h1>{el.system}</h1>
            </div>
            <div>
                <Heading size="md">{el.price}</Heading>
            </div>
            <Button variant="outline" _hover={{ bg: 'green', color:'white' }}><Link to="/checkout" state={el}>Book Now</Link></Button>
        </div>)}
        </div>
        
    </div>
  )
}

export default Findcar
