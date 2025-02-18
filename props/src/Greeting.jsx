import React from 'react';
import './Greeting.css';

const Greeting = ({ name }) => {
  return (
    <div className="greeting">
      <h2>{name ? `Hello, ${name}!` : 'Welcome, guest!'}</h2>
    </div>
  );
};

export default Greeting;
