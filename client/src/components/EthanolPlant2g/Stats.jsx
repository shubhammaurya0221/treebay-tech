import React from 'react';

const Stats = () => {
    const stats = [
        { val: "High Yield", lbl: "Optimized biomass conversion" },
        { val: "Multi-Feed Flexibility", lbl: "Handles diverse agricultural residues" },
        { val: "ZLD Ready", lbl: "Environmental compliance built-in" },
        { val: "Low O&M Cost", lbl: "Reduced operating and maintenance costs" }
    ];

    return (
        <div className="bg-white border-t border-[rgba(61,139,90,0.18)] px-[6%] grid grid-cols-4 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {stats.map((stat, idx) => (
                <div key={idx} className={`p-8 text-center border-r border-[rgba(106,170,125,0.12)] last:border-r-0 max-[1024px]:${(idx + 1) % 2 === 0 ? 'border-r-0' : 'border-r'} max-[640px]:border-r-0 max-[640px]:border-b last:border-b-0`}>
                    <span className="font-['Cormorant_Garamond',serif] text-[clamp(1.5rem,3vw,2.4rem)] font-bold text-[#a8d5b5] block leading-none break-words min-[1101px]:h-[2.4rem] min-[1101px]:flex min-[1101px]:items-center min-[1101px]:justify-center">{stat.val}</span>
                    <span className="text-[0.78rem] text-[#3d8b5a] tracking-widest mt-2 block uppercase font-medium">{stat.lbl}</span>
                </div>
            ))}
        </div>
    );
};

export default Stats;