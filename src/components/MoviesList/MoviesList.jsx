import React from 'react';
import { Item, Link, MovieList } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(({ title, name, id }) => {
        return (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
              {name}
            </Link>
          </Item>
        );
      })}
    </MovieList>
  );
};

export default MoviesList;
