export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'AI' | 'Framework';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}