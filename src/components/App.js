import React, { useEffect, useState } from 'react';
import AddPlant from './NewPlantForm';

function PlantList() {
  const [plants, setPlants] = useState([]);

  // Fetch all plants 
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []); 

  // Toggle the sold-out status of a plant
  const markSoldOut = (id) => {
    
    const plantToUpdate = plants.find((plant) => plant.id === id);
    
    // Toggle the soldOut status (inverting the current value)
    const updatedPlant = { ...plantToUpdate, soldOut: !plantToUpdate.soldOut };

    // Update the backend with the new soldOut status using PATCH
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        // Update the state with the modified plant data
        setPlants(plants.map((plant) => (plant.id === id ? updatedData : plant)));
      })
      .catch((error) => {
        console.error('Error updating the plant status:', error);
      });
  };

  return (
    <div>
      <h1>All Plants in our store</h1>
      <div className="plant-list">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <p>{plant.soldOut ? 'Out of Stock' : 'In Stock'}</p>
            {/* Button to toggle sold-out status */}
            <button onClick={() => markSoldOut(plant.id)}>
              {plant.soldOut ? 'Mark as In Stock' : 'Mark as Sold Out'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantList;
