import React from 'react';
import Fooditem from './Fooditem';

const Foodlist = ({ foods }) => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            margin: '0 -10px'
        }}>
            {foods.map((food) => (
                <div key={food.id} style={{ flex: '1 0 20%', margin: '10px' }}>
                    <Fooditem food={food} />
                </div>
            ))}
        </div>
    );
};

export default Foodlist;
