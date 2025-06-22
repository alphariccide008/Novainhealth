const Steps = ({ no,icon, label }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-5 " >
      <p className="text-white text-sm border-b-violet-100 uppercase font-semibold">{no}:</p>
      <img src={icon}
       alt={label}
       width={60}
       className="bg-white px-5 py-5 rounded-full" />
      <div className="text-center">
        <p className="text-white text-sm px-3 ">{label}</p>
      </div>
    </div>
  );
};
export default Steps;