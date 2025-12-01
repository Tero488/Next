
export interface Case {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  gallery?: string[];
}

export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface Stat {
  id: number;
  label: string;
  value: string;
}

export interface Designer {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface JobPosition {
  id: string;
  title: string;
  requirements: string[];
}
