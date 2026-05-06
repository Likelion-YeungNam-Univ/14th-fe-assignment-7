import React from "react";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    // 배경 전체 덮기 배경 반투명하게 주기
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-[400px] h-[200px] flex flex-col items-center justify-center rounded-[40px]"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xl font-bold p-4 mb-5">
          해당 댓글을 작성하시겠습니까??
        </p>
        <button
          onClick={onConfirm}
          className="bg-gray-200 text-black text-xl px-15 py-2"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Modal;
