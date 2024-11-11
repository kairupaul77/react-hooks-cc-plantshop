import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([
    { id: 1, name: "Aloe", image: "/images/aloe.jpg", price: 15.99, inStock: true },
    { id: 2, name: "ZZ Plant", image: "/images/zz-plant.jpg", price: 25.98, inStock: true },
    { id: 3, name: "Pilea peperomioides", image: "/images/pilea.jpg", price: 5.99, inStock: true },
    { id: 4, name: "Pothos", image: "/images/pothos.jpg", price: 12.11, inStock: true },
    { id: 5, name: "Jade", image: "/images/jade.jpg", price: 10.37, inStock: true },
    { id: 6, name: "Monstera Deliciosa", image: "/images/monstera.jpg", price: 25.99, inStock: true },
    { id: 7, name: "Fiddle Leaf Fig", image: "/images/fiddle-leaf-fig.jpg", price: 55, inStock: true }
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add a new plant to the list
  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  // Toggle the inStock status of a plant
  const toggleStockStatus = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
      )
    );
  };

  // Delete a plant from the list
  const deletePlant = (id) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
  };

  // Update a plant's information
  const updatePlant = (updatedPlant) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === updatedPlant.id
          ? { ...plant, name: updatedPlant.name, price: updatedPlant.price, inStock: updatedPlant.inStock }
          : plant
      )
    );
  };

  return (
    <div className="app">
      <h1>Plantsy</h1>

      <NewPlantForm addPlant={addPlant} />
      <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <PlantList
        plants={filteredPlants}
        toggleStockStatus={toggleStockStatus}
        deletePlant={deletePlant}
        updatePlant={updatePlant}
      />
    </div>
  );
}

export default App;
