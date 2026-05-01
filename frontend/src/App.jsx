import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 공통 컴포넌트
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ColorPalette from './components/ColorPalette';

// 페이지
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import NoticePage from './pages/NoticePage';
import QnaPage from './pages/QnaPage';
import ReviewPage from './pages/ReviewPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';

const AppContent = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const location = useLocation();

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setCartItems([]);
    setWishlist([]);
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, idx) => idx !== index));
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const isExist = prev.find(item => item.id === product.id);
      if (isExist) return prev.filter(item => item.id !== product.id);
      return [...prev, product];
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2C2C2C] font-sans">
      <Header
        showBanner={showBanner}
        setShowBanner={setShowBanner}
        setIsMenuOpen={setIsMenuOpen}
        cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)}
        user={user}
        onLogout={handleLogout}
      />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} user={user} />

      <div className={`${showBanner ? 'pt-[175px] md:pt-[190px]' : 'pt-[135px] md:pt-[150px]'} transition-all duration-500`}>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products" element={<CategoryPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
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
            <Route path="/cart" element={<CartPage cartItems={cartItems} onRemove={handleRemoveItem} />} />
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
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* 플로팅 컬러 팔레트 */}
      <ColorPalette />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
