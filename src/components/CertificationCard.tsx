import type { Certification } from '../types';

interface Props {
  certification: Certification;
}

const CertificationCard = ({ certification }: Props) => (
  <div className="bg-slate-800/50 rounded-lg overflow-hidden shadow-lg w-full">
    <div className="h-48 overflow-hidden">
      <img 
        src={certification.image} 
        alt={certification.name}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{certification.name}</h3>
        <img 
          src={certification.issuerLogo} 
          alt={certification.issuer}
          className="w-10 h-10 rounded-full"
        />
      </div>
      <p className="text-slate-400 mb-2">{certification.issuer}</p>
      <div className="flex justify-between items-center">
        <span className="text-emerald-400">{certification.date}</span>
        <a 
          href={certification.verificationUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-emerald-400 hover:text-emerald-300"
        >
          Verify ↗
        </a>
      </div>
    </div>
  </div>
);

export default CertificationCard;