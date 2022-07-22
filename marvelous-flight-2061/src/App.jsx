
import './App.css'

import SelectModal from './Components/Chakracomponent/SelectModal'

import Home from './Pages/Home'
import Becomeahost from './Pages/Becomeahost'
import Login from './Pages/Login'
import ZMS from './Pages/ZMS'
import { Route, Routes } from 'react-router-dom'
import Otp from './Pages/Otp'
import Profile from './Pages/Profile'
import Findcar from './Pages/Findcar'
import Checkout from './Pages/Checkout'
import Success from './Pages/Success'
import Startpoint from './Pages/Startpoint'


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
                <Route path="/findcars" element={<Findcar/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="/startpoint" element={<Startpoint/>}/>

      </Routes>
    </div>
  )
}

export default App
