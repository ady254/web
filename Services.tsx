import React, { useState, useEffect } from 'react';
import Section from './Section';
import { PenTool, Globe, Code, LineChart, Smartphone, Megaphone } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, isVisible, delay }) => {
  return (
    <div 
      className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 delay-${delay} hover:shadow-xl hover:transform hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg mb-6 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Brand Identity & Design",
      description: "We craft compelling brand identities that resonate with your audience and differentiate your business in the market.",
      delay: 100
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Design & Development",
      description: "Our websites combine stunning visuals with seamless functionality to deliver exceptional user experiences.",
      delay: 200
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Web Applications",
      description: "We build tailored web applications that solve complex business challenges and streamline operations.",
      delay: 300
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Data-driven strategies that increase visibility, drive traffic, and convert visitors into loyal customers.",
      delay: 400
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
      delay: 500
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Content Strategy",
      description: "Engaging content that tells your story, builds authority, and drives meaningful engagement with your audience.",
      delay: 600
    }
  ];

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="We offer comprehensive digital solutions tailored to your specific needs."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            isVisible={isVisible}
            delay={service.delay}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;