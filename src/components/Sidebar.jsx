import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ favorites, handleRemoveFavorite }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
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
