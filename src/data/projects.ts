import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: "AI Self-Checkout System",
    description: "Developed an AI self-checkout system integrating TensorFlow, PyTorch, OpenCV, and a LightFM-based recommendation engine.",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5i3BqfuJg3yV261lLiNQZw.jpeg",
    tags: ["Python", "TensorFlow", "OpenCV", "RNN"],
    githubUrl: "https://github.com/username/ai-self-checkout",
    documentationUrl: "https://docs.example.com/ai-self-checkout.pdf"
  },
  {
    title: "Hateful Meme Detection",
    description: "Built an ensemble model for detecting malicious meme content using spaCy, Hugging Face Transformers, and CNN-RNN fusion.",
    image: "https://repository-images.githubusercontent.com/458750876/12227b44-a3b6-41ec-a0b9-7554e981706b",
    tags: ["Python", "PyTorch", "NLP", "CNN-RNN"],
    githubUrl: "https://github.com/username/hateful-meme-detection",
    documentationUrl: "https://docs.example.com/hateful-meme-detection.pdf"
  },
  {
    title: "FashionFlare: Human-Centric Image Refinement",
    description: "Developed a fashion image refinement tool using latent diffusion models and U-Net architecture for high-resolution processing.",
    image: "https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F2068d22b-33c0-4752-83bb-0cadb921aa0f.jpg&w=3840&q=75",
    tags: ["TensorFlow", "Keras", "U-Net", "Image Processing"],
    githubUrl: "https://github.com/username/fashionflare",
    documentationUrl: "https://docs.example.com/fashionflare.pdf"
  },
  {
    title: "AgriBizDeep: Model Viability & Loan Forecasts",
    description: "Built a deep learning model using LSTM and GRU for financial data analysis, integrated into a Dash and Plotly dashboard.",
    image: "https://files.valuethemarkets.com/containers/assets/generative-ai-farming-1718345830.jpg/efe52e5eaf90d0a179c1f654a6029be4.jpg",
    tags: ["LSTM", "GRU", "TensorFlow", "Dashboard"],
    githubUrl: "https://github.com/username/agribizdeep",
    documentationUrl: "https://docs.example.com/agribizdeep.pdf"
  }
];