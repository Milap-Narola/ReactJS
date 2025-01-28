import React from 'react';

export const Button = ({ onClick, childern, className = '' }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {childern}
    </button>
  );
};


