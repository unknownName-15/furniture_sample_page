import React from 'react';

const InstagramWidget = () => {
  const instaImgs = [
    'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=500',
    'https://images.unsplash.com/photo-1540638349517-3abd5afc5847?q=80&w=500',
    'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=500',
    'https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=500',
    'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=500',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500'
  ];

  return (
    <section className="py-24 md:py-32 border-b border-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <i className="ri-instagram-line text-3xl mb-4 text-[#5D4037]"></i>
        <h3 className="text-xl md:text-2xl font-bold text-[#5D4037] font-serif mb-4 uppercase tracking-widest">@wood_and_soul</h3>
        <p className="text-gray-400 text-xs mb-16 tracking-widest font-light uppercase font-sans">Moments of Creation</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {instaImgs.map((img, i) => (
            <div key={i} className="aspect-square rounded-sm overflow-hidden group relative">
              <img src={img} alt="insta" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <i className="ri-instagram-fill text-white text-xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramWidget;