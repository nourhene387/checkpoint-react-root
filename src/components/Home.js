import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import movieData from '../database/data';
import "./home.css"

function Home() {
  const [movies, setMovies] = useState(movieData.slice(0, 3));
  const [remainingMovies, setRemainingMovies] = useState(movieData.slice(3));
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleFilter = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating ? parseFloat(movie.rating) >= rating : true)
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    if (remainingMovies.length === 0) {
      return;
    }

    const newMovie = remainingMovies[0];
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setRemainingMovies((prevRemaining) => prevRemaining.slice(1));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">My Movie App</h1>
      <Filter onFilter={handleFilter} />
      
      <button 
        className="btn btn-success mb-4"
        onClick={handleAddMovie} 
        disabled={remainingMovies.length === 0}
      >
        Add Movie
      </button>

      <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
      
      {remainingMovies.length === 0 && (
        <p className="text-muted">All movies have been added.</p>
      )}
    </div>
  );
}

export default Home;