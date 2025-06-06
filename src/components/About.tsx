import React from 'react';
import { Heart, Code, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="text-peach-500" size={24} />,
      title: "Empathy",
      description: "Building technology that serves people with genuine care and understanding"
    },
    {
      icon: <Code className="text-lavender-500\" size={24} />,
      title: "Creativity",
      description: "Turning imaginative ideas into beautiful, functional digital experiences"
    },
    {
      icon: <Lightbulb className="text-mint-500" size={24} />,
      title: "Purpose",
      description: "Every line of code written with intention to make a meaningful impact"
    },
    {
      icon: <Users className="text-peach-500\" size={24} />,
      title: "Growth",
      description: "Consistently learning, improving, and embracing new challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-lavender-500 to-peach-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Story */}
          <div className="bg-gradient-to-r from-lavender-50 to-peach-50 rounded-2xl p-8 md:p-12 mb-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Hi there! I'm Karuna Kumawat, a passionate and determined beginner web developer based in the historic city of Ujjain, Madhya Pradesh. My journey in technology started with curiosity and has evolved into a deep love for creating meaningful digital experiences.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Currently, I'm pursuing my B.Tech in Computer Science from Shri Guru Sandipani Institute of Technology & Science, Ujjain, while simultaneously completing a Diploma in Web Development from NavGurukul, Pune. This dual approach has given me both theoretical knowledge and practical skills that I apply to every project I build.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Coming from a math background in my 12th grade from Dewas, I've always been drawn to logical problem-solving. But what truly excites me is the creative side of coding – the ability to bring ideas to life through clean, simple code and meaningful design.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Although I don't have formal industry experience yet, I've built personal projects that reflect my creativity, learning mindset, and growth. My dream is to use technology to build something impactful and one day become a successful entrepreneur who creates solutions that matter.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-50 rounded-full p-3 mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              I'm always excited to connect with fellow developers, mentors, and anyone who shares a passion for technology and innovation.
            </p>
            <button className="bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Let's build something amazing together!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;