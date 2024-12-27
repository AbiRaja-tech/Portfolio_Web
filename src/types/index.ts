// ... (keep existing types)

export interface TimelineItem {
  date: string;
  title: string;
  organization: string;
  description: string;
  achievements?: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  documentationUrl?: string;
}