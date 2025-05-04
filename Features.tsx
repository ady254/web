import React, { useState, useEffect } from 'react';
import Section from './Section';
import { Shield, Clock, Users, Code2, Sparkles, Target } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, isVisible, delay }) => {
  return (
    <div 
      className={`bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-lg p-8 rounded-xl border border-accent-500/20 transition-all duration-500 delay-${delay} hover:border-accent-500/40 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="bg-accent-500/10 w-16 h-16 flex items-center justify-center rounded-lg mb-6 text-accent-400 group-hover:bg-accent-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent-400 transition-colors">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees. We believe in complete transparency throughout our engagement.",
      delay: 100
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Rapid Delivery",
      description: "Quick turnaround times without compromising quality. We understand time is crucial for your business.",
      delay: 200
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Team",
      description: "A dedicated team assigned to your project, ensuring consistent communication and delivery.",
      delay: 300
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Clean Code",
      description: "Well-documented, maintainable code following best practices and industry standards.",
      delay: 400
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Innovation First",
      description: "Cutting-edge solutions using the latest technologies and development practices.",
      delay: 500
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal-Oriented",
      description: "Focus on delivering measurable results that align with your business objectives.",
      delay: 600
    }
  ];

  return (
    <Section
      id="features"
      title="Why Choose Us"
      subtitle="We're committed to delivering exceptional value and results for our clients."
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            isVisible={isVisible}
            delay={feature.delay}
          />
        ))}
      </div>
    </Section>
  );
};

export default Features;