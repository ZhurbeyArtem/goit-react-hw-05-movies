import { search } from 'api/api';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Form } from '../components/form/Form';

import { MoviesList } from 'components/list/MoviesList';

export const Movies = () => {
  const location = useLocation();
  const [query, setQuery] = useState(location.search.split('=')[1]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const trendFilms = await search(query);
      setData(trendFilms);
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <Form setQuery={setQuery} />

      {data ? (
        <MoviesList
          data={data}
          pathname={location.pathname + location.search}
        />
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};
