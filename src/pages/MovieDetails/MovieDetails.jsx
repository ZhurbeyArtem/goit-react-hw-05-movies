import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { movieDetails } from 'api/api'; 

import s from './MovieDetails.module.css';


export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailedInfo = await movieDetails(movieId);
        setMovie(detailedInfo);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <>
      {movie && (
        <>
          <Link to="/" className={s.back}>
            Go back
          </Link>
          <div className={`${s.main} ${s.underline}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className={s.image}
            />
            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <div className={s.underline}>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
