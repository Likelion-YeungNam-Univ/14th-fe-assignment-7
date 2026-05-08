import React from 'react';
import image from './image.png'

const SidebarCard = ({ title, description }) => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-xl p-3 mb-4 w-full shadow-sm bg-white">
        <div className="w-60 h-40 overflow-hidden rounded-[40px]">
          <img 
            src={image}
            className="object-cover" 
          />
        </div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default SidebarCard;