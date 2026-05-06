import React, { useState } from "react"; 
import Item from "./CommentItem"; 

const Comment_List = () => { 
  const [comments, setComment] = useState([]); 
  const [inputText, setText] = useState("");
  const [ismodalopen, setModalopen] = useState(false);

  const handleComment = (e) => {
    setText(e.target.value);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setModalopen(true);
  }

  const confirm = () => {

    setComment((prev) => [{id: Date.now(), text: inputText}, ...prev] );
    setText("");

    setModalopen(false);
  }


  return ( 
    <div> 
      <div className="text-3xl font-black">댓글</div> 
      <form className="flex gap-5" onSubmit={handleAdd}> 
        <input placeholder="남길 댓글을 입력하세요." value={inputText} onChange={handleComment}/> 
        <button type="submit" className="p-2 w-auto h-auto rounded-2xl border-1 border-gray-300">댓글 달기</button> 
      </form> 

      <ul className="pt-3 flex flex-col gap-2"> 
        {comments.map((comment) => ( 
          <Item key= {comment.id} comment={comment} /> 
        ))}
      </ul> 

      {ismodalopen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/20">
            <div className="flex min-w-[520px] min-h-[200px] flex-col gap-5 items-center justify-center bg-white">
                <div>해당 댓글을 작성하시겠습니까?</div>

                <button onClick={confirm} className="w-auto h-auto bg-gray-300 p-3 text-black"> 확인 </button>
            </div>

            

        </div>
      )
      }
    </div> 
  ); 
}; 

export default Comment_List