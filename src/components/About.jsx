import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import CodeEditor from './CodeEditor';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborating effectively in agile environments"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed">
               I’m a Full Stack Developer with expertise in React.js, Node.js, and building end-to-end web applications that are scalable, 
               secure, and user-focused. I’ve worked on real-world projects like custom CMS platforms and campaign 
               management systems, handling everything from responsive frontends to backend APIs and database optimization.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">               
              With a strong foundation in computer science and system design, I approach development with a focus on clean architecture, 
              performance, and real-world impact. I'm always learning, improving, and passionate about building
              digital solutions that truly matter.
              </p>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "2+", label: "Years Experience" },
                { number: "4+", label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <CodeEditor />
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 group text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        {/* <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            My <span className="text-blue-400">Journey</span>
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Senior Full Stack Developer",
                  company: "Tech Corp",
                  period: "2022 - Present",
                  description: "Leading development of enterprise applications using React, Node.js, and AWS.",
                  side: "left"
                },
                {
                  title: "Full Stack Developer", 
                  company: "StartupXYZ",
                  period: "2020 - 2022",
                  description: "Built scalable web applications and APIs, contributing to 300% user growth.",
                  side: "right"
                },
                {
                  title: "Frontend Developer",
                  company: "Digital Agency", 
                  period: "2019 - 2020",
                  description: "Specialized in creating responsive, user-friendly interfaces for various clients.",
                  side: "left"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.side === 'left' ? (
                    <>
                      <div className="w-5/12 text-right pr-8">
                        <motion.div 
                          className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                          <p className="text-blue-400 text-sm mb-2">{item.company} • {item.period}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </motion.div>
                      </div>
                      <div className="w-2/12 flex justify-center">
                        <motion.div 
                          className="w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      <div className="w-5/12"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12"></div>
                      <div className="w-2/12 flex justify-center">
                        <motion.div 
                          className="w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-900"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      <div className="w-5/12 pl-8">
                        <motion.div 
                          className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                          <p className="text-purple-400 text-sm mb-2">{item.company} • {item.period}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </motion.div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;

