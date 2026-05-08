import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import SideCard from "./components/SideCard";

const App = () => {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  
  const [showModal, setShowModal] = useState(false);

  
  const addComment = () => {
    if (comment.trim() === "") return;
    setShowModal(true);
  };

 
  const confirmComment = () => {
    setComments([...comments, comment]);
    setComment("");
    setShowModal(false);
  };

  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addComment();
    }
  };

  return (
    <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">
      
     
      <div className="flex-1">

       
        <div className="bg-gray-300 h-96 rounded-[40px] flex flex-col items-center justify-center text-gray-800 font-semibold">
          <p className="text-3xl">더미 이미지</p>
          <p className="text-2xl">radius : 40px</p>
        </div>

       
        <div className="mt-6">
          <h1 className="text-5xl font-black">제목</h1>
          <p className="text-gray-400 text-2xl mt-2">
            재사용 가능한 컴포넌트 구조 연습
          </p>
        </div>

        
        <div className="flex gap-8 mt-6">
          
          <button
            onClick={() => setLike(like + 1)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow"
          >
            <FaThumbsUp size={25} />
            <span>{like}</span>
          </button>

          <button
            onClick={() => setDislike(dislike + 1)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow"
          >
            <FaThumbsDown size={25} />
            <span>{dislike}</span>
          </button>
        </div>

        
        <div className="mt-12">
          <h2 className="text-4xl font-black mb-4">댓글</h2>

          
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="댓글 입력..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={handleKeyDown}
              className="border w-full p-3 rounded-xl"
            />

            <button
              onClick={addComment}
              className="bg-black text-white px-5 rounded-xl"
            >
              확인
            </button>
          </div>

         
          <div className="mt-6 flex flex-col gap-3">
            {comments.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="flex flex-col gap-4">
        <SideCard
          title="컴포넌트 제목"
          desc="컴포넌트를 재사용하여 효율적으로 UI를 구성할 수 있다. "
        />

        <SideCard
          title="컴포넌트 제목"
          desc="간단한 카드 형태로 정보를 표현한 컴포넌트이다."
        />

        <SideCard
          title="컴포넌트 제목"
          desc="Tailwind CSS를 활용해 스타일을 적용하였다"
        />
      </div>

      
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          
          <div className="bg-white p-8 rounded-2xl w-80 text-center">
            <h2 className="text-2xl font-bold mb-4">
              해당 댓글을 작성하시겠습니까?
            </h2>

            <p className="mb-6 text-gray-500">{comment}</p>

            <button
              onClick={confirmComment}
              className="bg-black text-white px-6 py-2 rounded-xl"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;