import React from 'react';

const QnaPage = () => {
  const qnas = [
    { id: 4, status: '답변완료', title: '비규격 사이즈 주문 제작 가능할까요?', user: '최*희', date: '2026.03.10' },
    { id: 3, status: '답변대기', title: '식탁 상판 코팅 관리 문의 드립니다.', user: '김*현', date: '2026.03.09' },
    { id: 2, status: '답변완료', title: '배송 일정 변경 부탁드립니다.', user: '박*서', date: '2026.03.05' },
    { id: 1, status: '답변완료', title: '회원 가입 혜택 쿠폰이 안 들어왔어요.', user: '이*민', date: '2026.03.01' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-24 px-6 animate-fadeIn">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-[#5D4037] mb-4 uppercase tracking-widest">Q&A</h2>
        <p className="text-gray-400 text-sm font-light italic">상품에 대해 궁금하신 점을 남겨주세요.</p>
      </div>
      <table className="w-full text-left border-t border-[#5D4037] text-[13px]">
        <thead>
          <tr className="border-b border-gray-100 text-gray-400 text-[11px] uppercase tracking-widest font-sans">
            <th className="py-5 px-4 w-16 text-center">No</th>
            <th className="py-5 px-4 w-24 text-center">Status</th>
            <th className="py-5 px-4">Subject</th>
            <th className="py-5 px-4 w-28 text-center">Writer</th>
            <th className="py-5 px-4 w-28 text-center">Date</th>
          </tr>
        </thead>
        <tbody className="font-light">
          {qnas.map(q => (
            <tr key={q.id} className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
              <td className="py-5 px-4 text-center text-gray-300 font-sans">{q.id}</td>
              <td className="py-5 px-4 text-center">
                <span className={`px-2 py-1 rounded-[2px] text-[10px] ${q.status === '답변완료' ? 'bg-gray-100 text-gray-500' : 'bg-[#F9F7F5] text-[#8D6E63]'}`}>{q.status}</span>
              </td>
              <td className="py-5 px-4 flex items-center gap-2"><i className="ri-lock-2-line text-gray-300"></i> {q.title}</td>
              <td className="py-5 px-4 text-center text-gray-400">{q.user}</td>
              <td className="py-5 px-4 text-center text-gray-300 font-sans text-[11px]">{q.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QnaPage;