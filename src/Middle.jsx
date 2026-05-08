import React from 'react';
import img0 from './assets/middle.png'; 

export default function Middle({ like, dislike, onLike, onDislike }) {
  return (
    <div className="mb-12">
      
      {/*과제 보충 - radius-40px로 조정*/}
      <div className="w-full h-[450px] rounded-[40px] overflow-hidden mb-6 shadow-md bg-gray-200">
        <img 
          src={img0} 
          alt="Main 사진" 
          className="w-full h-full object-cover" // object-cover가 있어야 박스에 꽉 참.
        />
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-5xl font-black mb-3">양파쿵야의 실체...</h1>
          <p className="text-xl text-gray-300">사진 자체가 화질이 깨져서 높이 사이즈를 조절해봐도 의미가 없네요...ㅠ</p>
        </div>
        
        <div className="flex gap-4 mt-4">
          <button onClick={onLike} className="flex flex-col items-center gap-1 hover:scale-105 transition">
            <span className="text-3xl">👍</span>
            <span className="font-bold text-sm">좋아요 {like}</span>
          </button>
          <button onClick={onDislike} className="flex flex-col items-center gap-1 hover:scale-105 transition">
            <span className="text-3xl">👎</span>
            <span className="font-bold text-sm">싫어요 {dislike}</span>
          </button>
        </div>
      </div>
    </div>
  );
}