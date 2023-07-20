import fetchMovies from 'helpers/fetchMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

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
  return (
    <div>
      movie
      {/* {movies.map(({ title }) => {
        return <p>{title}</p>;
      })} */}
    </div>
  );
};

export default Movies;
