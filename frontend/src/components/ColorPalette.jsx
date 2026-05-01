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
    <div className="fixed bottom-8 right-5 z-[200] flex flex-col gap-1">
      {colors.map((color) => (
        <button
          key={color.hex}
          onClick={() => handleCopy(color.hex)}
          title={copied === color.hex ? '✓ 복사됨' : color.hex}
          style={{ backgroundColor: color.hex, width: '10px', height: '10px' }}
          className="rounded-none shadow-sm border border-gray-200 hover:scale-125 transition-transform active:scale-95 flex-shrink-0"
        />
      ))}
    </div>
  );
};

export default ColorPalette;
