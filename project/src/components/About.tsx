import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden">
                <img 
                  src="WhatsApp Image 2025-02-14 at 08.05.58_fab0039c.jpg" 
                  alt="Profile" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Hello! I'm Yuvaraj, a passionate Frontend Developer and Computer Science Engineering student. I'm dedicated to
                learning and implementing modern web technologies to create engaging user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Currently pursuing my degree in Computer Science and Engineering, I focus on building responsive and
                user-friendly web applications. I'm constantly exploring new technologies and best practices in web development.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">Born: Jan 5, 2005</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">Bangalore, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">Frontend Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">B.E. Computer Science</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;