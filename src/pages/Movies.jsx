import { search } from 'api/api';
import React, { useEffect, useState } from 'react';

import { Form } from '../components/form/Form';
import { List, ListItem } from 'components/LIst';
import { Link, useLocation } from 'react-router-dom';

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
        <List>
          {data.map(e => (
            <ListItem key={e.id}>
              <Link to={`/movies/${e.id}`}>{e.title}</Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};
