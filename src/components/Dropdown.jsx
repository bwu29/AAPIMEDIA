import React from 'react';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';

function Dropdown({ onSelect, selectedCategory }) {
  return (
    <BootstrapDropdown onSelect={onSelect} aria-label="Pasta Category Dropdown">
      <BootstrapDropdown.Toggle variant="success" id="dropdown-basic">
        {selectedCategory}
      </BootstrapDropdown.Toggle>
      <BootstrapDropdown.Menu>
        <BootstrapDropdown.Item eventKey="All">All</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Long Pasta">Long Pasta</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Short Pasta">Short Pasta</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Stuffed Pasta">Stuffed Pasta</BootstrapDropdown.Item>
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
}

export default Dropdown;
