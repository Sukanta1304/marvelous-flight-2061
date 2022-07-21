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


function App() {

  return (
    <div>
      <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/becomeahost" element={<Becomeahost/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/zms" element={<ZMS/>}/>
      </Routes>
    </div>
  )
}

export default App

