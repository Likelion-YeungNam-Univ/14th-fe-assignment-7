import React, { useState } from "react";
import Comment from "./Comment";
import LikeButton from "./LikeButton";
import Modal from "./Modal";
import SideCard from "./SideCard";
import image from "./img.jpg";

const App = () => {
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardList = [
    {
      id: 1,
      image: image,
      title: "이미지 1",
      description: "설명~~~",
    },
    {
      id: 2,
      image: image,
      title: "이미지 2",
      description: "설명~~~",
    },
    {
      id: 3,
      image: image,
      title: "이미지 3",
      description: "설명~~~",
    },
  ];

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim() === "") {
      return;
    }

    setIsModalOpen(true);
  };

  const handleConfirmComment = () => {
    setComments((prev) => [...prev, commentInput]);
    setCommentInput("");
    setIsModalOpen(false);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleCommentSubmit();
    }
  };

  return (
    <div className="flex min-h-screen gap-8 px-9 py-12">
      <main className="flex-1">
        <div className="h-107.5 w-full overflow-hidden rounded-[40px] bg-gray-300">
          <img src={image} alt="메인 이미지" className="h-full w-full object-cover" />
        </div>

        <div className="mt-7 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold">제목</h1>
            <p className="mt-2 text-2xl text-gray-400">
              설명~~~~~
            </p>
          </div>

          <LikeButton />
        </div>

        <Comment
          commentInput={commentInput}
          comments={comments}
          onChangeComment={handleCommentChange}
          onSubmitComment={handleCommentSubmit}
          onEnterKey={handleEnterKey} />
      </main>

      <aside className="flex w-96 flex-col gap-6">
        {cardList.map((card) => (
          <SideCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </aside>

      {isModalOpen && <Modal onConfirm={handleConfirmComment} />}
    </div>
  )
}

export default App