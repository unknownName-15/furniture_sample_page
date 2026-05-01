import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { allProducts } from '../data/shopData';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return allProducts.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower)
    );
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-20 animate-fadeIn">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-[#5D4037] mb-4 uppercase tracking-widest">Search</h2>
        <p className="text-gray-400 text-sm font-light">
          <span className="text-[#5D4037] font-medium">"{query}"</span> 검색 결과
          <span className="ml-2 text-gray-300">({results.length}건)</span>
        </p>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-20 border-t border-gray-50">
          <i className="ri-search-line text-4xl text-gray-200 mb-6 block"></i>
          <p className="text-gray-300 font-light mb-8">검색 결과가 없습니다.</p>
          <Link
            to="/products"
            className="inline-block px-10 py-4 bg-[#5D4037] text-white text-xs tracking-widest hover:bg-[#3E2723] transition-all font-light"
          >
            전체 상품 보기
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {results.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 shadow-sm">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="mt-5 text-center">
                <p className="text-[10px] text-[#A1887F] uppercase tracking-widest mb-1 font-light">{item.category}</p>
                <h4 className="text-sm md:text-base font-medium text-[#2C2C2C] group-hover:text-[#8D6E63] transition-colors">{item.name}</h4>
                <p className="text-[#8D6E63] text-xs md:text-sm mt-2 font-semibold font-sans">₩ {item.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
