import React from 'react';

function SortButton({ sortOrder, handleSort }) {
  return (
    <button className={`sort-button ${sortOrder}`} onClick={handleSort} aria-label={`Sort Alphabetically ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}>
      {sortOrder === 'asc' ? '▼' : '▲'} Sort Alphabetically
    </button>
  );
}

export default SortButton;
