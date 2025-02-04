import React from 'react';
import './StyledComponent.css';

const StyledComponent = ({ isStyled }) => {
  return (
    <div className={`styled-component ${isStyled ? 'styled' : ''}`}>
      <h3>Styled Component</h3>
      <p>This component {isStyled ? 'is' : 'is not'} styled.</p>
    </div>
  );
};

export default StyledComponent;
