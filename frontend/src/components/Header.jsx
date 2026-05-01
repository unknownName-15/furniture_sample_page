import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ showBanner, setShowBanner, setIsMenuOpen, cartCount, user, onLogout }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const categories = [
    { name: '전체 상품', path: '/products' },
    { name: '식탁', path: '/category/식탁' },
    { name: '의자', path: '/category/의자' },
    { name: '소파', path: '/category/소파' },
    { name: '테이블', path: '/category/테이블' },
    { name: '서랍장', path: '/category/서랍장' },
  ];

  const community = [
    { name: '공지사항', path: '/notice' },
    { name: '상품 Q&A', path: '/qna' },
    { name: '상품 사용후기', path: '/reviews' },
  ];

  const isActive = (path) => decodeURIComponent(location.pathname) === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      {showBanner && (
        <div className="bg-black text-white py-2 px-4 flex justify-between items-center text-[10px] md:text-sm font-sans font-light">
          <div className="flex-1 text-center tracking-wider">첫 쇼핑 지원 3,000원 할인 쿠폰 증정</div>
          <div className="flex items-center gap-4 text-gray-400">
            <label className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <input type="checkbox" className="w-3 h-3 accent-[#5D4037]" onChange={() => setShowBanner(false)} />
              <span className="hidden xs:inline text-[11px]">오늘 하루 보지 않기</span>
            </label>
            <button onClick={() => setShowBanner(false)}><i className="ri-close-line"></i></button>
          </div>
        </div>
      )}

      <nav className="flex justify-between items-center px-4 md:px-10 py-5 md:py-7">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-[#5D4037] text-2xl hover:scale-110 transition"
          >
            <i className={isSearchOpen ? "ri-close-line" : "ri-search-line"}></i>
          </button>
          {isSearchOpen && (
            <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="검색어를 입력하세요"
                autoFocus
                className="border-b border-gray-200 focus:border-[#5D4037] outline-none text-sm py-1 w-48 animate-fadeIn font-light"
              />
              <button type="submit" className="text-[#5D4037] text-sm hover:scale-110 transition">
                <i className="ri-search-line"></i>
              </button>
            </form>
          )}
        </div>

        <Link to="/" className="text-2xl md:text-3xl font-bold text-[#5D4037] font-serif tracking-tight flex-1 text-center">
          WOOD & SOUL
        </Link>

        <div className="flex gap-4 md:gap-8 text-[#5D4037] items-center flex-1 justify-end">
          <div className="hidden lg:flex items-center gap-4 text-[11px] uppercase tracking-widest font-medium text-gray-400">
            {user ? (
              <>
                <span className="text-[#5D4037] font-medium">{user.name}님</span>
                <span className="text-gray-200">|</span>
                <button onClick={onLogout} className="hover:text-[#5D4037] transition">로그아웃</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-[#5D4037] transition">로그인</Link>
                <span className="text-gray-200">|</span>
                <Link to="/signup" className="hover:text-[#5D4037] transition">회원가입</Link>
              </>
            )}
          </div>

          <Link to="/cart" className="relative transition hover:text-[#A1887F] text-2xl">
            <i className="ri-shopping-bag-line"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#8D6E63] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white animate-scaleIn font-sans">
                {cartCount}
              </span>
            )}
          </Link>

          <button onClick={() => setIsMenuOpen(true)} className="hover:scale-110 transition text-2xl">
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </nav>

      {/* 모바일 검색창 */}
      {isSearchOpen && (
        <form onSubmit={handleSearch} className="md:hidden px-4 pb-4 flex items-center gap-2 border-t border-gray-50">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="검색어를 입력하세요"
            autoFocus
            className="flex-1 border-b border-gray-200 focus:border-[#5D4037] outline-none text-sm py-2 font-light"
          />
          <button type="submit" className="text-[#5D4037] text-lg">
            <i className="ri-search-line"></i>
          </button>
        </form>
      )}

      <div className="border-t border-gray-100 py-4 px-4 overflow-x-auto no-scrollbar bg-white">
        <ul className="flex justify-start md:justify-center items-center gap-7 md:gap-10 text-[12px] md:text-[13px] whitespace-nowrap">
          {categories.map((c) => (
            <li key={c.name} className="relative py-1">
              <Link to={c.path} className={`transition uppercase font-medium tracking-wider ${isActive(c.path) ? 'text-[#5D4037]' : 'text-gray-400 hover:text-[#5D4037]'}`}>{c.name}</Link>
              {isActive(c.path) && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#5D4037] animate-scaleIn"></div>}
            </li>
          ))}
          <li className="text-gray-200 hidden md:block mx-2 font-light">|</li>
          {community.map((c) => (
            <li key={c.name} className="relative py-1">
              <Link to={c.path} className={`transition uppercase font-medium tracking-wider ${isActive(c.path) ? 'text-[#5D4037]' : 'text-gray-400 hover:text-[#5D4037]'}`}>{c.name}</Link>
              {isActive(c.path) && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#5D4037] animate-scaleIn"></div>}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
