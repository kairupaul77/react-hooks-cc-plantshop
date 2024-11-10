import React, { useState } from 'react';

function AddPlant({ onAddPlant }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image || !price) {
      setError('Please fill in all fields.');
      return;
    }
    if (isNaN(price) || price <= 0) {
      setError('Please enter a valid price greater than 0.');
      return;
    }

    const newPlant = {
      name,
      image,
      price: parseFloat(price),
      inStock: true, // Default value for new plants
    };

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => {
        setName('');
        setImage('');
        setPrice('');
        setError('');
        setSuccess(true);
        onAddPlant(data); // Call the parent function to add the new plant
      })
      .catch((error) => {
        console.error('Error adding plant:', error);
        setError('Error adding plant. Please try again.');
        setSuccess(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Plant</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>Plant added successfully!</div>}
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Image URL:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default AddPlant;
