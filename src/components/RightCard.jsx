const RightCard = ({ title, description, color = "from-slate-300 to-slate-400" }) => {
  return (
    <div className="group bg-white p-4 rounded-[30px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
      <div className={`w-full h-32 bg-gradient-to-br ${color} rounded-[20px] mb-4 overflow-hidden relative`}>
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="font-extrabold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-sm text-slate-400 mt-1 leading-relaxed">{description}</p>
    </div>
  );
};

export default RightCard;