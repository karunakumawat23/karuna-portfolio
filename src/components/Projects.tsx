import React from 'react';
import { ExternalLink, Github, Heart, Trophy, Keyboard } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mom's Boutique Website",
      description: "A special dream project built using HTML & CSS to support her mother's creative vision. Full of love, learning, and purpose.",
      icon: <Heart className="text-peach-500" size={32} />,
      technologies: ["HTML", "CSS", "Responsive Design"],
      features: [
        "Beautiful product showcase",
        "Mobile-friendly design",
        "Contact form integration",
        "Gallery of boutique items"
      ],
      color: "from-peach-100 to-peach-200",
      accentColor: "peach-500"
    },
    {
      title: "Reward Dashboard System",
      description: "Created during NavGurukul Hackathon 2025 to help track points and rankings for different houses and campuses. Learned teamwork, UI design, and collaboration.",
      icon: <Trophy className="text-lavender-500\" size={32} />,
      technologies: ["HTML", "CSS", "JavaScript", "UI Design"],
      features: [
        "Real-time point tracking",
        "House-wise rankings",
        "Interactive dashboard",
        "Collaborative development"
      ],
      color: "from-lavender-100 to-lavender-200",
      accentColor: "lavender-500"
    },
    {
      title: "Typing Board Web App",
      description: "A typing board created with HTML, CSS, and basic JavaScript. Helped users practice typing and helped Karuna understand DOM manipulation and user interaction.",
      icon: <Keyboard className="text-mint-500" size={32} />,
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      features: [
        "Interactive typing practice",
        "Speed tracking",
        "User-friendly interface",
        "Keyboard event handling"
      ],
      color: "from-mint-100 to-mint-200",
      accentColor: "mint-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">
              My Projects
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Each project tells a story of learning, growth, and passion
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-lavender-500 to-peach-500 mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.color} p-6 text-center`}>
                  <div className="mb-4 flex justify-center">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 bg-${project.accentColor} bg-opacity-10 text-${project.accentColor} text-sm rounded-full border border-${project.accentColor} border-opacity-20`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                          <div className={`w-2 h-2 bg-${project.accentColor} rounded-full mr-3 flex-shrink-0`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className={`flex-1 bg-${project.accentColor} hover:bg-${project.accentColor} text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 opacity-90 hover:opacity-100`}>
                      <ExternalLink size={16} />
                      View Project
                    </button>
                    <button className={`border-2 border-${project.accentColor} text-${project.accentColor} hover:bg-${project.accentColor} hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2`}>
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Coming Soon */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-lavender-50 to-peach-50 rounded-2xl p-8 border-2 border-dashed border-lavender-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">More Projects Coming Soon!</h3>
              <p className="text-gray-600 mb-6">I'm constantly learning and building new things. Stay tuned for more exciting projects.</p>
              <button className="bg-gradient-to-r from-lavender-500 to-peach-500 hover:from-lavender-600 hover:to-peach-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                Follow My Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;