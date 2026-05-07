import React from 'react';

const Card = (props) => {
  return (
    <div className="flex flex-col w-[300px] h-[200px] rounded-[20px] border-gray-300 border-2">
      <img
        src={props.image}
        alt="dummy image"
        className="w-[280px] h-[120px] mx-auto my-4 rounded-[10px]"
      />
      <h3 className="ml-4 font-bold">{props.title}</h3>
      <p className="ml-4 text-gray-400 text-[10px]">{props.description}</p>
    </div>
  );
};

export default Card;
