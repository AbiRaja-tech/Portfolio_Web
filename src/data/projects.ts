import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: "VideosummGPT",
    description: "A model to get proper summary for a video using LSTM networks. The project provides automatic video summarization by selecting key frames and segments that represent significant events or actions.",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5i3BqfuJg3yV261lLiNQZw.jpeg",
    tags: ["Python", "LSTM", "Video Processing", "Deep Learning"],
    githubUrl: "https://github.com/AbiRaja-tech/VideosummGPT",
    documentationUrl: "https://github.com/AbiRaja-tech/VideosummGPT/blob/main/README.md"
  },
  {
    title: "Ecoloop AI",
    description: "An AI-powered sustainability coach designed for urban challenges. Uses Gemini API for voice interaction and Firebase for eco-activity tracking, offering real-time insights and personalized tips.",
    image: "https://repository-images.githubusercontent.com/458750876/12227b44-a3b6-41ec-a0b9-7554e981706b",
    tags: ["React.js", "Firebase", "Gemini API", "Google Maps API"],
    githubUrl: "https://github.com/AbiRaja-tech/Ecoloop_AI",
    documentationUrl: "https://github.com/AbiRaja-tech/Ecoloop_AI/blob/main/README.md"
  },
  {
    title: "ReNewTrade",
    description: "A renewable energy trading platform built with Next.js and TypeScript. Features 3D visualization tools and blockchain integration for energy trading.",
    image: "https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F2068d22b-33c0-4752-83bb-0cadb921aa0f.jpg&w=3840&q=75",
    tags: ["TypeScript", "Next.js", "Three.js", "Solidity"],
    githubUrl: "https://github.com/AbiRaja-tech/ReNewTrade",
    documentationUrl: "https://github.com/AbiRaja-tech/ReNewTrade/blob/main/README.md"
  }
];