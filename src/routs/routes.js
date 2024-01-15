import { createHashRouter } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';
import { Navbar } from 'components/navbar/Navbar';

export const router = createHashRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails />,
        children: [
          {
            path: 'cast',
            element: <Cast />,
          },
          {
            path: 'reviews',
            element: <Reviews />,
          },
        ],
      },
    ],
  },
]);
