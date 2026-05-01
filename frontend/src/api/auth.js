const BASE_URL = import.meta.env.VITE_API_URL;

// 회원가입
export const signup = async ({ name, email, password, phone }) => {
  const res = await fetch(`${BASE_URL}/auth/signup.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, phone }),
  });
  return res.json();
};

// 로그인
export const login = async ({ email, password }) => {
  const res = await fetch(`${BASE_URL}/auth/login.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

// 로그아웃 (토큰 삭제는 프론트에서 처리)
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// 현재 로그인 유저 정보 가져오기
export const getMe = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${BASE_URL}/auth/me.php`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
