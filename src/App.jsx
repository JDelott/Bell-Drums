import React from "react";

import Navbar from "./components/NavBar";
import { Hero } from "./components/Hero";
import Featured from "./components/Featured"
import HeroBottom from "./components/HeroBottom";
import Footer from "./components/Footer";

function App() {
  

  return (
  <div>
    <Navbar />
    <Hero />
    <Featured />
    <HeroBottom />
    <Footer />
  </div>
  )
}

export default App
