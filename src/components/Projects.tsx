import { Github, FileText } from 'lucide-react';
import type { Project } from '../types';
import { projects } from '../data';

const Projects = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-slate-900/50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project: Project, index: number) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 rounded-full hover:bg-slate-600/50 transition-colors group"
                      title="View Source"
                    >
                      <Github className="w-5 h-5 group-hover:text-emerald-400" />
                    </a>
                  )}
                  {project.documentationUrl && (
                    <a
                      href={project.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 rounded-full hover:bg-slate-600/50 transition-colors group"
                      title="View Documentation"
                    >
                      <FileText className="w-5 h-5 group-hover:text-emerald-400" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm md:text-base text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-2 md:px-3 py-1 bg-emerald-900/50 rounded-full text-xs md:text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;