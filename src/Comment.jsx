import React, { useState } from 'react';

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComplete = () => {
    if (inputText.trim()) {
      setComments([...comments, inputText]);
      setInputText("");
      setIsModalOpen(false);
    }
  };

  return (
    <div className="pt-8">
      <h3 className="text-2xl font-bold mb-4">댓글</h3>
      <div className="flex gap-2 mb-6">
        <input 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="댓글을 입력하세요"
          className="flex-1 border-b p-2 outline-none"
        />
        <button
          onClick={() => inputText && setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">
          등록
        </button>
      </div>

      <ul>
        {comments.map((item, index) => (
          <li key={index} className="border-b py-3 text-gray-700">{item}</li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl text-center shadow-xl">
            <p className="text-lg font-bold mb-6">해당 댓글을 작성하시겠습니까?</p>
            <div className="flex justify-center gap-3">
              <button onClick={handleComplete} className="bg-blue-500 text-white px-5 py-2 rounded-lg font-bold">확인</button>
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-100 px-5 py-2 rounded-lg font-bold">취소</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;