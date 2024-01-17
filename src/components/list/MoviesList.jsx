import React from 'react'
import { List, ListItem } from './LIst.style';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ data }) => {
  const location = useLocation()
  return (
    <List>
      {
        data.map(e => (
          <ListItem key={e.id}>
            <Link to={`/movies/${e.id}`} state={{ from: location }}>
              {e.title}
            </Link>
          </ListItem>
        ))}
    </List>
  );
};
