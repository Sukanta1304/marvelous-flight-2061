import { Route, Routes } from "react-router-dom";
import AboutAccordian from "../Components/Chakracomponent/AboutAccordian";
import SelectModal from "../Components/Chakracomponent/SelectModal";
import { ImageSection } from "../Components/ImageSection";
import Navbar from "../Components/Navbar";
import Roundtrip from "../Components/Roundtrip";
import TextSection from "../Components/TextSection";
import Becomeahost from "./Becomeahost";
import Login from "./Login";
import ZMS from "./ZMS";


export default function Home(){
    return (
        <div>
            <Navbar/>
            <Roundtrip/>
      <div style={{marginTop:"-300px" , marginLeft:"-350px"}}>
        <SelectModal/>
      </div>
      <ImageSection/>
      <AboutAccordian/>
      <TextSection/>
        </div>
    )
}
