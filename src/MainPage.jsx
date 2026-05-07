import React, { useState } from 'react'
import Card from './Card'
import dummyImage from './assets/cat.jpg'
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const cards = [
  { id: 1, title: "컴포넌트 제목 1", description: "설명 1" },
  { id: 2, title: "컴포넌트 제목 2", description: "설명 2" },
  { id: 3, title: "컴포넌트 제목 3", description: "설명 3" },
]

const MainPage = () => {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [commentInput, setCommentInput] = useState('')
  const [commentList, setCommentList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [pendingComment, setPendingComment] = useState('')

  const handleCommentSubmit = () => {
    if (!commentInput.trim()) return
    setPendingComment(commentInput.trim())
    setShowModal(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCommentSubmit()
  }

  const handleConfirm = () => {
    setCommentList(prev => [...prev, pendingComment])
    setCommentInput('')
    setPendingComment('')
    setShowModal(false)
  }

  const handleCancel = () => {
    setPendingComment('')
    setShowModal(false)
  }

  return (
    <div className='flex h-screen p-6 gap-6 overflow-hidden bg-gray-50'>
      <div className='w-3/4 flex flex-col gap-4 overflow-y-auto'>
        <div className='w-full overflow-hidden rounded-3xl'>
          <img src={dummyImage} alt="메인 이미지" className='w-full object-cover h-72' />
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-gray-900'>제목</h1>
          <div className='flex items-center gap-3'>
            <button
              onClick={() => setLikes(l => l + 1)}
              className='flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-500 hover:bg-gray-50 transition-colors'
            >
            <AiFillLike />
            <span className='font-medium'>{likes}</span>
            </button>
            <button
              onClick={() => setDislikes(d => d + 1)}
              className='flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-500 hover:bg-gray-50 transition-colors'
            >
            <AiFillDislike />
            <span className='font-medium'>{dislikes}</span>
            </button>
          </div>
        </div>
        <p className='text-gray-600 leading-relaxed text-sm'>
         설명
        </p>
        <div className='flex flex-col gap-3 mt-2'>
          <div className='text-xl font-bold text-black uppercase tracking-widest'>댓글</div>
          <div className='flex gap-2'>
            <input
              type='text'
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='댓글을 입력하세요...'
              className='flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-gray-400'
            />
            <button
              onClick={handleCommentSubmit}
              className='px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white hover:bg-gray-50 transition-colors'
            >
              확인
            </button>
          </div>
          <div className='flex flex-col gap-2'>
            {commentList.length === 0 ? (
              <p className='text-sm text-gray-400 py-2'></p>
            ) : (
              commentList.map((c, i) => (
                <div key={i} className='px-4 py-3 border border-gray-200 rounded-lg bg-white text-sm text-gray-700'>
                  {c}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className='w-1/4 flex flex-col gap-3 overflow-y-auto'>
        {cards.map(card => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
      {showModal && (
        <div
          className='fixed inset-0 bg-black/35 flex items-center justify-center z-50'
          onClick={(e) => { if (e.target === e.currentTarget) handleCancel() }}
        >
          <div className='bg-white rounded-2xl border border-gray-200 p-6 w-80 flex flex-col gap-4'>
            <p className='text-base font-semibold text-gray-900'>해당 댓글을 작성하시겠습니까?</p>
            <p className='text-sm text-gray-500 border-l-2 border-gray-300 pl-3 leading-relaxed'>
              {pendingComment}
            </p>
            <div className='flex justify-end gap-2'>
              <button
                onClick={handleConfirm}
                className='px-4 py-2 border border-blue-200 rounded-lg text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors'
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainPage