import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  // 햄버거 라인 메뉴 리스트
const menuItems = [
  { name: '메인 화면', path: '/', icon: 'ri-home-4-line' },
  { name: '전체 상품', path: '/products', icon: 'ri-store-2-line' },
  { name: '찜 목록', path: '/wishlist', icon: 'ri-heart-line' }, 
  { name: '사용 후기', path: '/reviews', icon: 'ri-chat-quote-line' },
  { name: '고객센터', path: '/contact', icon: 'ri-customer-service-2-line' },
];

  return (
    <>
      {/* 배경 오버레이 */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* 사이드바 본체 */}
      <div className={`fixed top-0 right-0 w-[300px] h-full bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* 닫기 버튼 */}
        <div className="p-6 flex justify-end">
          <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-400 hover:text-black transition-colors">
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* 메뉴 리스트 */}
        <nav className="px-8 pt-4">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="flex items-center gap-4 text-lg font-light tracking-widest text-gray-700 hover:text-[#A1887F] transition-all group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={`${item.icon} text-xl text-gray-300 group-hover:text-[#A1887F] transition-colors`}></i>
                  <span className="uppercase">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 고객센터 정보 */}
        <div className="absolute bottom-0 left-0 w-full p-8 border-t border-gray-50 bg-[#FDFBF9]">
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#A1887F] font-bold">Customer Center</h4>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">02-1234-5678</p>
              <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                Mon - Fri : 10:00 - 18:00<br />
                Lunch : 12:00 - 13:00<br />
                Sat, Sun, Holiday Off
              </p>
            </div>
            <div className="pt-2 flex gap-4 text-gray-400 text-lg">
              <i className="ri-instagram-line cursor-pointer hover:text-black transition-colors"></i>
              <i className="ri-kakao-talk-fill cursor-pointer hover:text-black transition-colors"></i>
              <i className="ri-mail-line cursor-pointer hover:text-black transition-colors"></i>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Sidebar;