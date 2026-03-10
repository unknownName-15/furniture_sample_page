import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, onRemove }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false); // 결제 준비 중 팝업 상태
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 animate-fadeIn relative">
      
      {/* 결제 시스템 준비 중 팝업 */}
      {isAlertOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsAlertOpen(false)}></div>
          <div className="bg-white w-full max-w-sm p-10 rounded-sm shadow-2xl relative animate-fadeIn text-center border-t-4 border-[#8D6E63]">
            <div className="w-16 h-16 bg-[#F9F7F5] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-information-line text-3xl text-[#8D6E63]"></i>
            </div>
            <h3 className="text-xl font-serif text-[#5D4037] mb-3 font-bold">시스템 안내</h3>
            <p className="text-sm text-gray-500 mb-8 font-light leading-relaxed">
              현재는 임시 모드 운영 중으로<br/>
              <span className="text-[#8D6E63] font-medium">결제 시스템은 준비 중</span>입니다.
            </p>
            <button 
              onClick={() => setIsAlertOpen(false)} 
              className="w-full bg-[#5D4037] text-white py-4 text-xs tracking-widest font-medium hover:bg-[#3E2723] transition-all uppercase"
            >
              확인
            </button>
          </div>
        </div>
      )}

      <h2 className="text-3xl font-serif text-[#5D4037] mb-12 text-center">SHOPPING CART</h2>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-20 border-y border-gray-100">
          <p className="text-gray-400 mb-8 font-light">장바구니가 비어 있습니다.</p>
          <Link to="/" className="inline-block px-10 py-4 bg-[#5D4037] text-white text-xs tracking-widest hover:bg-[#3E2723] transition-all font-light">
            쇼핑 계속하기
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {/* 테이블 헤더 */}
          <div className="border-b border-gray-200 pb-4 hidden md:flex text-[10px] text-gray-400 tracking-widest uppercase">
            <span className="flex-1">Product Info</span>
            <span className="w-32 text-center">Quantity</span>
            <span className="w-32 text-right">Subtotal</span>
          </div>

          {/* 장바구니 리스트 */}
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-50 pb-8">
              <div className="w-24 h-24 bg-[#F9F7F5] rounded-sm overflow-hidden flex-shrink-0">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-[#5D4037] font-medium mb-1">{item.name}</h4>
                <p className="text-xs text-[#8D6E63] font-sans">₩ {item.price.toLocaleString()}</p>
              </div>
              <div className="w-32 text-center font-sans text-sm text-gray-500 font-light">
                {item.quantity} 개
              </div>
              <div className="w-32 text-right font-sans font-medium text-[#5D4037]">
                ₩ {(item.price * item.quantity).toLocaleString()}
              </div>
              <button onClick={() => onRemove(index)} className="text-gray-300 hover:text-[#8D6E63] transition md:ml-6">
                <i className="ri-delete-bin-line text-xl"></i>
              </button>
            </div>
          ))}

          {/* 하단 합계 영역 */}
          <div className="mt-10 flex flex-col items-end gap-6">
            <div className="flex items-center gap-10">
              <span className="text-gray-400 text-xs tracking-[0.2em] uppercase font-light">총 결제 금액</span>
              <span className="text-2xl md:text-3xl font-serif text-[#8D6E63] font-bold">
                ₩ {totalPrice.toLocaleString()}
              </span>
            </div>
            {/* 결제하기 버튼 */}
            <button 
              onClick={() => setIsAlertOpen(true)}
              className="w-full md:w-72 bg-[#5D4037] text-white py-5 text-sm tracking-[0.3em] font-medium hover:bg-[#3E2723] transition-all shadow-lg active:scale-95"
            >
              결제하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;