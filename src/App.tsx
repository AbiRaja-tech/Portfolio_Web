import Hero from './components/Hero';
import TimelineSection from './components/TimelineSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import { education } from './data/education';
import { experience } from './data/experience';

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white min-h-screen">
      <Hero />
      <TimelineSection title="Education" items={education} />
      <TimelineSection title="Experience" items={experience} />
      <Skills />
      <Projects />
      <Certifications />
    </div>
  );
}

export default App;