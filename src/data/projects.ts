import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: "VideosummGPT",
    description: "A model to get proper summary for a video using LSTM networks. The project provides automatic video summarization by selecting key frames and segments that represent significant events or actions.",
    image: "/images/videogpt.png",
    tags: ["Python", "LSTM", "Video Processing", "Deep Learning"],
    githubUrl: "https://github.com/AbiRaja-tech/VideosummGPT",
    documentationUrl: "https://github.com/AbiRaja-tech/VideosummGPT/blob/main/README.md"
  },
  {
    title: "Ecoloop AI",
    description: "An AI-powered sustainability coach designed for urban challenges. Uses Gemini API for voice interaction and Firebase for eco-activity tracking, offering real-time insights and personalized tips.",
    image: "/images/ecoloopai.png",
    tags: ["React.js", "Firebase", "Gemini API", "Google Maps API"],
    githubUrl: "https://github.com/AbiRaja-tech/Ecoloop_AI",
    documentationUrl: "https://github.com/AbiRaja-tech/Ecoloop_AI/blob/main/README.md"
  },
  {
    title: "ReNewTrade",
    description: "A renewable energy trading platform with integrated AI agents for automated trading and workflow optimization. Features intelligent contract management, predictive analytics, and automated decision-making for energy trading operations.",
    image: "/images/renewtrade.png",
    tags: ["AI Agents", "Workflow Automation", "TypeScript", "Next.js", "Blockchain", "LangChain"],
    githubUrl: "https://github.com/AbiRaja-tech/ReNewTrade",
    documentationUrl: "https://github.com/AbiRaja-tech/ReNewTrade/blob/main/README.md"
  }
];