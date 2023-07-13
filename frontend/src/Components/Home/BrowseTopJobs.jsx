import React from "react";
// import HomePage2 from './HomePage2'
import HomePage4Card from "./HomePage4Card";

function BrowseTopJobs() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
      <div className="py-20 px-40">
        <div className="text-center">
          <span className="text-5xl font-bold text-orange-600 pb-10 drop-shadow-lg">1000+</span>
          <div className="py-10">
            <h1 className="text-4xl font-bold pb-10 drop-shadow-lg text-gray-700">
              Browse From Our Top Jobs
            </h1>
            <p className="text-xl text-gray-500">
              The automated process starts as soon as your clothes go into the
              machine. The outcome is gleaming clothes. Placeholder text
              commonly used.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          <HomePage4Card />
          <HomePage4Card />
          <HomePage4Card />
          <HomePage4Card />
        </div>
      </div>
    </div>
  );
}

export default BrowseTopJobs;