import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts, extendedReviews } from '../data/shopData';

const ProductDetail = ({ onAddToCart, onToggleWishlist, wishlist }) => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('detail');

  // 섹션 이동을 위한 Ref (참조점)
  const detailRef = useRef(null);
  const guideRef = useRef(null);
  const reviewRef = useRef(null);

  if (!product) return <div className="py-40 text-center font-light font-sans">상품을 찾을 수 없습니다.</div>;

  const isWished = wishlist.some(item => item.id === product.id);

  // 스크롤 이동 함수
  const scrollToSection = (ref, tabName) => {
    setActiveTab(tabName);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 animate-fadeIn">
      {/* --- [1] 상단 요약 섹션 --- */}
      <div className="flex flex-col md:flex-row gap-16 mb-20">
        <div className="w-full md:w-1/2 aspect-square overflow-hidden bg-gray-50 rounded-sm">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-[#A1887F] text-xs tracking-[0.3em] uppercase mb-4 font-light">{product.category}</p>
          <h2 className="text-3xl font-serif text-[#5D4037] mb-6 tracking-tight">{product.name}</h2>
          <p className="text-xl text-[#2C2C2C] mb-10 font-sans font-medium">₩ {product.price.toLocaleString()}</p>

          <div className="flex gap-4 mb-12">
            <div className="flex border border-gray-200">
              <button className="px-5 py-2 hover:bg-gray-50 transition-colors" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
              <span className="px-8 py-2 flex items-center font-sans font-medium">{quantity}</span>
              <button className="px-5 py-2 hover:bg-gray-50 transition-colors" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button 
              onClick={() => onAddToCart({ ...product, quantity })}
              className="flex-1 bg-[#5D4037] text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#3E2723] transition-all font-light"
            >
              Add to Cart
            </button>
            <button 
              onClick={() => onToggleWishlist(product)}
              className="w-14 h-14 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all"
            >
              <i className={`${isWished ? 'ri-heart-fill text-red-400' : 'ri-heart-line text-gray-300'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* --- [2] 서브 탭 메뉴 --- */}
      <div className="sticky top-[135px] md:top-[150px] z-40 bg-white border-y border-gray-100 mb-20">
        <div className="flex justify-center gap-10 md:gap-20 py-5 text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-medium text-gray-400">
          <button 
            onClick={() => scrollToSection(detailRef, 'detail')}
            className={`hover:text-[#5D4037] transition-colors ${activeTab === 'detail' ? 'text-[#5D4037] border-b border-[#5D4037]' : ''}`}
          >
            Detail
          </button>
          <button 
            onClick={() => scrollToSection(guideRef, 'guide')}
            className={`hover:text-[#5D4037] transition-colors ${activeTab === 'guide' ? 'text-[#5D4037] border-b border-[#5D4037]' : ''}`}
          >
            Guide
          </button>
          <button 
            onClick={() => scrollToSection(reviewRef, 'review')}
            className={`hover:text-[#5D4037] transition-colors ${activeTab === 'review' ? 'text-[#5D4037] border-b border-[#5D4037]' : ''}`}
          >
            Review
          </button>
        </div>
      </div>

      {/* --- [3] Detail 섹션 --- */}
      <div ref={detailRef} className="pt-20 pb-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif text-[#5D4037] mb-12 uppercase tracking-widest">Product Story</h3>
          <p className="text-sm md:text-base text-gray-500 font-light leading-loose mb-20 font-sans">
            시간이 흐를수록 깊어지는 나무 본연의 아름다움을 느껴보세요.<br />
            {product.name}은(는) 당신의 소중한 일상을 담아내는 정직한 가구가 될 것입니다.
          </p>
          <img src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1500" alt="detail" className="w-full mb-20 rounded-sm" />
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1500" alt="detail" className="w-full rounded-sm" />
        </div>
      </div>

      {/* --- [4] Guide 섹션 --- */}
      <div ref={guideRef} className="py-32 border-t border-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-serif text-[#5D4037] mb-12 text-center uppercase tracking-widest">Shopping Guide</h3>
          <div className="space-y-12">
            {[
              { title: 'Delivery', content: '가구 전용 화물 택배를 통해 전문 기사님이 직접 배송하며, 주문 후 영업일 기준 약 7-14일이 소요됩니다.' },
              { title: 'Care', content: '원목은 습도와 온도에 민감합니다. 장시간 직사광선을 피해주시고, 원목 전용 컨디셔너로 관리해 주세요.' },
              { title: 'A/S', content: '제품 수령일로부터 1년간 무상 수리를 지원합니다. (소비자 과실 및 소모성 부품 제외)' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-20">
                <span className="w-32 text-[11px] font-bold uppercase tracking-widest text-[#A1887F]">{item.title}</span>
                <p className="flex-1 text-sm text-gray-400 font-light leading-relaxed font-sans">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- [5] Review 섹션 --- */}
      <div ref={reviewRef} className="py-32 border-t border-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-serif text-[#5D4037] mb-12 text-center uppercase tracking-widest">Customer Review</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extendedReviews.slice(0, 4).map((rev) => (
              <div key={rev.id} className="flex gap-6 p-6 border border-gray-50 rounded-sm bg-white shadow-sm">
                <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm">
                  <img src={rev.img} alt="rev" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[11px] font-medium text-[#A1887F]">{rev.user} 고객님</span>
                    <div className="flex gap-0.5 text-[#A1887F] text-[9px]">
                      {[...Array(rev.rating)].map((_, i) => <i key={i} className="ri-star-fill"></i>)}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-3">{rev.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-10 py-3 border border-gray-200 text-[11px] uppercase tracking-widest text-gray-400 hover:bg-[#5D4037] hover:text-white transition-all">리뷰 작성하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;