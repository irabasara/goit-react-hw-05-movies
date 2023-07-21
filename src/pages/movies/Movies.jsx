import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import fetchMovies from 'helpers/fetchMovies';
// import { Item, MovieList, Link } from 'pages/home/Home.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const [movies, setMovies] = useState([]);

  const handlerFormSubmit = search => {
    setSearchParams({ search });
  };

  useEffect(() => {
    if (!search) return;
    fetchMovies(`search/movie?query=${search}`)
      .then(({ results }) => {
        setMovies(results);
        return;
      })
      .catch(err => console.error(err));
  }, [search]);

  return (
    <>
      <SearchBar onSubmit={handlerFormSubmit} />
      <MoviesList movies={movies} />
    </>
  );
  // const { id } = useParams();

  // const handlerChange = e => {
  //   setSearch(e.target.value.toLowerCase());
  // };

  // const handlerSubmit = e => {
  //   e.preventDefault();

  //   // if (search.trim() === '') {
  //   //   alert('enter your search');
  //   //   return;
  //   // }
  //   fetchMovies(`search/movie?query=${search}`)
  //     .then(({ results }) => setMovies(results))
  //     .catch(error => console.log('error', error));

  //   e.currentTarget.reset();
  // };
};

export default Movies;
