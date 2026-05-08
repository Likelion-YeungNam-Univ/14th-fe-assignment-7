import React from "react";

const SideCard = ({ title, desc }) => {
  return (
    <div className="bg-white border rounded-2xl p-4 w-60 shadow">
      
      {/* 이미지 */}
      <div className="bg-gray-300 h-28 rounded-xl flex items-center justify-center font-semibold text-gray-700">
        더미 이미지
      </div>

      {/* 내용 */}
      <div className="mt-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SideCard;