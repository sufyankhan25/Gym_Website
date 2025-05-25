import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero";
import WorkoutSessions from "../components/WorkoutSessions";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import BMICalculator from "../components/BMICalculator";
import Footer from "../components/Footer";

import React from 'react'

const Home = () => {
  return (
    <div>    
         <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" /></div>
  )
}

export default Home

 



