import React from 'react';
import { socialLinks } from '../data/navData';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const getSocialIcon = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ size?: number }>>)[iconName];
    return Icon ? <Icon size={18} /> : null;
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Yuvaraj Rolli</h3>
              <p className="text-gray-400 max-w-xs">
                Frontend Developer & Computer Science Engineering Student passionate about creating engaging web experiences.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-sm font-semibold uppercase text-gray-400 mb-3">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.platform}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {currentYear} Yuvaraj Rolli. All rights reserved.
              </p>
              
              <nav className="flex gap-6">
                <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a>
                <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a>
                <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors">Skills</a>
                <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a>
                <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;