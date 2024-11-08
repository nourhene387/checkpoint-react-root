import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const MovieCard = ({ posterURL, title, description, rating }) => {
  return (
    <Card style={{ width: '18rem', margin: '20px' }} className="d-flex justify-content-center align-items-center">
      <Card.Img src={posterURL} alt={title} style={{ width: '50%' }} className="align-items-center" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
        <Card.Text>
          <strong>Rating:</strong> {rating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;