import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className={`lg:col-span-7 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
           {/* Left Column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          ></motion.div>
           
            <span className="text-accent-400 font-medium text-lg md:text-xl inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              DevNexus
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              We create digital experiences that <span className="text-accent-400">matter</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl">
              Transforming ideas into exceptional digital solutions. We blend creativity with technology to build brands and products that stand out.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md transition-colors group"
              >
                Contact Us 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-primary-800 font-medium rounded-md transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
          
          <div className={`lg:col-span-5 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl">
              <div className="text-white mb-6">
                <div className="flex justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-300">DevNexus</div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-5 bg-white/20 rounded-full w-3/4"></div>
                  <div className="h-5 bg-white/15 rounded-full"></div>
                  <div className="h-5 bg-white/10 rounded-full w-5/6"></div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-24 bg-white/10 rounded-lg"></div>
                    <div className="h-24 bg-white/10 rounded-lg"></div>
                    <div className="h-24 bg-white/10 rounded-lg"></div>
                    <div className="h-24 bg-white/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="text-center text-white">
                <div className="h-8 bg-accent-500 rounded-md flex items-center justify-center text-sm font-medium">
                  Launch Project
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
          
          
          
         
          
        </div>
      </div>
    </section>
  );
};

export default Hero;