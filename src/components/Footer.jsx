import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/mr-nihal-10',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/nihalahamad-havaldar-b88a13254/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:nihalhawaldar1010@gmail.com',
      color: 'hover:text-blue-400'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-white mr-3">
                <span className="text-blue-400">&lt;</span>
                Nihalahamad Havaldar
                <span className="text-blue-400">/&gt;</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              through clean code and innovative solutions. Always learning, always building.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:border-blue-500/50 hover:transform hover:scale-110`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>API Development</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Nihalahamad Havaldar. Made with</span>
              <Heart size={16} className="text-red-400 mx-1 animate-pulse" />
              <span>and</span>
              <Code size={16} className="text-blue-400 mx-1" />
              <span>in Pune</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 group"
            >
              <span className="text-sm mr-2">Back to top</span>
              <div className="p-2 bg-gray-800 border border-gray-700 rounded-lg group-hover:border-blue-500/50 group-hover:bg-gray-700 transition-all duration-300">
                <ArrowUp size={16} className="group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className="py-4 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div className="mb-2 md:mb-0">
              <span>Built with React, Tailwind CSS, and lots of ☕</span>
            </div>
            <div className="flex space-x-4">
              <span>Version 2.0</span>
              {/* <span>•</span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                View Source
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

