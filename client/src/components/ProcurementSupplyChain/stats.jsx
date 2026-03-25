import React from 'react';

const Stats = () => {
  return (
    <div className="bg-white border-t border-[rgba(61,139,90,0.18)] px-[6%] grid grid-cols-4 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
      <div className="p-8 text-center border-r border-[rgba(106,170,125,0.12)] max-[1024px]:nth-2:border-r-0 max-[640px]:border-r-0 max-[640px]:border-b">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">$4B+ </span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-widest mt-1 block uppercase">Equipment Procured</span>
      </div>
      <div className="p-8 text-center border-r border-[rgba(106,170,125,0.12)] max-[1024px]:border-r-0 max-[640px]:border-b">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">1,200+ </span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-widest mt-1 block uppercase">Vendors Qualified Globally</span>
      </div>
      <div className="p-8 text-center border-r border-[rgba(106,170,125,0.12)] max-[1024px]:nth-4:border-r-0 max-[640px]:border-r-0 max-[640px]:border-b">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">98%</span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-widest mt-1 block uppercase">On-Time Delivery Rate</span>
      </div>
      <div className="p-8 text-center">
        <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">60+</span>
        <span className="text-[0.78rem] text-[#3d8b5a] tracking-widest mt-1 block uppercase">Countries & Supply Chains</span>
      </div>
    </div>
  );
};

export default Stats;
