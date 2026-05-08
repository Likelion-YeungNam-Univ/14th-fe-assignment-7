import React from "react";

const Comment = ({ commentInput, comments, onChangeComment, onSubmitComment, onEnterKey, }) => {
    return (
        <section className="mt-12">
            <h2 className="text-4xl font-bold">댓글</h2>

            <div className="mt-5 flex gap-2">
                <input
                    type="text"
                    placeholder="댓글을 입력하세요"
                    value={commentInput}
                    onChange={onChangeComment}
                    onKeyDown={onEnterKey}
                    className="w-80 rounded-md border border-gray-300 px-4 py-3 outline-none" />

                <button
                    onClick={onSubmitComment}
                    className="bg-gray-300 px-6 py-3 font-semibold">
                    확인
                </button>
            </div>

            <ul className="mt-5 space-y-2 text-lg">
                {comments.map((comment, index) => (
                    <li key={index} className="rounded-md bg-gray-100 px-4 py-2">
                        {comment}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Comment