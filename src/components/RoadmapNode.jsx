import { motion } from 'framer-motion';

const RoadmapNode = ({ 
  isLeft, 
  year, 
  title, 
  subtitle, 
  description, 
  logo, 
  achievements = [] 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}
    >
      <div className="w-1/2" />
      <div className="w-8 relative flex items-center justify-center">
        <div className="h-4 w-4 rounded-full bg-emerald-500" />
      </div>
      <div className={`w-1/2 ${isLeft ? 'pl-8' : 'pr-8'}`}>
        <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            {logo && (
              <img src={logo} alt={subtitle} className="w-12 h-12 rounded-full" />
            )}
            <div>
              <span className="text-emerald-400 font-semibold">{year}</span>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-slate-300">{subtitle}</p>
            </div>
          </div>
          <p className="text-slate-300 mb-4">{description}</p>
          {achievements.length > 0 && (
            <ul className="list-disc list-inside text-slate-400">
              {achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RoadmapNode;