import React, { useState, useEffect } from 'react';
import Section from './Section';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team: TeamMember[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: '10+ years of experience leading creative teams and award-winning campaigns.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@pixelperfect.com'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Full-stack developer with a passion for clean code and innovative solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@pixelperfect.com'
      }
    },
    {
      id: 3,
      name: 'Olivia Rodriguez',
      role: 'UX/UI Designer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Creating intuitive and beautiful user experiences that meet business goals.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'olivia@pixelperfect.com'
      }
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Digital Strategist',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Developing data-driven strategies that deliver measurable business results.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'james@pixelperfect.com'
      }
    }
  ];

  return (
    <Section
      id="team"
      title="Meet Our Team"
      subtitle="We're a talented group of creative professionals who are passionate about what we do."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div 
            key={member.id}
            className={`transition-all duration-500 delay-${index * 100} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-72 md:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-4 flex space-x-3 mb-4">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter} 
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a 
                        href={`mailto:${member.social.email}`} 
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-accent-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Team;