import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './MediaCard.css';

function MediaCard({ title, image, description, isFavorite, handleToggleFavorite, handleRemoveFavorite }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} className="card-image" />
      <Card.Body>
        <Card.Title className = 'card-title'>{title}</Card.Title>
        <Card.Text className = 'card-description'>{description}</Card.Text>
        <Card.Footer className = 'button-container'> 
        {isFavorite ? (
          <Button variant="warning" className="favorite-button" onClick={() => handleRemoveFavorite(title)}>
            &#9733; {/* Filled star symbol */}
          </Button>
        ) : (
          <Button variant="outline-warning" className="favorite-button" aria-label='favorite button' onClick={() => handleToggleFavorite(title)}>
            &#9734; {/* Hollow star symbol */}
          </Button>
        )}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default MediaCard;
