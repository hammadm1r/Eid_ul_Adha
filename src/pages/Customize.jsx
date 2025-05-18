import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import bg4 from '../assets/bg4.png';
import bg5 from '../assets/bg5.png';

const Customize = () => {
  const canvasRef = useRef();
  const [userName, setUserName] = useState('');
  const [textColor, setTextColor] = useState('#065f46');
  const [fontSize, setFontSize] = useState('20');
  const [isBold, setIsBold] = useState(true);
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [selectedBg, setSelectedBg] = useState(bg1);

  const location = useLocation();
  const navigate = useNavigate();

  const reverseBgMap = {
    [bg1]: 1,
    [bg2]: 2,
    [bg3]: 3,
    [bg4]: 4,
    [bg5]: 5,
  };

  // Load values from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
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

  const handleDownload = async () => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    await new Promise((resolve) => setTimeout(resolve, 100));

    html2canvas(canvasElement, {
      useCORS: true,
      backgroundColor: null,
      scale: 2,
    })
      .then((canvas) => {
        const link = document.createElement('a');
        link.download = 'eid_wish.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      })
      .catch((err) => {
        console.error('Error generating canvas:', err);
      });
  };

  return (
    <div className="flex flex-col items-center gap-4 py-6 bg-[linear-gradient(to_bottom_right,_#d1fae5,_#bbf7d0)]">
      {/* Image Preview */}
      <div ref={canvasRef} className="relative">
        <div className="min-h-screen flex flex-col mt-4 md:mt-0 md:flex-row items-center justify-center" style={{
          backgroundImage: 'linear-gradient(to bottom right, #d1fae5, #bbf7d0)',
        }}>
          <div className="text-center p-5 md:text-left mb-10 md:mb-0 md:mr-12 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 font-[cursive]" style={{
              color: '#065f46'
            }}>
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

          {/* Image Section */}
          <div className="w-full md:w-[400px]">
            <img
              src={selectedBg}
              alt="Eid Greeting"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-md px-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          className="border px-4 py-2 rounded w-full"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        {/* Text Color */}
        <div className="flex items-center gap-2">
          <label className="text-sm">Text Color:</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>

        {/* Font Size */}
        <div className="flex items-center gap-2">
          <label className="text-sm">Font Size:</label>
          <input
            type="range"
            min="16"
            max="36"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
          <span>{fontSize}px</span>
        </div>

        {/* Font Boldness */}
        <div className="flex items-center gap-2">
          <label className="text-sm">Bold:</label>
          <input
            type="checkbox"
            checked={isBold}
            onChange={() => setIsBold(!isBold)}
          />
        </div>

        {/* Font Family */}
        <div className="flex items-center gap-2">
          <label className="text-sm">Font:</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="sans-serif">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
            <option value="cursive">Cursive</option>
            <option value="'Comic Sans MS', cursive">Comic Sans</option>
            <option value="Georgia">Georgia</option>
            <option value="Impact">Impact</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>

        {/* Image Selector */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm text-center">Choose Background:</label>
          <div className="flex gap-2 justify-center flex-wrap">
            {[bg1, bg2, bg3, bg4, bg5].map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedBg(img)}
                className={`w-14 h-14 rounded cursor-pointer border-2 ${
                  selectedBg === img ? 'border-green-500' : 'border-transparent'
                }`}
                alt={`bg-${index}`}
                title="Click to select background"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={!userName}
        className={`mt-4 px-6 py-2 rounded text-white ${
          userName ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Download Eid Wish
      </button>

      {/* Share Button */}
      <button
  onClick={() => {
    const params = new URLSearchParams({
      name: userName,
      color: textColor,
      size: fontSize,
      bold: isBold,
      font: fontFamily,
      bg: reverseBgMap[selectedBg],
    });

    // If you're using relative links, prepend your domain for full URL
    const fullUrl = `${window.location.origin}/?${params.toString()}`;
    navigator.clipboard.writeText(fullUrl);
    alert('Link copied to clipboard!');
  }}
  className="mt-2 px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
>
  Share This Greeting
</button>
    </div>
  );
};

export default Customize;
