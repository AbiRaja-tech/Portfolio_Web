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
  },
  {
    id: '3',
    title: 'Deep vs Traditional Vision: CIFAR-10 and Caltech101 Comparison',
    description: 'This report compares traditional computer vision (SIFT+BoW+SVM) and deep learning (CNNs) for image classification on CIFAR-10 and Caltech-101 datasets. It details methodology, including SIFT feature extraction, K-means clustering for visual vocabularies, and CNN architectures (custom VGG-like and MobileNetV2 transfer learning). The findings consistently show CNNs significantly outperforming traditional methods in accuracy and generalization, despite higher computational demands. The report concludes by discussing deep learning\'s dominance in modern robotics vision, highlighting its advantages and limitations compared to classical approaches.',
    category: 'research',
    date: '2025-05-09',
    readTime: '30 min',
    documentUrl: 'https://drive.google.com/file/d/1v_deGEpHbdK_nkTv1dex02yYpIIvbaSw/view?usp=sharing',
    tags: ['Computer Vision', 'Deep Learning', 'CNN', 'Traditional Vision', 'Cognitive Robotics', 'Transfer Learning']
  }
]; 