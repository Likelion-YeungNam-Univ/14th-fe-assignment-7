import React, { useState } from "react";

const LikeButton = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    const handleLikeIncrease = () => {
        setLikeCount((prev) => prev + 1);
    }

    const handleDislikeIncrease = () => {
        setDislikeCount((prev) => prev + 1);
    }

    return (
        <div className="flex items-center gap-4">
            <button
                onClick={handleLikeIncrease}
                className="cursor-pointer rounded-2xl border bg-white px-4 py-2 text-2xl">
                👍
            </button>
            <p className="font-bold">좋아요 개수 {likeCount}</p>

            <button
                onClick={handleDislikeIncrease}
                className="cursor-pointer rounded-2xl border bg-white px-4 py-2 text-2xl">
                👎
            </button>
            <p className="font-bold">싫어요 개수 {dislikeCount}</p>
        </div>
    )
}

export default LikeButton