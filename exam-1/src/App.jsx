import React from 'react';
import Foodlist from './Foodlist';
import data from './data.json';

const App = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1 style={{ color: 'white' }}>Food List</h1>
      <Foodlist foods={data} /> 
    </div>
  );
};

export default App;
