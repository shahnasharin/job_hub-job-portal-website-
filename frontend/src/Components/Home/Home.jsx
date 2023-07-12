import React from 'react';
import job1 from "../../assets/video.mp4";
import Navbar from "../Navbar/Navbar"

const HomePage = () => {
  return (
    <div className="relative">
     

      <video autoPlay muted loop id="bg-video" className="w-full h-full object-cover">
        <source src={job1} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 bottom-7px w-full h-full bg-opacity-80 bg-gray-800">
      <Navbar />
        <div className="container mx-auto">
          <div className="text-white text-center py-8 md:py-24">
            <h6 className="text-sm md:text-lg">Lorem ipsum dolor sit amet</h6>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">Find the perfect Job</h2>
            <div className="mt-4 md:mt-8">
              <a href="contact.html" className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
