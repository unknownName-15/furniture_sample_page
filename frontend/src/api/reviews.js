const BASE_URL = import.meta.env.VITE_API_URL;

const authHeader = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
});

// 리뷰 전체 조회
export const getReviews = async () => {
  const res = await fetch(`${BASE_URL}/reviews/index.php`);
  return res.json();
};

// 리뷰 작성
export const createReview = async ({ productId, rating, content, img }) => {
  const res = await fetch(`${BASE_URL}/reviews/create.php`, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ product_id: productId, rating, content, img }),
  });
  return res.json();
};
