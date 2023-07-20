import React, { useEffect, useState } from 'react';
import fetchMovies from '../../helpers/fetchMovies';
import { Item, Link, MovieList } from './Home.styled';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies('trending/all/week').then(({ results }) => setMovies(results));
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default Home;
