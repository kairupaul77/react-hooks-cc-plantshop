import React, { useState } from 'react';

function NewPlantForm({ addPlant }) {
  // State to hold the form input values
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [inStock, setInStock] = useState(true); // Default to "in stock"

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior (refreshing the page)
    
    // Validate inputs (basic check for required fields)
    if (!name || !price || !image) {
      alert("Please fill in all fields.");
      return;
    }

    // Prepare the new plant object
    const newPlant = {
      id: Date.now(), // Use the current timestamp as a unique id
      name,
      price: parseFloat(price),
      image,
      inStock,
    };

    // Call the addPlant function passed from the parent (App.js)
    addPlant(newPlant);

    // Clear form after submission
    setName('');
    setPrice('');
    setImage('');
    setInStock(true); // Reset the inStock to true after submitting
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
