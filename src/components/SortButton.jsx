import React from 'react';
import './SortButton.css';


function SortButton({ sortOrder, handleSort }) {
  return (
    <button className={`sort-button ${sortOrder}`} onClick={handleSort} aria-label={`Sort Alphabetically ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}>
      {sortOrder === 'asc' ? '▼' : '▲'} Sort ABC
    </button>
  );
}

export default SortButton;
