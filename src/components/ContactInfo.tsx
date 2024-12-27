import { Mail, Linkedin, Github } from 'lucide-react';

const ContactInfo = () => (
  <div className="flex gap-6 items-center justify-center">
    <a
      href="mailto:arrssekaran@gmail.com"
      className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-colors group"
      title="Email"
    >
      <Mail className="w-6 h-6 group-hover:text-emerald-400 transition-colors" />
    </a>
    <a
      href="https://linkedin.com/in/abirajaraja"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-colors group"
      title="LinkedIn"
    >
      <Linkedin className="w-6 h-6 group-hover:text-emerald-400 transition-colors" />
    </a>
    <a
      href="https://github.com/AbiRaja-tech"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-colors group"
      title="GitHub"
    >
      <Github className="w-6 h-6 group-hover:text-emerald-400 transition-colors" />
    </a>
  </div>
);

export default ContactInfo;