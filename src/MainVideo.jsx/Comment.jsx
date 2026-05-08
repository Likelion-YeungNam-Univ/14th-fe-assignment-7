import React from "react";
import CommentItem from "./CommentItem";
const Comment = () => {
  const [comments, setComments] = React.useState([]);
  const [comment, setComment] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setIsModalOpen(true); // 모달 열기
  };

  const handleConfirm = () => {
    setComments([...comments, comment]); // 댓글 추가
    setComment("");
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <>
      {/* 댓글 입력란 */}
      <form>
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          value={comment}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          등록
        </button>
      </form>

      {/* --- 모달 영역 --- */}
      {isModalOpen && (
        <>
          <div
            // 수정 제안 (20으로 변경)
            className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setIsModalOpen(false)} // 배경 클릭 시 닫기
          >
            <div className="bg-white w-100 p-10 rounded-lg shadow-2xl text-center z-50">
              <p className="text-xl font-medium mb-8">
                해당 댓글을 작성하시겠습니까?
              </p>

              <button
                onClick={handleConfirm}
                className="w-full bg-gray-50  font-bold hover:bg-gray-00 transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        </>
      )}
      {/* 댓글 입력됨 */}
      <ul>
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </ul>
    </>
  );
};

export default Comment;
