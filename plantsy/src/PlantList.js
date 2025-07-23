import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants }) {
    return (
        <div className='plantlist'>
            {plants.map((plants) => (
                <PlantCard
                    key={plants.id}
                    name={plants.name}
                    image={plants.image}
                    price={plants.price}
                />
            ))}
        </div>
    );
}

export default PlantList;