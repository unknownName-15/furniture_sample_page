const BASE_URL = import.meta.env.VITE_API_URL;

// 전체 상품 조회
export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products/index.php`);
  return res.json();
};

// 카테고리별 상품 조회
export const getProductsByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/products/index.php?category=${encodeURIComponent(category)}`);
  return res.json();
};

// 상품 단건 조회
export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/show.php?id=${id}`);
  return res.json();
};
