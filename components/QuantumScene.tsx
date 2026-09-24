import React from "react";

export const HeroScene: React.FC = () => (
  <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/20 animate-[spin_30s_linear_infinite]" />
    <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 animate-[spin_20s_linear_infinite_reverse]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.12),transparent_55%)]" />
  </div>
);

export const HardwareScene: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => (
  <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border ${isDark ? "border-cyan-400/20" : "border-indigo-500/20"} animate-[spin_24s_linear_infinite]`} />
    <div className={`absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border ${isDark ? "border-indigo-400/20" : "border-cyan-500/20"} animate-[spin_16s_linear_infinite_reverse]`} />
  </div>
);