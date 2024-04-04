import React from 'react';
import './ResetButton.css';


function ResetButton({ handleReset }) {
  return (
    <button className="reset-button" onClick={handleReset} aria-label="Reset Filters">
      Reset
    </button>
  );
}

export default ResetButton;
