import { motion } from 'framer-motion';

const educationData = [
  {
    year: "2020 - 2022",
    degree: "Master's in Computer Science",
    institution: "University of Example",
    description: "Specialized in Machine Learning and AI"
  },
  {
    year: "2016 - 2020",
    degree: "Bachelor's in Computer Science",
    institution: "Example Institute of Technology",
    description: "Core Computer Science fundamentals"
  }
];

const Education = () => {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-500/50" />
        
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12`}
          >
            <div className="w-1/2" />
            <div className="w-8 relative flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-emerald-500" />
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
              <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
                <span className="text-emerald-400 font-semibold">{edu.year}</span>
                <h3 className="text-xl font-bold mt-2">{edu.degree}</h3>
                <p className="text-slate-300 mt-1">{edu.institution}</p>
                <p className="text-slate-400 mt-2">{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;