import React, { useState, useEffect } from 'react';
import Section from './Section';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface FilterButtonProps {
  category: string;
  activeCategory: string;
  onClick: (category: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ category, activeCategory, onClick }) => {
  return (
    <button
      onClick={() => onClick(category)}
      className={`px-4 py-2 rounded-md transition-colors ${
        activeCategory === category
          ? 'bg-primary-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {category}
    </button>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Eco Store Redesign',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'E-commerce website redesign with improved UX and conversion optimization.'
    },
    {
      id: 2,
      title: 'Finance Dashboard',
      category: 'Web App',
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Interactive financial dashboard with real-time data visualization.'
    },
    {
      id: 3,
      title: 'Travel App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Travel planning application with personalized recommendations.'
    },
    {
      id: 4,
      title: 'Restaurant Branding',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/5531004/pexels-photo-5531004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete brand identity for an upscale restaurant chain.'
    },
    {
      id: 5,
      title: 'Health Tracker',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Fitness and wellness tracking app with social features.'
    },
    {
      id: 6,
      title: 'Corporate Website',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Enterprise website with custom CMS and multilingual support.'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  return (
    <Section 
      id="portfolio" 
      title="Our Work" 
      subtitle="Explore our latest projects and see how we've helped our clients achieve their goals."
      light
    >
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category, index) => (
          <FilterButton
            key={index}
            category={category}
            activeCategory={activeCategory}
            onClick={setActiveCategory}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <div 
            key={project.id}
            className={`group relative overflow-hidden rounded-xl transition-all duration-500 delay-${index * 100} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 w-full">
                <div className="mb-2">
                  <span className="text-accent-400 text-sm font-medium px-2 py-1 rounded-full bg-black/20 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-white border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-gray-900 transition-colors"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;