import React, { useState } from 'react';

const VideoContent = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => setLikeCount((prev) => prev + 1);
  const handleDislike = () => setDislikeCount((prev) => prev + 1);

  return (
    <div className="flex flex-col w-[900px] h-[480px] px-12">
      <img
        src="/dummy.png"
        alt="dummy image"
        className="w-[800px] h-[350px] rounded-[40px] mx-auto"
      />
      <div className="flex justify-between mt-4">
        <h1 className="text-[32px] font-bold">This is title.</h1>
        <div className="flex items-center justify-evenly w-[250px]">
          <button onClick={handleLike} className="cursor-pointer">
            <img src="/like.png" className="w-[32px]" />
          </button>
          <p className="w-[40px] text-center">{likeCount}</p>
          <button onClick={handleDislike} className="cursor-pointer">
            <img src="/dislike.png" className="w-[32px]" />
          </button>
          <p className="w-[40px] text-center">{dislikeCount}</p>
        </div>
      </div>

      <p className="text-16px text-gray-400">This is description...</p>
    </div>
  );
};

export default VideoContent;
