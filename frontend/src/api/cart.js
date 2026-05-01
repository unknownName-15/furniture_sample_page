const BASE_URL = import.meta.env.VITE_API_URL;

const authHeader = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
});

// 장바구니 목록 조회
export const getCart = async () => {
  const res = await fetch(`${BASE_URL}/cart/index.php`, {
    headers: authHeader(),
  });
  return res.json();
};

// 장바구니 추가
export const addToCart = async ({ productId, quantity }) => {
  const res = await fetch(`${BASE_URL}/cart/add.php`, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ product_id: productId, quantity }),
  });
  return res.json();
};

// 장바구니 삭제
export const removeFromCart = async (cartId) => {
  const res = await fetch(`${BASE_URL}/cart/remove.php`, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ cart_id: cartId }),
  });
  return res.json();
};
