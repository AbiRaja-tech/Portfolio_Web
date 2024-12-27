import { FaJava,FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiPytorch,SiGoogleanalytics,SiPowerbi,SiTensorflow, SiScikitlearn, SiMongodb } from 'react-icons/si';
import type { Skill } from '../types';

export const skills: Skill[] = [
  { name: 'Java', icon: FaJava, level: 'Advanced' },
  { name: 'React', icon: FaReact, level: 'Advanced' },
  { name: 'Python', icon: FaPython, level: 'Expert' },
  { name: 'Node.js', icon: FaNodeJs, level: 'Advanced' },
  { name: 'PyTorch', icon: SiPytorch, level: 'Advanced' },
  { name: 'TensorFlow', icon: SiTensorflow, level: 'Advanced' },
  { name: 'Scikit-Learn', icon: SiScikitlearn, level: 'Expert' },
  { name: 'Power BI', icon: SiPowerbi, level: 'Intermediate' },
  { name: 'Google Analytics', icon: SiGoogleanalytics, level: 'Intermediate' },
  { name: 'MLOps', icon: SiTensorflow, level: 'Advanced' }, // Placeholder icon for MLOps
  { name: 'CI/CD', icon: SiTensorflow, level: 'Intermediate' }, // Placeholder icon for CI/CD
  { name: 'MongoDB', icon: SiMongodb, level: 'Intermediate' }
];