import React, { useState } from 'react';

const colors = [
  { name: 'Deep Brown', hex: '#5D4037' },
  { name: 'Medium Brown', hex: '#8D6E63' },
  { name: 'Light Brown', hex: '#A1887F' },
  { name: 'Cream Beige', hex: '#FDFBF9' },
  { name: 'Dark Charcoal', hex: '#2C2C2C' },
];

const ColorPalette = () => {
  const [copied, setCopied] = useState('');

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(hex);
      setTimeout(() => setCopied(''), 1500);
    });
  };

  return (
    <div className="fixed bottom-8 right-5 z-[200] flex flex-col gap-2">
      {colors.map((color) => (
        <div key={color.hex} className="flex items-center gap-2 justify-end">
          {/* 툴팁 */}
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-gray-500 font-sans leading-none">{color.name}</span>
            <span className="text-[10px] text-gray-300 font-sans leading-none mt-0.5">
              {copied === color.hex ? '✓ 복사됨' : color.hex}
            </span>
          </div>
          {/* 컬러 박스 */}
          <button
            onClick={() => handleCopy(color.hex)}
            title={`${color.name} (${color.hex})`}
            style={{ backgroundColor: color.hex }}
            className="w-8 h-8 rounded-sm shadow-md border border-gray-200 hover:scale-110 transition-transform active:scale-95 flex-shrink-0"
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
