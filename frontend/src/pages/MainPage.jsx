import React from 'react';
import MainSlider from '../components/main/MainSlider';
import RecommendedProducts from '../components/main/RecommendedProducts';
import MainReviewSection from '../components/main/MainReviewSection'; 
import CategoryPage from './CategoryPage'; 
import InstagramWidget from '../components/main/InstagramWidget';
import StoreLocation from '../components/main/StoreLocation';

const MainPage = () => {
  return (
    <div className="animate-fadeIn">
      {/* 1. 메인 비주얼 */}
      <MainSlider />

      {/* 2. MD 추천 상품 */}
      <RecommendedProducts />
      
      {/* 3. 리뷰 섹션 */}
      <MainReviewSection />
      
      {/* 4. 전체 상품 */}
      <CategoryPage isMain={true} />
      
      {/* 5. 인스타그램 & 매장 지도 */}
      <InstagramWidget />
      <StoreLocation />
    </div>
  );
};

export default MainPage;