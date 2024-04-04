import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';

function PastaCard({ title, image, description, isFavorite, handleToggleFavorite, handleRemoveFavorite }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={title} className="card-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {isFavorite ? (
          <Button variant="warning" className="favorite-button" onClick={() => handleRemoveFavorite(title)}>
            &#9733; {/* Filled star symbol */}
          </Button>
        ) : (
          <Button variant="outline-warning" className="favorite-button" onClick={() => handleToggleFavorite(title)}>
            &#9734; {/* Hollow star symbol */}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default PastaCard;
