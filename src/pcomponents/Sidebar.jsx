import React from 'react';
import './Sidebar.css';


function Sidebar({ favorites, handleRemoveFavorite }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Favorites</h2>
      <p>Total: {favorites.length}</p>
      <ul className="favorites-list">
        {favorites.map((shape, index) => (
          <li key={index}>
            {shape}
            <button className="remove-button" onClick={() => handleRemoveFavorite(shape)} aria-label={`Remove ${shape}`}>
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
