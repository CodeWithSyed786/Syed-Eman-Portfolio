
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, HardwareScene } from './components/QuantumScene';
import { SkillsDiagram, JourneyTimeline, ProjectShowcase, BlogSection, ProtocolDetail, BlogDetail } from './components/Diagrams';
import JarvisAgent from './components/JarvisAgent';
import { ArrowDown, Menu, X, Github, Linkedin, Mail, Code, Cpu, Globe, Sparkles, Brain, Zap, Moon, Sun, Send, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ViewState = 'home' | 'protocol' | 'blog';

const App: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true); // Default to Dark mode for Space Theme

    // Navigation State
    const [view, setView] = useState<ViewState>('home');
    const [selectedId, setSelectedId] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const navigateTo = (sectionId: string) => {
        setView('home');
        setMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }

    const handleProtocolSelect = (id: number) => {
        setSelectedId(id);
        setView('protocol');
        window.scrollTo(0, 0);
    }

    const handleBlogRead = (id: number) => {
        setSelectedId(id);
        setView('blog');
        window.scrollTo(0, 0);
    }

    const handleBack = () => {
        setView('home');
        window.scrollTo(0, 0);
    }

    return (
        <div className={`min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-cyan-50 dark:bg-none dark:bg-[#020617] text-slate-800 dark:text-slate-100 selection:bg-cyan-400 selection:text-white font-sans overflow-x-hidden transition-colors duration-500`}>

            <JarvisAgent />

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-[#020617]/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('top')}>
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                            SE
                        </div>
                        <span className={`font-bold text-xl tracking-tight transition-opacity text-slate-900 dark:text-white`}>
                            SYED<span className="font-light text-indigo-600 dark:text-cyan-600">_DEV</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide text-slate-600 dark:text-slate-400">
                        <button onClick={() => navigateTo('about')} className="hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-105 transition-all">ABOUT</button>
                        <button onClick={() => navigateTo('skills')} className="hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-105 transition-all">SKILLS</button>
                        <button onClick={() => navigateTo('projects')} className="hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-105 transition-all">PROTOCOLS</button>
                        <button onClick={() => navigateTo('blog')} className="hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-105 transition-all">BLOG</button>

                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300">
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button onClick={() => navigateTo('contact')} className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-indigo-600 dark:hover:bg-cyan-500 hover:shadow-[0_0_20px_#4F46E5] dark:hover:shadow-[0_0_20px_#06B6D4] transition-all duration-300">
                            Connect
                        </button>
                    </div>

                    <div className="flex items-center gap-4 md:hidden">
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300">
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button className="text-slate-900 dark:text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence mode="wait">
                {view === 'home' && (
                    <motion.main
                        key="home"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Hero Section */}
                        <header id="top" className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent dark:bg-[#020617] transition-colors duration-500">
                            <HeroScene />
                            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(2,6,23,0.1)_80%,rgba(2,6,23,0.1)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(2,6,23,0.8)_80%,rgba(2,6,23,1)_100%)]" />

                            <div className="relative z-10 container mx-auto px-6 text-center mt-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="inline-block mb-6 px-4 py-1.5 border border-indigo-400/30 dark:border-cyan-400/30 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-indigo-600 dark:text-cyan-400 text-xs tracking-[0.2em] uppercase font-bold rounded-full shadow-lg shadow-indigo-500/10"
                                >
                                    <span className="flex items-center gap-2"><Sparkles size={12} /> System Online</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight mb-6 text-slate-900 dark:text-white drop-shadow-2xl"
                                >
                                    Syed <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 font-bold">Eman</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-12"
                                >
                                    <span className="font-bold text-slate-800 dark:text-white">Frontend Developer • React Developer</span> • 18 • Computer Information Technology Diploma
                                    <br />
                                    Building the bridge between digital logic and human emotion.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="flex justify-center gap-4"
                                >
                                    <button onClick={() => navigateTo('projects')} className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-cyan-500 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_#4F46E5] hover:shadow-[0_0_30px_#06B6D4] font-bold tracking-wide">
                                        Activate Protocols
                                    </button>
                                    <button onClick={() => navigateTo('contact')} className="px-8 py-3 bg-white/20 dark:bg-slate-800/50 backdrop-blur-md text-slate-900 dark:text-white border border-indigo-200 dark:border-cyan-500/30 rounded-full hover:bg-white dark:hover:bg-cyan-900/20 transition-all duration-300 font-medium">
                                        Contact Me
                                    </button>
                                </motion.div>
                            </div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-cyan-500/50"
                            >
                                <ArrowDown size={24} />
                            </motion.div>
                        </header>

                        {/* About Section */}
                        <section id="about" className="py-32 relative">
                            <div className="container mx-auto px-6">
                                <div className="flex flex-col lg:flex-row items-center gap-16">
                                    {/* Animated Holographic Profile Image */}
                                    <div className="lg:w-1/2 flex justify-center">
                                        <motion.div
                                            className="relative w-80 h-80 md:w-[450px] md:h-[450px] group"
                                            animate={{ y: [0, -20, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            {/* Rotating Energy Rings - Multi Layer */}
                                            <div className="absolute inset-[-40px] rounded-full bg-[conic-gradient(from_0deg,#4f46e5,#06b6d4,#4f46e5)] opacity-20 blur-2xl animate-[spin_20s_linear_infinite]"></div>
                                            <div className="absolute inset-[-20px] rounded-full border-2 border-cyan-500/40 border-dashed animate-[spin_12s_linear_infinite]"></div>
                                            <div className="absolute inset-[-10px] rounded-full border border-indigo-500/20 animate-[spin_8s_linear_infinite_reverse]"></div>

                                            {/* Main Container - Hex/Circle hybrid style */}
                                            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white/40 dark:border-slate-800/60 shadow-[0_0_40px_rgba(79,70,229,0.3)] z-10 bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                                                <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay z-10"></div>
                                                <img
                                                    src="https://r2.image-upload.app/uploads/temporary/1770404925311-8u9ozzwqr5t.jpg"
                                                    alt="Syed Eman"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />

                                                {/* Scanner Line Effect */}
                                                <motion.div
                                                    className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#06b6d4] z-20"
                                                    animate={{ top: ['0%', '100%', '0%'] }}
                                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                                />
                                            </div>

                                            {/* Floating Tech Badges */}
                                            <motion.div
                                                className="absolute -right-6 top-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-indigo-100 dark:border-cyan-500/30 z-30"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <span className="text-sm font-bold text-indigo-600 dark:text-cyan-400 flex items-center gap-2">
                                                    <Brain size={16} /> AI-Assisted Builder
                                                </span>
                                            </motion.div>
                                            <motion.div
                                                className="absolute -left-6 bottom-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-indigo-100 dark:border-indigo-500/30 z-30"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <span className="text-sm font-bold text-indigo-600 dark:text-cyan-400 flex items-center gap-2">
                                                    <Code size={16} /> Frontend
                                                </span>
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    <div className="lg:w-1/2">
                                        <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                            <span className="w-12 h-1 bg-indigo-600 dark:bg-cyan-500"></span> About The Architect
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                            I'm <strong className="text-indigo-600 dark:text-cyan-400 text-xl">Syed Eman Ali Shah</strong>, a frontend developer building modern web experiences while pursuing a Computer Information Technology Diploma and pursuing a specialized Computer Diploma. My journey is defined by a relentless pursuit of mastering the digital landscape.
                                        </p>
                                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                            Starting from HTML, I've accelerated through the ranks of modern web technologies including CSS, JavaScript, and advanced React frameworks. My current mission is clear: evolving into a world-class <strong className="text-indigo-600 dark:text-cyan-400">Frontend Developer</strong>.
                                        </p>
                                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                            Beyond code, I am a <strong className="text-indigo-600 dark:text-cyan-400">Communication Master</strong>. I believe that the most powerful programming language is the one that influences human minds. My goal is to merge these two worlds: High-level Artificial Intelligence and High-impact Human connection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Skills & Timeline */}
                        <section id="skills" className="py-32 relative bg-indigo-50/50 dark:bg-slate-950/50 transition-colors duration-500">
                            <div className="container mx-auto px-6 relative z-10">
                                <div className="grid lg:grid-cols-2 gap-16">
                                    <div>
                                        <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-12">Proficiency Metrics</h2>
                                        <SkillsDiagram />
                                    </div>
                                    <div>
                                        <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-12">Evolution Log</h2>
                                        <JourneyTimeline />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Protocols (Projects) */}
                        <section id="projects" className="py-32 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 dark:opacity-40">
                                <HardwareScene isDark={isDark} />
                            </div>
                            <div className="container mx-auto px-6 relative z-10">
                                <div className="text-center mb-16">
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Active Protocols</h2>
                                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                        Current operational systems and experiments. Click "Live Simulation" to access the terminal.
                                    </p>
                                </div>
                                <ProjectShowcase onSelectProject={handleProtocolSelect} />
                            </div>
                        </section>

                        {/* Blogs */}
                        <section id="blog" className="py-32 bg-white dark:bg-slate-900/50 transition-colors duration-500">
                            <div className="container mx-auto px-6">
                                <div className="flex justify-between items-end mb-16">
                                    <div>
                                        <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Neural Logs</h2>
                                        <p className="text-slate-600 dark:text-slate-400">Thoughts on AI, Space, and the Future.</p>
                                    </div>
                                    <button className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-cyan-400 font-bold hover:gap-4 transition-all">
                                        View All Archives <ArrowDown className="-rotate-90" size={16} />
                                    </button>
                                </div>
                                <BlogSection onRead={handleBlogRead} />
                            </div>
                        </section>

                        {/* Contact */}
                        <section id="contact" className="py-32 relative overflow-hidden">
                            <div className="container mx-auto px-6 relative z-10">
                                <div className="max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-2xl">
                                    <div className="text-center mb-12">
                                        <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Establish Uplink</h2>
                                        <p className="text-slate-600 dark:text-slate-400">Ready to initiate a collaboration? Signal me.</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-8">
                                            <div className="flex items-center gap-4 group">
                                                <div className="w-12 h-12 bg-indigo-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                                                    <Mail size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase">Email Frequency</p>
                                                    <p className="text-slate-900 dark:text-white font-medium">sg541914@gmail.com</p>
                                                </div>
                                            </div>
                                            <a href="https://github.com/CodeWithSyed786" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                                                <div className="w-12 h-12 bg-indigo-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                                                    <Github size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase">Code Repository</p>
                                                    <p className="text-slate-900 dark:text-white font-medium">CodeWithSyed786
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="https://wa.me/923416130231" target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
                                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                                    <MessageCircle size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase">Secure WhatsApp Line</p>
                                                    <p className="text-slate-900 dark:text-white font-medium hover:text-green-500 transition-colors">+92 341 6130231</p>
                                                </div>
                                            </a>
                                        </div>

                                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                            <div>
                                                <input type="text" placeholder="Identity / Name" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-500 transition-colors" />
                                            </div>
                                            <div>
                                                <input type="email" placeholder="Return Signal / Email" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-500 transition-colors" />
                                            </div>
                                            <div>
                                                <textarea rows={4} placeholder="Transmission Content..." className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-500 transition-colors"></textarea>
                                            </div>
                                            <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_#4F46E5] hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                                <Send size={18} /> Transmit Data
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-center relative z-10 transition-colors duration-500">
                            <p className="text-slate-500 dark:text-slate-500 text-sm">
                                © 2026 Syed Eman Ali Shah. All Systems Operational.
                            </p>
                        </footer>
                    </motion.main>
                )}

                {view === 'protocol' && (
                    <motion.div
                        key="protocol"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-50 dark:bg-[#020617] min-h-screen"
                    >
                        <ProtocolDetail projectId={selectedId} onBack={handleBack} />
                    </motion.div>
                )}

                {view === 'blog' && (
                    <motion.div
                        key="blog"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-50 dark:bg-[#020617] min-h-screen"
                    >
                        <BlogDetail blogId={selectedId} onBack={handleBack} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-30 bg-white dark:bg-slate-950 flex flex-col justify-center items-center gap-8 md:hidden"
                    >
                        <button onClick={() => navigateTo('about')} className="text-2xl font-bold text-slate-800 dark:text-white">ABOUT</button>
                        <button onClick={() => navigateTo('skills')} className="text-2xl font-bold text-slate-800 dark:text-white">SKILLS</button>
                        <button onClick={() => navigateTo('projects')} className="text-2xl font-bold text-slate-800 dark:text-white">PROTOCOLS</button>
                        <button onClick={() => navigateTo('blog')} className="text-2xl font-bold text-slate-800 dark:text-white">BLOG</button>
                        <button onClick={() => navigateTo('contact')} className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">CONNECT</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;
