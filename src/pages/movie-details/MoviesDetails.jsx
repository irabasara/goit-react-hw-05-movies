import fetchMovies from 'helpers/fetchMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieImg, MoviesDetailsWrapper } from './movie-details.styled';

const baseURL = 'https://image.tmdb.org/t/p/w500';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(`movie/${id}`)
      .then(response => {
        setMovies(response);
        return;
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <MoviesDetailsWrapper>
      <MovieImg
        src={baseURL + movies.poster_path}
        alt={movies.title}
      ></MovieImg>
      <div>
        <h2>{movies.title}</h2>
        <p>{movies.overview}</p>
      </div>
    </MoviesDetailsWrapper>
  );
};

export default MoviesDetails;
