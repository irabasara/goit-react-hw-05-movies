import React from 'react';
import { Item, Link, MovieList } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(({ title, name, id }) => {
        return (
          <Item key={id}>
            <Link to={`/movies/${id}`}>
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
