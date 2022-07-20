import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Roundtrip from './Components/Roundtrip'
import SelectModal from './Components/Chakracomponent/SelectModal'
import { Button } from '@chakra-ui/react'
import { ImageSection } from './Components/ImageSection'


function App() {

  return (
    <div>
      <Navbar/>
      <Roundtrip/>
      <div style={{marginTop:"-300px" , marginLeft:"-350px"}}>
        <SelectModal/>
      </div>
      <ImageSection/>
    </div>
  )
}

export default App
