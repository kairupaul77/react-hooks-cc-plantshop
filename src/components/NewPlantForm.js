import React, { useState } from 'react';

function NewPlantForm({ addPlant }) {
  // State to hold the form input values
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [inStock, setInStock] = useState(true); 

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    
    if (!name || !price || !image) {
      alert("Please fill in all fields.");
      return;
    }

    
    const newPlant = {
      id: Date.now(), 
      name,
      price: parseFloat(price),
      image,
      inStock,
    };

    
    addPlant(newPlant);

    
    setName('');
    setPrice('');
    setImage('');
    setInStock(true); 
  };

  return (
    <form onSubmit={handleSubmit} className="new-plant-form">
      <h2>Add New Plant</h2>

      <div className="form-row">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter plant name"
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>

        <div className="form-group">
          <label>In Stock:</label>
          <input
            type="checkbox"
            checked={inStock}
            onChange={() => setInStock(!inStock)}
          />
        </div>

        <button type="submit">Add Plant</button>
      </div>
    </form>
  );
}

export default NewPlantForm;
