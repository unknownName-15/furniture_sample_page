# 🪵 Wood & Soul — 원목 수제 가구 쇼핑몰 샘플

> 원목 수제 가구 브랜드 **Wood & Soul**의 풀스택 쇼핑몰 샘플 페이지

Tailwind CSS 기반의 감성적인 UI와 PHP+MySQL 백엔드를 연동한 쇼핑몰 프로젝트입니다.  
장바구니·위시리스트·회원 시스템·리뷰·QnA까지 실제 커머스에 가까운 기능을 구현했습니다.

---

## 📁 프로젝트 구조

```
furniture_sample_page/
├── frontend/
│   ├── src/
│   │   ├── App.jsx                  # 라우팅 및 전역 상태 관리
│   │   ├── pages/
│   │   │   ├── MainPage.jsx         # 메인 홈 (슬라이더·추천·리뷰·전체상품·지도)
│   │   │   ├── CategoryPage.jsx     # 카테고리별 상품 목록
│   │   │   ├── ProductDetail.jsx    # 상품 상세 (Detail·Guide·Review 탭)
│   │   │   ├── CartPage.jsx         # 장바구니
│   │   │   ├── WishlistPage.jsx     # 위시리스트
│   │   │   ├── SearchPage.jsx       # 검색 결과
│   │   │   ├── ReviewPage.jsx       # 전체 리뷰
│   │   │   ├── NoticePage.jsx       # 공지사항
│   │   │   ├── QnaPage.jsx          # Q&A
│   │   │   ├── LoginPage.jsx        # 로그인 (SNS 로그인 UI 포함)
│   │   │   └── SignupPage.jsx       # 회원가입
│   │   ├── components/
│   │   │   ├── Header.jsx           # 상단 헤더 (배너·검색·장바구니)
│   │   │   ├── Footer.jsx           # 푸터
│   │   │   ├── Sidebar.jsx          # 햄버거 사이드 메뉴
│   │   │   ├── ColorPalette.jsx     # 플로팅 컬러팔레트
│   │   │   └── main/
│   │   │       ├── MainSlider.jsx        # 메인 비주얼 슬라이더
│   │   │       ├── RecommendedProducts.jsx # MD 추천 상품
│   │   │       ├── MainReviewSection.jsx   # 홈 리뷰 섹션
│   │   │       ├── InstagramWidget.jsx     # 인스타그램 피드 위젯
│   │   │       └── StoreLocation.jsx       # 매장 위치 지도
│   │   ├── data/
│   │   │   └── shopData.js          # 상품·리뷰 목 데이터
│   │   └── api/
│   │       ├── auth.js              # 회원가입·로그인 API
│   │       ├── cart.js              # 장바구니 API
│   │       ├── products.js          # 상품 API
│   │       ├── reviews.js           # 리뷰 API
│   │       └── wishlist.js          # 위시리스트 API
└── backend/                         # PHP + MySQL API 서버
```

---

## 🛠️ 기술 스택

| 구분 | 기술 |
|------|------|
| Frontend | React, Vite, Tailwind CSS, react-router-dom |
| Backend | PHP, MySQL |
| 아이콘 | Remix Icon |
| 지도 | Kakao Map API (매장 위치) |

---

## ⚙️ 환경 변수

```env
VITE_API_URL=https://your-backend-url.com/api
```

---

## 🚀 로컬 실행

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

---

## 📌 주요 구현 내용

- **다중 페이지 라우팅**: react-router-dom으로 11개 페이지 구성, 페이지 전환 시 스크롤 최상단 이동
- **장바구니·위시리스트**: App.jsx에서 전역 상태로 관리, props drilling으로 하위 컴포넌트에 전달
- **상품 상세 sticky 탭 메뉴**: Detail·Guide·Review 탭 클릭 시 해당 섹션으로 smooth scroll, 상단 고정
- **상품 검색**: URL 쿼리 파라미터(`?q=`) 기반 검색, 상품명·카테고리 필터링
- **회원 시스템**: 로그인·회원가입 PHP API 연동, JWT 토큰 localStorage 저장
- **플로팅 컬러팔레트**: 브랜드 컬러를 실시간으로 미리보는 UI 도구
- **메인 슬라이더**: 자동 재생 비주얼 슬라이더
- **인스타그램 위젯**: 브랜드 SNS 피드 UI 구현
- **매장 위치 지도**: Kakao Map API 연동
- **반응형 레이아웃**: Tailwind CSS 반응형 유틸리티로 모바일·PC 대응

---

## 🌐 페이지 구성

| 경로 | 페이지 |
|------|--------|
| `/` | 메인 홈 |
| `/products` | 전체 상품 목록 |
| `/category/:categoryName` | 카테고리별 상품 |
| `/product/:id` | 상품 상세 |
| `/cart` | 장바구니 |
| `/wishlist` | 위시리스트 |
| `/search?q=` | 검색 결과 |
| `/reviews` | 전체 리뷰 |
| `/notice` | 공지사항 |
| `/qna` | Q&A |
| `/login` | 로그인 |
| `/signup` | 회원가입 |
