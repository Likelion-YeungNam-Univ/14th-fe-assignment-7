import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import SideCard from "./components/SideCard";

import mainImg from "./assets/main.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

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
  };//시험기간 대학생 브이로그, 감성 브이로그 카페 투어, 편의점 음식 먹방, 헬스장 루틴 

  return (
    <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">
      <div className="flex-1">
        <img
          src={mainImg}
          alt="메인 이미지"
          className="h-96 w-full object-cover rounded-[40px]"
        />

        <div className="mt-6">
          <h1 className="text-5xl font-black">나홀로 제주 여행</h1>

          <p className="text-gray-400 text-2xl mt-2">
            제주도로 함께 떠나보아요~~
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
          image={img1}
          title="시험기간 대학생 브이로그"
          desc="과제와 공부로 바쁜 일상 기록용...."
        />

        <SideCard
          image={img2}
          title="편의점 음식 먹방"
          desc="신상 라면과 디저트"
        />

        <SideCard
          image={img3}
          title="저만의 헬스장 루틴 공개합니다"
          desc="상체 운동 중심으로 진행한 하루 운동 기록"
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl w-80 text-center">
            <h2 className="text-2xl font-bold mb-4">
              해당 댓글을 작성하시겠습니까?
            </h2>

            <p className="mb-6 text-gray-500">
              {comment}
            </p>

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