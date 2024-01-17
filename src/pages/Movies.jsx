import { search } from 'api/api';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Form } from '../components/form/Form';

import { MoviesList } from 'components/list/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useSearchParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(query);
      const trendFilms = await search(query.get('query'));
      setData(trendFilms);
    };
    fetchData();
  }, [query]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
     setQuery(nextParams);
   };

  return (
    <div>
      <Form updateQueryString={updateQueryString} />

      {data.length > 0 ? <MoviesList data={data} /> : <p>no data</p>}
    </div>
  );
};
