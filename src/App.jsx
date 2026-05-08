import React, { useState } from 'react';
import Middle from './Middle'; 
import CommentSection from './CommentSection';
import RightSidebar from './RightSidebar';

export default function App() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempComment, setTempComment] = useState("");

  const confirmComment = () => {
    setComments([...comments, tempComment]);
    setTempComment("");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-8 relative">
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white px-10 py-12 flex flex-col items-center shadow-lg w-[450px] rounded-lg">
            <p className="text-xl mb-8">해당 댓글을 작성하시겠습니까?</p>
            <button 
              onClick={confirmComment}
              className="bg-[#d9d9d9] text-black px-10 py-2 text-lg hover:bg-gray-300 transition"
            >
              확인
            </button>
          </div>
        </div>
      )}

      <div className="max-w-[1200px] w-full flex gap-8">
        <div className="flex-1">
          <Middle 
            like={like} 
            dislike={dislike} 
            onLike={() => setLike(like + 1)} 
            onDislike={() => setDislike(dislike + 1)} 
          />
          
          <CommentSection 
            comments={comments} 
            onAddRequest={(text) => {
              setTempComment(text);
              setIsModalOpen(true);
            }} 
          />
        </div>

        <RightSidebar />
      </div>
    </div>
  );
}