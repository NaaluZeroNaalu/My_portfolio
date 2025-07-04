import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe, ChevronDown, Menu, X } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Express", "PostgreSQL", "Socket.io", "Redis"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration.",
      tech: ["Next.js", "TypeScript", "Prisma", "Chart.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "Frontend", icon: Code, items: ["HTML",  "CSS", "Javascript", "Bootstrap 5",  "React js", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: Server, items: ["Node.js", "Python", "Express js", "FastAPI", "Django", "Flask", "Java", "Springboot"] },
    { name: "Database", icon: Database, items: ["MongoDB", "MySQL", "Elastic Database"] },
    { name: "DevOps", icon: Globe, items: ["Docker"] }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-4 h-4 bg-purple-400 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(0.8)',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors ${
                    activeSection === section ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-6 py-3 capitalize hover:text-purple-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Code size={48} className="text-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Ajith Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Fullstack Developer 
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Crafting exceptional digital experiences with modern technologies. 
              Passionate about clean code, scalable architectures, and user-centric design.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="https://github.com/NaaluZeroNaalu" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ajithkumarr2000/" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="mailto:ajithruflex1210@gmail.com" className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                <Mail size={20} />
                Contact
              </a>
            </div>
          </div>
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                With over 3 years of experience in fullstack development, I specialize in building 
                scalable web applications with AI that deliver exceptional user experiences. My journey began 
                with a fascination for how technology can solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and staying current with the latest 
                technologies. When I'm not coding, you'll find me contributing to open-source projects, 
                mentoring fellow developers, or exploring new frameworks.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-purple-600/20 border border-purple-600/30 rounded-full text-purple-300">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-300">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-pink-600/20 border border-pink-600/30 rounded-full text-pink-300">
                  Lifelong Learner
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-600/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-gray-300">Passionate Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <skill.icon size={32} className="text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between">
                        <span className="text-gray-300">{item}</span>
                        <div className="w-16 h-2 bg-slate-700 rounded-full">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 delay-300"
                            style={{ width: `${85 + Math.random() * 15}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-slate-900/50 rounded-2xl border border-slate-700 overflow-hidden hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-purple-600/20 border border-purple-600/30 rounded-full text-xs text-purple-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
                        <Github size={16} />
                        Code
                      </a>
                      <a href={project.live} className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Whether you have a project in mind or just 
                want to chat about technology, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-400" size={20} />
                  <span className="text-gray-300">ajithruflex1210@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-purple-400" size={20} />
                  <span className="text-gray-300">https://github.com/NaaluZeroNaalu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-purple-400" size={20} />
                  <span className="text-gray-300">https://www.linkedin.com/in/ajithkumarr2000/n</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  onClick={() => alert('Message sent! (This is a demo)')}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Ajith Kumar. Built with React and lots of ☕
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default App;