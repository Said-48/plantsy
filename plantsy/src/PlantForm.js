import React, { useState } from 'react';

function PlantForm({ setPlant }) {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        price: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newPlant = {
            ...formData,
            price: parseFloat(formData.price)
        };

        fetch('http://localhost:3001/plants', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPlant)
        })
            .then(res => res.json())
            .then(data => {
                setPlant(prev => [...prev, data]);
                setFormData({ name: '', image: '', price: '' });
            });
    }

    return (
        <div className='plantform'>
            <h2>New Plant</h2>
            <form className="forminput" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Plant name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <input
                    className='inputbutton'
                    type="submit"
                    value="Add Plant"
                />
            </form>
        </div>
    );
}

export default PlantForm;
