import React from 'react';

const Fooditem = ({ food }) => {
    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
            <img src={food.image} alt={food.name} style={{ width: '100%', height: '200px', borderRadius: '5px' }} />
            <h2 style={{ fontSize: '20px' }}>{food.name}</h2>
        </div>
    );
};

export default Fooditem;
