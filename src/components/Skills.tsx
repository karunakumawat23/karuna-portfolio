import React from 'react';
import { Code, Palette, Users, Clock, MessageCircle, GitBranch, Monitor, Smartphone } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', level: 90, color: 'bg-peach-500' },
    { name: 'CSS', level: 85, color: 'bg-lavender-500' },
    { name: 'JavaScript', level: 70, color: 'bg-mint-500' },
    { name: 'Responsive Design', level: 85, color: 'bg-peach-500' },
  ];

  const softSkills = [
    {
      icon: <Palette className="text-peach-500" size={24} />,
      title: "Creativity",
      description: "Bringing unique ideas to life through innovative design and problem-solving"
    },
    {
      icon: <Clock className="text-lavender-500\" size={24} />,
      title: "Time Management",
      description: "Balancing studies, projects, and personal growth effectively"
    },
    {
      icon: <MessageCircle className="text-mint-500" size={24} />,
      title: "Communication",
      description: "Clear articulation of ideas and collaborative problem-solving"
    },
    {
      icon: <Users className="text-peach-500\" size={24} />,
      title: "Consistency",
      description: "Maintaining steady progress and dedication to continuous improvement"
    }
  ];

  const tools = [
    { name: 'Git', icon: <GitBranch size={20} />, color: 'text-peach-500' },
    { name: 'GitHub', icon: <Code size={20} />, color: 'text-lavender-500' },
    { name: 'VS Code', icon: <Monitor size={20} />, color: 'text-mint-500' },
    { name: 'Responsive Design', icon: <Smartphone size={20} />, color: 'text-peach-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Growing stronger every day through practice and passion
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-lavender-500 to-peach-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-lavender-50 to-peach-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Code className="mr-3 text-lavender-500" size={28} />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Tools */}
              <div className="bg-gradient-to-r from-mint-50 to-lavender-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Monitor className="mr-3 text-mint-500" size={28} />
                  Learning Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center space-x-3">
                        <div className={tool.color}>
                          {tool.icon}
                        </div>
                        <span className="text-gray-700 font-medium">{tool.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Users className="mr-3 text-peach-500" size={28} />
                Soft Skills
              </h3>
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-50 rounded-full p-3 flex-shrink-0">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Mindset */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-lavender-100 to-peach-100 rounded-2xl p-8 border border-lavender-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Always Learning, Always Growing</h3>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Every day is an opportunity to learn something new. I'm constantly expanding my skillset and embracing new challenges that push me to grow as a developer.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-lavender-200 text-lavender-800 rounded-full text-sm font-medium">React (Learning)</span>
                <span className="px-4 py-2 bg-mint-200 text-mint-800 rounded-full text-sm font-medium">Node.js (Next)</span>
                <span className="px-4 py-2 bg-peach-200 text-peach-800 rounded-full text-sm font-medium">TypeScript (Exploring)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;