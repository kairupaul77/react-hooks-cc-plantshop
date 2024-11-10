import React from 'react';

function PlantList({ plants, onDelete }) {
  return (
    <div>
      <h2>Plant List</h2>
      <div className="plant-list">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            {/* Mark as sold-out button */}
            <button onClick={() => alert(`Marking ${plant.name} as sold-out!`)}>Mark as Sold Out</button>

            {/* Delete button */}
            <button onClick={() => onDelete(plant.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantList;
