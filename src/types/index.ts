export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  rating: number;
  thumbnail: string;
  category: string;
  totalStudents: number;
  lastUpdated: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor';
  avatar?: string;
}