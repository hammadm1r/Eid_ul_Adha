import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className=" w-full flex flex-col p-4 " 
     style={{
       backgroundImage: 'linear-gradient(to bottom right, #d1fae5, #bbf7d0)'}}
      >
      {/* Header */}
      <header className=" text-green-800 font-[cursive] flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <img src={logo} alt="Logo" className="h-10 w-10 object-contain" /> */}
          <h1 className="text-sm md:text-xl font-bold"><a href='https://hammadmeer.netlify.app/'>Eid ul Adha Wishes</a></h1>
        </div>
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-green-950 text-green-800">Home</Link>
          <Link to="/gallery" className="hover:text-green-950 text-green-800">Gallery</Link>
          <Link to="/customize" className="hover:text-green-950 text-green-800">Customize</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-green-800 font-[cursive]">
        &copy; {new Date().getFullYear()} Eid ul Adha Wishes. All rights reserved.
      </footer>
    </div>
  );
};

export default AppLayout;
