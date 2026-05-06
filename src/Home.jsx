import React, {useState} from 'react'


const Home = () => {
  const [comments, setcomments] = useState([])
  const [inputText, setInputText] = useState('')
  const listbar = "items-start justify-start w-[200px] h-[150px] rounded-[20px] mb-[20px] mr-[20px] border-[1px] border-gray-300 flex flex-col items-center justify-center text-gray-400 font-bold"
  const img = <img src="./goodjob.jpeg" alt="Good Job" className="w-[190px] h-[90px] object-cover rounded-[20px] ml-[5px] mt-[5px]" />
  const [LikeCount, setLikeCount] = useState(0);
  const [DisLikeCount, setDisLikeCount] = useState(0);
  
  const handleCounter = (type) => {
    if (type === 'like') {
      setLikeCount((prev) => prev + 1);
    } else if (type === 'dislike') {
      setDisLikeCount((prev) => prev + 1);
    }
  }

   {/*댓글 입력값*/}

  const handleInputChange = () => {
    if (inputText.trim() === "") return;

    const newcomments = {
      id: Date.now(),
      content : inputText,
    }

    setcomments([...comments, newcomments]);
    setInputText("");
  }


  return (
    <div>
      <div className='flex flex-row mt-[40px]'>
        {/*더미 이미지*/}
        <div className=" flex flex-col w-[600px] h-[400px] ml-[20px] mr-[20px] mb-[20px] rounded-[20px]">
          <img src="./goodjob.jpeg" alt="Good Job" className="w-full h-full object-cover rounded-[20px]" />
        <div>
          <h1 className='text-2xl font-bold mb-[20px] mt-[20px]'>짜란다 짜란다</h1>
          <div className="flex justify-between items-center">
            {/*프로필, 구독 */}
            <div className="flex flex-row items-center">
              <img src="./goodjob.jpeg" alt="Good Job" className="w-[50px] h-[50px] object-cover rounded-full" />
              <div>
                <p className='text-[13px] font-bold text-black ml-[10px] mt-[5px] '>
                  댄스
                </p>
                <p className="text-[10px] text-gray-400 ml-[10px] mt-[5px] ">
                  구독자 100만명
                </p>
              </div>
              <button className='h-[40px] ml-[10px] mt-[8px] mb-[15px] p-[10px] bg-red-500 text-white rounded-[40px] hover:bg-red-600 font-bold justify-center items-center flex'>
                <p>Subscribe</p>
              </button>
            </div>
            {/*좋아요,싫어요,공유,메뉴 */}
            <div className="gap-[5px] flex">
              <button 
              onClick={() => handleCounter('like')}
              className="w-[80px] h-[40px] bg-white border hover:bg-gray-100 cursor-pointer rounded-4xl"
              >
                Like {LikeCount}
              </button>
              <button
               onClick={() =>handleCounter('dislike')}
              className="w-[80px] h-[40px] bg-white border hover:bg-gray-100 cursor-pointer rounded-4xl"
              >
                Dislike {DisLikeCount}
              </button>
              <button className="w-[80px] h-[40px] bg-white border hover:bg-gray-100 cursor-pointer rounded-4xl">
                Share
              </button>
              <button className="w-[40px] h-[40px] bg-white border hover:bg-gray-100 cursor-pointer rounded-4xl ">
                <p className='text-[20px] font-bold mb-[10px] '>...</p>
              </button>
            </div>
          </div>
          <div className=' mt-[10px] mb-[20px] w-[600px] h-[100px] bg-gray-300 text-gray-200 rounded-[20px]'>
            <p className='ml-[15px] mt-[10px] text-black'>제곧내</p>
          </div>
          <div className='flex flex-col text-[20px] font-bold mt-[10px] '>
            <p className='ml-[8px]'>댓글</p>
            <div className="flex flex-row h-[80px]">
              <input
                className='w-[525px] mt-[10px] mb-[20px] p-[10px] border-[1px] border-gray-300 rounded-[20px]' 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="댓글을 입력하세요"
              />
              <button
                className='ml-[10px] mt-[10px] mb-[20px] p-[10px] bg-red-500 text-white rounded-[20px] hover:bg-red-600'
                onClick={() => handleInputChange(inputText)}
              >
                등록
              </button>
            </div>
            <div>
              {comments.map((comment) => (
                <div key={comment.id} className='ml-[8px] mb-[10px] flex flex-row items-center gap-[15px] mb-[15px]'>
                  <img src="./goodjob.jpeg" alt="Good Job" className="w-[50px] h-[50px] object-cover rounded-full" />
                  <div>
                    <p className='text-black'>{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*제목*/}
      
      {/*옆에 리스트*/}
      <aside className="flex flex-col  ">
        <div className={listbar}>
          {img}
          <p className='text-[13px] text-black ml-[10px] mt-[5px] '>
            반려견 춤추는 영상
          </p>
          <p className='text-[10px] text-gray-400 ml-[10px] mt-[5px] '>
            조회수 100만회
          </p>
        </div>
        <div className={listbar}>
          {img}
          <p className='text-[13px] text-black ml-[10px] mt-[5px] '>
            강쥐 재롱부리기 영상
          </p>
          <p className='text-[10px] text-gray-400 ml-[10px] mt-[5px] '>
            조회수 80만회
          </p>
        </div>
        <div className={listbar}>
          {img}
          <p className='text-[13px] text-black ml-[10px] mt-[5px] '>
            좀 웃긴 영상
          </p>
          <p className='text-[10px] text-gray-400 ml-[10px] mt-[5px] '>
            조회수 30만회
          </p>
        </div>
      </aside>
    </div>
    </div>
  )
}

export default Home