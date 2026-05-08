import React, { useState } from 'react';

const RightCard = ({ title, description }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white mb-4 shadow-sm">
      <div className="w-full h-[120px] bg-[#d9d9d9] flex items-center justify-center mb-4 text-sm text-gray-700">
        더미 이미지2
      </div>
      <div className="font-bold text-sm mb-1">{title}</div>
      <div className="text-xs text-gray-400">{description}</div>
    </div>
  );
};

export default function App() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickLike = () => setLike(like + 1);
  const clickDislike = () => setDislike(dislike + 1);

  const openModal = () => {
    if (inputText.trim() === "") {
      alert("댓글을 입력해주세요!");
      return;
    }
    setIsModalOpen(true);
  };

  const addComment = () => {
    setComments([...comments, inputText]); 
    setInputText(""); 
    setIsModalOpen(false); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-8 relative">
      
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white px-10 py-12 flex flex-col items-center shadow-lg w-[450px]">
            <p className="text-xl mb-8">해당 댓글을 작성하시겠습니까?</p>
            <button 
              onClick={addComment}
              className="bg-[#d9d9d9] text-black px-8 py-2 text-lg hover:bg-gray-300 transition"
            >
              확인
            </button>
          </div>
        </div>
      )}

      <div className="max-w-[1200px] w-full flex gap-8">
        
        <div className="flex-1">
          <div className="w-full h-[400px] bg-[#d9d9d9] rounded-[40px] flex flex-col items-center justify-center mb-6">
            <span className="text-3xl text-gray-800">더미 이미지</span>
            <span className="text-3xl text-gray-800">radius : 40px</span>
          </div>

          <div className="flex justify-between items-start mb-16 mt-4">
            <div>
              <h1 className="text-5xl font-black mb-3">제목</h1>
              <p className="text-xl text-gray-300">설명</p>
            </div>
            
            <div className="flex gap-4 mt-4">
              <button onClick={clickLike} className="flex items-center gap-1 hover:opacity-70">
                <span className="text-3xl">👍</span>
                <span className="font-bold text-sm">좋아요 개수 {like}</span>
              </button>
              
              <button onClick={clickDislike} className="flex items-center gap-1 hover:opacity-70">
                <span className="text-3xl">👎</span>
                <span className="font-bold text-sm">싫어요 개수 {dislike}</span>
              </button>
            </div>
          </div>

        
          <div>
            <h2 className="text-3xl font-bold mb-6">댓글</h2>
            
            <div className="flex gap-2 mb-8">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openModal(); 
                }}
                placeholder="댓글을 입력하세요..." 
                className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
              />
              <button 
                onClick={openModal} 
                className="bg-black text-white px-6 py-3 rounded-md font-bold whitespace-nowrap hover:bg-gray-800"
              >
                확인
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {comments.map((comment, index) => (
                <div key={index} className="bg-white border border-gray-200 p-4 rounded-md shadow-sm">
                  {comment}
                </div>
              ))}
              {comments.length === 0 && (
                <div className="text-gray-400 text-sm">아직 작성된 댓글이 없습니다.</div>
              )}
            </div>
          </div>
        </div>

      
        <div className="w-[300px] flex flex-col">
          <RightCard title="컴포넌트 제목 1" description="설명1" />
          <RightCard title="컴포넌트 제목 2" description="설명2" />
          <RightCard title="컴포넌트 제목 3" description="설명3" />
        </div>
        
      </div>
    </div>
  );
}