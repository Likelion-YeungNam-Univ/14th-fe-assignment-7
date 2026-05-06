import React from "react"; 

const CommentItem = ({ comment }) => { 
  return ( 
    <li className="w-auto h-auto p-4 rounded-2xl border-1 border-gray-200"> 
      <span>{comment.text}</span> 
    </li> 
  ); 
}; 

export default CommentItem