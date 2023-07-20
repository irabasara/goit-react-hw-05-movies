import Home from 'pages/home/Home';
import { Container, Header, Link } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import Movies from 'pages/movies/Movies';
import MoviesDetails from 'pages/movie-details/MoviesDetails';
// import { useState } from 'react';

export const App = () => {
  // const [search, setSearch] = useState('');

  // const handlerFormSubmit = search => {
  //   setSearch(search);
  //   console.log('search', search);
  // };

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
        <Route path="/movies/:title" element={<MoviesDetails />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} /> */}
      </Routes>
    </Container>
  );
};
