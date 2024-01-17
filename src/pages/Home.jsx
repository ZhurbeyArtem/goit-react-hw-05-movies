import React, { useEffect, useState } from 'react';

import { trends } from 'api/api';
import { MoviesList } from 'components/list/MoviesList';

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      const trendFilms = await trends();
      setData(trendFilms);
    };
    fetchDate();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {data.length > 0 ? <MoviesList data={data} /> : <p>no data</p>}
    </div>
  );
};
