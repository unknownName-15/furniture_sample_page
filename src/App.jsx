import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 컴포넌트 임포트
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// 페이지 임포트
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import NoticePage from './pages/NoticePage';
import QnaPage from './pages/QnaPage';
import ReviewPage from './pages/ReviewPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// 🌟 데이터는 여기서만 가져옵니다 (중복 선언 금지!)
import { allProducts, extendedReviews } from './data/shopData';

const AppContent = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]); // 찜 목록 상태
  const location = useLocation();

  // 장바구니 추가 함수
  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  // 장바구니 삭제 함수
  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, idx) => idx !== index));
  };

  // 🌟 찜하기 토글 함수 (추가/삭제)
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const isExist = prev.find(item => item.id === product.id);
      if (isExist) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2C2C2C] font-sans">
      {/* 헤더 */}
      <Header 
        showBanner={showBanner} 
        setShowBanner={setShowBanner} 
        setIsMenuOpen={setIsMenuOpen} 
        cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)} 
      />
      
      {/* 사이드바 */}
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* 메인 콘텐츠 영역 (배너 유무에 따른 상단 여백 조절) */}
      <div className={`${showBanner ? 'pt-[175px] md:pt-[190px]' : 'pt-[135px] md:pt-[150px]'} transition-all duration-500`}>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products" element={<CategoryPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            
            {/* 상품 상세: 찜 기능 연동 */}
            <Route 
              path="/product/:id" 
              element={
                <ProductDetail 
                  onAddToCart={handleAddToCart} 
                  onToggleWishlist={toggleWishlist} 
                  wishlist={wishlist} 
                />
              } 
            />
            
            {/* 장바구니 */}
            <Route path="/cart" element={<CartPage cartItems={cartItems} onRemove={handleRemoveItem} />} />
            
            {/* 🌟 찜 목록 페이지 추가 */}
            <Route 
              path="/wishlist" 
              element={
                <WishlistPage 
                  wishlist={wishlist} 
                  onToggleWishlist={toggleWishlist} 
                  onAddToCart={handleAddToCart} 
                />
              } 
            />

            <Route path="/notice" element={<NoticePage />} />
            <Route path="/qna" element={<QnaPage />} />
            <Route path="/reviews" element={<ReviewPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;