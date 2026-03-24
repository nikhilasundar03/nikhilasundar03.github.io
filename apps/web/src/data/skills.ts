export interface SkillGroup {
  category: string;
  items: string[];
  color: 'rose' | 'gold' | 'violet';
}

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['Java', 'Python', 'C', 'C++', 'SQL'], color: 'rose' },
  { category: 'AI / ML', items: ['PyTorch', 'Prophet', 'LLM Agents', 'Neural Networks', 'Computer Vision', 'NLP'], color: 'gold' },
  { category: 'Frameworks & Tools', items: ['Spring Boot', 'Android Development', 'Git', 'REST APIs'], color: 'violet' },
  { category: 'Cloud & Infrastructure', items: ['AWS (S3, SQS)', 'Docker'], color: 'rose' },
  { category: 'Data & Databases', items: ['SQL', 'Data Structures', 'Time Series Analysis', 'Pandas'], color: 'gold' },
  { category: 'Interests', items: ['SWE', 'Data Science', 'AI/ML Development', 'Mobile App Development', 'Cloud Computing', 'AI Agents'], color: 'violet' },
];
