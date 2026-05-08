import React from 'react';
import SidebarCard from './SidebarCard';
import LikeSection from './LikeSection';
import Comment from './Comment';
import image from './image.png'; 

const MainPage = () => {
  return (
    <div className="flex p-10 gap-10 max-w-6xl mx-auto bg-white min-h-screen">
      <div className="flex-1">
        <div className="w-full h-80 mb-6 overflow-hidden rounded-[40px]">
          <img 
            src={image}
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-5xl font-bold mb-2">곰돌이</h1>
            <p className="text-gray-400">BEAR</p>
          </div>
          <LikeSection />
        </div>
        <Comment />
      </div>

      <div className="w-64">
        <SidebarCard title="5/18" description="아이디어톤" />
        <SidebarCard title="5/26~5/28" description="대동제" />
        <SidebarCard title="6/4" description="MY BIRTHDAY" />
      </div>
    </div>
  );
};

export default MainPage;