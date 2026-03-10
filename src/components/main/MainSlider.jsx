import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper 필수 스타일들을 여기서 직접 임포트
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const MainSlider = () => {
  const slides = [
    { id: 1, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070', title: '당신의 공간에 숨결을', subtitle: '천연 원목이 주는 따스한 위로' },
    { id: 2, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070', title: '장인의 손길로 빚은 가구', subtitle: '시간이 흘러도 변치 않는 가치' },
    { id: 3, image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070', title: '미니멀리즘의 정수', subtitle: '본질에 집중한 디자인의 힘' }
  ];

  return (
    <div className="w-full relative group custom-swiper overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-[350px] md:h-[600px] w-full" 
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4 font-sans">
                <span className="text-[10px] md:text-sm tracking-[0.3em] mb-3 uppercase font-light">{slide.subtitle}</span>
                <h2 className="text-2xl md:text-6xl font-bold mb-6 font-serif">{slide.title}</h2>
                <button className="border border-white px-8 py-3 text-xs md:text-sm hover:bg-white hover:text-black transition-all tracking-widest uppercase font-light">Discover More</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 화살표 및 페이지네이션 커스텀 스타일 */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-swiper .swiper-button-next, 
        .custom-swiper .swiper-button-prev { 
          color: #ffffff !important; 
          opacity: 0; 
          transition: opacity 0.3s; 
        }
        .custom-swiper:hover .swiper-button-next, 
        .custom-swiper:hover .swiper-button-prev { 
          opacity: 0.7; 
        }
        .custom-swiper .swiper-pagination-bullet { background: rgba(255,255,255,0.5); }
        .custom-swiper .swiper-pagination-bullet-active { background: #ffffff !important; }
      `}} />
    </div>
  );
};

export default MainSlider;