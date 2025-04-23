import type { Writing } from '../types';

export const writings: Writing[] = [
  {
    id: '1',
    title: 'Integrating Explainable AI (XAI) into NHS Clinical Genomics Units',
    description: 'A paper on the integration of AI in NHS Clinical Genomics, emphasizing the need for explainability and Human-in-the-Loop frameworks to build trust in black-box models used in genomic diagnostics.',
    category: 'research',
    date: '2025-02-15',
    readTime: '20 min',
    documentUrl: 'https://drive.google.com/file/d/10uNgMwTIlujmyR5Gb9yJljXcy3ff3rxI/view?usp=sharing',
    tags: ['XAI', 'Healthcare', 'Genomics', 'Human-in-the-Loop', 'Clinical AI']
  },
  {
    id: '2',
    title: 'Enhancing Biomedical RE Using Adaptive Focal Loss and Hard Negative Contrastive Learning',
    description: 'Novel approaches for biomedical relation extraction using focal loss and contrastive learning with hard negative mining to address class imbalance and improve fine-grained relation discrimination on the BioRED dataset.',
    category: 'research',
    date: '2025-03-10',
    readTime: '25 min',
    documentUrl: 'https://drive.google.com/file/d/1rOBcg_5l-sxqT3ez8P13qiU9Ks5vTOsP/view?usp=sharing',
    tags: ['Machine Learning', 'Biomedical NLP', 'Contrastive Learning', 'Class Imbalance', 'Relation Extraction']
  }
]; 