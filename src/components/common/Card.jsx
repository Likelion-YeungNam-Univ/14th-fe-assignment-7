import React from "react";
import dummyImage from "../../images/cat.jpg";

const Card = ({ title, description }) => {
  return (
    <div className="border border-gray-300 rounded-xl flex flex-col w-full p-2">
      <div className="w-full overflow-hidden">
        <img
          src={dummyImage}
          alt="더미 이미지2"
          className="w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1 overflow-hidden">
        <h4 className="font-bold truncate">{title}</h4>
        <p className="text-[10px] break-all line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
