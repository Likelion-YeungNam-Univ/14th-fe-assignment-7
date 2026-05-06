import React, { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(0);
  const [hate, setHate] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleHate = () => {
    setHate(hate + 1);
  };

  return (
    <div className="flex gap-5">
      <button
        onClick={handleLike}
        className="flex items-center gap-1 font-bold outline-none "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 transition-all hover:fill-red-300 active:fill-red-800 cursor-pointer" /* 아이콘 크기 조절 */
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V2.75a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.5c-.083.205-.173.405-.27.602-.197.4-.61.648-1.05.648H3.375c-.621 0-1.125-.504-1.125-1.125V10.125c0-.621.504-1.125 1.125-1.125h1.208c.44 0 .853.248 1.05.648.11.22.213.444.309.674m0 8.173v-8.173"
          />
        </svg>
        <span>{like}</span>
      </button>

      <button
        onClick={handleHate}
        className="flex items-center gap-1 font-bold outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 transition-all hover:fill-blue-300 active:fill-blue-800 cursor-pointer scale-y-[-1]" /* 아이콘 크기 조절 */
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V2.75a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.5c-.083.205-.173.405-.27.602-.197.4-.61.648-1.05.648H3.375c-.621 0-1.125-.504-1.125-1.125V10.125c0-.621.504-1.125 1.125-1.125h1.208c.44 0 .853.248 1.05.648.11.22.213.444.309.674m0 8.173v-8.173"
          />
        </svg>
        <span>{hate}</span>
      </button>
    </div>
  );
};

export default Like;
