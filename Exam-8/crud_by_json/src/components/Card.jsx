import React from 'react'

const Card = ({ title, id, index, onDelete }) => {

    return (
        <div>
            <h1> <span>{index + 1}</span> : {title}</h1>
            <button onClick={() => onDelete(id)} >Delete</button>
        </div>
    )
}

export default Card