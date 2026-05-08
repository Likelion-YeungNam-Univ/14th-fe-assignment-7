const video1 = {
  id: 1,
  img: "https://i.ytimg.com/vi/1G4isv_Fylg/hqdefault.jpg",
  title: "Maroon 5",
  description: "Maroon 5 is an American pop rock band ",
};
const video2 = {
  id: 2,
  //새로운거
  img: "https://i.ytimg.com/vi/qcwF0BFytWU/hqdefault.jpg",
  title: "여름의 기억",
  description:
    "여름의 기억은 2021년 7월 9일에 발매된 싱글 앨범으로, 대한민국의 가수 백예린이 발표한 곡입니다. 이 곡은 여름의 끝자락에서 느껴지는 감성과 추억을 담아낸 곡으로, 백예린의 감미로운 보컬과 섬세한 가사가 돋보이는 작품입니다.",
};
const video3 = {
  id: 3,
  img: "https://i.ytimg.com/vi/Ox29z5Nf1Uk/hqdefault.jpg",
  title: "G-DRAGON ",
  description:
    "Übermensch 무제(無題) (Untitled, 2014) + POWER + HOME SWEET HOME + 뱅뱅뱅 (BANG BANG BANG) + FANTASTIC BABY by G-DRAGON (지드래곤) in 2024 MAMA AWARDS.",
};
const videoList = [video1, video2, video3];

const Video = () => {
  return (
    <div className=" flex flex-col gap-4">
      {videoList.map((video) => {
        return (
          <div
            className="border border-gray-300 rounded-[20px] p-4"
            key={video.id}
          >
            <img src={video.img} alt={video.title} />
            <h3 className="font-bold">{video.title}</h3>
            <p>{video.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Video;
