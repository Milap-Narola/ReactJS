import React from 'react';

const Fooditem = ({ food }) => {
    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.2em' }}>{food.name}</h2>
            <p>Price: ${food.price.toFixed(2)}</p>
            <img src={food.image} alt={food.name} style={{ width: '100%', height: '200px', borderRadius: '5px' }} />
        </div>
    );
};

export default Fooditem;
