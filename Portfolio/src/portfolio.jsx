import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "Meme Center App",
      description: "Creating a Website that Contains Memes",
      tags: ["React", "Redux", "Firebase"],
      link: "#"
    },
    {
      title: "The Predicted Demise of Apps",
      description: "Creating a Prediction of Mortality Using Web and Machine Learning",
      tags: ["TensorFlow", "python", "dan lain lain"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "Python", "SQL",
    "HTML5", "CSS3", "Git", "AWS", "Docker"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Muhammad Asep Ramdani
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-lg opacity-30"></div>
              <img 
                src="/dimos.jpg"
                alt="Muhammad Asep Ramdani"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Frontend Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I build beautiful and responsive web applications
          </p>
          <div className="flex justify-center space-x-4">
            <Github className="w-6 h-6 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer" />
            <Linkedin className="w-6 h-6 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer" />
            <Mail className="w-6 h-6 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Who am I?</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate frontend developer with 1 years of experience in building
                modern web applications. I love creating intuitive and performant user
                experiences using the latest web technologies.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-indigo-600 hover:text-purple-600 transition-colors"
                  >
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="py-20 bg-white/50 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      Just go ahead and contact me
    </h2>
    <div className="max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <a 
          href="https://wa.me/6287820718741" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-colors"
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.4 6L0 24l6.2-1.4c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4zM12 22c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8.8.8-3.8-.2-.4C2.5 15.6 2 13.8 2 12 2 6.5 6.5 2 12 2c2.6 0 5 1 6.8 2.8 1.8 1.8 2.8 4.2 2.8 6.8 0 5.5-4.5 10-9.6 10zm5.2-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.4.2-.7 0-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C9.4 9.1 8.8 7.6 8.6 7c-.2-.6-.4-.5-.5-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/>
          </svg>
          Chat on WhatsApp
        </a>
        <a 
          href="mailto:your.email@example.com" 
          className="flex items-center justify-center p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors"
        >
          <Mail className="w-6 h-6 mr-2" />
          Send Email
        </a>
      </div>
      <form 
        className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const message = e.target.message.value;
          
          // Format pesan untuk WhatsApp
          const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
          window.open(`https://wa.me/6287820718741?text=${whatsappMessage}`, '_blank');
        }}
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-purple-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-purple-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2 border border-purple-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors group relative overflow-hidden"
        >
          <span className="relative z-10">Send Message via WhatsApp</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </button>
      </form>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Asep Ramdani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;