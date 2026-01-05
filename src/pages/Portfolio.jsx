import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, ArrowRight, Sparkles, Zap, Rocket, Server, Database, Cloud, GitBranch, Brain } from 'lucide-react';
import dp from "../assets/dp.png"
import llm from "../assets/llm.PNG"
import tictactoe from "../assets/tictactoe.png"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

const projects = [
    {
      title: "TIC-TAC-TOE",
      description: "A classic Tic Tac Toe game built with modern web technologies. Play against a friend and enjoy a smooth, responsive gaming experience.",
      tags: ["React js", "Vite", "Tailwind CSS"],
      link: "projects/tic-tac-toe",
      image: tictactoe
    },
    {
      title: "LLM Chat Bot",
      description: "Chat with our intelligent LLM bot for instant support and product information",
      tags: ["React js", "REST API", "Fast API", "Mongodb", "Tailwind CSS", "LLM"],
      link: "projects/chatbot",
      image: llm,
    },
    {
      title: "Patient Management System",
      description: "A streamlined system for managing patient records, appointments, and medical data. Designed to improve hospital workflows with an intuitive interface and efficient, real-time data handling.",
      tags: ["Sqlite", "Django", "Tailwind CSS"],
      link: "projects/hospital",
      image: llm,
    },
    {
      title: "Progressing",
      description: "",
      tags: [],
      link: "",
      image: llm,
    },
   
  ];

