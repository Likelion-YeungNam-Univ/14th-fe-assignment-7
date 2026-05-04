import React, { useState } from "react";
import Modal from "../common/Modal";

const Comment = () => {
  const [inputText, setInputText] = useState(""); // 입력중인 텍스트
  const [comments, setComments] = useState([]); // 저장된 배열
  const [isConfirm, setIsConfirm] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      setIsConfirm(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, inputText]);
    setInputText("");
    setIsConfirm(false);
  };

  return (
    <div className="mt-4">
      <form
        onSubmit={handleAdd}
        className="flex justify-center border border-gray-300 rounded-2xl gap-3 py-6 mb-5"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="댓글 입력해주세요"
          className="flex-1 outline-none bg-transparent px-2"
        />
        <button
          type="submit"
          className="outline-none rounded-[40px] px-6 cursor-pointer"
        >
          확인
        </button>
      </form>
      <div className="flex-col gap-2 bg-gray-100 rounded-xl px-4">
        {comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-200 py-3">
            {comment}
          </div>
        ))}
      </div>

      <Modal
        isOpen={isConfirm}
        onClose={() => setIsConfirm(false)}
        onConfirm={handleSubmit}
      />
    </div>
  );
};

export default Comment;
