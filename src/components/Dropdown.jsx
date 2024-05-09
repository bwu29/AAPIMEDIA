import React from 'react';
import './Dropdown.css';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';

function MediumDropdown({ onSelect, selectedMedium }) {
  return (
    <BootstrapDropdown onSelect={onSelect} aria-label="Medium Dropdown">
      <BootstrapDropdown.Toggle variant="success" id="medium-dropdown">
        {selectedMedium}
      </BootstrapDropdown.Toggle>
      <BootstrapDropdown.Menu>
        <BootstrapDropdown.Item eventKey="All">All</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Book">Book</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Movie">Movie</BootstrapDropdown.Item>
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
}

function AgeGroupDropdown({ onSelect, selectedAgeGroup }) {
  return (
    <BootstrapDropdown onSelect={onSelect} aria-label="Age Group Dropdown">
      <BootstrapDropdown.Toggle variant="success" id="age-group-dropdown">
        {selectedAgeGroup}
      </BootstrapDropdown.Toggle>
      <BootstrapDropdown.Menu>
        <BootstrapDropdown.Item eventKey="All">All</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Children">Children</BootstrapDropdown.Item>
        <BootstrapDropdown.Item eventKey="Young Adult">Young Adult</BootstrapDropdown.Item>
        {/* Add other age groups as needed */}
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
}

export { MediumDropdown, AgeGroupDropdown };
