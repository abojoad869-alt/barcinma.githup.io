export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  poster: string;
  trailer: string;
  synopsis: string;
  downloadLinks: {
    quality: string;
    url: string;
  }[];
  watchLink: string;
  views: number;
  featured?: boolean;
  isNew?: boolean;
}

export interface Series {
  id: string;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  cover: string;
  synopsis: string;
  episodes: Episode[];
  views: number;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  watchLink: string;
  downloadLink: string;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  count: number;
}

export interface Language {
  code: 'en' | 'ar';
  name: string;
  dir: 'ltr' | 'rtl';
}