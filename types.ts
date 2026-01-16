export type ProjectDomain = 
  | 'AI/ML' 
  | 'NLP' 
  | 'API' 
  | 'Data' 
  | 'DevOps' 
  | 'Multimodal' 
  | 'Systems';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  domain: ProjectDomain;
  problem_human: string;
  limit_human: string;
  ai_role: string;
  human_role: string;
  solution_technical: string;
  business_value: string;
  stack: string[];
  architecture: string;
  features: string[];
  metrics_expected: string;
  deliverables: string[];
  demo_mode?: boolean;
  possible_extensions: string[];
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description_tech: string;
  description_human: string;
}