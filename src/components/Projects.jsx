import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Full Stack",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool built with React and Firebase. Real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      category: "Frontend",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using OpenWeather API.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "SCSS"],
      category: "Frontend",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "REST API Server",
      description: "A scalable RESTful API built with Express.js and PostgreSQL. Features JWT authentication, rate limiting, and comprehensive documentation.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
      category: "Backend",
      github: "https://github.com",
      live: null,
      featured: false
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization, post scheduling, and engagement tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
      category: "Full Stack",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 6,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features built with React Native.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      category: "Mobile",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="text-blue-400">Featured</span> Projects
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <div 
                key={project.id}
                className="group bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-gray-500 text-4xl">📱</div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Eye size={16} className="mr-2" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-400 text-gray-300 hover:bg-gray-800"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200"
                    >
                      <Github size={14} className="mr-1" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="text-gray-400 mr-2" size={20} />
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:bg-gray-800'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-3xl">💻</div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1"
                  >
                    <Eye size={14} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-400 text-gray-300 hover:bg-gray-800 text-xs px-3 py-1"
                  >
                    <Github size={14} />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-400 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                  {project.featured && (
                    <span className="text-yellow-400 text-xs font-semibold">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Projects on GitHub
            <Github size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

