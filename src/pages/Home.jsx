import React, { useEffect, useState } from 'react';

import { trends } from 'api/api';
import { MoviesList } from 'components/list/MoviesList';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      const trendFilms = await trends();
      setData(trendFilms);
    };
    fetchDate();
  }, []);

    const { pathname } = useLocation();

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList data={data} pathname={pathname} />
    </div>
  );
};
