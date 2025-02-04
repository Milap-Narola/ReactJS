import React from 'react';

export const Input = ({ type, value, onChange, placeholder,name ,className = '' }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            className={ `text-white ${className}`}
        />
    );
};


