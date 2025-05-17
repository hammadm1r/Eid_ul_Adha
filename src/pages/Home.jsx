import React from 'react';
import bg2 from '../assets/bg2.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col mt-4 md:mt-0 md:flex-row items-center justify-center  bg-gradient-to-br from-green-100 to-green-200">
      
      {/* Text Section */}
      <div className="text-center md:text-left mb-10 md:mb-0 md:mr-12 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight mb-4 font-[cursive]">
          🌙 Happy Eid ul Adha to Everyone!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium font-serif">
          May this Eid bring joy, peace, and endless blessings to your heart and home.
        </p>
        <p className="mt-6 text-base md:text-lg text-gray-600 italic">
          — With Regards, <span className="font-bold text-green-700">Hammad Meer</span>
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[400px]">
        <img
          src={bg2}
          alt="Eid Greeting"
          className="rounded-lg  object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
