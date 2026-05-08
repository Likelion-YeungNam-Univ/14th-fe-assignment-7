import React from "react";

const SideCard = ({ image, title, desc }) => {
  return (
    <div className="bg-white border rounded-2xl p-4 w-60 shadow">
      <img
        src={image}
        alt={title}
        className="h-28 w-full object-cover rounded-xl"
      />

      <div className="mt-4">
        <h3 className="font-bold text-lg">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SideCard;