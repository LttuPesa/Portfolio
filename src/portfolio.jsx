import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Star, Code, Monitor, Layout } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  
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
      tags: ["React", "Redux", "Firebase"],
      link: "#",
      icon: <Layout className="w-12 h-12 text-purple-600" />,
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "The Predicted Demise of Apps",
      description: "Creating a Prediction of Mortality Using Web and Machine Learning",
      tags: ["TensorFlow", "Python", "Machine Learning"],
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
    { name: "SQL", level: 85, color: "from-orange-400 to-red-600" },
    { name: "HTML5", level: 95, color: "from-red-400 to-red-600" },
    { name: "CSS3", level: 90, color: "from-blue-400 to-blue-600" },
    { name: "Git", level: 85, color: "from-gray-400 to-gray-600" },
    { name: "AWS", level: 70, color: "from-orange-400 to-yellow-600" },
    { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 45%, rgba(236, 72, 153, 0.15) 100%)`
          }}
        />
      </div>

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

        {/* Enhanced Mobile Menu */}
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-pulse" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 45%, rgba(236, 72, 153, 0.2) 100%)`
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <div className="mb-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity" />
            <img 
              src="/yesus ngaji.jpg"
              alt="Muhammad Asep Ramdani"
              className="relative w-48 h-48 mx-auto rounded-full object-cover border-4 border-white shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-6"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Frontend Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful and responsive web experiences with passion and precision
          </p>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/LttuPesa", color: "hover:text-gray-800" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/m-asep-ramdani-b216a5320/", color: "hover:text-blue-600" },
              { icon: Mail, href: "mailto:asepramdani.dev@gmail.com", color: "hover:text-red-600" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className={`transform hover:scale-125 transition-all duration-300 ${social.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-10 h-10 text-indigo-600" />
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600 flex items-center">
                <Star className="w-6 h-6 mr-2 group-hover:rotate-180 transition-all duration-500" />
                Who am I?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate frontend developer with a keen eye for design and a commitment to creating 
                intuitive user experiences. With 1 year of experience in building modern web applications, 
                I combine technical expertise with creative problem-solving to deliver exceptional digital solutions.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                Skills
              </h3>
              <div className="space-y-4">
                {animatedSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          transform: `translateX(-${100 - skill.level}%)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                onMouseEnter={() => setIsHoveringProject(true)}
                onMouseLeave={() => setIsHoveringProject(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="p-8 relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-300`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-indigo-600 hover:text-purple-600 transition-all duration-300 group-hover:translate-x-2 transform"
                  >
                    View Project 
                    <ExternalLink className="ml-2 w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <div className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <a 
                href="https://wa.me/6287820718741" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-6 h-6 mr-3 transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.4 6L0 24l6.2-1.4c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4zM12 22c-1.8 0-3.6-.5-5.2-1.3l-3.6.8.8-3.6c-.9-1.6-1.3-3.4-1.3-5.2 0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5.9-7.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.2-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5s-.7-1.7-1-2.4c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.1 3.3 5.2 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.2-.6-.3z"/>
                </svg>
                WhatsApp Me
              </a>
              <a 
                href="mailto:asepramdani.dev@gmail.com"
                className="group flex items-center justify-center p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Mail className="w-6 h-6 mr-3 transform group-hover:rotate-12 transition-transform duration-300" />
                Email Me
              </a>
            </div>

            <form className="space-y-6">
              <div className="space-y-2 group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-300"
                  placeholder="John Price"
                />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-300"
                  placeholder="Ramdani@example.com"
                />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-300"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left text-white">
              © {new Date().getFullYear()} Muhammad Asep Ramdani. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[
                { icon: Github, href: "https://github.com/LttuPesa" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/m-asep-ramdani-b216a5320/" },
                { icon: Mail, href: "mailto:asepramdani.dev@gmail.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white/80 hover:text-white transition-colors transform hover:scale-110 duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;