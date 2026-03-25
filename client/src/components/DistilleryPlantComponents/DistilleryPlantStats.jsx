import React from 'react';

const DistilleryPlantStats = () => {
    const stats = [
        { val: "250+", lbl: "Projects Delivered" },
        { val: "18+", lbl: "Years of Experience" },
        { val: "40+", lbl: "Industry Sectors" },
        { val: "99%", lbl: "On-Time Delivery" }
    ];

    return (
        <div className="bg-white border-t border-[rgba(61,139,90,0.18)] px-[6%] grid grid-cols-4 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
            {stats.map((stat, idx) => (
                <div key={idx} className={`py-8 px-4 text-center border-r border-[rgba(106,170,125,0.12)] last:border-r-0 
                    ${idx === 1 ? 'max-[768px]:border-r-0' : ''} 
                    ${idx % 2 === 0 ? 'max-[768px]:border-r' : ''} 
                    max-[480px]:border-r-0 max-[480px]:border-b max-[480px]:last:border-b-0`}>
                    <span className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-bold text-[#a8d5b5] block leading-none">{stat.val}</span>
                    <span className="text-[0.78rem] text-[#3d8b5a] tracking-widest mt-1.5 block uppercase font-medium">{stat.lbl}</span>
                </div>
            ))}
        </div>
    );
};

export default DistilleryPlantStats;
