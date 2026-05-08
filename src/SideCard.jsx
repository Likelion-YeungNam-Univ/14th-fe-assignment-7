import React from "react";

const SideCard = ({ image, title, description }) => {
    return (
        <div className="w-full rounded-xl border border-gray-300 p-4">
            <div className="h-36 w-full overflow-hidden bg-gray-300">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>

            <h3 className="mt-4 text-base font-bold">{title}</h3>
            <p className="mt-1 text-sm text-gray-400">{description}</p>
        </div>
    )
}

export default SideCard