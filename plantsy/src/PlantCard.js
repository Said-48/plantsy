import React, { useState } from 'react';

function PlantCard({ image, name, price }) {
    const [inStock, SetInStock] = useState(true);
    function handleChangeStock() {
        SetInStock(!inStock);
    }

    return (
        <div className="plantcard">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>${price}</p>
            <button onClick={handleChangeStock}>
                {inStock ? "In Stock" : "Out of Stock"}
            </button>

        </div>
    );
}

export default PlantCard;