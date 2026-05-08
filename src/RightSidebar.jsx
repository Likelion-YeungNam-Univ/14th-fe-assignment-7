import React from 'react';

import img1 from './assets/rightsidebar1.png'; 
import img2 from './assets/rightsidebar2.png'; 
import img3 from './assets/rightsidebar3.png'; 


const Card = ({ imgPath, title, desc }) => (
  <div className="border border-gray-200 rounded-xl p-4 bg-white mb-4 shadow-sm overflow-hidden">
    <div className="w-full h-[120px] bg-gray-100 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
      {imgPath ? (
        <img 
          src={imgPath} 
          alt="카드 이미지" 
          className="w-full h-full object-cover" // object-cover가 있어야 사진이 안 찌그러짐!
        />
      ) : (
        <span className></span>
      )}
    </div>
    <div className="font-bold text-sm mb-1">{title}</div>
    <div className="text-xs text-gray-400 leading-relaxed">{desc}</div>
  </div>
);

export default function RightSidebar() {
  return (
    <div className="w-[200px] h-[200px] shrink-0">
      <Card 
        imgPath={img1} 
        title="놀람 쿵야" 
        desc="(충격) 쿵야가 놀란 이유?" 
      />
      <Card 
        imgPath={img2} 
        title="뽀뽀 쿵야 사진 TOP 3" 
        desc="귀여운 사진 best 3컷 밀착 취재" 
      />
      <Card 
        imgPath={img3} 
        title="초보 개발자를 위한 쿵야의 팁" 
        desc="'컴포넌트 분리부터 시작'" 
      />
    </div>
  );
}