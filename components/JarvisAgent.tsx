import React, { useState } from "react";

const JarvisAgent: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-72 rounded-2xl border border-cyan-400/20 bg-slate-950/95 p-5 text-white shadow-2xl backdrop-blur">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">AI Assistant</p>
          <p className="mt-2 text-sm text-slate-300">I’m a lightweight portfolio helper. Explore the projects and connect with Syed Eman.</p>
        </div>
      )}
      <button aria-label="Open AI assistant" onClick={() => setOpen(v => !v)} className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 font-bold text-white shadow-lg shadow-cyan-500/30">
        AI
      </button>
    </div>
  );
};

export default JarvisAgent;