import React, { useState, useEffect } from 'react';
import './App.css';
import PastaCard from './components/PastaCard';
import pastaData from './assets/pasta-data.json';
import Dropdown from './components/Dropdown';
import Sidebar from './components/Sidebar.jsx';
import SortButton from './components/SortButton.jsx';

function App() {
  const [pastaShapes, setPastaShapes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredAndSortedPastaShapes, setFilteredAndSortedPastaShapes] = useState([]);

  // Load pasta data
  useEffect(() => {
    setPastaShapes(pastaData);
  }, []);

  // Toggle favorite status
  const toggleFavorite = (title) => {
    if (favorites.includes(title)) {
      setFavorites(favorites.filter((shape) => shape !== title));
    } else {
      setFavorites([...favorites, title]);
    }
  };

  const handleRemoveFavorite = (title) => {
    setFavorites(favorites.filter((item) => item !== title));
  };

  // Filter and sort pasta shapes based on category and sort order
  useEffect(() => {
    let filteredShapes = pastaShapes.filter((shape) => selectedCategory === 'All' || shape.category === selectedCategory);
    filteredShapes.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setFilteredAndSortedPastaShapes(filteredShapes);
  }, [pastaShapes, selectedCategory, sortOrder]);

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Pasta Shapes</h1>
        <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSxI0oGnuFVr-8xCROF9VdVczZWoapAw5dJKRUr_vCg&sdoodleicon.jpeg" alt="Pasta Shapes Icon" aria-label="Pasta Shapes Icon" />
      </header>

      <div className="main-container">
        <div className="pasta-display">
          <div className="options">
            <Dropdown onSelect={setSelectedCategory} selectedCategory={selectedCategory} />
            <SortButton sortOrder={sortOrder} handleSort={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} />
          </div>

          <div className="menu-container">
            {filteredAndSortedPastaShapes.map((pastaShape, index) => (
              <PastaCard
                key={index}
                title={pastaShape.title}
                image={pastaShape.image}
                description={pastaShape.description}
                isFavorite={favorites.includes(pastaShape.title)}
                handleToggleFavorite={() => toggleFavorite(pastaShape.title)}
                handleRemoveFavorite={handleRemoveFavorite}
                alt={`Image of ${pastaShape.title}`}
                aria-label={`Image of ${pastaShape.title}`}
              />
            ))}
          </div>
        </div>
        <Sidebar favorites={favorites} handleRemoveFavorite={handleRemoveFavorite} />
      </div>
    </div>
  );
}

export default App;
