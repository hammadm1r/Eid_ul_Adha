import React from 'react';
import error from '../assets/error.png';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col mt-4 md:mt-0 md:flex-row items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
      
      {/* Text Section */}
      <div className="text-center md:text-left mb-10 md:mb-0 md:mr-12 max-w-lg">
        <h1 className="text-5xl font-bold text-green-800 leading-tight mb-4 font-[cursive]">
          404 — Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium font-serif">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <p className="mt-6 text-base md:text-lg text-gray-600 italic">
          — Don’t worry, you can head back <a href="/" className="text-green-700 font-bold underline">home</a>.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[400px]">
        <img
          src={error}
          alt="Eid Greeting"
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default NotFound;
