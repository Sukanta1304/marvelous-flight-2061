import React from 'react';
import Card1 from '../assets/card1.jpg';
import Card2 from '../assets/card-2.jpg';
import Card3 from '../assets/card-3.jpg'
import Card4 from '../assets/card-4.jpg'
import Card5 from '../assets/card-5.jpg'
import Card6 from '../assets/card-6.jpg'
import Card7 from '../assets/card-7.jpg'
import Card8 from '../assets/card-8.jpg'
import Card9 from '../assets/card-9.jpg'
import Card10 from '../assets/card-10.jpg'


export const ImageSection = () => {
  return (
    <div style={{width:"1100px"}}>
        <div style={{display:"flex" , marginTop:"180px" , gap:"5rem" }}>
            <div style={{borderRadius:"10px", marginLeft:"150px"}}>
                <a href="https://www.zoomcar.com/login?n=%2Fin%2Fkolkata"><img src={Card1}/></a>            
                </div>
            <div style={{ borderRadius:"10px"}}>
            <img src={Card2}/>
            </div>
        </div>
        <div style={{display:"flex" , marginTop:"20px" , gap:"5rem" }}>
            <div style={{marginLeft:"150px"}}>
                <a href="https://www.zoomcar.com/in/kolkata?q=address&loc=normal"><img src={Card3}/> </a>          
                </div>
            <div style={{ borderRadius:"10px"}}>
            <a href="https://www.zoomcar.com/in/kolkata?q=address&loc=normal"><img src={Card4}/></a>
            </div>
        </div>
        <div style={{display:"flex" , marginTop:"20px" , gap:"5rem" }}>
            <div style={{marginLeft:"150px"}}>
                <a href="https://www.zoomcar.com/in/kolkata?q=address&loc=normal"><img src={Card5}/></a>           
                </div>
            <div style={{ borderRadius:"10px"}}>
            <a href="https://www.zoomcar.com/in/kolkata?q=address&loc=normal"><img src={Card6}/></a>
            </div>
        </div>
        <div style={{marginTop:"20px" , marginLeft:"150px"}}>
          <a href="https://www.zoomcar.com/in/kolkata?q=address&loc=normal"><img src={Card7} alt="" /></a>
        </div>
        <div style={{display:"flex" , marginLeft:"150px" , gap:"1rem" , marginTop:"20px"}}>
            <a href="https://www.zoomcar.com/in/kolkata/offer/5158"><img src={Card8} alt="" /></a>
            <a href="https://www.zoomcar.com/in/kolkata/offer/5202"><img src={Card9} alt="" /></a>
            <a href="https://www.zoomcar.com/in/kolkata/offer/5201"><img src={Card10} alt="" /></a>
        </div>
    </div>
  )
}
