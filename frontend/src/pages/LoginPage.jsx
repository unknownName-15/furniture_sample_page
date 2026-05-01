import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { login } from '../api/auth';

const LoginPage = ({ onLogin }) => {
  const location = useLocation();
  const isWelcome = location.state?.welcome;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await login({
        email: formData.email,
        password: formData.password,
      });

      if (res.success) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        onLogin(res.user); // App.jsx의 user 상태 업데이트
        navigate('/');
      } else {
        setError(res.message || '로그인에 실패했습니다.');
      }
    } catch (err) {
      setError('서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-24 px-6 animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-[#5D4037] mb-4 uppercase tracking-widest">Login</h2>
        <p className="text-gray-400 text-xs font-light italic">다시 만나서 반가워요. WOOD & SOUL입니다.</p>
      </div>

      {isWelcome && (
        <p className="text-[#5D4037] text-xs text-center font-light mb-6 bg-[#F9F7F5] py-3 px-4 border border-[#A1887F]">
          WOOD & SOUL의 가족이 되신 것을 환영합니다! 🌿
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 font-sans">
        <div>
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#5D4037] transition-colors font-light"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#5D4037] transition-colors font-light"
            required
          />
        </div>

        {error && (
          <p className="text-red-400 text-xs text-center font-light">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#5D4037] text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#3E2723] transition-all mt-8 font-light disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '로그인 중...' : 'Sign In'}
        </button>
      </form>

      <div className="mt-10 flex justify-between text-[11px] text-gray-400 tracking-widest uppercase">
        <div className="flex gap-4">
          <button className="hover:text-[#5D4037] transition-colors">Find ID</button>
          <button className="hover:text-[#5D4037] transition-colors">Find PW</button>
        </div>
        <Link to="/signup" className="text-[#A1887F] font-bold hover:text-[#5D4037] transition-colors">
          Join Us
        </Link>
      </div>

      <div className="mt-16 border-t border-gray-100 pt-10">
        <p className="text-center text-[10px] text-gray-300 tracking-[0.3em] uppercase mb-6">SNS Login</p>
        <div className="flex justify-center gap-6 text-2xl text-gray-300">
          <button className="hover:text-[#3b5998] transition-colors"><i className="ri-facebook-box-fill"></i></button>
          <button className="hover:text-[#FEE500] transition-colors"><i className="ri-kakao-talk-fill"></i></button>
          <button className="hover:text-[#03C75A] transition-colors"><i className="ri-chat-4-fill"></i></button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
