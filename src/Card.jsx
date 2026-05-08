import React from "react";
import cat from "./cat.jpg";

const Card = ({title,description}) => {
    return (
        <div className="border-4 border-gray-300 rounded-[40px] p-4 h-90 w-100">
            <img src={cat} alt="cat" className="w-100 h-60 rounded-[40px]"/>
            <div className="font-bold text-2xl py-2">{title}</div>
            <div className="text-gray-400 text-xl">{description}</div>
        </div>
    )
}

export default Card;