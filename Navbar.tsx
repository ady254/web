import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-primary-800 font-bold text-xl md:text-2xl">
              Dev<span className="text-accent-500">Nexus</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-primary-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-800 hover:text-primary-600 transition-colors font-medium">Services</a>
            <a href="#portfolio" className="text-gray-800 hover:text-primary-600 transition-colors font-medium">Work</a>
            <a href="#team" className="text-gray-800 hover:text-primary-600 transition-colors font-medium">Team</a>
            <a href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors font-medium flex items-center">
              Contact Us <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-800 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg mt-4 shadow-lg py-4 px-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-gray-800 hover:text-primary-600 transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-gray-800 hover:text-primary-600 transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="text-gray-800 hover:text-primary-600 transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Work
              </a>
              <a 
                href="#team" 
                className="text-gray-800 hover:text-primary-600 transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Team
              </a>
              <a 
                href="#contact" 
                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
                onClick={toggleMenu}
              >
                Contact Us <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;