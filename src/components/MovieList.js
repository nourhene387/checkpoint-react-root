import React from 'react';
import MovieCard from './MovieCard';

function Movielist({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          posterURL={movie.posterURL}
          title={movie.title}
          description={movie.description}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default Movielist;