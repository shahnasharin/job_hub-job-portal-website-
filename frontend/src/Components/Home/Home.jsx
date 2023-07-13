import React from 'react';
import job1 from "../../assets/video.mp4";
import Navbar from "../Navbar/Navbar";
import BrowseTopJobs from './BrowseTopJobs';
import HomePage3 from './HomePage3';
import HomePage4 from './HomePage4'

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <video autoPlay muted loop id="bg-video" className="w-full h-full object-cover">
          <source src={job1} type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <Navbar />
          <div className="container mx-auto">
            <div className="text-white text-center py-8 md:py-24">
              <div className="mt-8 md:mt-40">
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 mt-4 md:mt-12 text-gray-900">Find the<br/> perfect Job <br/></h2>
              </div>
              <div className="mt-8 flex justify-center">
                <a href="contact.html" className="px-4 py-2 md:px-6 md:py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-800 transition duration-300">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrowseTopJobs />
      <HomePage3/>
      <HomePage4/>
    </div>
  );
};

export default HomePage;
