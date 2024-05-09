import React from 'react';
import './Dropdown.css';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';

function LengthDropdown({ onSelect, selectedLength }) {
  return (
    <BootstrapDropdown onSelect={onSelect} aria-label="Pasta Length Dropdown">
      <BootstrapDropdown.Toggle variant="success" id="length-dropdown">
        {selectedLength}
      </BootstrapDropdown.Toggle>
      <BootstrapDropdown.Menu>
        <BootstrapDropdown.Item eventKey="All">All</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Long">Long</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Short">Short</BootstrapDropdown.Item>
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
}

function CategoryDropdown({ onSelect, selectedCategory }) {
  return (
    <BootstrapDropdown onSelect={onSelect} aria-label="Pasta Category Dropdown">
      <BootstrapDropdown.Toggle variant="success" id="category-dropdown">
        {selectedCategory}
      </BootstrapDropdown.Toggle>
      <BootstrapDropdown.Menu>
        <BootstrapDropdown.Item eventKey="All">All</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Ribbon">Ribbon</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Tube">Tube</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Stuffed">Stuffed</BootstrapDropdown.Item>
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
}

export { LengthDropdown, CategoryDropdown };
