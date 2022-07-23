import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Drawercomponent from '../Components/Chakracomponent/Drawer'
import HostIcon from '../Components/Icons/HostIcon' ;
import {ArrowBackIcon} from '@chakra-ui/icons' ;
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Image1 from './b1.jpg' ;
import Image2 from './b2.jpg' ;
import Image3 from './b3.jpg' ;
import Image4 from './b4.jpg' ;
import Image5 from './b5.jpg' ;
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const Questionsec=()=>{
  return(
    <div>
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         Do I need to meet the renters of my car?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel textAlign="left">
      We have install the keyless entry device in your car , which makes sure that you need not meet any of the
      renters in person , either at the start or at the end of any booking.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          How will I get paid?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel textAlign='left'>
      Your total earnings will be credited to your bank account every week . 
      you can access your detailed earnings through our zoomcar host app .
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          What happens if my car gets challans or trafic fines while 
          my car is being shared?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel textAlign='left'>
      Zoomcar will take care of all challans incurred during car sharing
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
  )
}

const ReferModal=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure();
  return(
    <>
      <Button onClick={onOpen} variant="ghost" bgColor="black" color="white" border="none" mt="-8px" fontWeight="400">Refer & Earn</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Refer and Earn</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>You Earn ₹7500/-</h1>
            <h1>Your Friend Gets upto ₹7500/-</h1>
            <h1>You both Win.</h1>
            <img src="https://www.zoomcar.com/zap/subscribe/build/2dac7c3e3ed475d15bf341d377b66ed9.svg" alt="" />
            <div style={{display:"flex" , gap:"2rem"}}>
            <img src="https://www.zoomcar.com/zap/subscribe/build/57cc7c360d39278b0396db7f870e7cd0.png" alt="whatsapp" />
              <img src="https://www.zoomcar.com/zap/subscribe/build/511323b8e90983b78fe644c8c9075cf2.png" alt="facebook" />
              <img src="https://www.zoomcar.com/zap/subscribe/build/56993356b7e8876d8eadb92affa38ab7.png" alt="twiteer" />
            </div>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const Unavbar=()=>{
  return (
    <div>
      <div>
          <Drawercomponent/>
      </div>
    </div>
  )
}
const Becomeahost = () => {
  return (
    <div>
      <Link to="/"><ArrowBackIcon/> Back to Home</Link>
      <div style={{display:"flex", width:"1362px" , backgroundColor:"black" , color:"white",marginLeft:"-80px"}}><Unavbar/></div>
      <div>
         <Link to="/becomeahost"><HostIcon/></Link>
      </div>
      <div style={{marginLeft:"500px"}}>
        <ul style={{display:"flex" , gap:"2rem" , listStyleType:"none", fontFamily:"sans-serif" , fontWeight:"900" , marginTop:"30px" , color:"white"}}>
          <li><a href="https://www.zoomcar.com/in/host/en/help">Contact US</a></li>
          <li><a href="https://www.zoomcar.com/in/host/en/faq">Faq</a></li>
          <li><ReferModal/></li>
          <Button variant="solid" bgColor="green.400" mt="-8px"><a href="https://www.zoomcar.com/in/host/en/form?phone=8918441170&country_code=%2B91">Start Earning</a></Button>
        </ul>
      </div>
      <div>
        <div style={{marginLeft:"70px"}}>
          <img src={Image1} alt="" />
        </div>
        <Button variant="solid" bgColor="green.400" mt="-180px" ml="-780px" w="160px" h="55px"><a href="https://www.zoomcar.com/in/host/en/form?phone=8918441170&country_code=%2B91">Start Earning</a></Button>
      </div>
      <div>
      <img src={Image2} alt="image2" />
      <img src={Image3} alt="image2" />
      <img src={Image4} alt="image3" />
      <img src={Image5} alt="" />
      </div>
      <div style={{display:"flex" , gap:"2rem"}}>
        <div>
          <Heading size="xl">Still have questions?</Heading>
        </div>
        <div style={{width:"100%"}}>
        <Questionsec/>
        </div>
       
      </div>
    </div>
  )
}

export default Becomeahost
