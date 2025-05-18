import React, { useState, useEffect, useRef } from 'react';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import bg4 from '../assets/bg4.png';
import bg5 from '../assets/bg5.png';

  const bgMap = {
    1: bg1,
    2: bg2,
    3: bg3,
    4: bg4,
    5: bg5,
  };

const Home = () => {
  const canvasRef = useRef();
  const [userName, setUserName] = useState('');
  const [textColor, setTextColor] = useState('#065f46');
  const [fontSize, setFontSize] = useState('20');
  const [isBold, setIsBold] = useState(true);
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [selectedBg, setSelectedBg] = useState(bg1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('name')) setUserName(params.get('name'));
    if (params.get('color')) setTextColor(params.get('color'));
    if (params.get('size')) setFontSize(params.get('size'));
    if (params.get('bold')) setIsBold(params.get('bold') === 'true');
    if (params.get('font')) setFontFamily(params.get('font'));
    if (params.get('bg')) {
      const bg = bgMap[params.get('bg')];
      if (bg) setSelectedBg(bg);
    }
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col mt-4 md:mt-0 md:flex-row items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #d1fae5, #bbf7d0)',
      }}
    >
      <div className="text-center p-5 md:text-left mb-10 md:mb-0 md:mr-12 max-w-lg">
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 font-[cursive]"
          style={{ color: '#065f46' }}
        >
          🌙 Happy Eid ul Adha to Everyone!
        </h1>
        <p className="text-lg md:text-xl font-medium font-serif" style={{ color: '#374151' }}>
          May this Eid bring joy, peace, and endless blessings to your heart and home.
        </p>
        <p className="mt-6 text-base md:text-lg italic">
          — With Regards,{' '}
          <span
            style={{
              color: textColor,
              fontSize: `${fontSize}px`,
              fontWeight: isBold ? 'bold' : 'normal',
              fontFamily: fontFamily,
            }}
          >
            {userName}
          </span>
        </p>
      </div>

      <div className="w-full md:w-[400px]">
        <img src={selectedBg} alt="Eid Greeting" className="rounded-lg object-cover w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;
