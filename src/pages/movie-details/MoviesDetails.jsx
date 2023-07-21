import { BackLink } from 'components/BackLink/BackLink';
import {
  AboutWrapper,
  MovieImg,
  MoviesDetailsWrapper,
} from 'components/Movie/Movie.styled';
import fetchMovies from 'helpers/fetchMovies';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const baseURL = 'https://image.tmdb.org/t/p/w500';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovies(`movie/${id}`)
      .then(response => {
        setMovies(response);
        return;
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!movies) return;

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>

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
      <AboutWrapper>
        <h2>About movie</h2>
        <Link to="cast" state={{ from: location }}>
          cast
        </Link>
        <Link to="review" state={{ from: location }}>
          review
        </Link>
      </AboutWrapper>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
