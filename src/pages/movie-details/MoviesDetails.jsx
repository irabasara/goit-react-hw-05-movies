import { BackLink } from 'components/BackLink/BackLink';
import {
  AboutWrapper,
  MovieImg,
  MoviesDetailsWrapper,
} from 'components/Movie/Movie.styled';
import fetchMovies from 'helpers/fetchMovies';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const baseURL = 'https://image.tmdb.org/t/p/w500';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');
  // console.log('backLinkHref', backLinkHref);

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
      <BackLink to={backLinkHref.current}>Back</BackLink>

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
        <Link to="cast">cast</Link>
        <Link to="review">review</Link>
      </AboutWrapper>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
