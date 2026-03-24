export interface Achievement {
  title: string;
  venue: string;
  role: string;
  institution: string;
  date: string;
  venueBrand: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Most Advanced/Unique Algorithm and Code Overall',
    venue: 'Rutgers Data Science Club Fall 2023 Datathon',
    role: 'Winner',
    institution: 'Rutgers University',
    date: '2023',
    venueBrand: 'datathon',
  },
  {
    title: 'NCWIT Award for Aspirations in Computing — Certificate of Distinction',
    venue: 'National Center for Women in Information Technology',
    role: 'Recipient',
    institution: 'NCWIT',
    date: '2021',
    venueBrand: 'ncwit',
  },
];
