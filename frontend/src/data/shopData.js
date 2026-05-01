// 모든 상품 데이터 (상세페이지 등에서 공통 사용)
export const allProducts = [
  { id: 1, category: '식탁', name: '프리미엄 오크 원목 식탁', price: 2450000, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000' },
  { id: 2, category: '의자', name: '장인 정신 월넛 체어', price: 890000, img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000' },
  { id: 3, category: '테이블', name: '미니멀 사이드 테이블', price: 420000, img: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000' },
  { id: 4, category: '서랍장', name: '원목 와이드 서랍장', price: 1650000, img: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000' },
  { id: 5, category: '식탁', name: '클래식 오크 식탁 세트', price: 3200000, img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000' },
  { id: 6, category: '의자', name: '내추럴 위빙 라탄 체어', price: 450000, img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000' },
  { id: 7, category: '소파', name: '모던 벨벳 3인 소파', price: 2100000, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000' },
  { id: 8, category: '테이블', name: '라운드 월넛 테이블', price: 780000, img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000' },
  { id: 9, category: '서랍장', name: '슬림 우드 서랍장', price: 1250000, img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000' },
  { id: 10, category: '소파', name: '내추럴 린넨 소파', price: 1850000, img: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1000' },
];

// 🌟 20개의 후기 데이터 (ReviewPage에서 불러올 데이터)
export const extendedReviews = [
  { id: 1, user: '이*희', date: '2026.03.05', rating: 5, content: '원목 식탁 구매했는데 결이 너무 예뻐요. 집안 분위기가 확 살아나네요!', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=500' },
  { id: 2, user: '김*민', date: '2026.03.02', rating: 5, content: '생각보다 튼튼하고 마감이 깔끔해요. 왜 수제 가구를 쓰는지 알 것 같습니다.', img: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=500' },
  { id: 3, user: '박*서', date: '2026.02.28', rating: 4, content: '아크릴 테이블이랑 원목 조화가 미쳤어요... 세련된 느낌이라 카페 같네요.', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500' },
  { id: 4, user: '최*준', date: '2026.02.25', rating: 5, content: '서랍장 수납력이 정말 좋네요. 나무 냄새가 은은하게 나서 힐링됩니다.', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=500' },
  { id: 5, user: '정*윤', date: '2026.02.20', rating: 5, content: '배송이 좀 늦었지만 기다린 보람이 있어요. 실물이 훨씬 고급스럽습니다.', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=500' },
  { id: 6, user: '한*지', date: '2026.02.15', rating: 5, content: '상담도 너무 친절하시고, 사이즈에 딱 맞춰 제작해주셔서 감사합니다.', img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=500' },
  { id: 7, user: '윤*성', date: '2026.02.10', rating: 4, content: '나무 향이 너무 좋네요. 거실에 두니 분위기가 아늑해졌어요.', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500' },
  { id: 8, user: '강*우', date: '2026.02.05', rating: 5, content: '평생 쓸 가구를 찾았네요. 마감이 정말 예술입니다.', img: 'https://images.unsplash.com/photo-1540638349517-3abd5afc5847?q=80&w=500' },
  { id: 9, user: '임*현', date: '2026.02.01', rating: 5, content: '오크 원목의 따뜻한 느낌이 사진보다 훨씬 예뻐요. 강추합니다!', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=500' },
  { id: 10, user: '신*경', date: '2026.01.28', rating: 5, content: '아이들이 있는 집이라 걱정했는데, 모서리 처리가 둥글어서 안심이에요.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500' },
  { id: 11, user: '조*아', date: '2026.01.25', rating: 4, content: '신혼 가구로 장만했는데 대만족입니다. 집들이 때 다들 물어보네요.', img: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=500' },
  { id: 12, user: '유*나', date: '2026.01.20', rating: 5, content: '공방에 직접 가서 상담받고 주문했는데, 정성이 느껴지는 가구입니다.', img: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=500' },
  { id: 13, user: '임*진', date: '2026.01.15', rating: 5, content: '거실장 대용으로 샀는데 수납력이 정말 좋아요. 나무 결이 예술입니다.', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=500' },
  { id: 14, user: '오*택', date: '2026.01.10', rating: 5, content: '원목 의자가 이렇게 편할 줄 몰랐네요. 마감이 매끄러워서 자꾸 만지게 돼요.', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=500' },
  { id: 15, user: '성*현', date: '2026.01.05', rating: 4, content: '색감이 화면보다 살짝 진한데 더 고급스러워요. 만족합니다.', img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=500' },
  { id: 16, user: '고*라', date: '2025.12.30', rating: 5, content: '서재 책상으로 맞춤 제작했는데 집중이 잘 되네요. 나무 냄새가 정말 좋아요.', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=500' },
  { id: 17, user: '백*준', date: '2025.12.25', rating: 5, content: '결혼 10주년 선물로 아내에게 사줬는데 너무 좋아하네요. 감사합니다.', img: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=500' },
  { id: 18, user: '남*미', date: '2025.12.20', rating: 5, content: '카페 분위기 내려고 샀는데 성공이에요! 인스타 감성 뿜뿜입니다.', img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=500' },
  { id: 19, user: '송*영', date: '2025.12.15', rating: 4, content: '튼튼하고 흔들림 없어요. 역시 원목 가구는 다르네요.', img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=500' },
  { id: 20, user: '황*연', date: '2025.12.10', rating: 5, content: '공방 스태프분들이 너무 친절하게 상담해주셔서 기분 좋게 구매했습니다.', img: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=500' },
];