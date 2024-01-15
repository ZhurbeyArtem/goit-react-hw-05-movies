import { movieReviews } from 'api/api';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [data, setData] = useState([]);
  const { movieId: id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await movieReviews(id);
        setData(results);
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
          {data.map(e => (
            <li key={e.id}>
              <h3>Author: {e.author}</h3>
              <p>{ e.content }</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
