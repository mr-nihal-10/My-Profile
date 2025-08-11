import React from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Wrench,
  Globe,
  Server
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Redux", level: 90 },
        { name: "JavaScript", level: 90 },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "JWT & OAuth Authentication", level: 80 },
        { name: "Mongoose", level: 85 },
        { name: "Sequelize", level: 85 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 90 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "Postman", level: 90 },
        { name: "Docker", level: 55 },
        { name: "Kubernetes", level: 45 },
        { name: "Git & GitHub", level: 80 },
      ]
    },
    // {
    //   title: "Mobile",
    //   icon: <Smartphone className="w-6 h-6" />,
    //   color: "from-indigo-400 to-purple-400",
    //   skills: [
    //     { name: "React Native", level: 85 },
    //     { name: "Flutter", level: 75 },
    //     { name: "Expo", level: 80 },
    //     { name: "iOS Development", level: 70 },
    //     { name: "Android Development", level: 70 },
    //     { name: "PWA", level: 85 }
    //   ]
    // },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-400",
      skills: [
        { name: "System Design", level: 80 },
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Clean Code & Scalable Architecture", level: 90 },
        { name: "Problem Solving", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        {/* <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional <span className="text-blue-400">Expertise</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Agile/Scrum', 'UI/UX Design', 'SEO Optimization', 'Performance Optimization',
              'Accessibility (a11y)', 'Microservices', 'WebRTC', 'Socket.io',
              'Stripe Integration', 'OAuth', 'JWT', 'Blockchain Basics'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-full text-gray-300 text-sm hover:border-blue-500 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div> */}

        {/* Certifications */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            <span className="text-blue-400">Certifications</span> & Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
              { name: "React Developer Certification", issuer: "Meta", year: "2022" },
              { name: "Google Cloud Professional", issuer: "Google", year: "2023" },
              { name: "MongoDB Certified Developer", issuer: "MongoDB Inc.", year: "2022" }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-blue-400 font-semibold text-sm mb-1">
                  {cert.name}
                </div>
                <div className="text-gray-400 text-xs mb-1">
                  {cert.issuer}
                </div>
                <div className="text-gray-500 text-xs">
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;

