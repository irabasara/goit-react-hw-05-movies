import fetchMovies from 'helpers/fetchMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieImg, MoviesDetailsWrapper } from './movie-details.styled';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(`movie/${id}`)
      .then(response => {
        console.log('response', response);
        setMovies(response);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <MoviesDetailsWrapper>
      <MovieImg
        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        alt={movies.title}
      ></MovieImg>
      <div>
        <h2>{movies.title}</h2>
        <p>{movies.overview}</p>
        {/* {movies.genres.map(({ name }) => (
          <p>{name}</p>
        ))} */}
      </div>
    </MoviesDetailsWrapper>
  );
};

export default MoviesDetails;
