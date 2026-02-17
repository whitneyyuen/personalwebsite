export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}