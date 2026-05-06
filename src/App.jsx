import React from 'react'
import { useState } from 'react'
import Dummy from './images/LikeLion_img.png'
import Comment_List from './comment_list'


const Card = ({image, title, subtitle}) => {
  return (
    <div className='min-w-[300px] min-h-[200px] rounded-[15px] border-1 border-gray-400'>
      <div className='m-[15px] flex flex-col gap-2'>
        <div className='overflow-hidden w-[270px] h-[120px] border-1 border-gray-200 bg-gray-300 flex justify-center items-center'>
          <img src={Dummy} className='object-cover'></img>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='font-bold'>{title}</div>
          <div className='text-sm text-gray-300'>{subtitle}</div>
        </div>
      </div>
    </div>
  )
}

const App = () => {

  const [Like, setLike] = useState(0);
  const [Unlike, setUnlike] = useState(0);

  const handleLike = () => {
    setLike((prev) => prev + 1);
  }

  const handleUnlike = () => {
    setUnlike((prev) => prev + 1);
  }

  return (
    <div id="frame" className='min-h-screen'>
      <div id="containers" className='mt-20 mx-10 flex gap-10'>
        <div id="lt_container" className='min-w-[800px] h-auto flex flex-col'>
          <div id="main_box" className='overflow-hidden min-w-[800px] min-h-[450px] border-1 border-gray-200 rounded-[15px] bg-gray-300 flex justify-center items-center'>
            <img src={Dummy} className='object-cover'></img>
          </div>
          
          <div id="title_top_box" className='min-w-[800px] py-5 flex justify-between'>
            <div id="title_box" className='flex flex-col gap-2'>
              <div id="main_title" className='text-5xl font-black'>제목</div>
              <div id="sub_title" className='text-2xl text-gray-300'>서브 타이틀</div>
            </div>

            <div id="response_box" className='flex gap-5 mr-8'>
              <button onClick={handleLike} className='w-auto h-[60px] flex items-center'>
                <div className='text-5xl'>👍</div>
                <div>좋아요 {Like}</div>
              </button>

              <button onClick={handleUnlike} className='w-auto h-[60px] flex items-center'>
                <div className='text-5xl'>👎</div>
                <div>싫어요 {Unlike}</div>
              </button>
            </div>
          </div>

          <div id="comment">
            <Comment_List />
          </div>
        </div>

        <div id="rt_container" className='min-w-[300px] h-3 flex flex-col gap-8 '>
          <Card title="2026 영대" subtitle="14기 멋사 대학 화이팅!"/>
          <Card title="14기 멋대" subtitle="아이디어톤 화이팅!"/>
          <Card title="아이디어톤" subtitle="영대 ISIX팀 화이팅!"/>

        </div>
      </div>
    </div>
  )
}

export default App