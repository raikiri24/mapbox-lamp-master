import React from 'react';
import Typed from 'react-typed';

function AboutUs() {
  return (
    <div className="">
      <div className="flex place-content-end">
        <span className="text-7xl ">
          <Typed
            strings={['About Us']}
            typeSpeed={150}
            backSpeed={100}
            loop
            smartBackspace
          />
        </span>
      </div>
      <div className="relative h-screen">
        <div className="bg-slate-800 w-1/2 absolute h-1/2 left-12 text-white p-20 text-justify">
          <p className="text-4xl">OUR TEAM</p>
          <div className="mt-4 mb-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              risus ligula, elementum eu quam at,Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer risus ligula, elementum eu
              quam at,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer risus ligula, elementum eu quam at,Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Integer risus ligula, elementum
              eu quam at,
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-28 h-28 bg-white rounded-full mr-3"></div>
            <div className="w-28 h-28 bg-white rounded-full mr-3"></div>
            <div className="w-28 h-28 bg-white rounded-full"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-28 h-28 bg-white rounded-full mr-3"></div>
            <div className="w-28 h-28 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="bg-slate-400 w-1/2 absolute top-56 h-1/2 right-28"></div>
      </div>
    </div>
  );
}

export default AboutUs;
