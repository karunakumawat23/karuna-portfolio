import React from 'react';
import { GraduationCap, BookOpen, Calculator, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      title: "B.Tech in Computer Science",
      institution: "Shri Guru Sandipani Institute of Technology & Science",
      location: "Ujjain, Madhya Pradesh",
      status: "Ongoing",
      description: "Gaining comprehensive knowledge in computer science fundamentals, algorithms, data structures, and software engineering principles.",
      icon: <GraduationCap className="text-lavender-500" size={28} />,
      color: "from-lavender-100 to-lavender-200",
      accentColor: "lavender-500"
    },
    {
      title: "Diploma in Web Development",
      institution: "NavGurukul",
      location: "Pune, Maharashtra",
      status: "Ongoing",
      description: "Hands-on experience in web development technologies, practical project building, and collaborative learning environment.",
      icon: <BookOpen className="text-mint-500\" size={28} />,
      color: "from-mint-100 to-mint-200",
      accentColor: "mint-500"
    },
    {
      title: "12th Standard - Mathematics Stream",
      institution: "Government School",
      location: "Dewas, Madhya Pradesh",
      status: "Completed",
      description: "Strong foundation in mathematics and analytical thinking, which laid the groundwork for logical problem-solving in programming.",
      icon: <Calculator className="text-peach-500" size={28} />,
      color: "from-peach-100 to-peach-200",
      accentColor: "peach-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">
              Education Timeline
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              My learning journey through formal education and beyond
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-lavender-500 to-peach-500 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lavender-300 to-peach-300 hidden md:block"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-6 w-5 h-5 bg-white border-4 border-gray-300 rounded-full shadow-lg z-10"></div>
                  
                  {/* Content Card */}
                  <div className="md:ml-16 w-full">
                    <div className={`bg-gradient-to-r ${item.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                      <div className="flex items-start space-x-4">
                        <div className="bg-white rounded-full p-3 shadow-md flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">
                              {item.title}
                            </h3>
                            <span className={`inline-block px-3 py-1 bg-${item.accentColor} bg-opacity-20 text-${item.accentColor} text-sm font-medium rounded-full border border-${item.accentColor} border-opacity-30`}>
                              {item.status}
                            </span>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="text-lg font-medium text-gray-700 mb-1">
                              {item.institution}
                            </h4>
                            <div className="flex items-center text-gray-600">
                              <MapPin size={16} className="mr-2" />
                              <span className="text-sm">{item.location}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-lavender-50 to-mint-50 rounded-2xl p-8 border border-lavender-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Learning Never Stops
              </h3>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                My educational journey extends far beyond formal institutions. Every project, 
                every line of code, and every challenge is an opportunity to learn and grow. 
                I believe in the power of continuous learning and staying curious about new technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl font-bold text-lavender-500 mb-1">2+</div>
                  <div className="text-gray-600 text-sm">Years of Learning</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl font-bold text-mint-500 mb-1">3+</div>
                  <div className="text-gray-600 text-sm">Projects Built</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl font-bold text-peach-500 mb-1">∞</div>
                  <div className="text-gray-600 text-sm">Dreams to Achieve</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;