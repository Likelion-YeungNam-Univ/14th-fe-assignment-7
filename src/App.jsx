import React, { useState } from 'react';
import RightCard from './components/RightCard.jsx';
import CommentModal from './components/CommetModal.jsx'; // 파일명 오타 확인 필요 (CommentModal)
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

const App = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingComment, setPendingComment] = useState('');

  const handleCommentSubmit = (e) => {
    if ((e.key === 'Enter' || e.type === 'click') && inputValue.trim()) {
      setPendingComment(inputValue);
      setIsModalOpen(true);
    }
  };

  const confirmComment = () => {
    setComments([pendingComment, ...comments]);
    setInputValue('');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* 왼쪽 메인 섹션 */}
        <div className="flex-1 space-y-8">
          
          {/* 1. 메인 이미지 박스 */}
          <div className="relative overflow-hidden w-full h-[520px] rounded-[40px] shadow-2xl bg-gray-200"> 
<img
  className="w-full h-full object-cover transition-transform"
  alt="Image"
  src="src/images/ganadi1.jpeg"
/>
          </div>

          {/* 2. 제목 및 인터랙션 바 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-2">useState 과제</h1>
              <p className="text-slate-400 text-lg">멋쟁이사자처럼 14기 프론트 파트 7.useState 과제입니다.~</p>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLikes(likes + 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-50 text-blue-600 font-bold hover:bg-blue-100 transition-all active:scale-95"
              >
                <FaRegThumbsUp /> {likes}
              </button>
              <button 
                onClick={() => setDislikes(dislikes + 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-rose-50 text-rose-600 font-bold hover:bg-rose-100 transition-all active:scale-95"
              >
                <FaRegThumbsDown /> {dislikes}
              </button>
            </div>
          </div>

          {/* 3. 댓글 섹션 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              댓글 <span className="text-blue-500 text-sm bg-blue-50 px-2 py-1 rounded-md">{comments.length}</span>
            </h3>
            
            <div className="flex gap-3 mb-8">
              <input 
                type="text" 
                className="flex-1 bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-400 transition-all outline-none text-slate-700 placeholder:text-slate-300"
                placeholder="댓글을 입력하세요..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleCommentSubmit}
              />
              <button 
                onClick={handleCommentSubmit}
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:translate-y-0.5"
              >
                등록
              </button>
            </div>

            <div className="space-y-4">
              {comments.map((c, i) => (
                <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-700">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 오른쪽 사이드바 */}
        <div className="w-full lg:w-80 space-y-6">
          <h4 className="font-bold text-slate-400 px-2 uppercase tracking-widest text-sm">Recommended</h4>
          <RightCard title="Next Level UI" description="반응형 레이아웃 가이드" color="from-orange-400 to-rose-400" />
          <RightCard title="Tailwind Mastery" description="CSS 노하우 대공개" color="from-emerald-400 to-cyan-400" />
          <RightCard title="React Patterns" description="컴포넌트 설계의 정석" color="from-indigo-400 to-blue-400" />
        </div>

      </div>

      {/* 모달창 */}
      <CommentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={confirmComment}
        content={pendingComment}
      />
    </div>
  );
};

export default App;