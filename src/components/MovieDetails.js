import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import movies from '../database/data';
import './MovieDetails.css'

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }
  

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} style={{ maxWidth: '300px' }} />
      <p className="mt-3">{movie.description}</p>
      {movie.videoURL && (
        <div className="my-4">
          <iframe
            width="560"
            height="315"
            src={movie.videoURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <Link to="/" className="text-decoration-none">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default MovieDetails;