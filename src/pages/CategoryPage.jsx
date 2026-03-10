import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export const allProducts = [
  { id: 1, category: '식탁', name: '프리미엄 오크 원목 식탁', price: '₩ 2,450,000', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000' },
  { id: 2, category: '의자', name: '장인 정신 월넛 체어', price: '₩ 890,000', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000' },
  { id: 3, category: '테이블', name: '미니멀 사이드 테이블', price: '₩ 420,000', img: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000' },
  { id: 4, category: '서랍장', name: '원목 와이드 서랍장', price: '₩ 1,650,000', img: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000' },
  { id: 5, category: '식탁', name: '클래식 오크 식탁 세트', price: '₩ 3,200,000', img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000' },
  { id: 6, category: '소파', name: '모던 벨벳 3인 소파', price: '₩ 2,100,000', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000' },
  { id: 7, category: '테이블', name: '라운드 월넛 테이블', price: '₩ 780,000', img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000' },
  { id: 8, category: '서랍장', name: '슬림 우드 서랍장', price: '₩ 1,250,000', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000' },
];

const CategoryPage = ({ isMain = false }) => {
  const { categoryName } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  const filteredProducts = !categoryName || categoryName === '전체 상품'
    ? allProducts
    : allProducts.filter(p => p.category === categoryName);

  const displayProducts = isMain ? filteredProducts.slice(0, 4) : filteredProducts;

  return (
    <div className={`max-w-6xl mx-auto px-4 md:px-6 animate-fadeIn ${isMain ? 'py-20 md:py-32' : 'py-20'}`}>
      {isMain ? (
        <div className="flex flex-col items-center mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#5D4037] font-serif uppercase tracking-tight">전체 상품</h3>
          <div className="w-10 h-[2px] bg-[#A1887F] mt-4 mb-3"></div>
          <p className="text-gray-400 text-sm italic font-light">나무의 결 하나하나에 정성을 담아 완성한 시간의 기록</p>
        </div>
      ) : (
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#5D4037] mb-4 uppercase tracking-widest">{categoryName || '전체 상품'}</h2>
          <div className="w-12 h-[1px] bg-[#A1887F] mx-auto"></div>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {displayProducts.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 shadow-sm">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="mt-5 text-center">
              <h4 className="text-sm md:text-base font-medium text-[#2C2C2C] group-hover:text-[#8D6E63] transition-colors">{item.name}</h4>
              <p className="text-[#8D6E63] text-xs md:text-sm mt-2 font-semibold font-sans">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {isMain && filteredProducts.length > 4 && (
        <div className="flex justify-center mt-16">
          <Link to="/products" className="px-12 py-4 border border-[#5D4037] text-[#5D4037] text-xs tracking-[0.2em] hover:bg-[#5D4037] hover:text-white transition-all uppercase font-light">View All Products</Link>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;