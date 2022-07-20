import React from 'react';
import Card1 from '../assets/card1.jpg';
import Card2 from '../assets/card-2.jpg';


export const ImageSection = () => {
  return (
    <div style={{width:"1100px"}}>
        <div style={{display:"flex" , marginTop:"180px" , gap:"5rem" }}>
            <div style={{border:"1px solid gray" , borderRadius:"10px", marginLeft:"150px"}}>
                <img src={Card1}/>            
                </div>
            <div style={{border:"1px solid gray" , borderRadius:"10px"}}>
            <img src={Card2}/>
            </div>
        </div>
    </div>
  )
}
