import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('WOOD & SOUL의 가족이 되신 것을 환영합니다! :)');
  };

  return (
    <div className="max-w-md mx-auto py-24 px-6 animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-[#5D4037] mb-4 uppercase tracking-widest">Join Us</h2>
        <p className="text-gray-400 text-xs font-light italic">당신의 공간을 함께 채워갈 WOOD & SOUL의 멤버가 되어주세요.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 font-sans">
        {/* 이름 입력 */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#5D4037] transition-colors font-light"
            required
          />
        </div>

        {/* 이메일 입력 */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="EMAIL (ID)"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#5D4037] transition-colors font-light"
            required
          />
        </div>

        {/* 비밀번호 입력 */}
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

        {/* 비밀번호 확인 */}
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="CONFIRM PASSWORD"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#5D4037] transition-colors font-light"
            required
          />
        </div>

        {/* 연락처 입력 */}
        <div className="pb-4">
          <input
            type="tel"
            name="phone"
            placeholder="PHONE (010-0000-0000)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#5D4037] transition-colors font-light"
            required
          />
        </div>

        {/* 약관 동의 (간이) */}
        <div className="bg-[#FDFBF9] p-4 border border-gray-100 space-y-3">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-3 h-3 accent-[#5D4037]" required />
            <span className="text-[11px] text-gray-400 font-light group-hover:text-gray-600 transition-colors">이용약관 및 개인정보 처리방침에 동의합니다. (필수)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-3 h-3 accent-[#5D4037]" />
            <span className="text-[11px] text-gray-400 font-light group-hover:text-gray-600 transition-colors">이벤트 소식 등 마케팅 정보 수신에 동의합니다. (선택)</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#5D4037] text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#3E2723] transition-all mt-8 font-light"
        >
          회원가입
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-[11px] text-gray-300 tracking-widest uppercase">
          이미 계정이 있으신가요? 
          <Link to="/login" className="ml-3 text-[#A1887F] font-bold hover:text-[#5D4037] transition-colors underline underline-offset-4">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;