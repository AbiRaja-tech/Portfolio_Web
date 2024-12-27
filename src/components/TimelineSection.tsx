import { motion } from 'framer-motion';
import type { TimelineItem } from '../types';

interface Props {
  title: string;
  items: TimelineItem[];
}

const TimelineSection = ({ title, items }: Props) => {
  return (
    <section className="py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{title}</h2>
      <div className="max-w-4xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row mb-12 last:mb-0"
          >
            {/* Date Column */}
            <div className="md:w-1/4 mb-4 md:mb-0">
              <div className="text-emerald-400 font-semibold">{item.date}</div>
            </div>

            {/* Content Column */}
            <div className="md:w-3/4 relative">
              {/* Timeline Line */}
              <div className="absolute top-0 left-0 md:-left-8 h-full w-px bg-emerald-500/50" />
              
              {/* Timeline Dot */}
              <div className="absolute top-0 -left-[5px] md:-left-[37px] w-2.5 h-2.5 rounded-full bg-emerald-500" />
              
              {/* Content */}
              <div className="pl-6 md:pl-8">
                <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    {item.logo && (
                      <img 
                        src={item.logo} 
                        alt={item.organization}
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-slate-300">{item.organization}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">{item.description}</p>
                  {item.achievements && (
                    <ul className="list-disc list-inside text-slate-400">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;