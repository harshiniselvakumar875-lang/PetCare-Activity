
import React, { useState } from "react";
import "./App.css"
function MyPets() {
  const [petName, setPetName] = useState("");
  const [pets, setPets] = useState(["Tommy", "Kitty"]);

  function addPet() {
    if (petName.trim() === "") {
      alert("Please enter pet name");
      return;
    }

    setPets([...pets, petName]);
    setPetName("");
  }

  function deletePet(index) {
    setPets(pets.filter((pet, i) => i !== index));
  }

  return (
    <div className="page">
      <h2>My Pets 🐾</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Enter pet name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />

        <button onClick={addPet}>Add Pet</button>
      </div>

      {pets.map((pet, index) => (
        <div className="pet-item" key={index}>
          <span>🐶 {pet}</span>

          <button onClick={() => deletePet(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyPets;
