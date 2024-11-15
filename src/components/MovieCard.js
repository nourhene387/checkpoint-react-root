import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//
const MovieCard = ({ movie }) => {
  const { id, posterURL, title, description, rating } = movie;

  return (
    <Card style={{ width: '18rem', margin: '20px' }} className="d-flex justify-content-center align-items-center">
      <Card.Img variant="top" src={posterURL} alt={title} style={{ width: '80%' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
        <Card.Text>
          <strong>Rating:</strong> {rating}
        </Card.Text>
        <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
          <Button variant="primary">See More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};


export default MovieCard;
