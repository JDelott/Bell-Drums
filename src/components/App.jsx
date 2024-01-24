import React from "react";
import {Route, Routes} from 'react-router-dom'

import Navbar from "./NavBar";
import Splash from "../Splash";
// import Footer from "./Footer";

import About from './About.jsx'
import ContactForm from "./ContactForm";
import Drums from "./Drums";


function App() {
  

  return (
  <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/Drums" element={<Drums />} />



      </Routes> 

    {/* <Footer /> */}
  </div>
  )
}

export default App
