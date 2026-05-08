import React, { useState } from 'react';
import RightCard from './RightCard';
import CommentModal from './CommetModal.jsx';

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
          {/* 메인 비주얼 박스 */}
          <div className="relative group overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 h-[450px] rounded-[40px] shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-[1.01]">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
            <div className="relative text-center text-white space-y-2">
              <h2 className="text-4xl font-black tracking-tight">PREVIEW IMAGE</h2>
              <p className="text-white/70 font-mono tracking-widest text-sm uppercase">Radius: 40px</p>
            </div>
          </div>

          {/* 제목 및 인터랙션 바 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-2">제목 머하징</h1>
              <p className="text-slate-400 text-lg">설명은 또 머하징.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLikes(likes + 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-50 text-blue-600 font-bold hover:bg-blue-100 transition-all active:scale-95"
              >
                <span className="text-xl">👍</span> {likes}
              </button>
              <button 
                onClick={() => setDislikes(dislikes + 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-rose-50 text-rose-600 font-bold hover:bg-rose-100 transition-all active:scale-95"
              >
                <span className="text-xl">👎</span> {dislikes}
              </button>
            </div>
          </div>

          {/* 댓글 섹션 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              댓글 <span className="text-blue-500 text-sm bg-blue-50 px-2 py-1 rounded-md">{comments.length}</span>
            </h3>
            
            <div className="flex gap-3 mb-8">
              <input 
                type="text" 
                className="flex-1 bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-400 transition-all outline-none text-slate-700 placeholder:text-slate-300"
                placeholder="따뜻한 댓글을 남겨주세요..."
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
                <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 animate-fadeIn">
                  <p className="text-slate-700">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 오른쪽 사이드바 */}
        <div className="w-full lg:w-80 space-y-6">
          <h4 className="text-lg font-bold text-slate-400 px-2 uppercase tracking-widest text-sm">Recommended</h4>
          <RightCard title="Next Level UI" description="반응형 레이아웃 가이드" color="from-orange-400 to-rose-400" />
          <RightCard title="Tailwind Mastery" description="CSS 노하우 대공개" color="from-emerald-400 to-cyan-400" />
          <RightCard title="React Patterns" description="컴포넌트 설계의 정석" color="from-indigo-400 to-blue-400" />
        </div>
      </div>

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