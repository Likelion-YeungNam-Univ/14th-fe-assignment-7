const RightCard = ({ title, description }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-32 bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
        <span className="text-gray-500 text-sm font-medium">더미 이미지2</span>
      </div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
};

export default RightCard;