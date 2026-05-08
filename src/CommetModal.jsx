const CommentModal = ({ isOpen, onClose, onConfirm, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full mx-4">
        <h3 className="text-xl font-bold mb-4 text-center">댓글을 등록하시겠습니까?</h3>
        <p className="text-gray-600 mb-6 bg-gray-50 p-3 rounded-lg border italic">
          "{content}"
        </p>
        <div className="flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 py-2 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            취소
          </button>
          <button 
            onClick={onConfirm}
            className="flex-1 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;