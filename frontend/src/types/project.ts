export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string | null;
  featured: boolean;
  liveUrl?: string | null;
  githubUrl?: string | null;
  technologies: string[];
  architectureFlow?: string | null;
  devopsFlow?: string | null;
  highlights: string[];
  order: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  data: T;
  timestamp: string;
  message?: string;
}
