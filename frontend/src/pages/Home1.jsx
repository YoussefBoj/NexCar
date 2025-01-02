import React from "react";
import Navbar from "../components/old/components/home/Navbar"; // Adjust import path if necessary
import Hero from "../components/old/components/home/Hero"; // Adjust import path if necessary
// import { BackgroundBoxesDemo } from "../components/old/components/BackgroundBoxesDemo";
import Footer from "../components/old/components/Footer";  // Correct default import
import Card from "../components/old/components/home/Card";
import FAQ from "../components/old/components/home/FAQ";
import Carousel3D from "../components/old/components/home/Carousel3D";
import { ThreeDCardDemo } from "../components/old/components/home/ThreeDCardDemo";
import { ThreeDCardDemo2 } from "../components/old/components/home/ThreeDCardDemo2";
import { ThreeDCardDemo3 } from "../components/old/components/home/ThreeDCardDemo3.jsx";

const Home1 = () => {
  return (
    <div> 
      <Navbar /> 
      <Hero />
      {/* <BackgroundBoxesDemo /> */}
      <Carousel3D />
      
      <div className="flex flex-wrap justify-center gap-6 p-4">
        <h2 className="text-center w-full text-5xl font-bold mt-6">Our Features</h2>
        <ThreeDCardDemo source="https://www.shutterstock.com/image-photo/car-driving-on-beautiful-road-600nw-2473243119.jpg"/>
        <ThreeDCardDemo2 source="https://i.pinimg.com/736x/d7/d5/8c/d7d58c31687ce588c80c07febbb1477b.jpg"/>
        <ThreeDCardDemo3 source="https://d9s1543upwp3n.cloudfront.net/wp-content/uploads/2024/01/shutterstock_2270607091.jpg"/> 
      </div>
     
      {/* <Card /> */}
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home1;
