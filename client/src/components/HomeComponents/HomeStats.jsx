import React from 'react';

const HomeStats = () => {
  return (
    <div className="bg-white border-t border-[rgba(61,139,90,0.18)] px-[6%] grid grid-cols-4 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
      <div className="p-8 text-center border-r border-[rgba(106,170,125,0.12)] max-[480px]:border-r-0 max-[480px]:border-b">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">250+</span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-widest mt-1 block uppercase">Projects Delivered</span>
      </div>

      <div className="p-8 text-center border-r border-[rgba(106,170,125,0.12)] max-[768px]:border-r-0 max-[480px]:border-b">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">18+</span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-widest mt-1 block uppercase">Years of Experience</span>
      </div>

      <div className="p-8 text-center border-r border-[rgba(106,170,125,0.12)] max-[480px]:border-r-0 max-[480px]:border-b">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">40+</span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-widest mt-1 block uppercase">Industry Sectors</span>
      </div>

      <div className="p-8 text-center">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">99%</span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-widest mt-1 block uppercase">On-Time Delivery</span>
      </div>
    </div>
  );
};

export default HomeStats;
