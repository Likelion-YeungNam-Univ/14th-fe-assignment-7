import React, { useState } from 'react';

export default function CommentSection({ comments, onAddRequest }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAddRequest(text);
    setText(""); // 입력창 초기화
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">댓글</h2>
      <div className="flex gap-2 mb-8">
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="댓글 내용을 입력하세요..." 
          className="flex-1 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black"
        />
        <button onClick={handleSubmit} className="bg-black text-white px-6 py-3 rounded-md font-bold">
          확인
        </button>
      </div>

      <div className="space-y-3">
        {comments.map((c, i) => (
          <div key={i} className="bg-white border p-4 rounded-md shadow-sm">{c}</div>
        ))}
      </div>
    </div>
  );
}