import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { movieActors } from 'api/api';

export const Cast = () => {
  const [data, setData] = useState([]);
  const { movieId: id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { cast } = await movieActors(id);
        setData(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : 'https://images.prom.ua/4897349446_w200_h640_4897349446.jpg'
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};
