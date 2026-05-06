import React from "react";
import Like from "../components/feature/Like";
import dummyImage from "../images/cat.jpg";
import Comment from "../components/feature/Comment";
import Card from "../components/common/Card";

const MainPage = () => {
  return (
    <div className="flex h-screen p-6 gap-6">
      {/* 좌측 영역 */}
      <div className="w-3/4 flex flex-col">
        <img
          src={dummyImage}
          alt="더미 이미지"
          className="w-full object-cover rounded-[40px]"
        />
        <div className="flex justify-between items-start mt-4">
          <h1 className="text-3xl font-bold mb-1">제목입니다.</h1>
          <Like />
        </div>
        <p className="mt-1 ">고양이 사진 입니다~~~~~~</p>
        <Comment />
      </div>

      <div className="w-1/4 bg-white flex flex-col gap-6">
        <Card title="강보성 과제제출" description="가나다라맞바사아" />
        <Card title="민서님 과제제출" description="설명~~~~아무거나하래요" />
        <Card
          title="태현님 과제제출"
          description="이야이야이야이야이야이야이야이야이야이야이야이야이야이야이야이야이야이야이야이야이야이"
        />
        <Card
          title="정운님 과제제출"
          description="설명~~~~아무거나하래요sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
        />
        <Card title="승현님 과제제출" description="이번 주 수업 몇분하나요?" />
      </div>
    </div>
  );
};

export default MainPage;
