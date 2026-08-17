import React from 'react';

export const MCLogo = ({ className = "w-9 h-9" }) => {
  return (
    <div className={`${className} rounded-xl bg-slate-900 border border-emerald-500/30 p-1 flex items-center justify-center shadow-md group-hover:border-emerald-500/60 transition-colors overflow-hidden`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-emerald-400 fill-none stroke-current stroke-[8] stroke-linecap-round stroke-linejoin-round"
      >
        {/* M Letter Path */}
        <path d="M 22 75 V 25 L 45 52 L 68 25 V 75" />
        
        {/* C Letter Arc Path interlocked */}
        <path d="M 82 35 C 72 20, 52 20, 48 40 C 45 55, 52 78, 80 75" className="stroke-teal-400 stroke-[7]" />
      </svg>
    </div>
  );
};
