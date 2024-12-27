import { motion } from 'framer-motion';

const experienceData = [
  {
    year: "2022 - Present",
    role: "ML Engineer",
    company: "Tech Corp",
    logo: "/company-logos/techcorp.png",
    description: "Developed and deployed machine learning models for production",
    achievements: [
      "Improved model accuracy by 25%",
      "Reduced inference time by 40%",
      "Led a team of 3 engineers"
    ]
  },
  {
    year: "2020 - 2022",
    role: "Data Analyst",
    company: "Data Solutions Inc",
    logo: "/company-logos/datasolutions.png",
    description: "Analyzed large datasets to provide business insights",
    achievements: [
      "Created automated reporting system",
      "Identified $1M in cost savings",
      "Optimized data pipeline efficiency"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-8 bg-slate-900/50">
      <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-500/50" />
        
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-16`}
          >
            <div className="w-1/2" />
            <div className="w-8 relative flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-emerald-500" />
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
              <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={exp.company}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <span className="text-emerald-400 font-semibold">{exp.year}</span>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-slate-300">{exp.company}</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-slate-400">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;