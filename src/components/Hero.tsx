import { TypeAnimation } from 'react-type-animation';
import MatrixRain from './MatrixRain';
import ContactInfo from './ContactInfo';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <MatrixRain />
      
      <div className="relative z-10 text-center p-6 md:p-12 bg-black/20 backdrop-blur-sm rounded-lg w-full max-w-2xl">
        <TypeAnimation
          sequence={[
            'Abi Raja',
            1000,
          ]}
          wrapper="h1"
          speed={50}
          className="text-4xl md:text-6xl font-bold mb-4 md:mb-6"
        />
        
        <p className="text-lg md:text-xl mb-4 md:mb-6">Experienced and Interested in</p>
        
        <TypeAnimation
          sequence={[
            'ML/AI Engineer',
            2000,
            'Data Analyst',
            2000,
            'Financial Technology',
            2000,
            'Full Stack Developer',
            2000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-emerald-400 mb-6 md:mb-8"
        />

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-700">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Hero;