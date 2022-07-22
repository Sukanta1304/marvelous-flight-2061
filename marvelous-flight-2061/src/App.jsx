import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Roundtrip from './Components/Roundtrip'
import SelectModal from './Components/Chakracomponent/SelectModal'
import { Button } from '@chakra-ui/react'
import { ImageSection } from './Components/ImageSection'
import AboutAccordian from './Components/Chakracomponent/AboutAccordian'
import TextSection from './Components/TextSection'
import Home from './Pages/Home'
import Becomeahost from './Pages/Becomeahost'
import Login from './Pages/Login'
import ZMS from './Pages/ZMS'
import { Route, Routes } from 'react-router-dom'
import Otp from './Pages/Otp'
import Profile from './Pages/Profile'


function App() {

  return (
    <div>
      <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/becomeahost" element={<Becomeahost/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/zms" element={<ZMS/>}/>
                <Route path="/otp" element={<Otp/>}/>
                <Route path = "/profile" element={<Profile/>}/>
                <Route path="/changecity" element={<SelectModal/>}/>
      </Routes>
    </div>
  )
}

export default App
