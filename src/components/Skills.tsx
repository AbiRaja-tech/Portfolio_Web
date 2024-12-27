import { skills } from '../data';
import type { Skill } from '../types';

const Skills = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {skills.map((skill: Skill, index: number) => (
          <div 
            key={index}
            className="bg-slate-800/50 p-4 md:p-6 rounded-lg flex items-center gap-4 hover:bg-slate-700/50 transition"
          >
            <skill.icon className="text-3xl md:text-4xl text-emerald-400" />
            <div>
              <h3 className="text-lg md:text-xl font-bold">{skill.name}</h3>
              <p className="text-sm md:text-base text-slate-400">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;