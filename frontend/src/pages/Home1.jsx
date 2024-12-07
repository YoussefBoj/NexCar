import React from "react";
import Navbar from "../components/old/components/home/Navbar"; // Adjust import path if necessary
import Hero from "../components/old/components/home/Hero"; // Adjust import path if necessary
// import { BackgroundBoxesDemo } from "../components/old/components/BackgroundBoxesDemo";
import Footer from "../components/old/components/Footer";  // Correct default import
import Card from "../components/old/components/home/Card";
import FAQ from "../components/old/components/home/FAQ";
import Carousel3D from "../components/old/components/home/Carousel3D";
import { ThreeDCardDemo } from "../components/old/components/home/ThreeDCardDemo";

const Home1 = () => {
  return (
    <div> 
      <Navbar /> 
      <Hero />
      {/* <BackgroundBoxesDemo /> */}
      <Carousel3D />
      
      <div className="flex flex-wrap justify-center gap-6 p-4">
        <h2 className="text-center w-full text-5xl font-bold mt-6">Our Features</h2>
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo /> 
      </div>
     
      <Card />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home1;
