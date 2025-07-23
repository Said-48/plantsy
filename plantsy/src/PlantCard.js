import React, { useState } from 'react';

function PlantCard({ image, name, price }) {
    const [inStock, setInStock] = useState(true);
    function handleChangeStock() {
        setInStock(!inStock);
    }

    return (
        <div className="plantcard">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>${price}</p>
            <button onClick={handleChangeStock} style={{ backgroundColor: inStock ? "green" : "red", color: "white" }}>
                {inStock ? "In Stock" : "Out of Stock"}
            </button>

        </div>
    );
}

export default PlantCard;