import React from 'react';

export const VectorAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Ambient Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl animate-pulse-subtle"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-purple-500/10 via-emerald-500/5 to-transparent blur-3xl animate-pulse-subtle" style={{ animationDelay: '3s' }}></div>

      {/* Floating Animated Vector Geometry & Nodes */}
      <svg className="w-full h-full opacity-30 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vectorGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
          </linearGradient>

          <pattern id="vectorGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-800" />
            <circle cx="60" cy="60" r="1.5" className="fill-emerald-500/40" />
          </pattern>
        </defs>

        {/* Grid Overlay */}
        <rect width="100%" height="100%" fill="url(#vectorGrid)" />

        {/* Animated Vector Wave Lines */}
        <g className="animate-pulse-subtle">
          <path
            d="M-100,200 Q300,50 700,300 T1500,200"
            fill="none"
            stroke="url(#vectorGrad1)"
            strokeWidth="1.5"
            strokeDasharray="8 8"
          >
            <animate transform="translate(0,0)" attributeName="d" dur="15s" repeatCount="indefinite" values="M-100,200 Q300,50 700,300 T1500,200; M-100,250 Q350,120 750,220 T1500,280; M-100,200 Q300,50 700,300 T1500,200" />
          </path>

          <path
            d="M-100,600 Q400,800 900,500 T1800,700"
            fill="none"
            stroke="url(#vectorGrad1)"
            strokeWidth="1"
            strokeDasharray="6 6"
          >
            <animate transform="translate(0,0)" attributeName="d" dur="20s" repeatCount="indefinite" values="M-100,600 Q400,800 900,500 T1800,700; M-100,550 Q450,720 850,580 T1800,620; M-100,600 Q400,800 900,500 T1800,700" />
          </path>
        </g>

        {/* Floating Glowing Vector Circles */}
        <g className="text-emerald-500/30">
          <circle cx="15%" cy="25%" r="3" fill="currentColor">
            <animate attributeName="cy" values="25%;27%;25%" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="85%" cy="18%" r="4" fill="currentColor">
            <animate attributeName="cy" values="18%;21%;18%" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="75%" cy="65%" r="3.5" fill="currentColor">
            <animate attributeName="cy" values="65%;62%;65%" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="20%" cy="80%" r="4" fill="currentColor">
            <animate attributeName="cy" values="80%;83%;80%" dur="7s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

    </div>
  );
};
