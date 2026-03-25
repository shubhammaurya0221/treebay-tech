const Stats = () => {
  return (
    <div className="bg-white border-t border-[rgba(61,139,90,0.18)] px-[6%] grid grid-cols-4 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
      <div className="py-8 px-4 text-center border-r border-[rgba(106,170,125,0.12)] max-[1024px]:[&:nth-child(2)]:border-r-0 max-[640px]:border-r-0">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">300+</span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-[0.06em] mt-[0.3rem] block uppercase">Plants Commissioned</span>
      </div>
      <div className="py-8 px-4 text-center border-r border-[rgba(106,170,125,0.12)] max-[1024px]:border-r-0 max-[640px]:border-r-0">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">98%</span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-[0.06em] mt-[0.3rem] block uppercase">Performance Test Pass Rate</span>
      </div>
      <div className="py-8 px-4 text-center border-r border-[rgba(106,170,125,0.12)] max-[1024px]:[&:nth-child(4)]:border-r-0 max-[640px]:border-r-0">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">25%</span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-[0.06em] mt-[0.3rem] block uppercase">Avg. Schedule Compression</span>
      </div>
      <div className="py-8 px-4 text-center border-none">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">40+</span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-[0.06em] mt-[0.3rem] block uppercase">Process Industries Served</span>
      </div>
    </div>
  );
};

export default Stats;
