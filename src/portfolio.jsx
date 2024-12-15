import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Star, Code, Monitor, Layout } from 'lucide-react';

// Add custom styles for animations
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-gradient-x {
    animation: gradient-x 15s ease infinite;
    background-size: 200% 200%;
  }

  .animate-blink {
    animation: blink 1s step-end infinite;
  }
`;

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  
  // New states for enhanced features
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Frontend Developer", "Create beautiful websites", "coding is my hobby", "Friendly"];
  const [displayText, setDisplayText] = useState(roles[0]);
  const [isTyping, setIsTyping] = useState(true);
  const [particles, setParticles] = useState([]);
  const [showQuote, setShowQuote] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      icon: <Monitor className="w-12 h-12 text-indigo-600" />,
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "Meme Center App",
      description: "Creating a Website that Contains Memes",
      tags: ["React", "API", "Firebase"],
      link: "#",
      icon: <Layout className="w-12 h-12 text-purple-600" />,
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Admin Dashboard",
      description: "Creating a Admin dashboard",
      tags: ["HTML", "CSS", "Javascript"],
      link: "#",
      icon: <Code className="w-12 h-12 text-indigo-600" />,
      color: "from-green-400 to-cyan-600"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "React", level: 85, color: "from-cyan-400 to-blue-600" },
    { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
    { name: "Python", level: 75, color: "from-blue-400 to-indigo-600" },
    { name: "HTML5", level: 95, color: "from-red-400 to-red-600" },
    { name: "CSS3", level: 90, color: "from-blue-400 to-blue-600" },
    { name: "Git", level: 85, color: "from-gray-400 to-gray-600" }
  ];

  // Function to generate random particles
  const generateParticles = () => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 1 + 0.5,
      });
    }
    setParticles(newParticles);
  };

  // Initialize particles
  useEffect(() => {
    generateParticles();
  }, []);

  // Animated text effect
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        setDisplayText(roles[textIndex].substring(0, displayText.length + 1));
        if (displayText === roles[textIndex]) {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setTextIndex((prev) => (prev + 1) % roles.length);
            setDisplayText('');
          }, 2000);
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [displayText, isTyping, textIndex]);

  // Parallax effect for mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offset && scrollPosition < offset + height) {
            setActiveSection(section);
          }
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Inject custom styles */}
      <style>{customStyles}</style>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Enhanced Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 shadow-lg backdrop-blur-lg py-2' 
            : 'bg-transparent py-4'
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer duration-300">
                  Muhammad Asep Ramdani
                </span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`relative text-lg font-medium transition-all duration-300 hover:scale-110 group ${
                      activeSection === item
                        ? 'text-indigo-600'
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform origin-left transition-transform duration-300 ${
                      activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-lg transform transition-all duration-300">
              <div className="px-4 py-2 space-y-1">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item
                        ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Enhanced Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
          {/* Animated Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute rounded-full bg-indigo-500/30 animate-float"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDuration: `${particle.speed}s`,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-pulse" />
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 45%, rgba(236, 72, 153, 0.2) 100%)`
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 text-center relative">
            {/* Enhanced Profile Image */}
            <div className="mb-12 relative group cursor-pointer" 
                 onMouseEnter={() => setShowQuote(true)}
                 onMouseLeave={() => setShowQuote(false)}>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity" />
              <img 
                src="/Asep.game.jpg"
                alt="Muhammad Asep Ramdani"
                className="relative w-48 h-48 mx-auto rounded-full object-cover border-4 border-white shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-6"
              />
              {/* Animated Quote Bubble */}
              <div className={`absolute -right-4 -top-4 bg-white p-2 rounded-lg shadow-xl transform transition-all duration-300 ${
                showQuote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <span className="text-sm font-medium text-indigo-600">Welcome! 👋</span>
              </div>
            </div>
            
            {/* Animated Role Text */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 min-h-[1.2em]">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed transform hover:scale-105 transition-all duration-300">
              Crafting beautiful and responsive web experiences with passion and precision
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/LttuPesa", color: "hover:text-gray-800", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/m-asep-ramdani-b216a5320/", color: "hover:text-blue-600", label: "LinkedIn" },
                { icon: Mail, href: "mailto:asepramdani.dev@gmail.com", color: "hover:text-red-600", label: "Email" }
              ].map((social, index) => (
                <div key={index} className="group relative">
                  <a 
                    href={social.href}
                    className={`transform hover:scale-125 transition-all duration-300 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a passionate frontend developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I transform ideas into reality through clean, efficient code.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a professional pursuit of excellence in creating responsive, accessible, and performant web applications.
                </p>
              </div>

              {/* Skills Section */}
              <div className="space-y-6">
                {animatedSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transform origin-left transition-transform duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
                  onMouseEnter={() => setIsHoveringProject(true)}
                  onMouseLeave={() => setIsHoveringProject(false)}
                >
                  <div className={`p-6 bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <p className="text-center text-lg text-gray-600 mb-8">
                  I'm always open to new opportunities and interesting projects. Feel free to reach out!
                </p>
                <div className="flex justify-center space-x-6">
                  {[
                    { icon: Mail, text: "asepram30@gmail.com", href: "mailto:asepram30@gmail.com" },
                    { icon: Linkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/m-asep-ramdani-b216a5320/" }
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <contact.icon className="w-5 h-5" />
                      <span>{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Muhammad Asep Ramdani. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;