const skills = [
  {
    icon: Code,
    name: "Frontend Development",
    desc: "React, Vue, Next.js, HTML, CSS, JavaScript"
  },
  {
    icon: Server,
    name: "Backend Development",
    desc: "Node.js, Django, Flask, FastAPI, PHP, Laravel"
  },
  {
    icon: Database,
    name: "Databases",
    desc: "MySQL, PostgreSQL, MongoDB, SQLite"
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps",
    desc: "AWS (EC2, S3), Docker, CI/CD Basics"
  },
  {
    icon: GitBranch,
    name: "Version Control",
    desc: "Git, GitHub"
  },
  {
    icon: Brain,
    name: "AI & Machine Learning",
    desc: "Machine Learning, AI Integration, Deep Learning Basics"
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        
        {/* Floating code snippets - Row 1 (Top) */}
        <div className="absolute top-20 left-32 p-3 backdrop-blur-xl bg-blue-500/10 rounded-xl border border-blue-400/20 shadow-2xl animate-bounce font-mono text-sm text-blue-300" style={{animationDuration: '4s'}}>
          {'import React'}
        </div>
        <div className="absolute top-32 right-20 p-4 backdrop-blur-xl bg-green-500/10 rounded-2xl border border-green-400/20 shadow-2xl animate-bounce font-mono text-sm text-green-300" style={{animationDuration: '3s'}}>
          {'<?php echo'}
        </div>
        <div className="absolute top-40 left-1/4 p-3 backdrop-blur-xl bg-yellow-500/10 rounded-xl border border-yellow-400/20 shadow-2xl animate-bounce font-mono text-xs text-yellow-300" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
          {'pip install'}
        </div>
        <div className="absolute top-24 right-1/3 p-3 backdrop-blur-xl bg-rose-500/10 rounded-xl border border-rose-400/20 shadow-2xl animate-bounce font-mono text-sm text-rose-300" style={{animationDuration: '4.2s', animationDelay: '0.3s'}}>
          {'@SpringBoot'}
        </div>
        <div className="absolute top-16 left-1/2 p-3 backdrop-blur-xl bg-amber-500/10 rounded-xl border border-amber-400/20 shadow-2xl animate-bounce font-mono text-xs text-amber-300" style={{animationDuration: '3.8s', animationDelay: '1.1s'}}>
          {'public class'}
        </div>
        
        {/* Floating code snippets - Row 2 */}
        <div className="absolute top-1/3 right-32 p-4 backdrop-blur-xl bg-purple-500/10 rounded-2xl border border-purple-400/20 shadow-2xl animate-bounce font-mono text-sm text-purple-300" style={{animationDuration: '4.5s', animationDelay: '1s'}}>
          {'useState()'}
        </div>
        <div className="absolute top-1/4 left-12 p-3 backdrop-blur-xl bg-pink-500/10 rounded-xl border border-pink-400/20 shadow-2xl animate-bounce font-mono text-sm text-pink-300" style={{animationDuration: '5s', animationDelay: '0.5s'}}>
          {'namespace {}'}
        </div>
        <div className="absolute top-1/3 left-1/3 p-3 backdrop-blur-xl bg-cyan-500/10 rounded-xl border border-cyan-400/20 shadow-2xl animate-bounce font-mono text-xs text-cyan-300" style={{animationDuration: '3.8s', animationDelay: '1.2s'}}>
          {'git push'}
        </div>
        <div className="absolute top-2/5 right-1/4 p-3 backdrop-blur-xl bg-lime-500/10 rounded-xl border border-lime-400/20 shadow-2xl animate-bounce font-mono text-sm text-lime-300" style={{animationDuration: '4.3s', animationDelay: '0.6s'}}>
          {'@app.route()'}
        </div>
        <div className="absolute top-1/3 left-2/3 p-3 backdrop-blur-xl bg-teal-500/10 rounded-xl border border-teal-400/20 shadow-2xl animate-bounce font-mono text-xs text-teal-300" style={{animationDuration: '3.6s', animationDelay: '1.4s'}}>
          {'SELECT * FROM'}
        </div>
        
        {/* Floating code snippets - Row 3 (Middle) */}
        <div className="absolute top-1/2 right-24 p-4 backdrop-blur-xl bg-indigo-500/10 rounded-2xl border border-indigo-400/20 shadow-2xl animate-bounce font-mono text-sm text-indigo-300" style={{animationDuration: '4s', animationDelay: '0.8s'}}>
          {'[ ...array ]'}
        </div>
        <div className="absolute top-1/2 left-20 p-3 backdrop-blur-xl bg-teal-500/10 rounded-xl border border-teal-400/20 shadow-2xl animate-bounce font-mono text-sm text-teal-300" style={{animationDuration: '4.2s', animationDelay: '1.5s'}}>
          {'async/await'}
        </div>
        <div className="absolute top-2/4 right-1/4 p-3 backdrop-blur-xl bg-orange-500/10 rounded-xl border border-orange-400/20 shadow-2xl animate-bounce font-mono text-xs text-orange-300" style={{animationDuration: '3.7s', animationDelay: '0.3s'}}>
          {'npm run dev'}
        </div>
        <div className="absolute top-1/2 left-1/4 p-3 backdrop-blur-xl bg-violet-500/10 rounded-xl border border-violet-400/20 shadow-2xl animate-bounce font-mono text-sm text-violet-300" style={{animationDuration: '4.4s', animationDelay: '1.3s'}}>
          {'using System'}
        </div>
        <div className="absolute top-3/5 left-1/4 p-3 backdrop-blur-xl bg-emerald-500/10 rounded-xl border border-emerald-400/20 shadow-2xl animate-bounce font-mono text-xs text-emerald-300" style={{animationDuration: '3.9s', animationDelay: '0.7s'}}>
          {'@Bean'}
        </div>
        <div className="absolute top-1/2 right-1/3 p-3 backdrop-blur-xl bg-sky-500/10 rounded-xl border border-sky-400/20 shadow-2xl animate-bounce font-mono text-sm text-sky-300" style={{animationDuration: '4.1s', animationDelay: '1.7s'}}>
          {'<jsp:include>'}
        </div>
        
        {/* Floating code snippets - Row 4 */}
        <div className="absolute bottom-1/4 right-12 p-4 backdrop-blur-xl bg-red-500/10 rounded-2xl border border-red-400/20 shadow-2xl animate-bounce font-mono text-sm text-red-300" style={{animationDuration: '3.5s', animationDelay: '2s'}}>
          {'{...props}'}
        </div>
        <div className="absolute bottom-40 left-20 p-4 backdrop-blur-xl bg-emerald-500/10 rounded-xl border border-emerald-400/20 shadow-2xl animate-bounce font-mono text-xs text-emerald-300" style={{animationDuration: '4s', animationDelay: '1s'}}>
          {'def __init__'}
        </div>
        <div className="absolute bottom-1/3 left-1/3 p-3 backdrop-blur-xl bg-violet-500/10 rounded-xl border border-violet-400/20 shadow-2xl animate-bounce font-mono text-sm text-violet-300" style={{animationDuration: '4.3s', animationDelay: '0.7s'}}>
          {'useEffect()'}
        </div>
        <div className="absolute bottom-2/6 right-1/3 p-3 backdrop-blur-xl bg-fuchsia-500/10 rounded-xl border border-fuchsia-400/20 shadow-2xl animate-bounce font-mono text-xs text-fuchsia-300" style={{animationDuration: '4.6s', animationDelay: '1.2s'}}>
          {'composer req'}
        </div>
        <div className="absolute bottom-1/3 right-1/4 p-3 backdrop-blur-xl bg-blue-500/10 rounded-xl border border-blue-400/20 shadow-2xl animate-bounce font-mono text-sm text-blue-300" style={{animationDuration: '3.4s', animationDelay: '0.4s'}}>
          {'app.use()'}
        </div>
        
        {/* Floating code snippets - Row 5 (Bottom) */}
        <div className="absolute top-3/4 right-32 p-3 backdrop-blur-xl bg-lime-500/10 rounded-xl border border-lime-400/20 shadow-2xl animate-bounce font-mono text-xs text-lime-300" style={{animationDuration: '4.5s', animationDelay: '1.5s'}}>
          {'@Controller'}
        </div>
        <div className="absolute bottom-20 right-1/3 p-4 backdrop-blur-xl bg-sky-500/10 rounded-2xl border border-sky-400/20 shadow-2xl animate-bounce font-mono text-sm text-sky-300" style={{animationDuration: '3.9s', animationDelay: '0.9s'}}>
          {'map(() => {})'}
        </div>
        <div className="absolute bottom-32 left-1/4 p-3 backdrop-blur-xl bg-fuchsia-500/10 rounded-xl border border-fuchsia-400/20 shadow-2xl animate-bounce font-mono text-xs text-fuchsia-300" style={{animationDuration: '4.1s', animationDelay: '1.8s'}}>
          {'fetch().then()'}
        </div>
        <div className="absolute bottom-24 left-1/2.5 p-3 backdrop-blur-xl bg-pink-500/10 rounded-xl border border-pink-400/20 shadow-2xl animate-bounce font-mono text-sm text-pink-300" style={{animationDuration: '3.7s', animationDelay: '1.1s'}}>
          {'Route::get()'}
        </div>
        <div className="absolute bottom-16 right-20 p-3 backdrop-blur-xl bg-cyan-500/10 rounded-xl border border-cyan-400/20 shadow-2xl animate-bounce font-mono text-xs text-cyan-300" style={{animationDuration: '4.2s', animationDelay: '0.5s'}}>
          {'docker run'}
        </div>
        <div className="absolute bottom-28 right-2/4 p-3 backdrop-blur-xl bg-yellow-500/10 rounded-xl border border-yellow-400/20 shadow-2xl animate-bounce font-mono text-sm text-yellow-300" style={{animationDuration: '4.4s', animationDelay: '1.6s'}}>
          {'IActionResult'}
        </div>
      </div>


      {/* Navigation */}
      <nav className="relative z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10 shadow-lg sticky top-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-gray-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-gray-300 hover:text-white transition font-medium drop-shadow-sm cursor-pointer">Home</a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-gray-300 hover:text-white transition font-medium drop-shadow-sm cursor-pointer">About</a>
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-gray-300 hover:text-white transition font-medium drop-shadow-sm cursor-pointer">Projects</a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-gray-300 hover:text-white transition font-medium drop-shadow-sm cursor-pointer">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg hover:shadow-xl transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-2xl bg-black/40 border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="block text-gray-300 hover:text-white transition font-medium cursor-pointer">Home</a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block text-gray-300 hover:text-white transition font-medium cursor-pointer">About</a>
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="block text-gray-300 hover:text-white transition font-medium cursor-pointer">Projects</a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block text-gray-300 hover:text-white transition font-medium cursor-pointer">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[3rem] p-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-gray-500/10 rounded-[3rem]"></div>
          <div className="relative text-center space-y-8">
            <div className="inline-block p-1 rounded-full backdrop-blur-xl bg-white/10 border-2 border-white/20 shadow-2xl">
              <img 
                                  src={dp}
                                  alt="AK" 
                                  className="w-32 h-32 rounded-full object-cover shadow-xl"
                              />
            </div>
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-gray-200 font-medium shadow-lg mb-4">
                <Sparkles size={16} />
                <span>Available for freelance</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                Hi, I'm <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">Ajith Kumar</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto drop-shadow-sm">
              Full-Stack Developer & AI Enthusiast crafting intelligent digital solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="group relative px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 text-white font-semibold shadow-xl overflow-hidden hover:scale-105 hover:-translate-y-1 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Rocket size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">View My Work</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="group relative px-8 py-4 rounded-2xl bg-white text-black hover:bg-gray-200 font-semibold shadow-2xl hover:shadow-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <Zap size={20} className="relative z-10 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                <span className="relative z-10">Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="backdrop-blur-2xl bg-white/5 border-2 border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-transparent to-white/5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-400/5 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">What I Do</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="group p-8 rounded-3xl backdrop-blur-xl bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-200 to-white flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-white/20">
                      <skill.icon size={32} className="text-black group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gray-200 transition-colors duration-300">{skill.name}</h3>
                    <p className="text-gray-400">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Personal Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} onClick={()=>{ if(project.link) window.location.href = project.link}} className="group backdrop-blur-2xl bg-white/5 border-2 border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-sm backdrop-blur-xl bg-white/10 border border-white/20 text-gray-200 font-medium shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="backdrop-blur-2xl bg-white/5 border-2 border-white/10 rounded-[3rem] p-8 md:p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-gray-500/5 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-white/10 to-gray-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together.
            </p>
            
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://github.com/NaaluZeroNaalu/" target='_blank' rel="noopener noreferrer" className="group relative p-5 rounded-2xl backdrop-blur-xl bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Github size={28} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/ajithkumarr2000/" target='_blank' rel="noopener noreferrer" className="group relative p-5 rounded-2xl backdrop-blur-xl bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Linkedin size={28} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="mailto:ajithruflex1210@gmail.com" className="group relative p-5 rounded-2xl backdrop-blur-xl bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Mail size={28} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center text-gray-400 shadow-lg">
          <p>Ajith Kumar.</p>
        </div>
      </footer>
    </div>
  );
}
