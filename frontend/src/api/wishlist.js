const BASE_URL = import.meta.env.VITE_API_URL;

const authHeader = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
});

// 찜 목록 조회
export const getWishlist = async () => {
  const res = await fetch(`${BASE_URL}/wishlist/index.php`, {
    headers: authHeader(),
  });
  return res.json();
};

// 찜 추가/삭제 토글
export const toggleWishlist = async (productId) => {
  const res = await fetch(`${BASE_URL}/wishlist/toggle.php`, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ product_id: productId }),
  });
  return res.json();
};
