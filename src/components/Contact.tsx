import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-lavender-500\" size={24} />,
      title: "Email",
      content: "karuna.kumawat@example.com",
      link: "mailto:karuna.kumawat@example.com"
    },
    {
      icon: <Phone className="text-mint-500" size={24} />,
      title: "Phone",
      content: "+91 9876543210",
      link: "tel:+919876543210"
    },
    {
      icon: <MapPin className="text-peach-500\" size={24} />,
      title: "Location",
      content: "Ujjain, Madhya Pradesh",
      link: "https://maps.google.com/?q=Ujjain,Madhya+Pradesh"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-800"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter size={24} />,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              I'd love to hear from you! Whether it's about opportunities, collaborations, or just to say hello.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-lavender-500 to-peach-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-lavender-50 to-peach-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm always excited to connect with fellow developers, potential mentors, 
                  or anyone who shares a passion for technology and innovation. Whether you have 
                  an opportunity, want to collaborate on a project, or just want to chat about 
                  web development, I'd love to hear from you!
                </p>

                {/* Contact Info */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="bg-gray-50 rounded-full p-3">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">{info.title}</div>
                        <div className="text-gray-700 font-medium">{info.content}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-gray-600 ${social.color}`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me more about your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-lavender-500 to-peach-500 hover:from-lavender-600 hover:to-peach-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Closing Message */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-mint-50 to-lavender-50 rounded-2xl p-8 border border-mint-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Let's Build Something Amazing Together!
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                I believe that the best projects come from collaboration and shared passion. 
                If you have an idea, a challenge, or just want to connect with a fellow developer 
                who dreams big, I'm here and ready to listen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;