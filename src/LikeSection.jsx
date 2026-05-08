import React, { useState } from 'react';

const LikeSection = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="flex gap-6 p-5">
      <button onClick={() => setLikes(likes + 1)} className="text-center hover:scale-110">
        <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
        fill={"currentColor"} viewBox={"0 0 24 24"}>
        <path d="M20 8h-5.61l1.12-3.37c.2-.61.1-1.28-.27-1.8-.38-.52-.98-.83-1.62-.83h-1.61c-.3 0-.58.13-.77.36L6.54 8H4.01c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13.31a2 2 0 0 0 1.87-1.3l2.76-7.35c.04-.11.06-.23.06-.35v-2c0-1.1-.9-2-2-2ZM6 19H4v-9h2zm14-7.18L17.31 19H8V9.36L12.47 4h1.15l-1.56 4.68a1.01 1.01 0 0 0 .95 1.32h7v1.82Z"></path>
        </svg>
        <span className="text-m">좋아요 {likes}</span>
      </button>
      <button onClick={() => setDislikes(dislikes + 1)} className="text-center hover:scale-110">
        <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
        fill={"currentColor"} viewBox={"0 0 24 24"}>
        <path d="M21 3h-2.42c-.94 0-1.87-.15-2.77-.45-1.1-.37-2.24-.55-3.4-.55H6.82C5.26 2 3.99 3.27 3.99 4.83c0 .46.11.9.31 1.28a2.83 2.83 0 0 0-1 3.67c-.79.5-1.31 1.39-1.31 2.39 0 1.56 1.27 2.83 2.83 2.83h4.02c.32 0 .61.14.8.4.19.25.25.57.16.88l-.54 1.9c-.26.91-.08 1.87.49 2.63S11.19 22 12.15 22h1.35c.45 0 .84-.3.96-.73l1.15-4.01a3.99 3.99 0 0 1 3.13-2.84l2.44-.44c.48-.09.82-.5.82-.98V4c0-.55-.45-1-1-1m-1 9.17-1.62.29a5.98 5.98 0 0 0-4.7 4.25L12.74 20h-.59c-.32 0-.61-.14-.8-.4a.99.99 0 0 1-.16-.88l.54-1.9c.26-.91.08-1.87-.49-2.63S9.8 13 8.84 13H4.82c-.46 0-.83-.37-.83-.83s.37-.83.83-.83h1.17c.55 0 1-.45 1-1s-.45-1-1-1h-.17c-.46 0-.83-.37-.83-.83s.37-.83.83-.83h1.17c.55 0 1-.45 1-1s-.45-1-1-1h-.17c-.46 0-.83-.37-.83-.83s.37-.83.83-.83h5.59c.94 0 1.87.15 2.77.45 1.1.37 2.24.55 3.4.55H20v7.17Z"></path>
        </svg>
        <span className="text-md">싫어요 {dislikes}</span>
      </button>
    </div>
  );
};

export default LikeSection;