import React, { useState, useEffect } from 'react';
import Section from './Section';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  text: string;
  stars: number;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Jennifer Lee',
      company: 'EcoLife Brands',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'The Pixel Perfect team completely transformed our digital presence. Their approach was strategic, creative, and focused on results. Our online sales have increased by 200% since launching our new website.',
      stars: 5
    },
    {
      id: 2,
      name: 'Robert Taylor',
      company: 'Fintech Solutions',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Working with Pixel Perfect has been an exceptional experience. They took the time to understand our complex industry and delivered a platform that exceeded our expectations. Their ongoing support is outstanding.',
      stars: 5
    },
    {
      id: 3,
      name: 'Maria Garcia',
      company: 'Travel Ventures',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Pixel Perfect created a mobile app that has revolutionized how we engage with our customers. Their attention to detail and user experience expertise has resulted in a 5-star rated app that our users love.',
      stars: 5
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section
      title="What Our Clients Say"
      subtitle="Don't just take our word for it. Here's what our clients have to say about our work."
      light
    >
      <div className={`max-w-4xl mx-auto transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-primary-600"></div>
          
          <div className="relative pt-16 px-6 pb-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-accent-600">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;