import React from "react";

const projects = [
  { title: "Eman AI Islamic Assistant", text: "An AI-assisted Islamic Q&A interface focused on accessible, respectful user experiences.", url: "https://eman-ai-b85da.web.app" },
  { title: "Syed Eman Portfolio", text: "A cinematic frontend portfolio built with React and TypeScript.", url: "https://code-with-syed-573ac.web.app/" },
  { title: "Dr. Kinza Saleem", text: "A responsive medical-profile and appointment website.", url: "https://dr-kinza-portfolio.web.app/" }
];

const blogs = [
  { title: "Building with AI as a Development Assistant", text: "How I use AI to explore ideas, debug code, and move projects forward while learning the fundamentals." },
  { title: "My Frontend Journey", text: "From basic web concepts to React interfaces and real deployed projects." },
  { title: "Learning by Shipping", text: "Why small working projects teach lessons that tutorials alone cannot." }
];

export const SkillsDiagram: React.FC = () => (
  <div className="grid grid-cols-2 gap-4">
    {["HTML/CSS", "React", "JavaScript", "TypeScript", "C++", "AI Tools"].map((skill) => (
      <div key={skill} className="rounded-2xl border border-indigo-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-5">
        <div className="font-bold text-slate-900 dark:text-white">{skill}</div>
        <div className="mt-3 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </div>
      </div>
    ))}
  </div>
);

export const JourneyTimeline: React.FC = () => (
  <div className="space-y-5">
    {[
      ["Now", "Building React interfaces and improving JavaScript fundamentals."],
      ["Next", "Deepening TypeScript, accessibility, performance, and frontend architecture."],
      ["Goal", "Become a strong professional frontend developer who can ship reliable products."]
    ].map(([label, text]) => (
      <div key={label} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/60 dark:bg-slate-900/50">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-cyan-400">{label}</span>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{text}</p>
      </div>
    ))}
  </div>
);

export const ProjectShowcase: React.FC<{ onSelectProject: (id: number) => void }> = ({ onSelectProject }) => (
  <div className="grid md:grid-cols-3 gap-6">
    {projects.map((project, i) => (
      <article key={project.title} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-6 shadow-xl">
        <div className="mb-5 text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">Project {String(i + 1).padStart(2, "0")}</div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.text}</p>
        <button onClick={() => onSelectProject(i)} className="mt-6 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white dark:bg-white dark:text-slate-900">View Project</button>
      </article>
    ))}
  </div>
);

export const ProtocolDetail: React.FC<{ projectId: number; onBack: () => void }> = ({ projectId, onBack }) => {
  const project = projects[projectId] ?? projects[0];
  return (
    <div className="mx-auto max-w-4xl px-6 py-32">
      <button onClick={onBack} className="mb-10 font-bold text-indigo-600 dark:text-cyan-400">← Back</button>
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-8 md:p-12">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-500">Frontend Project</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">{project.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{project.text}</p>
        <a href={project.url} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-indigo-600 px-6 py-3 font-bold text-white">Open Live Demo</a>
      </div>
    </div>
  );
};

export const BlogSection: React.FC<{ onRead: (id: number) => void }> = ({ onRead }) => (
  <div className="grid md:grid-cols-3 gap-6">
    {blogs.map((blog, i) => (
      <article key={blog.title} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{blog.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{blog.text}</p>
        <button onClick={() => onRead(i)} className="mt-5 font-bold text-indigo-600 dark:text-cyan-400">Read →</button>
      </article>
    ))}
  </div>
);

export const BlogDetail: React.FC<{ blogId: number; onBack: () => void }> = ({ blogId, onBack }) => {
  const blog = blogs[blogId] ?? blogs[0];
  return (
    <div className="mx-auto max-w-3xl px-6 py-32">
      <button onClick={onBack} className="mb-10 font-bold text-indigo-600 dark:text-cyan-400">← Back</button>
      <article className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-8 md:p-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">{blog.title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{blog.text}</p>
      </article>
    </div>
  );
};