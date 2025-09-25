import { Series } from '../types';

export const series: Series[] = [
  {
    id: '1',
    title: 'Urban Legends',
    year: 2024,
    genre: ['Mystery', 'Horror'],
    rating: 8.2,
    cover: 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400',
    synopsis: 'A supernatural series exploring modern urban legends and the dark secrets hidden in plain sight.',
    views: 25600,
    episodes: [
      {
        id: '1',
        number: 1,
        title: 'The Vanishing',
        watchLink: '#',
        downloadLink: '#'
      },
      {
        id: '2',
        number: 2,
        title: 'Echoes in the Dark',
        watchLink: '#',
        downloadLink: '#'
      },
      {
        id: '3',
        number: 3,
        title: 'The Mirror Man',
        watchLink: '#',
        downloadLink: '#'
      }
    ]
  },
  {
    id: '2',
    title: 'Tech Revolution',
    year: 2025,
    genre: ['Sci-Fi', 'Drama'],
    rating: 8.7,
    cover: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    synopsis: 'Following a group of innovators as they navigate the challenges of creating world-changing technology.',
    views: 19200,
    episodes: [
      {
        id: '1',
        number: 1,
        title: 'The Prototype',
        watchLink: '#',
        downloadLink: '#'
      },
      {
        id: '2',
        number: 2,
        title: 'Beta Testing',
        watchLink: '#',
        downloadLink: '#'
      }
    ]
  }
];