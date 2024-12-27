import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { certifications } from '../data';
import CertificationCard from './CertificationCard';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCertification = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const previousCertification = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section className="py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Certifications</h2>
      <div className="max-w-6xl mx-auto">
        <div className="relative px-8 md:px-16">
          <div className="flex justify-center items-center gap-4 md:gap-8">
            <motion.div
              key={`card-${currentIndex}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-[450px]"
            >
              <CertificationCard certification={certifications[currentIndex]} />
            </motion.div>
            <motion.div
              key={`card-${(currentIndex + 1) % certifications.length}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block w-[450px]"
            >
              <CertificationCard certification={certifications[(currentIndex + 1) % certifications.length]} />
            </motion.div>
          </div>
          
          <button
            onClick={previousCertification}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-800/50 p-2 md:p-3 rounded-full hover:bg-slate-700/50 transition-colors"
            aria-label="Previous certification"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextCertification}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-800/50 p-2 md:p-3 rounded-full hover:bg-slate-700/50 transition-colors"
            aria-label="Next certification"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-emerald-400' : 'bg-slate-600'
              }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;