import React, { use } from "react";
import { useState } from "react";
import catImg from "./cat.jpg";
import Card from "./Card.jsx";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const Home = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const [comments, setComments] = useState([]);
    const [inputValue,setInputValue] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCommentSubmit = (e) => {
        if(e.key=='Enter' || e.type==='click'){
            if(inputValue.trim()){
                setIsModalOpen(true);
            }
        }
    };
    
    const confirmComment = () => {
        setComments([...comments, inputValue]);
        setInputValue("");
        setIsModalOpen(false);
    };

    return (
        <div className="flex justify-between gap-x-10">
            <div className="flex flex-col gap-y-4">
                <img src={catImg} alt="cat" className="w-250 h-200 rounded-[40px] " />
                <div className="flex justify-between">
                    <div className="text-6xl font-bold">귀여운 고양이</div>
                    <div className="flex gap-x-4">
                        <button onClick={()=>setLikes(likes+1)}
                            className="hover:text-black transition-colors">
                                <AiOutlineLike size={50} />
                            </button>
                            <span className="font-bold p-4 text-3xl">{likes}</span>
                        <button onClick={()=>setDislikes(dislikes+1)}
                            className="hover:text-black transition-colors">
                                <AiOutlineDislike size={50} />
                            </button>
                            <span className="font-bold p-4 text-3xl">{dislikes}</span>
                    </div>
                </div>
                <div className="text-gray-400 text-2xl">
                    고양이는 정말 귀엽습니다. 여러분도 고양이를 좋아하시나요?
                </div>
                <div className="font-bold text-4xl py-7">댓글</div>
                <div className="flex gap-x-4 mb-10">
                    <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleCommentSubmit}
                    className="bg-gray-100 px-10 py-4 rounded-2xl text-2xl font-bold hover:bg-gray-300 transition-colors"
                    placeholder="댓글을 입력하세요"/>
                    <button onClick={handleCommentSubmit} className="bg-gray-300 px-10 py-4 rounded-2xl text-2xl font-bold hover:bg-gray-600 transition-colors">
                        확인
                    </button>
                </div>
                    <div className="flex flex-col gap-y-4">
                    {comments.map((comment, index) => (
                        <div key={index} className="p-6 border-b border-gray-100 text-2xl">
                            {comment}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <Card title="고양이 한마리" description="고양이가 못생겼어요"> </Card>
                <Card title="고양이 두마리" description="고양이가 웃기게 생겼어요"> </Card>
                <Card title="고양이 세마리" description="고양이가 잘생겼어요"> </Card>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white p-12 shadow-2xl text-center">
                        <h2 className="text-3xl font-bold mb-10">해당 댓글을 작성하시겠습니까?</h2>
                        <button 
                            onClick={confirmComment}
                            className="bg-gray-200 px-12 py-3 text-2xl rounded-md hover:bg-gray-300"
                        >
                            확인
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home;