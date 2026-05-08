import React, { useState } from 'react';
import RightCard from './RightCard';
import CommentModal from './CommetModal.jsx';

const App = () => {
  // 좋아요, 싫어요 상태 관리
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // 댓글 관련 상태 관리
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingComment, setPendingComment] = useState('');

  // 댓글 등록 핸들러 (엔터/버튼 클릭)
  const handleCommentSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (!inputValue.trim()) return;
      setPendingComment(inputValue);
      setIsModalOpen(true);
    }
  };

  // 모달 확인 클릭 시 실제 댓글 추가
  const confirmComment = () => {
    setComments([...comments, pendingComment]);
    setInputValue('');
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-8">
      {/* 왼쪽 메인 영역 */}
      <div className="flex-1">
        {/* 메인 이미지 */}
        <div className="w-full h-96 bg-gray-300 rounded-[40px] flex items-center justify-center mb-6">
          <div className="text-center text-gray-600 font-bold">
            <p className="text-2xl">더미 이미지</p>
            <p>radius : 40px</p>
          </div>
        </div>

        {/* 제목 및 좋아요 영역 */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">제목</h1>
            <p className="text-gray-400">설명~~~~~ 아무거나</p>
          </div>
          
          {/* 좋아요 / 싫어요 기능 */}
          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setLikes(likes + 1)}>
              <span className="text-3xl group-hover:scale-110 transition-transform">👍</span>
              <span className="font-medium text-gray-700">좋아요 {likes}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setDislikes(dislikes + 1)}>
              <span className="text-3xl group-hover:scale-110 transition-transform">👎</span>
              <span className="font-medium text-gray-700">싫어요 {dislikes}</span>
            </div>
          </div>
        </div>

        {/* 댓글 작성 영역 */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-bold mb-4">댓글</h2>
          <div className="flex gap-2 mb-6">
            <input 
              type="text" 
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="댓글을 입력하세요..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleCommentSubmit}
            />
            <button 
              onClick={handleCommentSubmit}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              확인
            </button>
          </div>

          {/* 댓글 리스트 */}
          <ul className="space-y-3">
            {comments.map((comment, index) => (
              <li key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                {comment}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 오른쪽 사이드바 영역 */}
      <div className="w-full md:w-80 space-y-4">
        <RightCard title="추천 콘텐츠 1" description="첫 번째 추천 카드 설명입니다." />
        <RightCard title="인기 게시글" description="많은 사람들이 본 게시글입니다." />
        <RightCard title="관련 컴포넌트" description="Tailwind CSS로 만든 카드입니다." />
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