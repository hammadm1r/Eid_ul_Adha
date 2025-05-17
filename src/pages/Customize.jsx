import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';
import bg5 from '../assets/bg5.jpg';

const Customize = () => {
  const canvasRef = useRef();
  const [userName, setUserName] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('20');
  const [isBold, setIsBold] = useState(true);
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [selectedBg, setSelectedBg] = useState(bg3);

  const handleDownload = () => {
    html2canvas(canvasRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'eid_wish.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      {/* Image Preview */}
      <div ref={canvasRef} className="relative w-[350px] h-[350px] border shadow-md">
        <img
          src={selectedBg}
          alt="Eid Background"
          className="w-full h-full object-cover rounded-md"
        />
        <p
          className="absolute bottom-6 w-full text-center drop-shadow-md"
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
            fontWeight: isBold ? 'bold' : 'normal',
            fontFamily: fontFamily,
          }}
        >
          {userName || 'Your Name'}
        </p>
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
            onChange={(e) => {
              setTextColor(e.target.value);
              console.log('Selected color:', e.target.value);
            }}
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

        {/* Font Family (Updated) */}
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
        <div className="flex flex-col gap-1">
          <label className="text-sm text-center">Choose Background:</label>
          <div className="flex gap-2">
            {[bg1, bg2, bg3, bg4, bg5].map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedBg(img)}
                className={`w-14 h-14 rounded cursor-pointer border-2 ${
                  selectedBg === img ? 'border-green-500' : 'border-transparent'
                }`}
                alt={`bg-${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Download Eid Wish
      </button>
    </div>
  );
};

export default Customize;