import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/shopData';

const CategoryPage = ({ isMain = false }) => {
  const { categoryName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  const filteredProducts = !categoryName || categoryName === '전체 상품'
    ? allProducts
    : allProducts.filter(p => p.category === categoryName);

  const displayProducts = isMain ? filteredProducts.slice(0, 4) : filteredProducts;

  // price가 숫자일 경우 포맷팅, 문자열이면 그대로 사용
  const formatPrice = (price) =>
    typeof price === 'number' ? `₩ ${price.toLocaleString()}` : price;

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
              <p className="text-[#8D6E63] text-xs md:text-sm mt-2 font-semibold font-sans">{formatPrice(item.price)}</p>
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
