import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, Server, Database, Cloud, GitBranch, Brain, ArrowRight, Sparkles, Zap, Rocket, Briefcase, Calendar } from 'lucide-react';
import dp from "../assets/dp.png"
import llm from "../assets/llm.PNG"
import tictactoe from "../assets/tictactoe.png"
import hospital from "../assets/hospital.png"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      image: hospital,
    },
    {
      title: "Progressing",
      description: "More exciting projects coming soon!",
      tags: [],
      link: "",
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

const experiences = [
  {
    company: "Izeon Innovative Pvt Ltd",
    position: "Full Stack Developer",
    duration: "Jan 2023 –  oct - 2024",
    description:
      "Worked as a Full Stack Developer delivering end-to-end web development projects for business applications. Involved in frontend, backend, and database development.",
    achievements: [
      "Developed full-stack web applications using React, Tailwind CSS, Django, and REST APIs",
      "Implemented authentication, role-based access, and CRUD modules",
      "Collaborated with designers and backend teams to deliver production-ready features",
      "Optimized application performance and improved UI responsiveness",
      "Handled deployment support and bug fixes in live projects"
    ]
  },
  {
    company: "SBA Info Solutions",
    position: "Full Stack Engineer",
    duration: "Oct 2024  – Oct 2025",
    description:
      "Worked on full-stack web applications with a focus on integrating AI features and LLM-based solutions into existing systems.",
    achievements: [
      "Built full-stack web applications using modern frontend and backend frameworks",
      "Integrated AI features and LLM-based functionalities into web applications",
      "Worked with APIs, databases, and backend logic to support AI workflows",
      "Implemented chatbot and automation features using LLM concepts",
      "Collaborated in agile development cycles and feature planning"
    ]
  }
];

  const codeSnippets = [
    { text: 'import React', color: 'blue', top: '8%', left: '10%' },
    { text: '<?php echo', color: 'green', top: '12%', right: '8%' },
    { text: 'pip install', color: 'yellow', top: '15%', left: '25%' },
    { text: '@SpringBoot', color: 'rose', top: '10%', right: '30%' },
    { text: 'public class', color: 'amber', top: '6%', left: '50%' },
    { text: 'useState()', color: 'purple', top: '28%', right: '12%' },
    { text: 'namespace {}', color: 'pink', top: '22%', left: '5%' },
    { text: 'git push', color: 'cyan', top: '30%', left: '35%' },
    { text: '@app.route()', color: 'lime', top: '35%', right: '25%' },
    { text: 'SELECT * FROM', color: 'teal', top: '32%', left: '65%' },
    { text: '[ ...array ]', color: 'indigo', top: '48%', right: '10%' },
    { text: 'async/await', color: 'teal', top: '50%', left: '8%' },
    { text: 'npm run dev', color: 'orange', top: '52%', right: '28%' },
    { text: 'using System', color: 'violet', top: '48%', left: '28%' },
    { text: '@Bean', color: 'emerald', top: '55%', left: '22%' },
    { text: '<jsp:include>', color: 'sky', top: '50%', right: '35%' },
    { text: '{...props}', color: 'red', bottom: '28%', right: '6%' },
    { text: 'def __init__', color: 'emerald', bottom: '32%', left: '10%' },
    { text: 'useEffect()', color: 'violet', bottom: '30%', left: '32%' },
    { text: 'composer req', color: 'fuchsia', bottom: '35%', right: '30%' },
    { text: 'app.use()', color: 'blue', bottom: '30%', right: '22%' },
    { text: '@Controller', color: 'lime', top: '75%', right: '15%' },
    { text: 'map(() => {})', color: 'sky', bottom: '12%', right: '28%' },
    { text: 'fetch().then()', color: 'fuchsia', bottom: '18%', left: '22%' },
    { text: 'Route::get()', color: 'pink', bottom: '15%', left: '45%' },
    { text: 'docker run', color: 'cyan', bottom: '10%', right: '10%' },
    { text: 'IActionResult', color: 'yellow', bottom: '16%', right: '45%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30"></div>
        
        {codeSnippets.map((snippet, i) => (
          <div 
            key={i}
            className={`absolute p-3 bg-${snippet.color}-500/10 rounded-xl border border-${snippet.color}-400/20 font-mono text-sm text-${snippet.color}-300 animate-bounce opacity-60`}
            style={{
              top: snippet.top,
              left: snippet.left,
              right: snippet.right,
              bottom: snippet.bottom,
              animationDuration: `${3.5 + i * 0.3}s`,
              animationDelay: `${i * 0.2}s`,
              willChange: 'transform'
            }}
          >
            {snippet.text}
          </div>
        ))}
      </div>

      <nav className="relative z-50 bg-black/60 border-b border-white/10 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-white">
              Portfolio
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-gray-300 hover:text-white transition cursor-pointer">Home</a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-gray-300 hover:text-white transition cursor-pointer">About</a>
              <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="text-gray-300 hover:text-white transition cursor-pointer">Experience</a>
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-gray-300 hover:text-white transition cursor-pointer">Projects</a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-gray-300 hover:text-white transition cursor-pointer">Contact</a>
            </div>

            <button 
              className="md:hidden p-2 rounded-xl bg-white/10 border border-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/60 border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="block text-gray-300 hover:text-white transition cursor-pointer">Home</a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block text-gray-300 hover:text-white transition cursor-pointer">About</a>
              <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="block text-gray-300 hover:text-white transition cursor-pointer">Experience</a>
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="block text-gray-300 hover:text-white transition cursor-pointer">Projects</a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block text-gray-300 hover:text-white transition cursor-pointer">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="backdrop-blur-2xl relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
          <div className="text-center space-y-8">
            <div className="inline-block p-1 rounded-full bg-white/10 border-2 border-white/20">
               <img 
                  src={dp}
                  alt="AK" 
                  className="w-32 h-32 rounded-full object-cover shadow-xl"
              />
            </div>
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gray-200">
                <Sparkles size={16} />
                <span>2 Years of Experience | Available for freelance</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ajith Kumar</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Full-Stack Developer & AI Enthusiast crafting intelligent digital solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="group px-8 py-4 rounded-2xl bg-white/10 border-2 border-white/20 hover:bg-white/20 transition flex items-center gap-2 text-white font-semibold cursor-pointer">
                <Rocket size={20} className="group-hover:rotate-12 transition-transform" />
                <span>View My Works</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="group px-8 py-4 rounded-2xl bg-white text-black hover:bg-gray-200 font-semibold transition flex items-center gap-2 cursor-pointer">
                <Zap size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">What I Do</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group backdrop-blur-2xl p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{skill.name}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Work Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group backdrop-blur-2xl p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase size={24} className="text-blue-400" />
                      <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    </div>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 whitespace-nowrap">
                    <Calendar size={16} className="text-purple-400" />
                    <span className="text-sm font-semibold text-gray-200">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6">{exp.description}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Key Achievements</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="backdrop-blur-2xl relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Personal Projects</h2>
        
        <div className="grid md:grid-cols-2 backdrop-blur-2xl lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => { if(project.link) window.location.href = project.link }} 
              className="group backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20 text-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="backdrop-blur-2xl bg-black/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 text-center space-y-8">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
          
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/NaaluZeroNaalu/" target='_blank' rel="noopener noreferrer" className="group p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all text-white">
              <Github size={28} className="group-hover:rotate-12 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/ajithkumarr2000/" target='_blank' rel="noopener noreferrer" className="group p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all text-white">
              <Linkedin size={28} className="group-hover:rotate-12 transition-transform" />
            </a>
            <a href="mailto:ajithruflex1210@gmail.com" className="group p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all text-white">
              <Mail size={28} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
