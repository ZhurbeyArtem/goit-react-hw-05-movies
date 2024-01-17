import React from 'react'
import { List, ListItem } from './LIst';
import { Link } from 'react-router-dom';

export const MoviesList = ({ data, pathname }) => {
  return (
    <List>
      {data &&
        data.map(e => (
          <ListItem key={e.id}>
            <Link to={`/movies/${e.id}`} state={{from: pathname}}>{e.title}</Link>
          </ListItem>
        ))}
    </List>
  );
};
