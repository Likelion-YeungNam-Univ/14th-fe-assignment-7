import React, { useState } from 'react';
import CommentItem from './CommentItem';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setIsModalOpen(true);
  };

  const confirmAdd = () => {
    const now = new Date(Date.now() + 9 * 60 * 60 * 1000)
      .toISOString()
      .split('.')[0]
      .replace('T', '-')
      .replace(/:/g, '-');

    const newComment = {
      id: Date.now(),
      text: inputText,
      createdAt: now,
    };

    setComments((prev) => [newComment, ...prev]);
    setInputText('');
    setIsModalOpen(false);
  };

  return (
    <div className="ml-14 min-h-[200px] relative">
      <p className="text-[20px] font-bold">댓글</p>

      {/* 폼 제출 시 handleSubmitClick 실행 */}
      <form onSubmit={handleSubmitClick} className="flex flex-row gap-4 mt-2">
        <input
          type="text"
          className="w-[620px] pl-2 border-1 border-gray-300 rounded-[5px]"
          placeholder="댓글을 입력하세요.."
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-gray-300 p-1 rounded-[5px] hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer hover:shadow"
        >
          댓글 달기
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-[10px] shadow-xl w-[300px] text-center">
            <p className="text-lg font-medium mb-6">댓글을 작성하시겠습니까?</p>

            <div className="flex justify-center gap-3">
              <button
                onClick={confirmAdd}
                className="bg-black text-white px-5 py-2 rounded-[5px] hover:bg-gray-800 transition-colors"
              >
                확인
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 text-gray-700 px-5 py-2 rounded-[5px] hover:bg-gray-300 transition-colors"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      <ul className="mt-4">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
