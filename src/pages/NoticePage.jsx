import React from 'react';

const NoticePage = () => {
  const notices = [
    { id: 3, title: '[안내] 원목 가구 오일 마감 관리법 교육 세션 안내', date: '2026.03.10', hit: 152 },
    { id: 2, title: '[공지] 을지로 스튜디오 리뉴얼 오픈 이벤트 당첨자 발표', date: '2026.02.28', hit: 341 },
    { id: 1, title: '배송 시스템 점검에 따른 지역별 배송 지연 안내', date: '2026.02.15', hit: 209 },
  ];

  return (
    <div className="max-w-5xl mx-auto py-24 px-6 animate-fadeIn">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-[#5D4037] mb-4 uppercase tracking-widest">Notice</h2>
        <p className="text-gray-400 text-sm font-light italic">WOOD & SOUL의 새로운 소식을 전해드립니다.</p>
      </div>
      <table className="w-full text-left border-t border-[#5D4037] text-[13px]">
        <thead>
          <tr className="border-b border-gray-100 text-gray-400 text-[11px] uppercase tracking-widest font-sans">
            <th className="py-5 px-4 w-16 text-center">No</th>
            <th className="py-5 px-4">Subject</th>
            <th className="py-5 px-4 w-28 text-center">Date</th>
            <th className="py-5 px-4 w-20 text-center">Hit</th>
          </tr>
        </thead>
        <tbody className="font-light">
          {notices.map(n => (
            <tr key={n.id} className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition">
              <td className="py-5 px-4 text-center text-gray-300 font-sans">{n.id}</td>
              <td className="py-5 px-4">{n.title}</td>
              <td className="py-5 px-4 text-center text-gray-300 font-sans text-[11px]">{n.date}</td>
              <td className="py-5 px-4 text-center text-gray-300 font-sans text-[11px]">{n.hit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticePage;