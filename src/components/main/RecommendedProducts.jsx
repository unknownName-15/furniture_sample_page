import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedProducts = () => {
  const recommendedItems = [
    { id: 2, name: '장인 정신 월넛 체어', price: '₩ 890,000', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000' },
    { id: 7, name: '모던 벨벳 3인 소파', price: '₩ 2,100,000', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070' },
    { id: 4, name: '원목 와이드 서랍장', price: '₩ 1,650,000', img: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000' },
    { id: 1, name: '프리미엄 오크 식탁', price: '₩ 2,450,000', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000' },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 md:py-32 px-4 md:px-6">
      <div className="flex flex-col items-center mb-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#5D4037] font-serif uppercase tracking-tight">추천 상품</h3>
        <div className="w-10 h-[2px] bg-[#A1887F] mt-4 mb-3"></div>
        <p className="text-gray-400 text-sm italic font-light">오랜 세월을 견딘 나무가 선사하는 고요하고 깊은 울림</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {recommendedItems.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} className="group text-center">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 shadow-sm">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h4 className="mt-5 text-sm md:text-base font-medium group-hover:text-[#8D6E63] transition-colors">{item.name}</h4>
            <p className="text-[#8D6E63] text-xs md:text-sm mt-2 font-semibold font-sans">{item.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;