import React from 'react';

const StoreLocation = () => {
  const handleOpenMap = () => {
    // 을지로3가역 2호선 구글 지도
    window.open("https://www.google.com/maps/search/%EC%9D%84%EC%A7%80%EB%A1%9C3%EA%B0%80%EC%97%AD+2%ED%98%B8%EC%84%A0", "_blank");
  };

  return (
    <section className="max-w-6xl mx-auto py-24 md:py-40 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="w-full md:w-1/2 aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden relative shadow-md">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000" alt="map" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5D4037] text-white p-4 rounded-full shadow-xl">
            <i className="ri-map-pin-2-fill text-2xl"></i>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-[#5D4037] font-serif mb-12 uppercase tracking-tight">WOOD & SOUL CRAFT STUDIO</h3>
          <ul className="flex flex-col gap-8 text-sm md:text-base font-light mb-16 text-[#2C2C2C]">
            <li className="flex items-start gap-5">
              <i className="ri-map-pin-line text-[#A1887F] text-lg"></i>
              <span>서울시 중구 을지로 100 (지하철 2호선 을지로3가역 인근)</span>
            </li>
            <li className="flex items-center gap-5">
              <i className="ri-phone-line text-[#A1887F] text-lg"></i>
              <span className="font-sans">02-1234-5678</span>
            </li>
            <li className="flex items-center gap-5">
              <i className="ri-mail-line text-[#A1887F] text-lg"></i>
              <span className="font-sans">contact@woodandsoul.com</span>
            </li>
          </ul>
          <button 
            onClick={handleOpenMap} 
            className="px-12 py-5 bg-[#5D4037] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#3E2723] transition-all shadow-md font-light"
          >
            매장 위치 확인하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;