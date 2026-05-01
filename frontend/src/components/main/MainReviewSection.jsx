import React from 'react';
import { Link } from 'react-router-dom';
import { extendedReviews } from '../../data/shopData';

const MainReviewSection = () => {
  const mainReviews = extendedReviews.slice(0, 4);

  return (
    <section className="py-24 bg-[#F9F7F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#5D4037] font-serif uppercase tracking-tight">Reviews</h3>
            <p className="text-gray-400 text-sm mt-2 font-light italic">고객님들이 전해주신 WOOD & SOUL의 이야기</p>
          </div>
          <Link to="/reviews" className="text-[11px] uppercase tracking-widest text-[#A1887F] border-b border-[#A1887F] pb-1 hover:text-[#5D4037] transition-colors font-sans">
            전체 보기
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainReviews.map(r => (
            <div key={r.id} className="bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow text-left flex flex-col h-full">
              <div className="aspect-square overflow-hidden mb-4">
                <img src={r.img} alt="review" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-medium text-[#A1887F]">{r.user}</span>
                <div className="flex gap-0.5 text-[#A1887F] text-[9px]">
                  {[...Array(r.rating)].map((_, i) => <i key={i} className="ri-star-fill"></i>)}
                </div>
              </div>
              
              <p className="text-[13px] text-gray-500 font-light leading-relaxed line-clamp-3 min-h-[3.75rem]">
                {r.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainReviewSection;