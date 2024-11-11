import React, { useState } from "react";

function PlantList({ plants, toggleStockStatus, deletePlant, updatePlant }) {
  const [isEditing, setIsEditing] = useState(null); // To track if a plant is being edited
  const [editedPlant, setEditedPlant] = useState({});

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditedPlant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = (plant) => {
    // Save the updated plant
    updatePlant({ ...plant, ...editedPlant });
    setIsEditing(null); // Exit editing mode
  };

  return (
    <div>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <div>
              {/* Display Image */}
              <img src={plant.image} alt={plant.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />

              {isEditing === plant.id ? (
                <div>
                  <input
                    type="text"
                    name="name"
                    value={editedPlant.name || plant.name}
                    onChange={handleEditChange}
                  />
                  <input
                    type="number"
                    name="price"
                    value={editedPlant.price || plant.price}
                    onChange={handleEditChange}
                  />
                  <button onClick={() => handleSaveEdit(plant)}>Save</button>
                </div>
              ) : (
                <div>
                  <p>{plant.name}</p>
                  <p>{plant.price}</p>
                  <p>{plant.inStock ? "In Stock" : "Out of Stock"}</p>
                  <button onClick={() => toggleStockStatus(plant.id)}>
                    {plant.inStock ? "In Stock" : "Out of Stock"}
                  </button>
                  <button onClick={() => setIsEditing(plant.id)}>Edit</button>
                  <button onClick={() => deletePlant(plant.id)}>Delete</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
