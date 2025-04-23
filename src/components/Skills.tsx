import { motion } from 'framer-motion';

const SkillCard = ({ icon, name }: { icon: string, name: string }) => (
  <motion.div
    className="bg-slate-900/80 p-6 rounded-lg hover:bg-slate-800/80 transition-all duration-300 flex flex-col items-start"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="w-10 h-10 mb-4">
      <img 
        src={`/images/${icon}`}
        alt={name} 
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="text-lg font-medium text-white">{name}</h3>
  </motion.div>
);

const Skills = () => {
  // AI, ML, and Data Skills
  const aiMlSkills = [
    {
      icon: "pytorch.png",
      name: "PyTorch"
    },
    {
      icon: "tensorflow.png",
      name: "TensorFlow"
    },
    {
      icon: "scikit.png",
      name: "Scikit-Learn"
    },
    {
      icon: "mlops.png",
      name: "MLOps"
    },
    {
      icon: "powerbi.png",
      name: "Power BI"
    },
    {
      icon: "google-analytics.png",
      name: "Google Analytics"
    }
  ];

  // Programming and Development Skills
  const devSkills = [
    {
      icon: "python.png",
      name: "Python"
    },
    {
      icon: "java.png",
      name: "Java"
    },
    {
      icon: "react.png",
      name: "React"
    },
    {
      icon: "nodejs.png",
      name: "Node.js"
    },
    {
      icon: "cicd.png",
      name: "CI/CD"
    },
    {
      icon: "mongodb.png",
      name: "MongoDB"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/90">
      <div className="max-w-6xl mx-auto">
        {/* AI, ML, and Data Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-emerald-400">AI, ML & Data</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {aiMlSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Programming and Development Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-emerald-400">Programming & Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {devSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;