const CommentModal = ({ isOpen, onClose, onConfirm, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl animate-scaleIn">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto text-3xl">
            💬
          </div>
          <h3 className="text-2xl font-black text-slate-800">댓글을 등록할까요?</h3>
          <div className="bg-slate-50 p-4 rounded-2xl text-slate-600 italic border border-slate-100">
            "{content}"
          </div>
        </div>
        
        <div className="flex gap-3 mt-8">
          <button onClick={onClose} className="flex-1 py-4 text-slate-400 font-bold hover:text-slate-600 transition-colors">
            취소
          </button>
          <button 
            onClick={onConfirm} 
            className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;