import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <li className="flex w-[700px] py-2 justify-between border-b-2 border-gray-300">
      <span>{comment.text}</span>
      <span>{comment.createdAt}</span>
    </li>
  );
};

export default CommentItem;
