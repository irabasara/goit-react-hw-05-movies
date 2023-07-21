import Home from 'pages/home/Home';
import { Container, Header, Link } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import Movies from 'pages/movies/Movies';
import MoviesDetails from 'pages/movie-details/MoviesDetails';
import Review from 'components/Review/Review';
import Cast from 'components/Cast/Cast';

export const App = () => {
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
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="review" element={<Review />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Routes>
    </Container>
  );
};
