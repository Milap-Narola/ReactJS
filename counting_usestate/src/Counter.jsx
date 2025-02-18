import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // Inline styles
  const styles = {
    appContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width :100vw,
      height: '100vh', // Full height of the viewport
      backgroundColor: '#f0f0f0', // Light background for contrast
    },
    counter: {
      textAlign: 'center',
      maxWidth: '300px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
    },
    heading: {
      color: '#333',
    },
    count: {
        color:"black",
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    button: {
      padding: '8px 16px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.counter}>
        <h2 style={styles.heading}>Counter</h2>
        <p style={styles.count}> {count}</p>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={increment}>Increment</button>
          <button style={styles.button} onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
