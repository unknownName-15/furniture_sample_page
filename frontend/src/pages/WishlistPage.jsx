import React from 'react';
import { Link } from 'react-router-dom';

const WishlistPage = ({ wishlist, onToggleWishlist, onAddToCart }) => {
  return (
    <div className="max-w-6xl mx-auto py-24 px-6 animate-fadeIn min-h-[60vh]">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-[#5D4037] mb-4 uppercase tracking-[0.3em] font-bold">Wishlist</h2>
        <p className="text-gray-400 text-xs tracking-widest uppercase font-light">찜하신 상품들을 확인해보세요.</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-20 border-t border-gray-50">
          <p className="text-gray-300 font-light mb-8">찜한 상품이 없습니다.</p>
          <Link to="/products" className="inline-block px-10 py-4 bg-[#5D4037] text-white text-[11px] uppercase tracking-widest hover:bg-[#3E2723] transition-all">쇼핑하기</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map(product => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-5">
                <Link to={`/product/${product.id}`}>
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </Link>
                {/* 찜 취소 버튼 */}
                <button 
                  onClick={() => onToggleWishlist(product)}
                  className="absolute top-4 right-4 text-red-400 text-xl"
                >
                  <i className="ri-heart-fill"></i>
                </button>
              </div>
              <h3 className="text-sm font-medium mb-2">{product.name}</h3>
              <p className="text-[#8D6E63] text-sm font-sans font-bold mb-4">₩ {product.price.toLocaleString()}</p>
              <button 
                onClick={() => onAddToCart({ ...product, quantity: 1 })}
                className="w-full py-3 border border-[#5D4037] text-[#5D4037] text-[10px] uppercase tracking-widest hover:bg-[#5D4037] hover:text-white transition-all font-medium"
              >
                장바구니 담기
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;