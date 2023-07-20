// import fetchMovies from 'helpers/fetchMovies';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
import fetchMovies from 'helpers/fetchMovies';
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';

const Movies = () => {
  //   const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //     fetchMovies('movie/298618')
  //       .then(({ results }) => {
  //         setMovies(results);
  //       })
  //       .catch(error => console.log('error', error));
  //   }, []);

  //   const [searchParams] = useSearchParams();
  //   console.log(' searchParams', searchParams);
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  const handlerChange = e => {
    setSearch(e.target.value.toLowerCase());
  };

  const handlerSubmit = e => {
    e.preventDefault();

    if (search.trim() === '') {
      alert('enter your search');
      return;
    }
    // setSearch(search);
    fetchMovies(`search/movie?query=${search}`)
      .then(({ results }) => setMovies(results))
      .catch(error => console.log('error', error));

    console.log('search', search);
    reset();
  };

  const reset = () => {
    setSearch('');
  };

  useEffect(() => {
    fetchMovies(`movie/${id}`)
      .then(response => {
        setMovies(response);
        return;
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <button type="submit">
          <span>{<BsSearch size="18px" />}</span>
        </button>

        <input
          type="text"
          value={search}
          placeholder="Search movies"
          onChange={handlerChange}
        />
      </form>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to="/movies/:title">{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
