export interface Education {
  institution: string;
  subtitle?: string;
  degree: string;
  date: string;
  location?: string;
  gpa?: string;
  coursework?: string[];
  activities?: string[];
  brand: string;
  brandBgClass: string;
}

export const education: Education[] = [
  {
    institution: 'New York University',
    subtitle: 'Concentration in Artificial Intelligence',
    degree: 'M.S. Computer Science',
    date: 'Dec 2026',
    coursework: ['Algorithms', 'Machine Learning', 'Computer Vision'],
    brand: 'nyu',
    brandBgClass: 'bg-neon-violet/10 border-neon-violet/20',
  },
  {
    institution: 'Rutgers University - New Brunswick',
    degree: 'B.S. Computer Science',
    date: 'Dec 2024',
    coursework: ['Data Structures', 'Software Methodology', 'Algorithms'],
    activities: ['Data Science Club', 'Sangam (South Indian Club)', 'Rewriting the Code (RTC)'],
    brand: 'rutgers',
    brandBgClass: 'bg-neon-rose/10 border-neon-rose/20',
  },
];
