import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { trends } from 'api/api';
import { List, ListItem } from 'components/LIst';

export const Home = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchDate = async () => {
      const trendFilms = await trends();
      setData(trendFilms);
    }
    fetchDate()
  }, [])

  return (
    <div>
      <h2>Trending today</h2>
      <List>
        {data &&
          data.map(e => (
            <ListItem key={e.id}>
              <Link to={`movies/${e.id}`}>{e.title}</Link>
            </ListItem>
          ))}
      </List>
    </div>
  );
};
