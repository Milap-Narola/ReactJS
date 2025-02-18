import React from 'react';

export const Button = ({ onClick, children, className = '' }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};


