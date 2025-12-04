
export interface Case {
  id: string;
  title: string;
  category: string;
  type?: 'idealyou' | 'spacemagic'; // 享你所想(空间案例) 或 百变空间(户型案例)
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

export interface DesignerSection {
  title: string;
  items: string[];
  variant?: 'paragraph' | 'list';
}

export interface Designer {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  sections?: DesignerSection[];
}

export interface JobPosition {
  id: string;
  title: string;
  requirements: string[];
}
