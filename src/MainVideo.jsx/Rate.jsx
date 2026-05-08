import React from "react";

const Rate = () => {
  const [like, setLike] = React.useState(0);
  const [dislike, setDislike] = React.useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };
  const handleDislike = () => {
    setDislike(dislike + 1);
  };
  return (
    <div className="flex gap-4">
      {/* 좋아요 */}
      <div>
        <button onClick={handleLike}>👍🏻</button>
        <span>{like}</span>
      </div>
      {/* 싫어요 */}
      <div>
        <button onClick={handleDislike}>👎🏻</button>
        <span>{dislike}</span>
      </div>
    </div>
  );
};

export default Rate;
