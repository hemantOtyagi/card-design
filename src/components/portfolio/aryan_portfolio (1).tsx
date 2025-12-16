import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Server, Award, Users, Trophy } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionsRef.current).forEach((key) => {
      observers[key] = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(key);
            }
          });
        },
        { threshold: 0.3 }
      );
      
      if (sectionsRef.current[key]) {
        observers[key].observe(sectionsRef.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId) => {
    sectionsRef.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['Java'],
    frameworks: ['Spring Boot', 'Spring Framework', 'Hibernate', 'JPA'],
    web: ['REST APIs', 'Microservices', 'WebSockets', 'JSP', 'Servlets'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['Git', 'JUnit', 'Maven']
  };

  const projects = [
    {
      title: 'E-Auction Platform',
      tech: 'Spring Boot, WebSocket, MySQL, Spring Security(JWT), Git, ReactJs',
      description: 'Full-stack web application with real-time bidding and secure user authentication',
      features: ['Real-time bid updates', 'WebSocket integration', 'Live notifications']
    },
    {
      title: 'Smart Email Application',
      tech: 'Java, Spring Boot, Spring AI, ReactJs',
      description: 'Intelligent email assistant with reply generation featuring customizable tone selection',
      features: ['AI-powered replies', 'Gemini API integration', 'Tone customization']
    },
    {
      title: 'Blog Management System',
      tech: 'MongoDB, Spring Boot, ReactJs, Spring Security(JWT)',
      description: 'Dynamic user authentication blog application with search based on Tags and Categories',
      features: ['RESTful API', 'Tag-based search', 'Category filtering']
    }
  ];

  const experience = {
    role: 'Software Developer Intern',
    company: 'Varaisys Pvt. Ltd.',
    location: 'Sector-62, Noida, Uttar Pradesh',
    duration: '1 July 2024 - 15 August 2024',
    achievements: [
      'Designed and implemented RESTful APIs using Spring Boot to enhance backend functionality',
      'Managed database operations using Hibernate ORM and MySQL for efficient data processing'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-lg z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AT
          </h1>
          <div className="flex gap-6">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all ${
                  activeSection === section
                    ? 'text-purple-400 border-b-2 border-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        ref={(el) => (sectionsRef.current.home = el)}
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fadeIn">
            Aryan Tyagi
          </h2>
          <p className="text-2xl text-purple-300 mb-6 animate-fadeIn">Java Software Developer</p>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg animate-fadeIn">
            Specializing in Spring Boot, REST APIs, and full-stack development with a strong foundation in OOP and MVC architecture
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8 animate-fadeIn">
            <MapPin size={18} />
            <span>Modinagar, Ghaziabad, Uttar Pradesh, India</span>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 animate-fadeIn"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => (sectionsRef.current.about = el)}
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h3 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="w-2 h-10 bg-gradient-to-b from-purple-400 to-pink-400 rounded"></div>
            About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <h4 className="text-2xl font-semibold mb-4 text-purple-300">Education</h4>
              <p className="text-xl font-medium mb-2">Bachelor of Technology in Information Technology</p>
              <p className="text-gray-300 mb-1">RD Engineering College, Ghaziabad</p>
              <p className="text-gray-400">Expected September 2025 | GPA: 7.4/10</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <h4 className="text-2xl font-semibold mb-4 text-purple-300">Additional Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="text-pink-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium text-lg">Leadership</p>
                    <p className="text-gray-300">Unstop Campus Ambassador</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="text-pink-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium text-lg">Sports</p>
                    <p className="text-gray-300">District-level Kabaddi player</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-pink-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium text-lg">Languages</p>
                    <p className="text-gray-300">English (Fluent), Hindi (Native)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={(el) => (sectionsRef.current.skills = el)}
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h3 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="w-2 h-10 bg-gradient-to-b from-purple-400 to-pink-400 rounded"></div>
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400" size={28} />
                <h4 className="text-xl font-semibold">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="bg-purple-600/30 px-4 py-2 rounded-full text-sm border border-purple-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-pink-400" size={28} />
                <h4 className="text-xl font-semibold">Frameworks</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="bg-pink-600/30 px-4 py-2 rounded-full text-sm border border-pink-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-400" size={28} />
                <h4 className="text-xl font-semibold">Databases</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span key={skill} className="bg-purple-600/30 px-4 py-2 rounded-full text-sm border border-purple-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-pink-400" size={28} />
                <h4 className="text-xl font-semibold">Web Technologies</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill) => (
                  <span key={skill} className="bg-pink-600/30 px-4 py-2 rounded-full text-sm border border-pink-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400" size={28} />
                <h4 className="text-xl font-semibold">Tools</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="bg-purple-600/30 px-4 py-2 rounded-full text-sm border border-purple-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={(el) => (sectionsRef.current.projects = el)}
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h3 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="w-2 h-10 bg-gradient-to-b from-purple-400 to-pink-400 rounded"></div>
            Key Projects
          </h3>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-102">
                <h4 className="text-2xl font-bold mb-2 text-purple-300">{project.title}</h4>
                <p className="text-sm text-pink-400 mb-4">{project.tech}</p>
                <p className="text-gray-300 mb-4 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, i) => (
                    <span key={i} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full text-sm border border-purple-400/30">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={(el) => (sectionsRef.current.experience = el)}
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h3 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="w-2 h-10 bg-gradient-to-b from-purple-400 to-pink-400 rounded"></div>
            Professional Experience
          </h3>
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-purple-300">{experience.role}</h4>
              <p className="text-xl text-pink-400 mb-1">{experience.company}</p>
              <p className="text-gray-400">{experience.location}</p>
              <p className="text-gray-400">{experience.duration}</p>
            </div>
            <div className="space-y-4">
              {experience.achievements.map((achievement, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => (sectionsRef.current.contact = el)}
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full text-center">
          <h3 className="text-4xl font-bold mb-12 flex items-center justify-center gap-3">
            <div className="w-2 h-10 bg-gradient-to-b from-purple-400 to-pink-400 rounded"></div>
            Get In Touch
          </h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <a href="mailto:aryantyagi22447@gmail.com" className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-lg hover:bg-white/10 px-6 py-4 rounded-xl transition-all border border-purple-500/30 hover:border-purple-500/60 transform hover:scale-105">
              <Mail size={24} className="text-purple-400" />
              <div className="text-left">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">aryantyagi22447@gmail.com</p>
              </div>
            </a>
            <a href="tel:+919719201029" className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-lg hover:bg-white/10 px-6 py-4 rounded-xl transition-all border border-purple-500/30 hover:border-purple-500/60 transform hover:scale-105">
              <Phone size={24} className="text-pink-400" />
              <div className="text-left">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">+91-9719201029</p>
              </div>
            </a>
            <a href="https://github.com/aryanty2314" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-lg hover:bg-white/10 px-6 py-4 rounded-xl transition-all border border-purple-500/30 hover:border-purple-500/60 transform hover:scale-105">
              <Github size={24} className="text-purple-400" />
              <div className="text-left">
                <p className="text-sm text-gray-400">GitHub</p>
                <p className="font-medium">aryanty2314</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/aryan-tyagi-software-dev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-lg hover:bg-white/10 px-6 py-4 rounded-xl transition-all border border-purple-500/30 hover:border-purple-500/60 transform hover:scale-105">
              <Linkedin size={24} className="text-pink-400" />
              <div className="text-left">
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="font-medium">aryan-tyagi-software-dev</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-black/30 backdrop-blur-lg border-t border-purple-500/20 py-6 text-center">
        <p className="text-gray-400">© 2024 Aryan Tyagi. Built with React & Tailwind CSS</p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
