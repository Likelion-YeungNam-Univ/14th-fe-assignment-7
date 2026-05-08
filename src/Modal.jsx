import React from "react";

const Modal = ({ onConfirm }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25">
            <div className="flex h-52 w-130 flex-col items-center justify-center bg-white">
                <p className="mb-8 text-2xl font-semibold">
                    해당 댓글을 작성하시겠습니까?
                </p>

                <button
                    onClick={onConfirm}
                    className="w-40 bg-gray-300 py-3 text-xl font-medium">
                    확인
                </button>
            </div>
        </div>
    )
}

export default Modal