import React from 'react';
import { extendedReviews } from '../data/shopData';

const ReviewPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-24 px-6 animate-fadeIn">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-[#5D4037] mb-4 uppercase tracking-[0.3em] font-bold">Reviews</h2>
        <p className="text-gray-400 text-xs tracking-widest uppercase font-light">Shared Inspiration ({extendedReviews.length})</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {extendedReviews.map(r => (
          <div key={r.id} className="bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all rounded-sm text-left flex flex-col">
            <div className="aspect-square overflow-hidden">
              <img src={r.img} alt="review" className="w-full h-full object-cover transition-transform hover:scale-105" />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-3 font-sans">
                <span className="text-[11px] font-medium text-[#A1887F]">{r.user} 고객님</span>
                <span className="text-[10px] text-gray-300">{r.date}</span>
              </div>
              
              <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-3 min-h-[4.5rem] mb-4">
                {r.content}
              </p>
              
              <div className="mt-auto flex gap-0.5 text-[#A1887F] text-[10px]">
                {[...Array(r.rating)].map((_, i) => <i key={i} className="ri-star-fill"></i>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;