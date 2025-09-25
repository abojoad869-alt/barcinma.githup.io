import { Movie } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Digital Dreams',
    year: 2025,
    genre: ['Sci-Fi', 'Drama'],
    rating: 8.5,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    synopsis: 'A thought-provoking journey into the future of artificial intelligence and human consciousness in a digital world.',
    downloadLinks: [
      { quality: '1080p', url: '#' },
      { quality: '720p', url: '#' }
    ],
    watchLink: '#',
    views: 15420,
    featured: true,
    isNew: true
  },
  {
    id: '2',
    title: 'Midnight Chronicles',
    year: 2024,
    genre: ['Action', 'Thriller'],
    rating: 7.8,
    poster: 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400',
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    synopsis: 'An intense thriller following a detective through the dark streets of a city where nothing is as it seems.',
    downloadLinks: [
      { quality: '1080p', url: '#' },
      { quality: '720p', url: '#' }
    ],
    watchLink: '#',
    views: 12350,
    featured: true
  },
  {
    id: '3',
    title: 'The Last Garden',
    year: 2024,
    genre: ['Drama', 'Romance'],
    rating: 9.1,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    synopsis: 'A beautiful story of love and hope in a post-apocalyptic world where nature fights to reclaim the earth.',
    downloadLinks: [
      { quality: '1080p', url: '#' },
      { quality: '720p', url: '#' }
    ],
    watchLink: '#',
    views: 18750
  }
];